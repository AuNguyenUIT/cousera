import React, { Fragment, useState } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
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

const CommentForm = () => {
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
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
          <LocalForm onSubmit={(value) => console.log(value)}>
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
              <Label htmlFor="name" md={12}>
                Your Name
              </Label>
              <Col md={12}>
                <Control.text
                  model=".name"
                  name="name"
                  id="name"
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
          <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody className="text-left">
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else return <div></div>;
  };
  const renderComment = (comments) => {
    if (comments !== undefined) {
      return (
        <div className="col-sm-12 col-md-5 m-1 text-left">
          <h4>Comments</h4>
          {comments.map((comment) => {
            const date = new Date(comment.date);
            return (
              <Fragment key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {date.toDateString()}
                </p>
              </Fragment>
            );
          })}
          <CommentForm />
        </div>
      );
    } else return <div></div>;
  };
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
