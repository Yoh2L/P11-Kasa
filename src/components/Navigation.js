import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<ul>
				<NavLink to="/" className="navigation">
					<li>accueil</li>
				</NavLink>
				<NavLink to="/about">
					<li>à propos</li>
				</NavLink>
				<NavLink to="/location/c67ab8a7">
					<li>Test loc</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navigation;
