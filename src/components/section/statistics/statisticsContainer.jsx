import React, { Component } from "react";
import { connect } from "react-redux";
import { getStatsRegion } from "../../../redux/statistics-reducer";
import Statistics from "./statistics";


class StatisticsApi extends Component {
	componentDidMount = () => {

	};
	render() {
		return <Statistics {...this.props} />;
	}
}

let mapStateToProps = (state) => {
	return {
		statisticsInRegionMap: state.Statisticsreduser.statisticsInRegionMap,
	};
};
const StatisticsContainer = connect(mapStateToProps, { getStatsRegion })(StatisticsApi);
export default StatisticsContainer;
