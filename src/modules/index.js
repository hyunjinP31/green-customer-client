import { applyMiddleware, combineReducers } from "redux";
import customers from "./costomers";
import logincheck from "./logincheck";
import gallery from "./gallery";
import thunk from "redux-thunk";

const rootReducer = combineReducers({customers, logincheck, gallery});

export default rootReducer;