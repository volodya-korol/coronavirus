import React from "react";
import { NavLink } from "react-router-dom";
import Country from "./country/country";
import s from "./countries.module.css";

let Countries = (props) => {
	const filterCountries = props.countries.filter((country) => {
		return country.name.toLowerCase().includes(props.searchValue.toLowerCase());
	});
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
							onChange={(e) => props.setSearchValue(e.target.value)}
							value={props.searchValue}
						/>
					</div>
					<div className={s.list}>
						<NavLink to="/home/total">
							<Country name="In World" img={window.location.origin + "/images/countries/planet.svg"} />
						</NavLink>
						<NavLink to="/home/UKR">
							<Country name="Ukraine" img="https://flagcdn.com/ua.svg" />
						</NavLink>
						<hr />
						{filterCountries.map((m,i) => (
							<NavLink key={i} to={"/home/" + m.alpha3Code}>
								<Country name={m.name} img={m.flags.svg}/>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Countries;
