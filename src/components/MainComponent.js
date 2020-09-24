import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "react-redux-form";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  fetchComments,
  fetchDishes,
  fetchLeaders,
} from "../redux/ActionCreators";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { Menu } from "./MenuComponent";

function Main({ location }) {
  const dishes = useSelector((state) => state.dishes.dishes);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);
  const isLoading = useSelector((state) => state.dishes.isLoading);
  const errMess = useSelector((state) => state.dishes.errMess);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDishes(dispatch);
    fetchComments(dispatch);
    fetchLeaders(dispatch);
  }, []);

  const HomePage = () => {
    return <Home />;
  };
  const MenuPage = () => {
    return <Menu dishes={dishes} isLoading={isLoading} errMess={errMess} />;
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
        comments={comments.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        isLoading={isLoading}
        errMess={errMess}
      />
    );
  };
  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Switch location={location}>
            <Route path="/home" component={HomePage} />
            <Route path="/menu" exact component={MenuPage} />
            <Route
              path="/contact"
              component={Contact}
              resetFeedbackFrom={() => {
                dispatch(actions.reset("feedback"));
              }}
            />
            <Route path="/about" component={AboutPage} />
            <Route path="/menu/:dishId" component={DetailPage} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>

      <Footer />
    </div>
  );
}

export default withRouter(Main);
