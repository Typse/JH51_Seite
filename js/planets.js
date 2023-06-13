document.addEventListener("DOMContentLoaded", function() {
	const planetContainer = document.getElementById("planet-container");
	const dynamicStyle = document.getElementById("dynamic-style");

planetContainer.addEventListener("mouseover", function(event) {
	const planet = event.target.closest(".planet");
	if (planet) {
		const bgImage = planet.dataset.bgImage;
		dynamicStyle.textContent = `#background-planets { 
		background-image: url(${bgImage}); opacity: 1; 
		transition: opacity 0.3s ease-in-out;
		}`;
	}														// für Opacity müsste ein extra BG-DIV her :(
});
	
planetContainer.addEventListener("mouseout", function() {
	dynamicStyle.textContent = "";
	});
});
