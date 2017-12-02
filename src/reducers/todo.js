import { TODO_MODIFY, TODO_DELETE, TODO_COMPLETE, TODO_SAVE } from "../actions/todo";
const defaultTodo ={
	id: 0,
	text: "学习react-redux",
	isCompleted: false,
}

const todos = (state=[defaultTodo],action)=> {
	switch(action.type){
		case TODO_SAVE :
			const id = state.length > 0 ?
				 state[state.length-1].id + 1
				:0;
			const newTodo = {
				id: id,
				text:action.layload,
				isCompleted: false,
			}
			return [...state,newTodo];
		case TODO_COMPLETE:
			return state.map((todo) =>{
				if (todo.id === action.payload) {
					todo.isCompleted = !todo.isCompleted
				}
				return todo
			});
		case TODO_DELETE:
			return state.filter((todo) =>
				todo.id !== action.payload
			)
		case TODO_MODIFY:
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.text = action.payload.text
				} 
				return todo;
			})
		default :
		return state;
	}
}
export default todos;