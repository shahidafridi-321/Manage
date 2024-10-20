import React from "react";
import { NavItems } from "./NavItems";
import { Logo } from "./Logo";
import { GetStartedBtn } from "./GetStartedBtn";
import { HumburgerBtn } from "./Humburger-btn";
import { HamburgurMenu } from "./HamburgurMenu";

export const Nav = () => {
	return (
		<nav className="container relative mx-auto p-6">
			<div className="flex items-center justify-between">
				<Logo />
				<NavItems />
				<HumburgerBtn />
			</div>
			<div className="md:hidden">
				<HamburgurMenu />
			</div>
		</nav>
	);
};
