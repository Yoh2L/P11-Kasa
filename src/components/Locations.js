import React, { useEffect, useState } from "react";
import Card from "./Card";

const Locations = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		fetch("db.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
			});
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<section className="locationsGallery">
			{data.map((data) => (
				<Card key={data.id} data={data} />
			))}
		</section>
	);
};

export default Locations;
