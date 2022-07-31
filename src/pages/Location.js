import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DropMenu from "../components/DropMenu";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Slider from "../components/Slider";
import DropMenuLi from "../components/DropMenuLi";

const Location = () => {
	const [loc, setLoc] = useState({
		tags: [],
		equipments: [],
		pictures: [],
		rating: "",
		host: { name: "", picture: "" },
	});
	const { id } = useParams();

	useEffect(() => {
		fetch("../db.json")
			.then((response) => response.json())
			.then((data) => {
				const loca = data.find((item) => item.id === id);
				if (loc.id !== loca.id) {
					setLoc({ ...loc, ...loca });
				}
			})
			.catch((error) => console.log("err: ", error));
	});

	const nameHost = loc.host.name.split(" ");

	return (
		<div className="location--page">
			<header>
				<Header />
			</header>
			<main className="main-location">
				<Slider key={`slide-${loc.id}`} loc={loc.pictures} />
				<section>
					<div className="bio-location">
						<div className="bio-info">
							<h2>{loc.title}</h2>
							<p>{loc.location}</p>
						</div>
						<div className="bio-host">
							<div className="bio-name">
								<p>{nameHost[0]}</p>
								<p>{nameHost[1]}</p>
							</div>

							<img src={loc.host.picture} alt="Profil de l'hôte" />
						</div>
					</div>
					<div className="bio-tag-ratings">
						<ul>
							{loc.tags.map((tags) => (
								<li key={loc.id + `/` + tags}>{tags}</li>
							))}
						</ul>
						<div>
							<Rating rating={loc.rating} />
						</div>
					</div>
					<div className="location-dropmenu">
						<div>
							<DropMenu title="Description" content={loc.description} />
						</div>
						<div>
							<DropMenuLi title="Equipements" content={loc.equipments} />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Location;
