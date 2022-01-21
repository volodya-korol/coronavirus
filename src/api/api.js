import * as axios from "axios";

const rapidKey = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidHost = process.env.REACT_APP_RAPIDAPI_HOST;

const rapidApi = axios.create({
	baseURL: "https://covid-19-statistics.p.rapidapi.com",
	headers: {
		"x-rapidapi-key": rapidKey,
		"x-rapidapi-host": rapidHost,
	},
});

export const getUsersApi = (latitude, longitude) => {
	return axios
		.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=0f1cc81e49684599bdae3fa9c469dcc0`)
		.then((res) => console.log(res.data));
};
export const getIsoRegionStats = (iso) => {
	return rapidApi.get(`/reports?iso=${iso}`).then((res) => res.data.data);
};
export const getWorldStats = () => {
	return rapidApi.get(`/reports/total`).then((res) => res.data.data);
};
export const getRegionStats = (region) => {
	return rapidApi
		.get(`/reports`, {
			params: { region_province: region },
		})
		.then((res) => res.data.data);
};
