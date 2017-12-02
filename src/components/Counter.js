import React, {Component} from "react";
import propTypes from "prop-types";
class Counter extends Component {
	static propTypes = {
		counter:propTypes.number.isRequired,
		onInment:propTypes.func.isRequired,
		onDecment:propTypes.func.isRequired,
	}
	addIf(){
		if (this.props.counter %2 ===0) {
			return
		} else {
			this.props.onInment();
		}
	}
	addAs(){
		setTimeout( ()=> this.props.onInment(), 1000);
	}
	render(){
		const {counter, onInment, onDecment} = this.props;
		return (
			<div>
				<h1>counter: {counter}</h1>
				<button onClick={onInment}>+</button>{' '}
				<button onClick={onDecment}>-</button>{' '}
				<button onClick={this.addIf.bind(this)}>addIf</button>{' '}
				<button onClick={this.addAs.bind(this)}>addAs</button>{' '}
			</div>
		)
	}
}

export default Counter;