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
