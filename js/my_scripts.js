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
	if (progressBar) {
		progressBar.style.width = "100%";
		setTimeout(() => {
			document.getElementById("pageLoader").classList.add("hidde");
		}, 1500);
	} else {
		console.error("Loader error, doesn't exists");
	}
};

//?----------------------//
//?---- ScrollReavel ----//
//?----------------------//
ScrollReveal().reveal("main .meter span", {delay: 300});
ScrollReveal().reveal("section", {delay: 300});
ScrollReveal().reveal("main img", {delay: 300});
ScrollReveal().reveal("h1", {delay: 300});
ScrollReveal().reveal("h2", {delay: 300});
ScrollReveal().reveal("h3", {delay: 300});
ScrollReveal().reveal("h4", {delay: 300});
ScrollReveal().reveal("h5", {delay: 300});
ScrollReveal().reveal("h6", {delay: 300});
ScrollReveal().reveal("p", {delay: 300});
ScrollReveal().reveal("a", {delay: 300});

//?--------------------------------//
//?---- Progressbars Animation ----//
//?--------------------------------//
$(window).on("scroll", function () {
	let list = document.querySelectorAll("main .meter span");
	for (var i = 0; i < list.length; ++i) {
		let opa = document.querySelectorAll("main .meter span")[i];
		let bar = document.querySelectorAll("main .meter span")[i];

		if (opa == 1) {
			if (bar.style.opacity > 0) {
				bar.classList.remove("active");
			} else {
				bar.classList.add("active");
			}
		} else {
			if (bar.style.opacity > 0) {
				bar.classList.remove("active");
			} else {
				bar.classList.add("active");
			}
		}
	}
});
