import React,{Component} from "react";
import PropTypes from "prop-types";
import {Button} from "antd";

class AddButton extends Component{
	static PropTypes={
		defaultValue:PropTypes.number.isRequired,
		onChange:PropTypes.func.isRequired
	}
	state={
		value:this.props.defaultValue,
	}
	handleReduce(){
		const currentValue = parseInt(this.state.value,10) - 1;
		const value = currentValue < 1 ? 1 : currentValue;
		this.setState({
			value:value
		})
		this.props.onChange(value);
	}
	handleAdd(){
		const currentValue = parseInt(this.state.value,10)  + 1;
		this.setState({
			value:currentValue
		})
		
	}
	handleChange(e){
		const value = parseInt(e.target.value,10);
		this.setState({
			value:value
		})
		this.props.onChange(value);
	}
	render(){
		return(
			<div>
				<Button onClick={this.handleReduce.bind(this)}>-</Button>
				<input value={this.state.value} type="number" onChange={this.handleChange.bind(this)}/>
				<Button onClick={this.handleAdd.bind(this)}>+</Button>
			</div>
		)
	}
} 

export default AddButton;