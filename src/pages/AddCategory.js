import React,{Component} from "react";
import { Form,Select,Transfer,Button,Input,message} from "antd";
import {capalls,getcapall} from "../service/api";

const FromItem = Form.Item;
const Option = Select.Option;
class AddCategory extends Component{
	state={
		targetKeys:[],
		capall:[],
		level:"2",

	}
	handleSubmit(e){
		e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      	// console.log("values",values);
       	getcapall(values).then((resJson)=>{
       		if (resJson.OK) {
       			message.success("添加成功")
       		} else {
       			message.error("添加失败" + resJson.message,5);
       		};
       	});
      }
    });
	}
	filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  cap(){
  	capalls("2").then((resJson)=>{
  		// console.log("resJson",resJson)
  			this.setState({
  				capall:resJson.docs.map((values)=>
  					({key:values.name,name:values.name})
  				)
  			})
  	})
  }
  componentWillMount(){
  	this.cap();
  }
	render(){
		// console.log(this.state.capall);
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const {getFieldDecorator} = this.props.form;
		return(
			<div>
				<Form onSubmit={this.handleSubmit.bind(this)} >
				<FromItem {...formItemLayout}
					label="分类名称" hasFeedback
					>
					{getFieldDecorator('name', {
            rules: [{ required: true, message: '分类名称不能为空', whitespace: true },
            ],
          })(
            <Input />
          )}
				</FromItem>
				<FromItem {...formItemLayout}
					label="分类等级" hasFeedback
					>
					{getFieldDecorator('level', {
            rules: [{ required: true, message: '分类等级不能为空', whitespace: true },
            ],
            initialValue: "2"
          })(
            <Select  style={{ width: "100%" }} 
            onChange={(value)=>this.setState({level:value})}
            >
				      <Option value="1">第一等级</Option>
				      <Option value="2">第二等级</Option>
				    </Select>
          )}
				</FromItem>
				{
					this.state.level === "2" ?
					null
					:
					<FromItem {...formItemLayout}
					label="下级分类" hasFeedback
					>
					{getFieldDecorator('childern')(
             <Transfer
				        dataSource={this.state.capall}
				        showSearch
				        filterOption={this.filterOption}
				        targetKeys={this.state.targetKeys}
				        onChange={this.handleChange}
				        render={item => item.name}
				      />
          )}
				</FromItem>
				}
				<Button type="primary" htmlType="submit">提交</Button>
				</Form>
			</div>
		)
	}
}

export default Form.create()(AddCategory);