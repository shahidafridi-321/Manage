import React from "react";
import { ManagementCards } from "./ManagementCards";

export const Managment = () => {
	return (
		<section id="management">
			<div className="max-w-6xl px-5 mx-auto mt-32 text-center">
				<h2 className="text-4xl font-bold text-center">
					What&apos;s Different About Manage?
				</h2>
				<ManagementCards />
			</div>
		</section>
	);
};
