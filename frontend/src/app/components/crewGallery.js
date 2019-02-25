import React from "react";
import CrewCard from "./crewCard";

const galleryContainerStyle = {
	display: "flex",
	justifyContent: "space-around"
};

const wrapperStyle = {
	display: "flex",
	flexDirection: "column"
};

export default function CrewGallery(props) {
	return (
		<div style={wrapperStyle}>
			<h1>the crew</h1>
			<svg style={{ width: "2em", height: ".15em" }}>
				<rect
					style={{
						width: "2em",
						height: ".15em"
					}}
					fill="black"
				/>
				Sorry, your browser does not support inline SVG.
			</svg>
			<div style={galleryContainerStyle}>
				{props.crew.map(member => {
					return <CrewCard info={member} />;
				})}
			</div>
		</div>
	);
}
