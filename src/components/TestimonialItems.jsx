import React from "react";
import { testimonialDiscriptionItemsData } from "../data/data";
import { Discription } from "./Discription";
export const TestimonialItems = () => {
	let listItems = testimonialDiscriptionItemsData.map((item) => (
		<div
			className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0 "
			key={item.number}
		>
			<div className="rounded-l-full bg-red-300 md:bg-transparent">
				<div className="flex items-center space-x-2">
					<div className="rounded-full bg-red-500 px-4 py-2 text-white md:py-1">
						{item.number}
					</div>
					<h3 className="text-base font-bold md:hidden">{item.title}</h3>
				</div>
			</div>
			<div>
				<h3 className="md-4 hidden text-lg font-bold md:block">{item.title}</h3>
				<Discription discription={item.discription} />
			</div>
		</div>
	));
	return <div className="flex flex-col space-y-8 md:w-1/2">{listItems}</div>;
};
