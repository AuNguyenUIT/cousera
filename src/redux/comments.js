import { COMMENTS } from "../shared/comments";
import { ADD_COMMENT } from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let comment = action.payload;
      comment.date = new Date().toISOString();
      comment.id = state.length;
      console.log("Comment: ", comment);
      return state.concat(comment);
    default:
      return state;
  }
};
