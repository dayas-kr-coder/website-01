const login = document.querySelector('.login');

login.addEventListener('click', () => {
  login.innerHTML = `<div class="profile">
  <img src="./images/dayas-kr.jpg" alt="" />
</div>`;
});

const burger = document.querySelector('.burger');
const navbarNav = document.querySelector('.navbar-nav');

burger.addEventListener('click', () => {
  navbarNav.classList.toggle('nav-active');
});
