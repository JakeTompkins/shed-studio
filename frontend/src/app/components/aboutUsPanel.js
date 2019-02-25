import React, { Fragment } from "react";
import { default as Banner } from "../assets/Office-Door-1Small copy.jpg";

const textContainerStyle = {
	display: "flex",
	justifyContent: "space-between"
};

const titleStyle = {
	marginRight: "3em"
};

const descriptionStyle = {
	width: "40vw",
	paddingRight: "14em"
};
export default class AboutUsPanel extends React.Component {
	constructor(props) {
		super(props);

		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll() {
		const marker = document.getElementById("aboutusMarker");
		let myTop = marker.getBoundingClientRect().top;
		let myBot = marker.getBoundingClientRect().bottom;
		console.log(myTop, myBot);
		if (myTop <= 0 && 0 <= myBot) {
			console.log("in");
			this.props.reportSectionReached("aboutus");
		} else if (myTop > 0) {
			console.log("out");
			this.props.reportSectionReached("");
		}
	}
	render() {
		return (
			<div>
				<img src={Banner} alt="Office Banner" />
				<div className="textContainer" style={textContainerStyle}>
					<h1 style={titleStyle}>Shed Studio is...</h1>
					<p style={descriptionStyle}>{this.props.description}</p>
				</div>
			</div>
		);
	}
}
