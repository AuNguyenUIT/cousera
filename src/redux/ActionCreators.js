import * as actions from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//Dishes
export const fetchDishes = (dispatch) => {
  dispatch(dishesLoading(true));
  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
};
export const dishesLoading = () => ({
  type: actions.DISHES_LOADING,
});
export const dishesFailed = (errmess) => ({
  type: actions.DISHES_FAILED,
  payload: errmess,
});
export const addDishes = (dishes) => ({
  type: actions.ADD_DISHES,
  payload: dishes,
});
//Comment
export const fetchComments = (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};
export const addComment = (dishId, rating, author, comment) => ({
  type: actions.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});
export const addComments = (comments) => ({
  type: actions.ADD_COMMENTS,
  payload: comments,
});
export const commentsFailed = (errmess) => ({
  type: actions.COMMENTS_FAILED,
  payload: errmess,
});
//Leader
export const fetchLeaders = (dispatch) => {
  dispatch(leaderLoading(true));
  return fetch(baseUrl + "leaders")
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)));
};
export const leaderLoading = () => ({
  type: actions.LEADERS_LOADING,
});
export const addLeaders = (leaders) => ({
  type: actions.ADD_LEADERS,
  payload: leaders,
});
export const leadersFailed = (errmess) => ({
  type: actions.LEADERS_FAILED,
  payload: errmess,
});
