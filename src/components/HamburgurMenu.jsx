import React from "react";

function HumburgerLinks() {
	let itemsList = ["Pricing", "Product", "About us", "Careers", "Community"];
	let links = itemsList.map((link) => (
		<a href="#" key={link}>
			{link}
		</a>
	));

	return <>{links}</>;
}
export const HamburgurMenu = () => {
	return (
		<div
			id="menu"
			className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
		>
			<HumburgerLinks />
		</div>
	);
};
