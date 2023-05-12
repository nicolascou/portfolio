new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.section__card__slider__next',
    prevEl: '.section__card__slider__prev',
  }
});