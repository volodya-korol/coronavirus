import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTrackerLink, changeCountryLink, getGeolocation } from "../../../redux/loading-reducer";
import Loading from "./loading";

class LoadingApi extends Component {
	componentDidMount = () => {
		this.props.getGeolocation()
	};
	render() {
		return <Loading {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		trackerBtn: state.Loadingreduser.trackerBtn,
		countryBtn: state.Loadingreduser.countryBtn,
		alpfaCode3: state.Loadingreduser.alpfaCode3,
	};
};
const LoadingContainer = connect(mapStateToProps, { changeTrackerLink, changeCountryLink,getGeolocation })(LoadingApi);
export default LoadingContainer;
