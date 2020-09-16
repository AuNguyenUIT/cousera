import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Menu } from "./MenuComponent";

export default function Main() {
  const dishes = useSelector((state) => state.dishes);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);

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
