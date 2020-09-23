import * as actions from "./ActionTypes";
export const addComment = (dishId, rating, author, comment) => ({
  type: actions.ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment,
  },
});

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
