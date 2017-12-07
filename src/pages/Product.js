import React,{Component} from "react";
import ProductCard from "../components/ProductCard";
import {Row,Col,Button} from "antd";
import {getproduct,addCart} from "../service/api";
import AddButton from "../components/AddButton";
import ShoppingCart from "../components/ShoppingCart";
class Product extends Component{
	state={
		product:{},
		 count:1,
	}
	componentWillMount(){
		 console.log("props",this.props);
		const id= this.props.match.params.id;
		console.log("id",id);
		getproduct(id).then((resJson)=> {
			console.log("res",resJson);
			this.setState({
				product:resJson.doc
			});
					})
	}
	handleAddCart(){
		const postData = [{
			pid:this.state.product._id,
		num: this.state.count
		}]
		console.log("postData",postData);
		console.log("props",this.props)
		addCart(postData).then((res)=>{
			if (res.OK) {
				this.props.addCart(res.count)
			}
		})
	}
	handleCount(value){
		this.setState({
			count:value
		})
	}
	render(){
		console.log("pp",this.state.product);
		return(
			<div>
				<Row gutter={16}>
					<Col span={8}>
						<ProductCard product={this.state.product}/>
					</Col>
					<Col span={16}>
						<h1>产品详情</h1>
						<AddButton onChange={this.handleCount.bind(this)}
						defaultValue={this.state.count}
						/>
						<Button onClick={this.handleAddCart.bind(this)}>加入购物车</Button>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Product;