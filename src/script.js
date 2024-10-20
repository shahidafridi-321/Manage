document.addEventListener("DOMContentLoaded", () => {
	let btn = document.getElementById("menu-btn");
	let nav = document.getElementById("menu");

	if (btn && nav) {
		btn.addEventListener("click", () => {
			btn.classList.toggle("open");
			nav.classList.toggle("flex");
			nav.classList.toggle("hidden");
		});
	}
});
