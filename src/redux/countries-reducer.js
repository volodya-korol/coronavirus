import { getCountriesApi } from "../api/api";

const SET_COUNTRIES = "SET_COUNTRIES";
const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const setCountries = (countries) => ({ type: SET_COUNTRIES, countries });
export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, value });


let InitialSate = {
	countries: [],
	searchValue: "",
};
const Countriesreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_COUNTRIES:
			return {
				...state,
				countries: action.countries,
			};
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.value,
			};
		default:
			return state;
	}
};
export const getCountries = () => (dispatch) => {
	getCountriesApi().then((resposse) => {
		dispatch(setCountries(resposse));
	});
};
export default Countriesreduser;
