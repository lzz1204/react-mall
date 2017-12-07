import React, { Component } from 'react';
import history from "../service/history";
import { Menu,Button,Dropdown } from 'antd';
import PropTypes from "prop-types";
import "../css/menu.css";
import { Link } from "react-router-dom";
 // const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const imgs = {
 img1:"imgs/logo.png"
}
class AppNav extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
  }
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  handleLogout(){
    console.log("logout");
    this.props.actions.navLogout();
    history.push("/");
  }
  render() {
     console.log(this.props.username)
    const menum = (
        <Menu style={{textAlign: "center"}}>
            <Menu.Item key="user">
              <Link to="/user"><Button>用户中心</Button></Link>
            </Menu.Item>
            <Menu.Item key="manage">
              <Link to="/manage"><Button>管理中心</Button></Link>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="logout">
              <Button onClick={this.handleLogout.bind(this)}>退出登录</Button>
            </Menu.Item>
        </Menu>
      )
    return (
      
      <div className="menu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="img">
            <img src={imgs.img1} alt={imgs.img1}/>
          </Menu.Item>
          <Menu.Item key="home" style={{color:"white"}}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="man">
            男子
          </Menu.Item>
          <Menu.Item key="woman">
            女子
          </Menu.Item>
          <Menu.Item key="childen">
            童装
          </Menu.Item>
        </Menu>
          { this.props.username ?
            <Dropdown overlay={menum}>
              <Button icon="user"><span>{this.props.username}</span></Button>
            </Dropdown>
            :
            <div className="user">          
             <Link to="/signup"><Button className="button-si">注册</Button></Link>
              <Link to="/login"><Button>登录</Button>
              </Link>
            </div>
          }
      </div>
    );
  }
}
export default AppNav;
