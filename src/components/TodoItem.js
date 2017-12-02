import React, {Component} from "react";
import TodoInput from "./TodoInput";

export default class TodoItem extends Component{
	state = {
		modify: false
	}
	handleModify(text) {
		const {todo, modifyTodo} = this.props;
		console.log("todo",todo);
		this.setState({modify: false});
		const modifiedTodo = {
			id: todo.id,
			text: text,
		}
		modifyTodo(modifiedTodo);
	}
	render(){
		const {
			todo,
			completeTodo,
			deleteTodo,
			modifyTodo
		} = this.props;
		return(
			<div className="tdoItem">
				<input
				type="checkbox"
				className="checkbox"
				checked={
					todo.isCompleted
				}
				onChange= {() => completeTodo(todo.id)}
				/>
				{
					this.state.modify ?
					<TodoInput
					saveTodo={this.handleModify.bind(this)}
					text={todo.text}
					placeholder="修改todo"
					/>
					:
					<span onDoubleClick={()=> this.setState({modify:true})}
					>{todo.text}</span>
				}
				<i onClick={()=> deleteTodo(todo.id)}>{"x"}</i>
			</div>

		)
	}
}