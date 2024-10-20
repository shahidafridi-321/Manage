import React from "react";

export const HumburgerBtn = () => {
	return (
		<button
			id="menu-btn"
			className="block hamburgur md:hidden focus:outline-none"
		>
			<span className="hamburgur-top"></span>
			<span className="hamburgur-middle"></span>
			<span className="hamburgur-bottom"></span>
		</button>
	);
};
