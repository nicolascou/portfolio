const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');
const navBar = document.getElementById('navBar');

hamburgerBtn.addEventListener('click', () => {
  closeBtn.classList.remove('header__menu-btn--hide');
  hamburgerBtn.classList.add('header__menu-btn--hide');
  navBar.classList.remove('header__navbar--hide');
  navBar.classList.remove('animate__fadeOutRight');
  navBar.classList.add('animate__fadeInLeft');
});
closeBtn.addEventListener('click', () => {
  hamburgerBtn.classList.remove('header__menu-btn--hide');
  closeBtn.classList.add('header__menu-btn--hide');
  navBar.classList.add('animate__fadeOutRight');
  navBar.classList.remove('animate__fadeInLeft');
});

const media = matchMedia('(min-width: 1000px)');
media.addEventListener('change', resizeScreen);

function resizeScreen() {
  if (window.matchMedia("(min-width: 1000px)").matches) {
    navBar.classList.remove('animate__animated');
  } else {
    navBar.classList.add('animate__animated');
  }
}

const navItems = document.querySelectorAll('.header__navbar__item');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const targetId = item.getAttribute('name');
    const targetSection = document.getElementById(targetId);

    navItems.forEach((navLink) => {
      navLink.classList.remove('header__navbar__item--active');
    });

    item.classList.add('header__navbar__item--active');

    console.log(targetSection)
    window.scrollTo({
      behavior: 'smooth',
      top: targetSection.getBoundingClientRect().top  + window.pageYOffset - 100
    });
  });
});