const burger = document.querySelector(".burger");
const navbarNav = document.querySelector(".navbar-nav");

burger.addEventListener("click", () => {
  navbarNav.classList.toggle("nav-active");
});
