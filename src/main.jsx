import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonial";
import { Managment } from "./components/Managment";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Nav />
		<Hero />
		<Testimonial />
		<Managment />
		<CTA />
		<Footer />
	</StrictMode>
);
