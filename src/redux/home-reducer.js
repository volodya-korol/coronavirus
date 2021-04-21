import { getstatisticsInRegionApi } from "../api/api";

const SET_STATISTICS_IN_REGION = "SET_STATISTICS_IN_REGION";
const SET_LAST_UPDATE = "SET_LAST_UPDATE";
const SET_COUNTRY_NAME = "SET_COUNTRY_NAME";

const SET_CONFIRMED = "SET_CONFIRMED";
const SET_ACTIVE = "SET_ACTIVE";
const SET_RECOVERED = "SET_RECOVERED";
const SET_DECEASED = "SET_DECEASED";

const SET_CHANGE_CONFIRMED = "SET_CHANGE_CONFIRMED";
const SET_CHANGE_ACTIVE = "SET_CHANGE_ACTIVE";
const SET_CHANGE_RECOVERED = "SET_CHANGE_RECOVERED";
const SET_CHANGE_DECEASED = "SET_CHANGE_DECEASED";

export const setStatisticsInRegion = (statistics) => ({ type: SET_STATISTICS_IN_REGION, statistics });
export const setlastUpdate = (time) => ({ type: SET_LAST_UPDATE, time });
export const setCountryName = (name) => ({ type: SET_COUNTRY_NAME, name });
export const setConfirmed = (data) => ({ type: SET_CONFIRMED, data });
export const setActive = (data) => ({ type: SET_ACTIVE, data });
export const setRecovered = (data) => ({ type: SET_RECOVERED, data });
export const setDeceased = (data) => ({ type: SET_DECEASED, data });

export const setChangeConfirmed = (data) => ({ type: SET_CHANGE_CONFIRMED, data });
export const setChangeActive = (data) => ({ type: SET_CHANGE_ACTIVE, data });
export const setChangeRecovered = (data) => ({ type: SET_CHANGE_RECOVERED, data });
export const setChangeDeceased = (data) => ({ type: SET_CHANGE_DECEASED, data });

let InitialSate = {
	statisticsInRegion: [],
	lastUpdate: null,
	countryName: null,
	confirmed: 0,
	changeConfirmed: 0,
	active: 0,
	changeActive: 0,
	recovered: 0,
	changeRecovered: 0,
	deceased: 0,
	changeDeceased: 0,
};
const Homereduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_STATISTICS_IN_REGION:
			return {
				...state,
				statisticsInRegion: action.statistics,
			};
		case SET_COUNTRY_NAME:
			return {
				...state,
				countryName: action.name,
			};
		case SET_LAST_UPDATE:
			return {
				...state,
				lastUpdate: action.time,
			};
		case SET_CONFIRMED:
			return {
				...state,
				confirmed: action.data,
			};
		case SET_ACTIVE:
			return {
				...state,
				active: action.data,
			};
		case SET_RECOVERED:
			return {
				...state,
				recovered: action.data,
			};
		case SET_DECEASED:
			return {
				...state,
				deceased: action.data,
			};
		case SET_CHANGE_CONFIRMED:
			return {
				...state,
				changeConfirmed: action.data,
			};
		case SET_CHANGE_ACTIVE:
			return {
				...state,
				changeActive: action.data,
			};
		case SET_CHANGE_RECOVERED:
			return {
				...state,
				changeRecovered: action.data,
			};
		case SET_CHANGE_DECEASED:
			return {
				...state,
				changeDeceased: action.data,
			};
		default:
			return state;
	}
};
export const getstatisticsInRegion = (iso = "UKR") => (dispatch) => {
	getstatisticsInRegionApi(iso).then((response) => {
		console.log(response);
		if (!response[0]) {
			let o = "o";
		} else {
			dispatch(setStatisticsInRegion(response));
			dispatch(setCountryName(response[0].region.name));
			dispatch(setlastUpdate(response[0].last_update));
			if ((response[0].region.province = "")) {
				dispatch(setConfirmed(response[0].confirmed));
				dispatch(setActive(response[0].active));
				dispatch(setRecovered(response[0].recovered));
				dispatch(setDeceased(response[0].deaths));
			} else {
				let confirmed = 0;
				let active = 0;
				let recovered = 0;
				let deaths = 0;
				let changeConfirmed = 0;
				let changeActive = 0;
				let changeRecovered = 0;
				let changeDeaths = 0;
				response.map((m) => {
					confirmed += m.confirmed;
					active += m.active;
					recovered += m.recovered;
					deaths += m.deaths;
					changeConfirmed = m.confirmed_diff;
					changeActive += m.active_diff
					changeRecovered = m.recovered_diff;
					changeDeaths = m.deaths_diff;
					return {};
				});
				
				dispatch(setChangeConfirmed(changeConfirmed));
				dispatch(setChangeActive(changeActive));
				dispatch(setChangeRecovered(changeRecovered));
				dispatch(setChangeDeceased(changeDeaths));

				dispatch(setConfirmed(confirmed));
				dispatch(setActive(active));
				dispatch(setRecovered(recovered));
				dispatch(setDeceased(deaths));
			}
		}
	});
};
export default Homereduser;
