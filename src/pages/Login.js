import React,{Component} from "react";
import { Form, Icon, Input, Button} from 'antd';
// import {Link,Pompt} from "react-router-dom";
import PropTypes from "prop-types";
import {captcha} from "../service/api";
import "../css/login.css";
const FormItem = Form.Item;

class NormalLoginForm extends Component {
	static propTypes = {
		isFetching:PropTypes.bool.isRequired,
		actions:PropTypes.object.isRequired,
		user:PropTypes.object.isRequired,
		error:PropTypes.bool,
		message:PropTypes.string,
	}
	state = {
		captcha:"",
		// formHasChanged:false
	}
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.actions.loginChunk(values);
      }
    });
  }
  getCaptcha(){
  	captcha().then((data) =>{
  		console.log("cap",data);
  		this.setState({
  			captcha:data.captcha
  		})
  	})
  }
  componentDidMount(){
  	this.getCaptcha();
  }
  render() {
  	const {captcha} = this.state;
    const { getFieldDecorator } = this.props.form;
    const capImg = (<img style={{height:20,cursor:"pointer"}} 
    		src={"data:image/jpg; base64," + 
    		captcha} alt="验证码" onClick={this.getCaptcha.bind(this)}
    	/>)
    return (
    	<div className="login">
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem>
	          {getFieldDecorator('username', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
	          )}
	        </FormItem>
	         <FormItem>
	          {getFieldDecorator('captcha', {
	            rules: [{ valuePropName: 'checked',
            initialValue: true, }],
	          })(
	            <Input addonBefore={<label>验证码</label>} addonAfter={capImg}
	            placeholder="点击重新发送"/>
	          )}
	        </FormItem>
	        <FormItem>
	          <Button type="primary" htmlType="submit" className="login-form-button">
	           	登录
	          </Button>
	        </FormItem>
	      </Form>
	     </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);
export default Login;


