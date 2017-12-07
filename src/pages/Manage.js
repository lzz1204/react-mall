import React, {Component} from "react";
import {Col,Row,Menu} from "antd";
import UploadImg from "../components/UploadImg";
import {Switch , Route,Link} from "react-router-dom";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
const MenuItem = Menu.Item;
class Manage extends Component {
	handleKey(item){
		 console.log(item);
		this.props.history.push(item.key);
	}
	render(){
		return(
			<div className="manage">
				<Row>
					<Col xs={24} sm={8} md={4} style={{borderRight:"1px solid black",minHeight:400}}>
						<h1>管理中心</h1>
						<Menu 
							onClick={this.handleKey.bind(this)} >
							<MenuItem key="/manage/category">
									<Link to="/manage/category">分类管理</Link>
							</MenuItem>
							<MenuItem key="/manage/product">
									<Link to="/manage/product">商品管理</Link>
							</MenuItem>
							<MenuItem key="/manage/uploading">
									<Link to="/manage/uploading">上传图片</Link>
							</MenuItem>
						</Menu>
					</Col>
					<Col xs={24} sm={16} md={20} >
						<Switch>
							<Route path="/manage/uploading" render={(props)=>(
									<UploadImg max={3} action="http://192.168.1.210:3000/upload" getImgList={(list)=>console.log("list",list)} />
								)
								
							}/>
							<Route path="/manage/product" component={AddProduct} />
							<Route path="/manage/category" component={AddCategory} />
						</Switch>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Manage;