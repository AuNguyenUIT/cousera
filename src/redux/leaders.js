import { ADD_LEADERS, LEADERS_FAILED, LEADERS_LOADING } from "./ActionTypes";

export const Leaders = (
  state = { leaders: [], errMess: null, isLoading: false },
  action
) => {
  switch (action.type) {
    case ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        leaders: action.payload,
      };
    case LEADERS_LOADING:
      return { ...state, isLoading: true, errMess: null, leaders: [] };
    case LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        leaders: [],
      };
    default:
      return state;
  }
};
