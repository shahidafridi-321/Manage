import React from "react";
import { HeroSectionDiscription } from "./HeroSectionDiscription";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
	return (
		<section id="hero">
			<div className="container flex flex-col-reverse mx-auto md:flex-row mt-10 space-y-0 px-6 items-center justify-between">
				<HeroSectionDiscription />
				<HeroImage />
			</div>
		</section>
	);
};
