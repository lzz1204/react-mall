import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const middle = [thunk];

if (process.env.NODE_ENV === "development") {
	const logger = createLogger();
	middle.push(logger);
} 

console.log(middle);

const store = createStore(
	rootReducer,
	applyMiddleware(...middle)
	);

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
