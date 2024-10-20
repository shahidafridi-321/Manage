import React from "react";
import { GetStartedBtn } from "./GetStartedBtn";

export const HeroSectionDiscription = () => {
	return (
		<div className="mb-32 flex flex-col space-y-12  max-w-1/2">
			<h1 className="max-w-md text-4xl text-bold text-center md:text-left md:text-5xl">
				Bring everyone togather to build better products
			</h1>
			<p className="text-gray-600 text-center max-w-sm">
				Manages makes it simple for software team to build day-to-day products
				while keeping the larger team goals in view.
			</p>
			<div className="flex justify-center md:justify-start">
				<GetStartedBtn />
			</div>
		</div>
	);
};
