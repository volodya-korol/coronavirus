import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchValue } from "../../../redux/countries-reducer";
import Countries from "./countries";

class CountryApi extends Component {
	render() {
		return (
			<Countries
				searchValue={this.props.searchValue}
				setSearchValue={this.props.setSearchValue}
				countries={this.props.countries}
			/>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		countries: state.Countriesreduser.countries,
		countriesFilter: state.Countriesreduser.countriesFilter,
		searchValue: state.Countriesreduser.searchValue,
	};
};
const CountriesContainer = connect(mapStateToProps, { setSearchValue })(CountryApi);
export default CountriesContainer;
