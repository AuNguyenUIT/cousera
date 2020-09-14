import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Media,
} from "reactstrap";

export const MenuComponent = (props) => {
  console.log(props);
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };
  const renderDish = (dish) => {
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else return <div></div>;
  };
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 mt-5 m-1">
        <Card key={dish.id} onClick={() => onDishSelect(dish)}>
          <CardImg width="50%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(selectedDish)}</div>
      </div>
    </div>
  );
};
