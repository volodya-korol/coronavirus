import React from "react";
import s from "./country.module.css";

let Country = (props) => {
	return (
		<div className={s.countries}>
			<div className={s.regionsItem}>
				<img className={s.itemImg} src={props.img} alt="flag" />
				<p className={s.itemText}>{props.name}</p>
			</div>
		</div>
	);
};
export default Country;
