import React ,{Component} from "react";
import  {Card,Spin} from "antd";
import {Link} from "react-router-dom";
class ProductCard extends Component{
	render(){
		const {name,prize,description,images,_id} = this.props.product;
		// console.log(this.props.product);
		if (!name) {
			return (
				 <Spin/>
				)
		} 
		return(	
				 <Card style={{ width: 240,cuosor:"pointer" }} >
				 	<Link to={"/product/"+_id}>
				    <div className="custom-image">
				      <img alt="example" width="100%"  src={ images[0] } />
				    </div>
				    <div className="custom-card">
				      <h3>{name}</h3>
				      <p>{description}</p>
				      <p>¥:{prize}</p>
				    </div>
				    </Link>
			  </Card>
			)
		}
	}


export default ProductCard;