import {logout} from "../service/api";

export const NAV_USERNAME = "NAV_USERNAME";

export const NAV_LOGOUT = "NAV_LOGOUT";

export const navUsername = (username) => ({
	type:NAV_USERNAME,
	payload:username

})

export const navDeluser = ()=> ({
	type:NAV_LOGOUT
})

export const navLogout = () =>{
	return (dispatch,getState)=>{
		logout().then((resJson) =>{

		})
		dispatch(navDeluser());
	}
}