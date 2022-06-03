// JavaScript Document
/*eslint-env es6*/

const tilTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1) {
    tilTop.classList.add("active");
  } else {
    tilTop.classList.remove("active");
  }
})