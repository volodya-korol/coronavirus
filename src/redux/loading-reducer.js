import { getUsersApi } from "../api/api";

const SETGEOLOCATION = "SETGEOLOCATION";
const SET_ALPHA_CODE_3 = "SET_ALPHA_CODE_3";

export const setGeolocation = (boolean) => ({ type: SETGEOLOCATION, boolean });
export const setAlpfaCode3 = (iso) => ({ type: SET_ALPHA_CODE_3, iso });

let InitialSate = {
	geolocation: null,
	alpfaCode3: null,
};
const Loadingreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SETGEOLOCATION:
			return {
				...state,
				geolocation: action.boolean,
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
		getUsersApi(e.coords.latitude, e.coords.longitude).then((resposse) => {
			dispatch(setAlpfaCode3(resposse.results[0].components["ISO_3166-1_alpha-3"]));
			dispatch(setGeolocation(true));
		});
	};
	let poserror = () => {
		dispatch(setGeolocation(false));
	};
	navigator.geolocation.getCurrentPosition(posconfirm, poserror);
};
export default Loadingreduser;
