import React from "react";
import SideBarItem from "./sideBarItem";
import { default as Logo1 } from "../assets/WhiteLogo.png";
import { default as Logo2 } from "../assets/BlackLogo.jpg";
import ChangingLogo from "./changingLogo";

const contentStyle = {
	width: "14em",
	height: "30em",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
	alignItems: "center"
};

const sideBarStyle = {
	height: "100vh",
	width: "20vw",
	paddingTop: "3em",
	position: "fixed",
	zIndex: "100",
	left: "0px",
	top: "0px"
};

export default function SideBar(props) {
	console.log(props.sections);
	return (
		<div id="sideBar" style={sideBarStyle}>
			<div className="content" style={contentStyle}>
				<ChangingLogo logo1={Logo1} logo2={Logo2} threshold={props.threshold} />
				{props.sections.map(section => {
					return (
						<SideBarItem
							title={section}
							threshold={props.threshold}
							key={section}
						/>
					);
				})}
			</div>
		</div>
	);
}
