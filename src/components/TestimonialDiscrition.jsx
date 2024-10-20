import React from "react";
import { Discription } from "./Discription";
import { testimonialDiscription } from "../data/data";

export const TestimonialDiscrition = () => {
	return (
		<div className="flex flex-col space-y-12 max-w-1/2">
			<h2 className="max-w-md text-center text-4xl font-bold md:text-left">
				What&apos;s different about Manage?
			</h2>
			<Discription discription={testimonialDiscription} />
		</div>
	);
};
