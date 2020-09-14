import React, { Fragment } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default function DishDetail(props) {
  let { selectedDish } = props;

  const renderDish = (dish) => {
    if (dish != null) {
      return (
        <>
          <div className="col-sm-12 col-md-5 m-1">
            <Card>
              <CardImg src={dish.image} alt={dish.name} />
              <CardBody className="text-left">
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-12 col-md-5 m-1 text-left">
            <h4>Comments</h4>
            {dish.comments.map((comment) => {
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
        </>
      );
    } else return <div></div>;
  };
  return renderDish(selectedDish);
}
