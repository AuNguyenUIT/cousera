import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Menu } from "./MenuComponent";

export default function Main() {
  const [dishes] = useState(DISHES);
  const [comments] = useState(COMMENTS);
  const [promotions] = useState(PROMOTIONS);
  const [leaders] = useState(LEADERS);

  const HomePage = () => {
    return <Home />;
  };
  const MenuPage = () => {
    return <Menu dishes={dishes} />;
  };
  const AboutPage = () => {
    return <About leaders={leaders} />;
  };
  const DetailPage = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutPage} />
        <Route path="/menu/:dishId" component={DetailPage} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}
