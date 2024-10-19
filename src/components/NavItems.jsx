import React from "react";
import { navItems } from "../data/data";


export const NavItems = () => {
	let navItemList = navItems.map((item) => (
		<a href="#" className="hover:text-blue-500" key={item}>
			{item}
		</a>
	));
	return <div className="hidden space-x-6 md:flex">{navItemList}</div>;
};
