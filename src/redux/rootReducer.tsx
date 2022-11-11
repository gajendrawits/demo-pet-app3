import { combineReducers } from "redux";
import cartReducer from "./petReducer";

const rootReducer = combineReducers({
  cartPet: cartReducer,
});

export default rootReducer;
