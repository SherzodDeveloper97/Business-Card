"use strict";


// Selectors:
const body = document.querySelector("body");
const sunBtn = document.getElementById("sun");
const moonBtn = document.getElementById("moon");
const figure = document.querySelector(".accaunt_info");
const figureItem = document.querySelector(".accaunt_info .triangle");


// add particles.js file -> by createElement
const winterStartDate = new Date().getDate();
const winterStartMonth = new Date().getMonth() + 1;
const winterHour = new Date().getHours();
const winterMinute = new Date().getMinutes();
console.log(winterHour);
console.log(winterMinute);

console.log(winterStartDate);
console.log(winterStartMonth);

function snowFunc() {
  const snowEffect = document.createElement("script");
  snowEffect.src = "js/particles.js";
  snowEffect.async = true;
  
  
  body.appendChild(snowEffect);
}

if(winterStartDate <= 31 && (winterStartMonth == 1 || winterStartMonth == 2 || winterStartMonth == 12) ){
  snowFunc();
}else {
  const scriptTag = document.querySelector('script[src="js/particles.js"]');

  if(scriptTag){
    scriptTag.remove();
  }
}


// EventListener:
moonBtn.addEventListener("click", darkMode);
sunBtn.addEventListener("click", lightMode);

// Functions:
function darkMode() {
  body.className = "dark";
  body.classList.add("dark-color");
  if (sunBtn.className == "bx bxs-sun") {
    sunBtn.className = "bx bx-sun";
  }
  if (moonBtn.className == "bx bx-moon") {
    moonBtn.className = "bx bxs-moon";
  }
  figure.classList.add("active");
}

function lightMode() {
  body.className = "light";
  if (sunBtn.className == "bx bx-sun") {
    sunBtn.className = "bx bxs-sun";
  }
  if (moonBtn.className == "bx bxs-moon") {
    moonBtn.className = "bx bx-moon";
  }
  figure.classList.remove("active");
}

