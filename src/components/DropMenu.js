import React, { useState } from "react";

const DropMenu = ({ title, content }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="dropmenu">
			<div className="dropheader" onClick={toggleExpand}>
				<span>{title}</span>
				<img
					src={expanded ? "./VectorUp.png" : "./VectorDown.png"}
					alt="Chevron vers le bas"
				/>
			</div>
			<div className={expanded ? "dropmenu-expanded" : "dropmenu-hidden"}>
				{content}
			</div>
		</div>
	);
};

export default DropMenu;
