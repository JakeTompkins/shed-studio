import React from "react";
import "./heroVideo.css";

export default function HeroVideo(props) {
	return (
		<div className="hero">
			<video
				className="hero-content media"
				autoPlay="autoplay"
				muted
				loop
			>
				<source src={props.src} type="video/mp4" />
			</video>
		</div>
	);
}
