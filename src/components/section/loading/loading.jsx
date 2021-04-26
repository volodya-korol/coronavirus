import React from "react";
import { NavLink } from "react-router-dom";
import s from "./loading.module.css";

let Loading = (props) => {
	return (
		<div className={s.container}>
			<div className={s.screen}>
				<div
					className={s.images}
					style={{ backgroundImage: `url(${window.location.origin}/images/loading/worldMap1.svg` }}>
					<div className={s.position}>
						<div className={s.item}>
							<div className={s.exo}>
								<div className={s.pulse}></div>
							</div>
						</div>
					</div>
					<div className={s.logo}>
						<img className={s.logoImg} src={window.location.origin + "/images/loading/frame.svg"} alt="logo" />
					</div>
					<p className={s.coronavirusTracker}>Coronavirus Tracker</p>
					<NavLink
						to={"/home/" + props.alpfaCode3}
						className={s.nextbtnT + " " + (props.trackerBtn ? s.active : s.disabled)}>
						Tracker
					</NavLink>
					<NavLink to="/country" className={s.nextbtnC + " " + (props.countryBtn ? s.active : s.disabled)}>
						Choose Country
					</NavLink>
				</div>
			</div>
		</div>
	);
};
export default Loading;
