import React from "react";
import s from "./homeTable.module.css";
let HomeTable = (props) => {
	console.log(props);
	return (
		<div className={s.wraperTable}>
			{props.statisticsInRegion.length > 2?<table className={s.table}>
				<thead>
					<tr>
						<th className={s.tState}>State/UT</th>
						<th className={s.red}>C</th>
						<th className={s.blue}>A</th>
						<th className={s.green}>R</th>
						<th className={s.gray}>D</th>
					</tr>
				</thead>
				<tbody>
					{props.statisticsInRegion.length > 1
						? props.statisticsInRegion.map((m) => {
								if (!m.region.province || m.region.province === "Unknown") {
									return null;
								} else {
									return (
										<tr>
											<th>
												{/* <NavLink className={s.linkTable} to="/lolo"> */}
												{m.region.province}
												{/* </NavLink> */}
											</th>
											<th>{m.confirmed}</th>
											<th>{m.active}</th>
											<th>{m.recovered}</th>
											<th>{m.deaths}</th>
										</tr>
									);
								}
						  })
						: console.log("dont have")}
				</tbody>
			</table>: <h1 className={s.noResults}> We have no results </h1> }
			
		</div>
	);
};
export default HomeTable;
