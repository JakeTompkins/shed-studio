import React from "react";

export default function CrewCard(props) {
	return (
		<div>
			<img src={props.info.avatar} alt="crew member" />
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
			<p>{props.info.description}</p>
		</div>
	);
}
