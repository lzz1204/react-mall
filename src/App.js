import React,{Component} from "react";
import ConTodo from "./containers/ConTodo";
import "./App.css";
class App extends Component{
	render(){
		return(
			<div className="App">
				<ConTodo />
			</div>
		)
	}
}


export default App;