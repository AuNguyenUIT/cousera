import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Control, Errors, LocalForm } from "react-redux-form";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { addComment } from "../redux/ActionCreators";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const CommentForm = ({ dishId }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        toggle={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <ModalHeader
          toggle={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          Submit Comment
        </ModalHeader>
        <ModalBody>
          <LocalForm
            onSubmit={(value) => {
              dispatch(
                addComment(dishId, value.rating, value.author, value.comment)
              );
            }}
          >
            <Row className="form-group">
              <Label htmlFor="rating" md={12}>
                Rating
              </Label>
              <Col md={12}>
                <Control.select
                  model=".rating"
                  name="rating"
                  id="rating"
                  className="form-control"
                  defaultValue="1"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="author" md={12}>
                Your Name
              </Label>
              <Col md={12}>
                <Control.text
                  model=".author"
                  name="author"
                  id="author"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />

                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 3 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={12}>
                Comment
              </Label>
              <Col md={12}>
                <Control.textarea
                  rows={6}
                  model=".comment"
                  name="comment"
                  id="comment"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={10}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
      <Button
        outline
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <span className="fa fa-pencil fa-lg"></span> Submit Comment
      </Button>
    </>
  );
};

export default function DishDetail(props) {
  const { dish, comments } = props;
  const renderDish = (dish) => {
    if (dish !== undefined) {
      return (
        <div className="col-sm-12 col-md-5 m-1">
          <FadeTransform
            in
            transformProps={{
              exitTransform: "scale(0.5) translateY(-50%)",
            }}
          >
            <Card>
              <CardImg src={baseUrl + dish.image} alt={dish.name} />
              <CardBody className="text-left">
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </FadeTransform>
        </div>
      );
    } else return <div></div>;
  };
  const renderComment = (comments) => {
    if (comments !== undefined) {
      return (
        <div className="col-sm-12 col-md-5 m-1 text-left">
          <h4>Comments</h4>
          <Stagger in>
            {comments.map((comment) => {
              const date = new Date(comment.date);
              return (
                <Fragment key={comment.id}>
                  <Fade in>
                    <p>{comment.comment}</p>
                    <p>
                      -- {comment.author},{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(comment.date)))}
                    </p>
                  </Fade>
                </Fragment>
              );
            })}
          </Stagger>
          <CommentForm dishId={dish.id} />
        </div>
      );
    } else return <div></div>;
  };

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {renderDish(dish)}
          {renderComment(comments)}
        </div>
      </div>
    );
}
