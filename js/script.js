const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');

hamburgerBtn.addEventListener('click', () => {
  closeBtn.classList.remove('header__menu-btn--hide');
  hamburgerBtn.classList.add('header__menu-btn--hide');
  mobileNav.classList.remove('header__navbar--hide');
  mobileNav.classList.remove('animate__fadeOutRight');
  mobileNav.classList.add('animate__fadeInLeft');
});
closeBtn.addEventListener('click', () => {
  hamburgerBtn.classList.remove('header__menu-btn--hide');
  closeBtn.classList.add('header__menu-btn--hide');
  mobileNav.classList.add('animate__fadeOutRight');
  mobileNav.classList.remove('animate__fadeInLeft');
});
