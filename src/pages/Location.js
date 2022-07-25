import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";

const Location = () => {
	const [loc, setLoc] = useState({});
	const { id } = useParams();

	fetch("/db.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			const loca = myJson.find((item) => item.id === id);
			setLoc(loca);
		})
		.catch((error) => console.log(error));

	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Slider key={`slide-${loc.id}`} loc={loc} />
			</main>
		</div>
	);
};

export default Location;
