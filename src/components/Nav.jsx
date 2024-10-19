import React from "react";
import { NavItems } from "./NavItems";
import { Logo } from "./Logo";
import { GetStartedBtn } from "./GetStartedBtn";

export const Nav = () => {
	return (
		<nav className="container relative mx-auto p-6">
			<div className="flex items-center justify-between">
				<Logo />
				<NavItems />
        <GetStartedBtn/>
			</div>
		</nav>
	);
};
