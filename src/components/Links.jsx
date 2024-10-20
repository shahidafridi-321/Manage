import React from "react";

export const Links = ({ linksList }) => {
	let links = linksList.map((link) => (
		<a href="#" className="hover:text-red-300" key={link}>
			{link}
		</a>
	));
	return <div className="flex flex-col text-white space-y-3">{links}</div>;
};
