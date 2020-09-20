import { combineReducers, createStore } from "redux";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leader: Leaders,
      promotions: Promotions,
    })
  );
  return store;
};
