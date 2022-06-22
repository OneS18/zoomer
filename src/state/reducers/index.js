import { combineReducers } from "redux";
import bankReducer from "./backReducer";

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;
