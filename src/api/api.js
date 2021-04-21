import * as axios from "axios";
const getYourCountry = axios.create({
	baseURL: "https://api.opencagedata.com/geocode/v1/",
});

export const getUsersApi = (latitude, longitude) => {
	return getYourCountry
		.get(`json?q=${latitude}+${longitude}&key=0f1cc81e49684599bdae3fa9c469dcc0`)
		.then((response) => response.data);
};
export const getCountriesApi = () => {
	return axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => response.data);
};
export const getstatisticsInRegionApi = (iso) => {
	return axios
		.get(`https://covid-19-statistics.p.rapidapi.com/reports?iso=${iso}`, {
			headers: {
				"x-rapidapi-key": "09668fafe2msh930f9e71becdd62p1304d7jsn1836ad0ae2b5",
				"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
			},
		})
		.then((response) => response.data.data);
};

export const getStatisticsInRegionMapApi = (region) => {
	return axios
		.get(`https://covid-19-statistics.p.rapidapi.com/reports`, {
			params: { region_province: region },
			headers: {
				"x-rapidapi-key": "09668fafe2msh930f9e71becdd62p1304d7jsn1836ad0ae2b5",
				"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
			},
		})
		.then((response) => response.data.data);
};
