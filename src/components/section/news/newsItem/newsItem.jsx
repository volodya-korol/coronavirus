import React from "react";
import s from "./newsItem.module.css";

let NewsItem = (props) => {
	let img = window.location.origin + '/images/news/noneimg.svg'
	return (
		<div className={s.content}>
			<div className={s.text}>
				<div className={s.textDescription}>
					<img className={s.icon} src={`${props.img === "/img/img_none.jpg"?img:props.img}`} alt="img" />
					<p className={s.data}>Ukrinform • {props.time}</p>
					<a href={props.link} className={s.textTitle}>
						{props.title}
					</a>
					<br />
					{props.text}
				</div>
			</div>
		</div>
	);
};
export default NewsItem;

// <div className={s.block}>

/* <div className={s.content}>
				<div className={s.blockDescription}>
					<img width="140px" height="88px" src={`${props.img}`} alt="img for article" />
					<p className={s.descriptionText}>Ukrinform • {props.time}</p>
				</div>
				<div className={s.text}>
					<a href={props.link} className={s.textTitle}>
						{props.title}
					</a>
					<p className={s.textDescription}>{props.text} fffffffffffffffffffffffffffffffffffffds lor</p>
				</div>
			</div> */
/* </div> */
