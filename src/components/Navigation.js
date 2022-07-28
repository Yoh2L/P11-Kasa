import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className="navigation">
			<NavLink
				to="/"
				style={({ isActive }) => ({
					border: isActive ? "#2px solid $color-1" : "",
				})}
				className="navbar__link"
			>
				Accueil
			</NavLink>
			<NavLink
				to="/about"
				activeClassName="navbar__link--active"
				className="navbar__link"
			>
				A propos
			</NavLink>
		</nav>
	);
};

export default Navigation;
