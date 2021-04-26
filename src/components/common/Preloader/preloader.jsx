import React from "react";
import s from "./preloader.module.css";
let PreLoader = (props) => {
	if (props.active === true) {
		return (
			<div
				style={{
					zIndex: "10000",
					top: "0",
					left: "0",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "fixed",
					width: "100%",
					height: "100%",
					backdropFilter: "blur(5px)",
				}}>
				<img className={s.logoImg} src={window.location.origin + "/images/loading/frame.svg"} alt="logo" />
			</div>
		);
	}
	else{
		return (
			<>
			</>
		)
	}
};
export default PreLoader;
