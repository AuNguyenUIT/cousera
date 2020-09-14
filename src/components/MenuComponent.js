import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "./DishdetailComponent";

export const Menu = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-sm-12  col-md-5 m-1">
        <Card onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
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
        <DishDetail selectedDish={selectedDish} />
      </div>
    </div>
  );
};
