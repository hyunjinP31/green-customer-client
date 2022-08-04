import { combineReducers } from "redux";
import customers from "./costomers";
import logincheck from "./logincheck";

const rootReducer = combineReducers({customers, logincheck});

export default rootReducer;