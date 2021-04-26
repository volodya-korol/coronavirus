import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../../redux/news-reducer";
import PreLoader from "../../common/Preloader/preloader";
import News from "./news";

class NewsApi extends Component {
	componentDidMount = () => {
		this.props.getNews();
	};
	render() {
		return (
			<>
				<PreLoader active={this.props.preLoader} />
				<News news={this.props.news} />;
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		news: state.Newsreduser.news,
		preLoader: state.Newsreduser.preLoader,
	};
};
const StatisticsContainer = connect(mapStateToProps, { getNews })(NewsApi);
export default StatisticsContainer;
