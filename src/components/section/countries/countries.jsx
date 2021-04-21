import React from "react";
import { NavLink } from "react-router-dom";
import Country from "./country/country";
import s from "./countries.module.css";

let Countries = (props) => {
	let reftextarea = React.createRef();
	let onpostchange = () => {
		let text = reftextarea.current.value;
		props.setSearchValue(text);
	};
	return (
		<div className={s.container}>
			<div className={s.screen}>
				<div className={s.inner}>
					<div className={s.back}>
						<NavLink to="/home">
							<img className={s.kArrow} src={window.location.origin + "/images/countries/Stroke.svg"} alt="" />
						</NavLink>
						<p className={s.backChoosingCountry}>Choose your country</p>
					</div>
					<div className={s.search}>
						<img className={s.searchIcon} src={window.location.origin + "/images/countries/Union.svg"} alt="" />
						<input
							className={s.searchInput}
							type="search"
							placeholder="Search..."
							name="search"
							onChange={onpostchange}
							value={props.searchValue}
							ref={reftextarea}
						/>
					</div>
					<div className={s.list}>
						<NavLink to="/home/total">
							<Country name="In World" img={window.location.origin + "/images/countries/planet.svg"} />
						</NavLink>
						<NavLink to="/home/UKR">
							<Country name="Ukraine" img="https://restcountries.eu/data/ukr.svg" />
						</NavLink>
						<hr />
						{console.log(props.countries)}
						{!props.countries
							? console.log("none")
							: props.countries.map((m) => (
									// m.name?
									<NavLink to={'/home/' + m.alpha3Code}>
										<Country name={m.name} img={m.flag} key={m.name} />
									</NavLink>
									// :
									// console.log(m)
									// <NavLink to={'/home/' + m.alpha3Code}>
									// 	<Country name={m.name} img={m.flag} key={m.name} />
									// </NavLink>
							  ))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Countries;
