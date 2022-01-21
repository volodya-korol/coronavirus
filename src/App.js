import "./App.css";
import CountriesContainer from "./components/section/countries/countriesContainer";
import LoadingContainer from "./components/section/loading/loadingContainer";
import StatisticsContainer from "./components/section/statistics/statisticsContainer";
import Footer from "./components/footer/footer";
import { Route } from "react-router";
import HomeContainer from "./components/section/home/homeContainer";
import NewsContainer from "./components/section/news/newsContainer";
import Tips from "./components/section/tips/tips";
function App(props) {
	return (
		<div>
			<main>

				<Route exact path="/" render={() => <LoadingContainer />} />
				<Route path="/country">
					<CountriesContainer />
				</Route>
				<Route path="/statistick">
					<StatisticsContainer />
					<Footer />
				</Route>
				<Route path="/home/:iso?">
					<HomeContainer />
					<Footer />
				</Route>
				<Route path="/tips">
					<Tips />
					<Footer />
				</Route>
				<Route path="/news">
					<NewsContainer />
					<Footer />
				</Route>
				
			</main>
		</div>
	);
}

export default App;
