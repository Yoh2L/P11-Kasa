import React from "react";

const Card = ({ data }) => {
	return (
		<article className="article">
			<a href={"location/" + data.id}>
				<h3>{data.title}</h3>
				<img src={data.cover} alt={data.title} />
			</a>
		</article>
	);
};

export default Card;
