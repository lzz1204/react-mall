import React, { Component } from 'react';
import ConNav from "./containers/ConNav";
import Home from "./pages/Home";
import ConLogin from "./containers/ConLogin";
import ConSignup from "./containers/ConSignup";
import User from "./pages/User";
import Manage from "./pages/Manage";
import ConProduct from "./containers/ConProduct";
import ConCart from "./containers/ConCart";
import Order from "./pages/Order";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import "whatwg-fetch";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div>
          <ConNav />
          <ConCart />
          <Switch>
            <Route path="/order" component={Order}/>
            <Route path="/login" component={ConLogin}/>
            <Route path="/signup" component={ConSignup}/>
            <Route path="/user" component={User}/>
            <Route exact path="/" component={Home}/>
            <Route  path="/manage" component={Manage}/>
            <Route  path="/product/:id" component={ConProduct}/>
          </Switch>
       </div>
      </BrowserRouter>
    );
  }
}
export default App;
