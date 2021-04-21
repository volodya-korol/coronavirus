import { getUsersApi } from "../api/api";

const CHANGE_TRACKER_LINK = "CHANGETRACKERLINK";
const CHANGE_COUNTRY_LINK = "CHANGECOUNTRYLINK";
const SET_ALPHA_CODE_3 = "SET_ALPHA_CODE_3";

export const changeTrackerLink = (boolean) => ({ type: CHANGE_TRACKER_LINK, boolean });
export const changeCountryLink = (boolean) => ({ type: CHANGE_COUNTRY_LINK, boolean });
export const setAlpfaCode3 = (iso) => ({ type: SET_ALPHA_CODE_3, iso });

let InitialSate = {
	trackerBtn: false,
	countryBtn: false,
	alpfaCode3: null,
};
const Loadingreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case CHANGE_TRACKER_LINK:
			return {
				...state,
				trackerBtn: action.boolean,
			};
		case CHANGE_COUNTRY_LINK:
			return {
				...state,
				countryBtn: action.boolean,
			};
		case SET_ALPHA_CODE_3:
			return {
				...state,
				alpfaCode3: action.iso,
			};
		default:
			return state;
	}
};
export const getGeolocation = () => (dispatch) => {
	let posconfirm = (e) => {
		dispatch(changeTrackerLink(true));
		getUsersApi(e.coords.latitude, e.coords.longitude).then((resposse) => {
			dispatch(setAlpfaCode3(resposse.results[0].components["ISO_3166-1_alpha-3"]));
		});
	};
	let poserror = () => {
		dispatch(changeCountryLink(true));
	};
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(posconfirm, poserror);
	} else {
		poserror();
	}
};
export default Loadingreduser;
