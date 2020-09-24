import { ADD_COMMENT } from "./ActionTypes";
import { ADD_COMMENTS } from "./ActionTypes";
import { COMMENTS_FAILED } from "./ActionTypes";

export const Comments = (state = { comments: [], errMess: null }, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let comment = {
        ...action.payload,
        id: state.length,
        date: new Date().toISOString(),
      };
      return state.concat(comment);
    case ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };
    case COMMENTS_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
};
