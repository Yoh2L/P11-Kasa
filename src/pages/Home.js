import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Locations from "../components/Locations";

const Home = () => {
	return (
		<div>
			<header>
				<Header />
				<Banner />
			</header>
			<main>
				<Locations />
			</main>
		</div>
	);
};

export default Home;
