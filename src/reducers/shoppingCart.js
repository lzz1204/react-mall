import {
	SHOPPONGCART_GET_START,
	SHOPPONGCART_GET_SUCCESS,
	SHOPPONGCART_GET_ERROR,
	SHOPPINGCART_DEL_START,
	SHOPPINGCART_DEL_SUCCESS,
	SHOPPINGCART_DEL_ERROR,
	SHOPPINGCART_VAL
} from "../actions/shoppingCart";
const stateDafault = {
	isFetching:false,
	cartList:[],
	valid:true,
	count:0
}

const shoppingCart = (state=stateDafault,action)=>{
		switch(action.type){
			case SHOPPONGCART_GET_START:
				return {...state,isFetching:true}
			case SHOPPONGCART_GET_SUCCESS:
				return {...state,isFetching:false,
					cartList:action.payload,
					count:action.payload.length,
					valid:false
					}
			case SHOPPONGCART_GET_ERROR:
				return {...state,isFetching:false}
			case SHOPPINGCART_DEL_START:
				return {...state,isFetching:true}
			case SHOPPINGCART_DEL_SUCCESS:
				const newCartList = state.cartList.filter((cart)=> cart._id !== action.payload);
				return {...state,isFetching:false,
					cartList:newCartList,
					count:newCartList.length
				}
			case SHOPPINGCART_DEL_ERROR:
				return {...state,isFetching:false}
			case SHOPPINGCART_VAL:
			 return {...state,valid:true,count:action.payload}
			default:
				return state
		}
}
export default shoppingCart;