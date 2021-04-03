//?-----------------------//
//?---- User language ----//
//?-----------------------//
let userLang = navigator.userLanguage || navigator.language;
let lang = userLang.split("-", 1);
document.getElementById("userLang").innerHTML = lang;
