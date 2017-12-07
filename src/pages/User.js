import React, {Component} from "react";
import {Switch,Link,Route} from "react-router-dom";
import {Row,Col} from "antd";
// import ShopPingCart from "./ShopPingCart";
// const FormItem = Form.Item;
class User extends Component {

	render(){
		return(
			<div>
				<Row>
					<Col xs={24} sm={8} md={4} style={{borderRight:"1px solid #aaa", height:400,paddingRight:30}}>
						<h2>这里是用户中心</h2>
						<Link to="/user/userinfo">用户信息</Link>
						<br/>
						<Link to="/user/userarticles">用户日志</Link>
					</Col>
					<Col xs={24} sm={16} md={20}>
						<Switch>
							<Route path="/user/userinfo" render={()=>{
									return(
										<div>
											查看用户信息
										</div>
									)
								}}
							/>
							<Route path="/user/userarticles" 
								render={()=>{
									return(
										<div>
										查看用户日志
										</div>
									)
								}}
							/>
						</Switch>
					</Col>
				</Row>
			</div>
		)
	}
}

export default User;