import React,{Component} from "react";
import Contant from "../components/Contant";
import "../css/order.css";
class Order extends Component{
	render(){
		return(
			<div className="order">
				<h1>订单页</h1>
				<Contant/>
			</div>
		)
	}
}

export default Order;