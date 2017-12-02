import React, {Component} from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
class TodoBody extends Component{
	static PropTypes={
		todos:PropTypes.array.isRequired,
		actions:PropTypes.object.isRequired
	}
	render(){
		const {todos,actions} = this.props;
		return(
			<div className="todoBody">
				{
					todos.map((todo)=>{
						return(
							<TodoItem key={todo.id}
								todo={todo}
								{...actions}
							/>
						)
					})
				}
			</div>
		)
	}
}
export default TodoBody;