import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
let mapStateToPropsForRedirect = (state) => {
	return {
		geolocation: state.Loadingreduser.geolocation,
		alpfaCode3: state.Loadingreduser.alpfaCode3,
	};
};
export const loadingRedirect = (Component) => {
	class RedirectComponent extends React.Component {
		render() {
			if (this.props.geolocation) return <Redirect to={"/home/" + this.props.alpfaCode3} />;
			else if (this.props.geolocation === false) return <Redirect to="/country" />;
			else return <Component {...this.props} />;
		}
	}
	let ConectLoadingRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
	return ConectLoadingRedirectComponent;
};
