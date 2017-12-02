import { DDDA, DDDB } from "../actions/counter";
const counter = function(state=0,action){
	switch(action.type){
		case DDDA:
			return state + 1;
		case DDDB:
			return state - 1;
		default:
			return state;
	}
}
 
export default counter;