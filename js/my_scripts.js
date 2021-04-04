//?-----------------------//
//?---- User language ----//
//?-----------------------//
let userLang = navigator.userLanguage || navigator.language;
let lang = userLang.split("-", 1);
document.getElementById("userLang").innerHTML = lang;

//?-----------------------//
//?---- Smooth Scroll ----//
//?-----------------------//
$('a[href*="#"]').on("click", function (e) {
	e.preventDefault();

	$("html, body").animate(
		{
			scrollTop: $($(this).attr("href")).offset().top
		},
		500,
		"linear"
	);
});

//?----------------//
//?---- Loader ----//
//?----------------//
const progressBar = document.querySelector(".bar");
document.ready = () => {
	setTimeout(() => {
		progressBar.classList.add("active");
	}, 1000);
};
window.onload = () => {
	progressBar.style.width = "100%";
	setTimeout(() => {
		document.getElementById("pageLoader").classList.add("hidde");
	}, 1500);
};
