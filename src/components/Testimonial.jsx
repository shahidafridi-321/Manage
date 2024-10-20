import React from "react";
import { TestimonialDiscrition } from "./TestimonialDiscrition";
import { TestimonialItems } from "./TestimonialItems";

export const Testimonial = () => {
	return (
		<section id="testimonial">
			<div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0 justify-between">
				<TestimonialDiscrition />  
        <TestimonialItems />        
			</div>
		</section>
	);
};
