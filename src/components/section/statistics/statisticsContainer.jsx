import React, { Component } from "react";
import { connect } from "react-redux";
import { getStatsRegion , getMinMaxColorInReionValue } from "../../../redux/statistics-reducer";
import Statistics from "./statistics";


class StatisticsApi extends Component {
	componentDidMount = () => {
		this.props.getMinMaxColorInReionValue("UKR")
	};
	render() {
		return <Statistics {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		statisticsInRegionMap: state.Statisticsreduser.statisticsInRegionMap,
		scale: state.Statisticsreduser.scale,
		colorRegion: state.Statisticsreduser.colorRegion,
	};
};
const StatisticsContainer = connect(mapStateToProps, { getStatsRegion , getMinMaxColorInReionValue})(StatisticsApi);
export default StatisticsContainer;
