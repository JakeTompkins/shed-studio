import React from "react";
import HeroVideo from "./components/heroVideo";
import SideBar from "./components/sideBar";
import AboutUsPanel from "./components/aboutUsPanel";
import CrewGallery from "./components/crewGallery";
import Gallery from "./components/gallery";

import "./app.css";

const displayContents = {
	name: "Shed Studio",
	description:
		"a brand asset production studio, producing the vision and vibe of a brand, as well as developing internal and external assets in order to attract more clients, keep teams aligned to their purpose, and destroying the minds of their enemies.",
	sideBarCategories: ["about us", "portfolio", "contact"],
	crewMembers: [
		{ avatar: "", description: "Yolo" },
		{ avatar: "", description: "Yolo" },
		{ avatar: "", description: "Yolo" },
		{ avatar: "", description: "Yolo" }
	],
	social: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
		youtube: "https://youtube.com",
		email: "mailto:shedthestudio@gmail.com"
	},
	videoCategories: {
		Events: {
			urls: [
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545029251/Gemtree_Chengdu11.2_MB.mp4",
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545029370/GLOBAL_DAY.mp4",
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545031329/JAKE_S_BATCH_DEMO_DAY.mp4"
			]
		},
		Branding: {
			urls: [
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545039004/ARMANI_FOR_PHONE_SUBTITLES.mp4",
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545039053/CHRIS_COFFEA_SHOP.mp4",
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545039057/Le_WAGON_-_ALINA_21MB_Revised.mp4"
			]
		},
		"Client Profiles": {
			urls: [
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545032891/TIBET_TOURS_PHONE.mp4",
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545029502/AUSSIE_ACYA_DAY_PHONE.mp4",
				"https://res.cloudinary.com/dwtivbec9/video/upload/v1545029421/Mookie_Du_Final_Instagram.mp4"
			]
		}
	}
};

const containerStyle = {
	display: "flex",
	flexDirection: "column",
	width: "calc(100vw - 14em",
	float: "right"
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...displayContents,
			threshold: window.innerHeight,
			sectionReached: ""
		};

		this.changeThreshold = this.changeThreshold.bind(this);
		this.reportSectionReached = this.reportSectionReached.bind(this);
	}

	changeThreshold(threshold) {
		this.setState(oldstate => {
			console.log(oldstate);
			if (oldstate.threshold === null) {
				return { threshold: threshold };
			} else {
				console.log("fail");
			}
		});
	}

	reportSectionReached(name) {
		console.log(name);
		if (this.setState.sectionReached !== name) {
			this.setState({
				sectionReached: name
			});
		}
	}

	scrollToSection(marker) {
		console.log(marker);
		let target = document.getElementById(`${marker}Marker`);
		target.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	render() {
		return (
			<div id="page-wrapper">
				<HeroVideo
					src="https://res.cloudinary.com/dwtivbec9/video/upload/v1545041057/STORM_CONVERT_1_16_9_ASPECT_32MB.mp4"
					changeThreshold={t => this.changeThreshold(t)}
				/>

				<SideBar
					sections={this.state.sideBarCategories}
					threshold={this.state.threshold}
					sectionReached={this.state.sectionReached}
					scrollToSection={this.scrollToSection}
				/>
				<div className="container" style={containerStyle}>
					<div id="aboutusMarker">
						<AboutUsPanel
							description={this.state.description}
							reportSectionReached={p => this.reportSectionReached(p)}
						/>

						<CrewGallery crew={this.state.crewMembers} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
