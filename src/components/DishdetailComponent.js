import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

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
        </div>
      );
    } else return <div></div>;
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem >
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
