import React from "react";

var linkStyle = {
	fontSize: "1.5em",
	textDecoration: "none",
	marginLeft: "auto",
	cursor: "default"
};

const sideBarItemStyle = {
	display: "flex",
	flexDirection: "column",
	width: "8em"
};

export default class SideBarItem extends React.Component {
	constructor(props) {
		super(props);
		this.convertedTitle = this.convertTitle(props.title);
		this.state = {
			color: "white"
		};

		this.dividerStyle = this.dividerStyle.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.is_locked = this.is_locked.bind(this);
	}

	convertTitle(title) {
		return title.replace(" ", "");
	}

	is_locked() {
		return this.props.sectionReached === this.convertedTitle;
	}

	dividerStyle() {
		if (this.state.hovering || this.is_locked()) {
			return {
				width: "5.5em",
				height: ".5em",
				marginTop: "0",
				transition: "width .5s, height .5s ease-in-out"
			};
		} else {
			return {
				width: "1.75em",
				height: ".15em",
				transition: "width .5s, height .5s ease-in-out"
			};
		}
	}

	handleScroll() {
		const me = document.getElementById(this.convertedTitle);
		const bottom = me.getBoundingClientRect().bottom + window.scrollY;

		if (bottom > this.props.threshold) {
			this.setState(oldState => {
				if (oldState.color === "white") {
					return { color: "black" };
				}
			});
		} else {
			this.setState(oldState => {
				if (oldState.color === "black") {
					return { color: "white" };
				}
			});
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);

		const me = document.getElementById(this.convertedTitle);
		me.addEventListener("mouseenter", () => {
			this.setState({
				hovering: true
			});
		});

		me.addEventListener("mouseleave", () => {
			this.setState({
				hovering: false
			});
		});
	}

	componentDidUpdate() {
		console.log(
			this.convertedTitle,
			this.props.sectionReached,
			this.is_locked()
		);
	}

	render() {
		return (
			<div
				className="sideBarItem"
				id={this.convertedTitle}
				style={sideBarItemStyle}
			>
				<p
					className="sideBarItem-title"
					onClick={() => {
						this.props.scrollToSection(this.convertedTitle);
					}}
					style={{
						...linkStyle,
						color: this.state.color,
						fontWeight:
							this.props.sectionReached === this.convertedTitle ? "bold" : ""
					}}
				>
					{this.props.title}
				</p>
				<div
					className="dividerContainer"
					style={{
						height: "2em",
						widht: "2em",
						display: "flex",
						alignItems: "center"
					}}
				>
					<svg
						style={{
							...this.dividerStyle(),
							marginLeft: "auto"
						}}
					>
						<rect style={this.dividerStyle()} fill={this.state.color} />
						Sorry, your browser does not support inline SVG.
					</svg>
				</div>
			</div>
		);
	}
}
