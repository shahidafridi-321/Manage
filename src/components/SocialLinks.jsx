import React from "react";
import { socialLinksData } from "../data/data";

export const SocialLinks = () => {
	let socialLinksList = socialLinksData.map((link, index) => (
		<a href="#" key={index}>
			<img src={link} alt="" className="h-8" />
		</a>
	));
	return <div className="flex justify-center space-x-4">{socialLinksList}</div>;
};
