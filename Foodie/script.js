const burgerIcon = document.querySelector(".menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const go_to = document.querySelector(".go-to-top");
const main = document.querySelector(".main-content");
const logo = document.querySelector(".logo");

burgerIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContent.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

window.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});

go_to.addEventListener("click", () => {
  main.scrollTo(0, 0);
});

logo.addEventListener("click", () => {
  main.scrollTo(0, 0);
});
