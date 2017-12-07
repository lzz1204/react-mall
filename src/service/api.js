export const SERVER = "http://192.168.1.210:3000";
export const login = (form) =>{
	return fetch(SERVER+"/login",{
		credentials: "include",
		method:"POST",
		headers:{
			"Content-Type":
			"application/json",
		},
		body:JSON.stringify(form)
	}).then((res) =>{
		return res.json();
	})
}
export const logout  = () => {
	return fetch(SERVER+"/logout",{
		credentials:"include",
	}).then((res)=>{
		return res.json()
	})
}
export const captcha = () => {
	return fetch(SERVER+"/captcha",{
		credentials:"include",
	}).then((res)=>{
		return res.json();
	})
}


export const signup = (form) =>{
	return fetch(SERVER+"/signup",{
		credentials:"include",
		method:"POST",
		headers:{
			"Content-Type":
			"application/json"
		},
		body:JSON.stringify(form)
	}).then((res)=>{
		return res.json();
	})
}
export const capalls = (level)=>{
	return fetch(SERVER+"/manage/category/" + (level || ""),{
		credentials:"include",
	}).then((res)=>{
		return res.json();
	})
}

export const getcapall = (form)=>{
	return fetch(SERVER+"/manage/category",{
		credentials:"include",
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(form)
	}).then((res)=>{
		return res.json();
	})
}

export const product = (form)=>{
	return fetch(SERVER+"/manage/product",{
		credentials:"include",
		method:"POST",
		headers:{
			"Content-Type": "application/json"
		},
		body:JSON.stringify(form)
	}).then((res)=>{
		return res.json()
	})
}

export const gettags = ()=>{
	return fetch(SERVER+"/manage/tag",{
		credentials:"include",
	}).then((res)=>{
		return res.json();
	})
}

export const getproducts = ()=>{
	return fetch(SERVER+"/manage/product",{
		credentials:"include",
	}).then((res)=>{
		return res.json();
	})
}
export const getproduct = (id)=>{
	return fetch(SERVER+"/manage/product/"+id,{
		credentials:"include",
	}).then((res)=>{
		return res.json();
	})
}

export const addCart = (form)=>{
	return fetch(SERVER+"/shoppingcart",{
		credentials:"include",
		method:"POST",
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify(form)
	}).then((res)=>{
		return res.json();
	})
}
export const getCart = ()=>{
	return fetch(SERVER+"/shoppingcart",{
		credentials:"include",
	}).then((res)=>{
		return res.json()
	})
}
export const delCart = (id)=>{
	return fetch(SERVER+"/shoppingcart/"+id,{
		credentials:"include",
		method:"DELETE",
	}).then((res)=>{
		return res.json()
	})
}

export const addContant = (form)=>{
	return fetch(SERVER+"/contact",{
		credentials:"include",
		method:"POST",
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify(form)
	}).then((res)=>{
		return res.json();
	})
}

export const updataContant = (form)=>{
	return fetch(SERVER+"/contact",{
		credentials:"include",
		method:"PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body:JSON.stringify(form)
	}).then((res)=>{
		return res.json();
	})
}
export const getContant = ()=>{
	return fetch(SERVER+"/contact",{
		credentials:"include",
	}).then((res)=>{
		return res.json()
	})
}
export const delContant = (id)=>{
	return fetch(SERVER+"/contact/"+id,{
		credentials:"include",
		method:"DELETE",
	}).then((res)=>{
		return res.json()
	})
}
export const defaultContant = (id)=>{
	return fetch(SERVER+"/contact/"+id,{
		credentials:"include",
		method:"GET",
	}).then((res)=>{
		return res.json()
	})
}