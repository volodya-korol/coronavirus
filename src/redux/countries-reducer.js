
import data from "./countries.json"

const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const setSearchValue = (value) => ({ type: SET_SEARCH_VALUE, value });

let InitialSate = {
	countries: data,
	searchValue: "",
};
const Countriesreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_SEARCH_VALUE:
			return {
				...state,
				searchValue: action.value,
			};
		default:
			return state;
	}
};

export default Countriesreduser;
