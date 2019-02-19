import React from "react";

export default class VideoThumb extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false,
			playing: false,
			height: 100,
			width: 300,
			style: {
				boxShadow: "rgba(0,0,0,0.6) 0px 3px 5px"
			}
		};
		this.handleThumbnailClicked = this.handleThumbnailClicked.bind(this);
	}

	getScreenDimensions() {
		let sh = window.innerHeight;
		let sw = window.innerWidth;
		return { height: sh, width: sw };
	}

	handleThumbnailClicked(e) {
		let videoHeight;
		let videoWidth;
		let style;
		const video = e.currentTarget;

		const standardStyle = {
			boxShadow: "rgba(0, 0, 0, 0.6) 0px 3px 5px"
		};

		if (!this.state.expanded) {
			const viewportDimensions = this.getScreenDimensions();

			let mobile = viewportDimensions["width"] <= 418;

			videoWidth = mobile
				? viewportDimensions["height"]
				: viewportDimensions["width"] * 0.8;
			videoHeight = mobile ? "" : videoWidth / 1.7;

			style = {
				position: "fixed",
				top: (viewportDimensions["height"] - videoHeight) / 2,
				left: "10vw",
				margin: 0,
				backgroundColor: "grey",
				zIndex: 10000,
				transform: mobile ? "rotation(90deg)" : ""
			};
		} else {
			videoWidth = 300;
			videoHeight = 100;

			style = {};
		}

		this.setState(
			preS => {
				return {
					expanded: !preS.expanded,
					playing: !preS.playing,
					style: { ...standardStyle, ...style },
					height: videoHeight,
					width: videoWidth
				};
			},
			() => {
				this.state.playing ? video.play() : video.pause();
			}
		);
	}

	render() {
		return (
			<div className="column">
				<video
					className={this.state.expanded ? "is-overlay" : "media"}
					height={this.state.height}
					width={this.state.width}
					style={this.state.style}
					onClick={e => this.handleThumbnailClicked(e)}
				>
					<source src={this.props.src} type="video/mp4" />
				</video>
			</div>
		);
	}
}
