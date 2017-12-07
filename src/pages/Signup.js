import React,{Component} from "react";
import { Form, Input,  Select, Button, } from 'antd';
import {captcha} from "../service/api";
import PropTypes from "prop-types";
const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  static propTypes = {
    isFetching:PropTypes.bool.isRequired,
    signup:PropTypes.func.isRequired,
    error:PropTypes.bool,
  }
  state = {
    confirmDirty: false,
    captcha: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.signup(values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不相同!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  getCaptcha(){
    captcha().then((data)=>{
      console.log("cap",data);
      this.setState({
        captcha:data.captcha
      })
    })
  }
  // componentDidMount(){
  //   this.getCaptcha();
  // }
  componentDidMount() {
    this.getCaptcha();
  }
  render() {
    const { getFieldDecorator } = this.props.form;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    const capImg = (
      <img src={"data:images/jpg;base64,"+this.state.captcha
    } style={{height:28}} alt="验证码" onClick={this.getCaptcha.bind(this)}/>
      )
    return (
      <div style={{marginTop:30}}>
      <Form onSubmit={this.handleSubmit}>
      	 <FormItem
          {...formItemLayout}
          label="用户名"
          hasFeedback
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: '用户名不能为空!',
            },
            {
              pattern: /[a-zA-Z][0-9A-Za-z-_]{3,19}/, message: "用户名必须是字母开头，包含字母、数字的4~20的字符串"
            }
             ],
             validateTrigger: "onBlur"
          })(
            <Input  />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            },
            {
              pattern: /((?=.*[\d])(?=.*[^\d])).{8,}|((?=.*[^A-Za-z])(?=.*[a-zA-Z])).{8,}/,
              message: "密码必须符合复杂性要求"
            },
             {
              validator: this.checkConfirm,
            }],
            validateTrigger: "onBlur"
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, 
            {
              pattern:/((?=.*[\d])(?=.*[^\d])).{8,}|((?=.*[^A-Za-z])(?=.*[a-zA-Z])).{8,}/,
              message: "密码必须符合复杂性要求"
            },
            {
              validator: this.checkPassword,
            }],
            validateTrigger: "onBlur"
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="手机号"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' },
              {
                pattern:/^1[3258][0-9]{9}$/,
                message:"手机号码格式不正确"
              }
            ],
            validateTrigger: "onBlur"
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="邮箱"
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
            validateTrigger: "onBlur"
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="验证码"
        >
              {getFieldDecorator('captcha', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Input addonAfter={capImg} 
            placeholder="点击重新获取"/>
              )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">注册</Button>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const Signup = Form.create()(RegistrationForm);

export default Signup;