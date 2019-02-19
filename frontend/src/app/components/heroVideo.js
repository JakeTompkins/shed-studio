import React from "react";

const wrapperStyle = {
	position: "relative",
	width: "100vw"
};
const gradientStyle = {
	background: "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6))",
	position: "absolute",
	zIndex: "2",
	width: "100vw"
};

export default class HeroVideo extends React.Component {
	handleVideoLoad() {
		const w = document.getElementById("videoWrapper");
		const b = w.getBoundingClientRect().bottom;
		console.log(w, b);
		const height = b;
		this.props.changeThreshold(height);
	}

	render() {
		return (
			<div id="videoWrapper" style={wrapperStyle}>
				<div className="gradient" style={gradientStyle} />
				<div className="hero">
					<video
						className="hero-content media"
						autoPlay="autoplay"
						muted
						loop
						onPlaying={() => this.handleVideoLoad()}
					>
						<source src={this.props.src} type="video/mp4" />
					</video>
				</div>
			</div>
		);
	}
}
