import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import { Menu } from "./MenuComponent";

export default function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dishId) => {
      
    setSelectedDish(dishId);
  };
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Pisces</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={dishes.filter((dish) => (dish.id === selectedDish))[0]} />
    </div>
  );
}
