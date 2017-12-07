import React, {Component} from "react";
import {Carousel,Row,Col} from "antd";
// import {Link} from "react-router-dom";
import {getproducts} from "../service/api";
import ProductCard from "../components/ProductCard";
import "../css/home.css";
const imgs = [
	{img:"imgs/01.jpg",
	content:"第一张图"
	},
	{img:"imgs/01.jpg",content:"第二张图"},
	{img:"imgs/01.jpg",content:"第三张图"},
	{img:"imgs/01.jpg",content:"第四张图"},
]
class Home extends Component {
	state= {
		productall:[]
	}
	getproduct(){
		getproducts().then((resJson)=>{
			console.log("resJson11",resJson);
			this.setState({
				productall:resJson.docs,
			})
		})
	}
	componentWillMount(){
		this.getproduct();
	}
	render(){
		return(
			<div className="home">
				<Carousel autoplay>
				{
					imgs.map((img,i) =>{
						return(
							<div key={i}>
								<img style={{margin:"auto"}} src={img.img} alt={img.img}/>
								<h3>{img.content}</h3>
							</div>
						)
					})
				}
				</Carousel>
				<div>
					<Row gutter={10}>
						{
							this.state.productall.map((product,i)=>{
								return(
										<Col span={8} key={i}>
										<ProductCard product={product} key={i} />
									</Col>
									)
							}
							)
						}
					</Row>
				</div>
			</div>
		);
	}
}
export default Home;


