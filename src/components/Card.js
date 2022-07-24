import React from "react";

const Card = ({ data }) => {
	return (
		<article className="article">
			<h3>{data.title}</h3>
			<img src={data.pictures[0]} alt={data.title} />
		</article>
	);
};

export default Card;
