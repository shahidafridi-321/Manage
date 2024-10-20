import React from "react";
import { FooterLogo } from "./FooterLogo";
import { SocialLinks } from "./SocialLinks";
import { Copyright } from "./Copyright";
import { Links } from "./Links";
import { Form } from "./Form";
import { linksListOne, linksListTwo } from "../data/data";

export const Footer = () => {
	return (
		<footer className="bg-gray-800">
			<div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
				<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col  md:items-start md:space-y-6">
					<Copyright />
					<FooterLogo />
					<SocialLinks />
				</div>

				<div className="flex justify-around space-x-32">
					<Links linksList={linksListOne} />
					<Links linksList={linksListTwo} />
				</div>

				<div className="flex flex-col justify-between">
					<Form />
				</div>
			</div>
		</footer>
	);
};
