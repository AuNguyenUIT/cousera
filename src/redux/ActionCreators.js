import * as actions from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//Dishes
export const fetchDishes = (dispatch) => {
  dispatch(dishesLoading(true));
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) =>
      setTimeout(() => {
        dispatch(addDishes(dishes));
      }, 1000)
    )
    .catch((error) => dispatch(dishesFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comments) =>
      setTimeout(() => {
        dispatch(addComments(comments));
      }, 1000)
    )
    .catch((error) => dispatch(commentsFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.massage);

        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((leaders) =>
      setTimeout(() => {
        dispatch(addLeaders(leaders));
      }, 1000)
    )
    .catch((error) => dispatch(leadersFailed(error.message)));
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
