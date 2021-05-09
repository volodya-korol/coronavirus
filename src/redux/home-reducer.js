import { getstatisticsInRegionApi, getTotalApi } from "../api/api";

const SET_STATISTICS_IN_REGION = "SET_STATISTICS_IN_REGION";
const SET_LAST_UPDATE = "SET_LAST_UPDATE";
const SET_COUNTRY_NAME = "SET_COUNTRY_NAME";
const SET_PRELOADER = "SET_PRELOADER";
const SET_COUNTRY_DATA = "SET_COUNTRY_DATA";
const SET_CHANGE_COUNTRY_DATA = "SET_CHANGE_COUNTRY_DATA";

export const setStatisticsInRegion = (statistics) => ({ type: SET_STATISTICS_IN_REGION, statistics });
export const setlastUpdate = (time) => ({ type: SET_LAST_UPDATE, time });
export const setCountryName = (name) => ({ type: SET_COUNTRY_NAME, name });

export const setCountryData = (confirmed, active, recovered, deceased) => ({
	type: SET_COUNTRY_DATA,
	confirmed,
	active,
	recovered,
	deceased,
});

export const setChangeCountryData = (cConfirmed, cActive, cRecovered, cDeceased) => ({
	type: SET_CHANGE_COUNTRY_DATA,
	cConfirmed,
	cActive,
	cRecovered,
	cDeceased,
});

export const setPreLoader = (bool) => ({ type: SET_PRELOADER, bool });

let InitialSate = {
	statisticsInRegion: [],
	lastUpdate: null,
	countryName: null,

	confirmed: 0,
	active: 0,
	recovered: 0,
	deceased: 0,

	changeConfirmed: 0,
	changeActive: 0,
	changeRecovered: 0,
	changeDeceased: 0,

	preLoader: false,
};
const Homereduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_PRELOADER:
			return {
				...state,
				preLoader: action.bool,
			};
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

		case SET_COUNTRY_DATA:
			return {
				...state,
				confirmed: action.confirmed,
				active: action.active,
				recovered: action.recovered,
				deceased: action.deceased,
			};
		case SET_CHANGE_COUNTRY_DATA:
			return {
				...state,
				changeConfirmed: action.cConfirmed,
				changeActive: action.cActive,
				changeRecovered: action.cRecovered,
				changeDeceased: action.cDeceased,
			};
		default:
			return state;
	}
};
export const getStatisticsInRegion = (iso = "UKR") => (dispatch) => {
	dispatch(setPreLoader(true));
	getstatisticsInRegionApi(iso).then((response) => {
		if (!response[0]) {
			return null;
		} else {
			dispatch(setStatisticsInRegion(response));
			dispatch(setCountryName(response[0].region.name));
			dispatch(setlastUpdate(response[0].last_update));
			if ((response[0].region.province = "")) {
				dispatch(setCountryData(response[0].confirmed, response[0].active, response[0].recovered, response[0].deaths));
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
					changeConfirmed += m.confirmed_diff;
					changeActive += m.active_diff;
					changeRecovered += m.recovered_diff;
					changeDeaths += m.deaths_diff;
					return {};
				});
				dispatch(setCountryData(confirmed, active, recovered, deaths));
				dispatch(setChangeCountryData(changeConfirmed, changeActive, changeRecovered, changeDeaths));
			}
		}
		dispatch(setPreLoader(false));
	});
};
export const getTotal = () => (dispatch) => {
	dispatch(setPreLoader(true));
	getTotalApi().then((response) => {
		dispatch(setCountryData(response.confirmed, response.active, response.recovered, response.deaths));
		dispatch(
			setChangeCountryData(response.confirmed_diff, response.active_diff, response.recovered_diff, response.deaths_diff)
		);
		dispatch(setlastUpdate(response.last_update));
		dispatch(setCountryName("In World"));
		dispatch(setStatisticsInRegion([]));
		dispatch(setPreLoader(false));
	});
};
export default Homereduser;
