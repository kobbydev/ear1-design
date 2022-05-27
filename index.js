document.getElementById("menu-button").addEventListener("click", function () {
	document.querySelector(".navbar-links").style.display = "block";
	document.querySelector(".close").style.display = "block";
});
document.querySelector(".close").addEventListener("click", function () {
	document.querySelector(".navbar-links").style.display = "none";
});
