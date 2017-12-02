import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { incAction,decAction } from "./actions/counter";
import reducer from "./reducers/counter";
import { createStore } from "redux";
// import Counter from "./components/Counter";
import Counter from "./components/Counter";
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducer);
console.log("nowstate",store.getState()); 
const render = () =>{
	ReactDOM.render(
	(<div style={{textAlign: "center"}}>
		<Counter 
			counter={store.getState()}
			onInment={()=> store.dispatch(incAction)}
			onDecment={function(){
				store.dispatch(decAction)
			}}
		/>
	</div>),
 document.getElementById('root')
	);
}
render();
store.subscribe(render);
registerServiceWorker();
