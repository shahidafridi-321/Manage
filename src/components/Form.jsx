import React from "react";

export const Form = () => {
	return (
		<form className="flex space-x-3">
			<input
				type="text"
				className="flex-1 px-4 rounded-full focus:outline-none"
				placeholder="updates in your inbox"
			/>
			<button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-300 focus:outline-none">
				Go
			</button>
		</form>
	);
};
