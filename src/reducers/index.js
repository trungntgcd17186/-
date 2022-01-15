import { combineReducers } from "redux";
import hobbyReducer from "./hobby";
import userReducer from "./user";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
