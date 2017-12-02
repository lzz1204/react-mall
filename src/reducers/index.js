import { combineReducers } from "redux";
import todos from "./todo";

const rootReducer = combineReducers({
	todos:todos
});
export default rootReducer;