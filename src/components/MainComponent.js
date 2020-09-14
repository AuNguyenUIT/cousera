import React, { useState } from "react";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import { Menu } from "./MenuComponent";

export default function Main() {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };
  return (
    <div>
      <Header />
      <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
      <Footer />
    </div>
  );
}
