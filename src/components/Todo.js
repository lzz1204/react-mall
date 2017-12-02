import React, {Component} from "react";
import PropTypes from "prop-types";
import "../css/todo.css";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
 class Todo extends Component {
 	static PropTypes = {
 		todos:PropTypes.arrayOf(PropTypes.shape({
 			id:PropTypes.number.isRequired,
 			text:PropTypes.string.isRequired,
 			isCompleted: PropTypes.bool.isRequired,
 		})),
 		actoins:PropTypes.object.isRequired,
 	}
 	render(){
 		const {todos,actions,} = this.props;
 		console.log("todos",todos);
 		console.log("actions",actions);
 		return(
 			<div className="todo">
 				<h1> todos </h1>
 				<TodoHeader 
 					saveTodo = {actions.saveTodo}
 				/>
 				<TodoBody 
 					todos= {todos}
 					actions={actions}
 				/>
 			</div>
 		)
 	}
 }
 export default Todo;