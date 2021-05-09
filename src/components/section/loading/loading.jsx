import React from "react";
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
				</div>
			</div>
		</div>
	);
};
export default Loading;
