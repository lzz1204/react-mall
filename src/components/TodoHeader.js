import React,{Component} from "react";
// import Proptypes from "prop-types";
import TodoInput from "./TodoInput";
class TodoHeader extends Component{
	render(){
		const {saveTodo} = this.props;
		return (
			<div className="todoHeader">
				<label>=</label>
				<TodoInput
					saveTodo={saveTodo}
					placeholder="请输入新任务"
				/>
			</div>
		)
	}
}
export default TodoHeader;