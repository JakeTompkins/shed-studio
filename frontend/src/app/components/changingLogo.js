import React from "react";

const logoStyle = {
	height: "8em",
    width: "8em",
    marginBottom: "2em"
};

export default class ChangingLogo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props, changedState: false };

		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll() {
		var bottomBound =
			document.getElementById("changingLogo").getBoundingClientRect().bottom +
			window.scrollY;
		if (bottomBound > this.props.threshold) {
			this.setState({
				changedState: true
			});
		} else {
			this.setState({
				changedState: false
			});
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	determineLogo() {
		if (this.state.changedState === true) {
			return this.props.logo2;
		} else {
			return this.props.logo1;
		}
	}

	render() {
		return (
			<img
				id="changingLogo"
				src={this.determineLogo()}
				alt="Logo"
				style={logoStyle}
			/>
		);
	}
}
