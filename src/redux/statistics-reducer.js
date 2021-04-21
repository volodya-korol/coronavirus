import { getStatisticsInRegionMapApi } from "../api/api";

const SET_STATISTICS_IN_REGION_MAP = "SET_STATISTICS_IN_REGION_MAP";

export const setStatisticsInRegionMap = (region) => ({ type: SET_STATISTICS_IN_REGION_MAP, region });

let InitialSate = {
	statisticsInRegionMap: null,
};
const Statisticsreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_STATISTICS_IN_REGION_MAP:
			return {
				...state,
				statisticsInRegionMap: action.region,
			};

		default:
			return state;
	}
};
export const getStatsRegion = (region) => (dispatch) => {
	getStatisticsInRegionMapApi(region).then((resposse) => {
		console.log(resposse);
		dispatch(setStatisticsInRegionMap(resposse));
	});
};
export default Statisticsreduser;
