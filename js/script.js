"use strict";

// Selectors:
const body = document.querySelector("body");
const sunBtn = document.getElementById("sun");
const moonBtn = document.getElementById("moon");
const figure = document.querySelector(".accaunt_info");
const figureItem = document.querySelector(".accaunt_info .triangle");

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
