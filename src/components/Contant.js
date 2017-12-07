import React,{Component} from "react";
import {Button,message,Radio} from "antd";
import {addContant,updataContant,getContant,
delContant,defaultContant
} from "../service/api";
import ContantItem from "./ContantItem";
import ContantModal from "./ContantModal";
const RadioGroup = Radio.Group
class Contant extends Component{
	state = {
		showModal: false,
		action: "new",
		allCantant:[],
		defaultValues:{},
		moreBtn:false
	}
	componentWillMount() {
		this.getContants();
	}
	handleCancel(){
		this.setState({
			showModal: false,
		})
	}
	getContants(){
		getContant().then((res)=>{
			this.setState({
				allCantant:res.docs
			})
		})
	}
	delContant(id){
		delContant(id).then((res)=>{
			this.setState({
					allCantant: res.docs,
				})
		})
	}
	defaultContant(id){
		defaultContant(id).then((res)=>{
			console.log("ss",res);
			this.setState({
					allCantant: res.docs,
				})
		})
	}
	addContant(form){
		this.setState({showModal: false,})
		addContant(form).then((res)=> {
			if (res.OK) {
				message.success("新增联系人成功")
				this.setState({
					allCantant:res.docs
				})
			} else {
				message.error("新增联系人失败" + res.message)
			}
		})
	}
	updataModel(contant){
		this.setState({
			showModal: true,
			action: "update",
			defaultValues: contant
		})
	}
	updataContant(form){
		this.setState({showModal: false})
		updataContant(form).then((res)=> {
			if (res.OK) {
				message.success("修改联系人成功")
				this.setState({
					allCantant:res.docs
				})
			} else {
				message.error("修改联系人失败" + res.message)
			}
		})
	}
	changeContant(e){
		const value = e.target.value;
		console.log(value);
	}
	render(){
		const {showModal,action,defaultValues,allCantant,moreBtn} = this.state;
		let title; let leOk;
		if (action === "new") {
			title = "新增收货人地址";
			leOk = this.addContant.bind(this);
		} else{
			title = "修改收货人地址";
			leOk = this.updataContant.bind(this);
		}
		return(
			<div className={"contact"}>
				<h3>收货人信息</h3>
				 <Button className="new" type="primary" size="small"  onClick={()=> this.setState({showModal:true,action:"new",defaultValues:{}})}>新增收货人地址</Button>
				 {
				 	allCantant.length === 0 ?
				 		<h4>没有收货人地址，请添加</h4>
				 		:
				 		<RadioGroup
				 			onChange={this.changeContant.bind(this)}
				 			defaultValue={allCantant[0]._id}
				 			className={moreBtn? "more" :""}
				 		>
				 			{
				 				allCantant.map((contact,i)=>{
				 					return(
				 						<ContantItem key={i}
				 							contact={contact}
				 							delContact={this.delContant.bind(this)}
				 							updataContact={this.updataModel.bind(this)}
				 							setDefault={this.defaultContant.bind(this)}
				 						
				 						/>
				 						)
				 				})
				 			}
				 			
				 		</RadioGroup>
				 }
				 <div className="zhezhao">
				 	<Button onClick={()=>this.setState({moreBtn:!moreBtn})}>{moreBtn ? "收起" : "更多"}地址</Button>
				 </div>
				 {
				 	showModal ? 
				 	 <ContantModal  
					 	visible={showModal}
					 	title={title}
					 	handleOk={leOk}
					 	handleCancel={this.handleCancel.bind(this)}
					 	defaultValues={defaultValues}
					 />
					 :null
				 }
			</div>
		)
	}
}

export default Contant;