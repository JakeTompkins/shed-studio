import React from "react";
import TopBar from "./components/topBar";
import HeroVideo from "./components/heroVideo";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import DescriptitionTextBox from "./components/descriptionTextBox";
import Logo from "./assets/Shed Logo.jpg";
import "./app.css";
import "bulma";

const displayContents = {
	name: "Shed Studio",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin nunc quis lorem tincidunt, non mollis sem dictum. Vivamus iaculis venenatis ultrices. Vivamus blandit urna eu sagittis sodales. Praesent fermentum dignissim mi, ac blandit quam congue nec. Donec rhoncus vitae odio quis faucibus. Praesent justo sapien, varius sit amet tempus eget, commodo id libero. Duis non ullamcorper dolor.Aliquam porttitor sem id diam porta, in posuere dolor cursus. Suspendisse potenti. Morbi aliquam diam lectus, id hendrerit odio aliquam quis. Maecenas scelerisque tortor nec felis laoreet accumsan. Aenean eu elit et justo ullamcorper egestas. Vivamus ac consequat sapien. Nunc elementum elit ac turpis luctus, ut sagittis arcu sagittis. Nulla dignissim ante a augue commodo ultrices. Integer dui urna, maximus id rhoncus id, mollis in felis. In ut tellus at libero rutrum iaculis ac a felis. Pellentesque fringilla velit magna. Pellentesque consectetur ac ligula et scelerisque. Curabitur feugiat purus suscipit felis euismod vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eget dignissim nunc. Nullam feugiat nunc id est euismod tempus.",
	logoUrl: Logo,
	social: {
		facebook: "https://facebook.com",
		instagram: "https://instagram.com",
		youtube: "https://youtube.com",
		email: "mailto:shedthestudio@gmail.com"
	},
	categories: {
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

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = displayContents;
	}

	render() {
		return (
			<div id="page-wrapper">
				<TopBar
					name={this.state.name}
					logoUrl={this.state.logoUrl}
					social={this.state.social}
					email={this.state.email}
				/>
				<div id="flex-wrapper">
					<HeroVideo src="https://res.cloudinary.com/dwtivbec9/video/upload/v1545041057/STORM_CONVERT_1_16_9_ASPECT_32MB.mp4" />
					<DescriptitionTextBox
						title="Introduction"
						text={this.state.description}
					/>
					<div id="gallery-container">
						{Object.keys(this.state.categories).map(category => {
							return (
								<Gallery
									key={category}
									category={category}
									urls={this.state.categories[category]["urls"]}
								/>
							);
						})}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
