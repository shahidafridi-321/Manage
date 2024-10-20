import React from "react";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Testimonial } from "../components/Testimonial";
import { Managment } from "../components/Managment";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export const Layout = () => {
	return (
		<>
			<Nav />
			<Hero />
			<Testimonial />
			<Managment />
			<CTA />
			<Footer />
		</>
	);
};
