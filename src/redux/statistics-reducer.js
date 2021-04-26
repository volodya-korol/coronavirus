import { getStatisticsInRegionMapApi, getstatisticsInRegionApi } from "../api/api";

const SET_STATISTICS_IN_REGION_MAP = "SET_STATISTICS_IN_REGION_MAP";
const SET_SCALE = "SET_SCALE";
const SET_COLOR_REGION = "SET_COLOR_REGION";

export const setStatisticsInRegionMap = (region) => ({ type: SET_STATISTICS_IN_REGION_MAP, region });
export const setScale = (arr) => ({ type: SET_SCALE, arr });
export const colorRegion = (arr) => ({ type: SET_COLOR_REGION, arr });

let InitialSate = {
	statisticsInRegionMap: null,
	colorRegion: {},
	scale: [],
	
};
const Statisticsreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_STATISTICS_IN_REGION_MAP:
			return {
				...state,
				statisticsInRegionMap: action.region,
			};

		case SET_COLOR_REGION:
			return {
				...state,
				colorRegion: action.arr,
			};
		case SET_SCALE:
			return {
				...state,
				scale: action.arr,
			};

		default:
			return state;
	}
};
export const getStatsRegion = (region) => (dispatch) => {
	getStatisticsInRegionMapApi(region).then((resposse) => {
		dispatch(setStatisticsInRegionMap(resposse));
	});
};
export const getMinMaxColorInReionValue = (iso = "UKR", type = "confirmed") => (dispatch) => {
	getstatisticsInRegionApi(iso).then((response) => {
		console.log(response);
		let arr1 = {},
			min = 100000000,
			max = 0;
		response.map((m) => {
			if (m.confirmed > max) max = m.confirmed;
			if (m.confirmed < min) min = m.confirmed;
			return 0;
		});
		max = max - (max / 100) * 10;
		min = 1;
		let progres = Math.ceil(max / 5);
		let maxprogres = progres;

		let arr = [];
		arr.push({ stage: 1, min: min, max: progres });
		for (let i = 2; i <= 5; i++) {
			min += progres;
			maxprogres += progres;
			arr.push({ stage: i, min: min, max: maxprogres });
		}
		arr.push({ stage: 6, max: maxprogres });
		dispatch(setScale(arr));
		response.map((m) => {
			if (m.confirmed > maxprogres)  arr1[`${m.region.province}`]= "#BF171B" ;
			if (m.confirmed < progres)  arr1[`${m.region.province}`]= "#FFF5F0" ;
			if (m.confirmed >= progres && m.confirmed < progres * 2)  arr1[`${m.region.province}`]= "#FDD5C4" ;
			if (m.confirmed >= progres * 2 && m.confirmed < progres * 3)  arr1[`${m.region.province}`]= "#FCA689" ;
			if (m.confirmed >= progres * 3 && m.confirmed < progres * 4)  arr1[`${m.region.province}`]= "#FA7253" ;
			if (m.confirmed >= progres * 4 && m.confirmed < progres * 5)  arr1[`${m.region.province}`]= "#EA3B2D" ;
			return 0;
		});
		dispatch(colorRegion(arr1));
	});
};

export default Statisticsreduser;
// ? min - progres ---- progres + 1 - pregres*2 ==== progres + 1
