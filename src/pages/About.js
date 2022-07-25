import React from "react";
import BannerAbout from "../components/BannerAbout";
import DropMenu from "../components/DropMenu";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
	return (
		<div>
			<header>
				<Header />
				<BannerAbout />
			</header>
			<main>
				<DropMenu
					title={"fiabilité"}
					content={
						"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
					}
				></DropMenu>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default About;
