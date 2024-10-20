import React from "react";
import { GetStartedBtn } from "./GetStartedBtn";

export const CTA = () => {
	return (
		<section id="cta" className="bg-red-400 px-9">
			<div className="flex flex-col items-center justify-between  mt-24 py-24 mx-auto space-y-12 md:flex-row md:space-y-0 md:py-12">
				<h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
					Simplify how your team works today
				</h2>
				<div>
					<GetStartedBtn />
				</div>
			</div>
		</section>
	);
};
