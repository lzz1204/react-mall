import ShoppingCart from "../components/ShoppingCart";
import {getCarts,delCarts} from "../actions/shoppingCart";
import { bindActionCreators } from "redux";
import { connect }  from "react-redux";

const mapStateToProps = (state) => ({
	isFetching:state.cart.isFetching,
	count:state.cart.count,
	valid:state.cart.valid,
	cartList:state.cart.cartList
});

const mapDispatchToProps = (dispatch) => ({
	getCart:bindActionCreators(getCarts,dispatch),
	delCart:bindActionCreators(delCarts,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart)