import React from "react";

const Slider = ({ loc }) => {
	console.log(loc);
	return (
		<div>
			<img className="sliderPic" src={loc.pictures[0]} alt="" />
		</div>
	);
};

export default Slider;
