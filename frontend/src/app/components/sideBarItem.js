import React from "react";

const linkStyle = {
	fontSize: "1.5em",
	textDecoration: "none"
};

const sideBarItemStyle = {
	display: "flex",
	flexDirection: "column"
};

export default class SideBarItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "white",
			scaleUp: false
		};

		this.determineStyle = this.determineStyle.bind(this);
	}

	determineStyle() {
		if (this.state.scaleUp) {
			return {
				width: "1.25em",
				height: ".75em"
			};
		} else {
			return {
				width: "1em",
				height: ".25em"
			};
		}
	}

	render() {
		console.log("hit");
		return (
			<div className="sideBarItem">
				<a
					className="sideBarItem-title"
					href={`#${this.props.title}Marker`}
					style={linkStyle}
				>
					{this.props.title}
				</a>
				<svg style={{ width: "25", height: "25" }}>
					<rect style={this.determineStyle()} fill={this.state.color} />
					Sorry, your browser does not support inline SVG.
				</svg>
			</div>
		);
	}
}
