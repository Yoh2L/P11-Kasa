import React, { useState } from "react";

const Slider = ({ loc }) => {
	const [index, setIndex] = useState(0);
	return (
		<div>
			<img className="sliderPic" src={loc[index]} alt="" />
		</div>
	);
};

export default Slider;
