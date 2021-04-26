import React from "react";
import s from "./news.module.css";
import NewsItem from "./newsItem/newsItem";

let News = (props) => {
	return (
		<div className={s.container}>
			<div className={s.screen}>
				<div className={s.inner}>
					<h2 className={s.news}>Latest News</h2>
					<div className={s.articles}>
					{!props.news
							? null
							: props.news.map((m,i) => {
									return <NewsItem key={i} img={m.img} link={m.link} title={m.title} text={m.text} time={m.time} />;
							  })}
					</div>
				</div>
			</div>
		</div>
	);
};
export default News;
