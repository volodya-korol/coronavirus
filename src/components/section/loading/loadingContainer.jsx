import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadingRedirect } from "../../../hoc/loadingRedirect";
import { getGeolocation } from "../../../redux/loading-reducer";
import Loading from "./loading";

class LoadingApi extends Component {
	componentDidMount = () => {
		this.props.getGeolocation();
	};
	render() {
		return <Loading {...this.props} />;
	}
}
let mapStateToProps = (state) => {return{}};
const LoadingContainer = compose(
	loadingRedirect,
	connect(mapStateToProps, { getGeolocation })
)(LoadingApi);
export default LoadingContainer;
