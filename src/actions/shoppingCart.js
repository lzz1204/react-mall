import {getCart,delCart} from "../service/api";
import {message} from "antd";
export const SHOPPONGCART_GET_START = "SHOPPONGCART_GET_START";
export const SHOPPONGCART_GET_SUCCESS = "SHOPPONGCART_GET_SUCCESS";
export const SHOPPONGCART_GET_ERROR = "SHOPPONGCART_GET_ERROR";
export const getcartStart = ()=>({
	type:SHOPPONGCART_GET_START
})
export const getcartSuccess = (docs)=> ({
	type:SHOPPONGCART_GET_SUCCESS,
	payload:docs
})
export const getcartError = () => ({
	type:SHOPPONGCART_GET_ERROR
})

export const getCarts = () => {
	return (dispatch,getState) =>{
		dispatch(getcartStart());
		getCart().then((res)=>{
			if (res.OK) {
				dispatch(getcartSuccess(res.docs))
			} else {
				message.error(res.message);
				dispatch(getcartError())
			}
		})
	}
}

export const SHOPPINGCART_DEL_START = "SHOPPINGCART_DEL_START";
export const SHOPPINGCART_DEL_SUCCESS = "SHOPPINGCART_DEL_SUCCESS";
export const SHOPPINGCART_DEL_ERROR = "SHOPPINGCART_DEL_ERROR";

export const delCartStart = () => ({
	type:SHOPPINGCART_DEL_START
})
export const delCartSuccess = (id) => ({
	type:SHOPPINGCART_DEL_SUCCESS,
	payload:id
})
export const delCartError = () => ({
	type:SHOPPINGCART_DEL_ERROR
})

export const delCarts = (id) => {
	return (dispatch,getState) => {
		dispatch(delCartStart());
		delCart(id).then((res)=>{
			if (res.OK) {
				dispatch(delCartSuccess(id))
			} else {
				message.error(res.message);
				dispatch(delCartError())
			}
			
		})
	}
}

export const  SHOPPINGCART_VAL = "SHOPPINGCART_VAL";
export const cartValid = (num) => ({
	type:SHOPPINGCART_VAL,
	payload:num
})