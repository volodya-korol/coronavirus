const SET_NEWS = "SET_NEWS";
const SET_PRELOADER = "SET_PRELOADER";
export const setNews = (news) => ({ type: SET_NEWS, news });
export const setPreLoader = (bool) => ({ type: SET_PRELOADER, bool });
let InitialSate = {
	news: [],
};
const Newsreduser = (state = InitialSate, action) => {
	switch (action.type) {
		case SET_PRELOADER:
			return {
				...state,
				preLoader: action.bool,
			};
		case SET_NEWS:
			return {
				...state,
				news: action.news,
			};
		default:
			return state;
	}
};
export let getNews = () => async (dispatch) => {
	dispatch(setPreLoader(true))
	const axios = require("axios");
	const cheerio = require("cheerio");
	let arr = [];
	const getHTML = async (url) => {
		const { data } = await axios.get(url);
		return cheerio.load(data);
	};
	const selector = await getHTML(
		`https://www.ukrinform.ua/search-YToxOntzOjU6InF1ZXJ5IjtzOjIyOiLQutC-0YDQvtC90LDQstGW0YDRg9GBIjt9`
	);
	selector("article").map((i, element) => {
		if (11 > i && i > 0) {
			const link = "https://www.ukrinform.ua" + selector(element).find("section h2 a").attr("href");
			const img = selector(element).find("figure a img").attr("src");
			const title = selector(element).find("section h2").text();
			const text = selector(element).find("section p").text();
			const time = ((selector(element).find("section time").attr("datetime")).slice(0 , 19)).replace(/[a-zа-яё]/gi, ' ');
			let obj = { link: `${link}`, img: `${img}`, title: `${title}`, text: `${text}`, time: `${time}` };
			arr.push(obj);
		}
		return null
	});
	dispatch(setNews(arr));
	dispatch(setPreLoader(false))
};
export default Newsreduser;