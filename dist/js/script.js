const burgerBtn = document.querySelector(".header__burger");
const menu = document.querySelector(".header__links");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("open");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");
});
