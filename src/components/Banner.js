import React from "react";
import bannerImg from "../assets/kasa_bg.png";

const Banner = () => {
	return (
		<div className="banner">
			<img className="banner_img" src={bannerImg} alt="Banniere d'accueil" />
			<h2 className="banner_slogan">Chez vous, partout et ailleurs</h2>
		</div>
	);
};

export default Banner;
