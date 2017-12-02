import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "../actions/todo";
import Todo from "../components/Todo";
const mapStateToProps = (state) =>{
	return {
		todos:state.todos
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		actions:bindActionCreators(todoActions,dispatch)
	}
}
const ConTodo = connect(mapStateToProps,mapDispatchToProps)(Todo);
export default ConTodo;