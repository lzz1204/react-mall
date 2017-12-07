import Signup from "../pages/Signup";
import {signupSubmit} from "../actions/signup";
import {connect} from "react-redux";
import{bindActionCreators} from "redux";

const mapStateToProps = (state)=> ({
	isFetching:state.signup.isFetching,
	error:state.signup.error

	
	
})
const mapDispatchToProps = (dispatch) => ({
	
		signup:bindActionCreators(signupSubmit,dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)