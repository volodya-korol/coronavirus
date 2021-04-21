import React from "react";
import { connect } from "react-redux";
import { getstatisticsInRegion } from "../../../redux/home-reducer";

import Footer from "./footer";

let mapStateToProps = (state) => {
	return {
		alpfaCode3: state.Loadingreduser.alpfaCode3,
	};
};

const footerContainer = connect(mapStateToProps, { getstatisticsInRegion })(Footer);
export default footerContainer;
