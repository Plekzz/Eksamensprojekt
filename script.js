// JavaScript Document

const toTop = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 20) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})