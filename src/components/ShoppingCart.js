import React,{Component} from "react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";
import {Button,Badge,Icon,Spin} from "antd";
import {Link} from "react-router-dom";
// import {getCart,delCart} from "../service/api";
import "../css/shoppingcart.css";
class ShoppingCart extends Component{
	static propTypes = {
		isFetching:PropTypes.bool.isRequired,
		cartList:PropTypes.array.isRequired,
		count:PropTypes.number.isRequired,
		valid:PropTypes.bool.isRequired,
		getCart:PropTypes.func.isRequired,
		delCart:PropTypes.func.isRequired
	}
	state = {
		showList:false,
	}

	// getCart(){
	// 	getCart().then((res)=>{
	// 		console.log("ee",res);
	// 		if (res.OK) {
	// 				console.log("res",res);
	// 				this.setState({
	// 					cartList:res.docs,
	// 					isFetching:false
	// 				})
	// 		} else{
	// 			message.error("错误"+res.message)
	// 		}
	// 	})
	// }
	handleLeave(){
		this.setState({
			showList:false
		})
	}
	// delCart(id){
	// 	this.setState({
	// 			isFetching:true
	// 				})
	// 	delCart(id).then((res)=>{
	// 		if (res.OK) {
	// 				this.getCart();
	// 		} 
	// 	})
			
	// }
	handleOver(){
		this.setState({
			showList:true,
			 
		})
		if (this.props.valid) {
			this.props.getCart();
		}
	}
	render(){
		console.log("propss",this.props.valid);
		const {showList} = this.state;
		const {isFetching,count,cartList,delCart} = this.props;
		let countn=0;
		let sum=0;
		return(
			<div onMouseLeave={this.handleLeave.bind(this)} className="shoppingCart">
				<Button onMouseOver={this.handleOver.bind(this)} size="large">
					<Badge count={count} showZero>
						购物车 &nbsp;
						<Icon type={"shopping-cart"}/>&nbsp;
					</Badge>
				</Button>
				{
					showList ?
					<div className="cart" >
						<h3>最近添加的商品</h3>
						{
							isFetching ? 
							<Spin className="spin"/>	
							:
							<div className="cartList">
							{
								cartList.length > 0 ?
								cartList.map((cart, i) => {
									countn += cart.num;
									sum += cart.num * cart.product.price;
									return (
										<CartItem product={cart.product}
				
										num={cart.num} key={i}
										delCart={() => delCart(cart._id)}
										/>
									)
								})
								: <p className="emputy">购物车空空如也</p>
							}
							</div>
						}
						<div className="cartFooter">
							<p>共{countn}件商品，共计￥{sum.toFixed(2)}</p>
							<Button type="primary"><Link to="/order"> 去购物车</Link></Button>
						</div>
					</div>
					:null
				}	
			</div>
		)
	}
}
export default ShoppingCart;