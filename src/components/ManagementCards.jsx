import React from "react";
import { Discription } from "./Discription";
import { cardsItemsData } from "../data/data";

export const ManagementCards = () => {
	let cardsItemsList = cardsItemsData.map((item) => (
		<div
			className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-300 md:w-1/3"
			key={item.title}
		>
			<img className="w-16 -mt-14" src={item.imagePath} alt="" />
			<h5 className="text-lg font-bold"></h5>
			<Discription discription={item.discription} />
		</div>
	));
	return (
		<div className="flex flex-col space-y-12 mt-24 md:flex-row md:space-x-6 md:space-y-0">
			{cardsItemsList}
		</div>
	);
};
