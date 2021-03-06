import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getStatisticsInRegion, getWorldStats } from "../../../redux/home-reducer";
import PreLoader from "../../common/Preloader/preloader";
import Home from "./home";
class HomeApi extends Component {
	componentDidMount = () => {
		this.props.match.params.iso === "total"
			? this.props.getWorldStats()
			: this.props.getStatisticsInRegion(this.props.match.params.iso);
	};
	render() {
		return (
			<>
				<PreLoader active={this.props.preLoader} />
				<Home
					confirmed={this.props.confirmed}
					changeConfirmed={this.props.changeConfirmed}
					changeActive={this.props.changeActive}
					changeRecovered={this.props.changeRecovered}
					changeDeceased={this.props.changeDeceased}
					active={this.props.active}
					recovered={this.props.recovered}
					deceased={this.props.deceased}
					lastUpdate={this.props.lastUpdate}
					countryName={this.props.countryName}
					statisticsInRegion={this.props.statisticsInRegion}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		statisticsInRegion: state.Homereduser.statisticsInRegion,
		countryName: state.Homereduser.countryName,
		confirmed: state.Homereduser.confirmed,
		active: state.Homereduser.active,
		recovered: state.Homereduser.recovered,
		deceased: state.Homereduser.deceased,
		changeConfirmed: state.Homereduser.changeConfirmed,
		changeActive: state.Homereduser.changeActive,
		changeRecovered: state.Homereduser.changeRecovered,
		changeDeceased: state.Homereduser.changeDeceased,
		lastUpdate: state.Homereduser.lastUpdate,
		preLoader: state.Homereduser.preLoader,
	};
};
let withURLData = withRouter(HomeApi);
const HomeContainer = connect(mapStateToProps, { getStatisticsInRegion, getWorldStats })(withURLData);
export default HomeContainer;
