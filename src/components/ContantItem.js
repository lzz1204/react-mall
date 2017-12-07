import React,{Component} from "react";
import {Radio,Button} from "antd";
const RadioButton = Radio.Button;
class ContantItem extends Component{
	
	render(){
		const {contact,phone,address,_id} = this.props.contact;
		console.log("prppsssss",this.props);
			const {delContact,updataContact,setDefault} = this.props;
		return(
			<div className="radioButton">
				<RadioButton value={_id}>
					{contact}
				</RadioButton>
				<div className="info">
					<div className="name">{contact}</div>
					<div className="phone">{phone}</div>
					<div className="address">{address}</div>
				{ this.props.contact.default ?
						<div className="default">默认地址</div>
						: null
					}
				</div>
				<div className="op">
					{
						this.props.contact.default ?
						null
						:
						<Button size="small" onClick={()=>setDefault(_id)}>设为默认地址</Button>
					}
					<Button size="small" onClick={
						() => updataContact(this.props.contact)
					}>修改</Button>
					<Button size="small" onClick={
						() => delContact(_id)
					}>删除</Button>
				</div>
			</div>
		)
	}
}

export default ContantItem;