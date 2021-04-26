import React from "react";
import HomeTable from "./homeTable/homeTable";
import { NavLink } from "react-router-dom";
import s from "./home.module.css";
let Home = (props) => {
	return (
		<div className={s.container}>
			<div className={s.screen} style={{ backgroundImage: `url(${window.location.origin}/images/home/header.png` }}>
				<div className={s.inner}>
					<div>
						<p className={s.name}>Covid-19 Tracker</p>
						<NavLink to="/country" className={s.country}>
							{!props.countryName ? "Country" : props.countryName}
							<p
								style={{
									marginLeft: "20px",
									content: `url(${window.location.origin}/images/home/3angleArrow.svg`,
								}}></p>
						</NavLink>
						<p className={s.updates}>Last updated {!props.lastUpdate ? "-- -- --" : props.lastUpdate}</p>
					</div>
					<div className={s.statistics}>
						<div className={s.block}>
							<p className={s.title}>Confirmed</p>
							<div className={s.count}>
								<p className={s.countAll}>{props.confirmed}</p>
								<div className={props.changeConfirmed >= 0 ? s.countContainer : s.rotatesvg}>
									{props.changeConfirmed === 0 ? (
										<strong className={s.red}>- &nbsp;</strong>
									) : (
										<svg
											className={s.arrow}
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7 11.0833V2.91667"
												stroke="#FF073A"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M2.91663 7.00001L6.99996 2.91667L11.0833 7.00001"
												stroke="#FF073A"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}

									<p className={s.countChanges + " " + s.red}>{props.changeConfirmed}</p>
								</div>
							</div>
						</div>

						<div className={s.block}>
							<p className={s.title}>Active</p>
							<div className={s.count}>
								<p className={s.countAll + " " + s.blue}>{props.active}</p>
								<div className={props.changeActive >= 0 ? s.countContainer : s.rotatesvg}>
									{props.changeActive === 0 ? (
										<strong className={s.blue}>- &nbsp;</strong>
									) : (
										<svg
											className={s.arrow}
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7 11.0833V2.91667"
												stroke="#007bff"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M2.91663 7.00001L6.99996 2.91667L11.0833 7.00001"
												stroke="#007bff"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}
									<p className={s.countChanges + " " + s.blue}>{props.changeActive}</p>
								</div>
							</div>
							
						</div>
						<div className={s.block}>
							<p className={s.title}>Recovered</p>
							<div className={s.count}>
								<p className={s.countAll + " " + s.green}>{props.recovered}</p>
								<div className={props.changeRecovered >= 0 ? s.countContainer : s.rotatesvg}>
									{props.changeRecovered === 0 ? (
										<strong className={s.green}>- &nbsp;</strong>
									) : (
										<svg
											className={s.arrow}
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7 11.0833V2.91667"
												stroke="#28a745"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M2.91663 7.00001L6.99996 2.91667L11.0833 7.00001"
												stroke="#28a745"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}
									<p className={s.countChanges + " " + s.green}>{props.changeRecovered}</p>
								</div>
							</div>
							
						</div>
						<div className={s.block}>
							<p className={s.title}>Deceased</p>
							<div className={s.count}>
								<p className={s.countAll + " " + s.gray}>{props.deceased}</p>
								<div className={props.changeDeceased >= 0 ? s.countContainer : s.rotatesvg}>
									{props.changeDeceased === 0 ? (
										<strong className={s.gray}>- &nbsp;</strong>
									) : (
										<svg
											className={s.arrow}
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M7 11.0833V2.91667"
												stroke="#6c757d"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M2.91663 7.00001L6.99996 2.91667L11.0833 7.00001"
												stroke="#6c757d"
												strokeWidth="1.2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									)}
									<p className={s.countChanges + " " + s.gray}>{props.changeDeceased}</p>
								</div>
							</div>
							
						</div>
					</div>
					<div>
						<HomeTable statisticsInRegion={props.statisticsInRegion} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
