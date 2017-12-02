import React,{Component} from "react";
import PropTypes from "prop-types";

class TodoInput extends Component {
	static PropTypes = {
		saveTodo:PropTypes.func.isRequired,
		placeholder:PropTypes.string.isRequired,
		text:PropTypes.string
	}
	state ={
		text: this.props.text || ""
	}
	handleChange(e){
		this.setState({
			text: e.target.value
		});
	}
	handleEnter(e){
		if (e.keyCode === 13) {
			this.setState({text: ""});
			this.props.saveTodo(this.state.text);
		} else {}
	}
	render(){
		return(
			<input 
				type="text"
				className="edit"
				autoFocus = {true}
				value = {this.state.text}
				onChange={this.handleChange.bind(this)}
				onKeyDown={this.handleEnter.bind(this)}
				placeholder = {this.state.placeholder}
			/>
		)
	}
}
export default TodoInput;