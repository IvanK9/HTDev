const mediaQueryS = window.matchMedia("(max-width: 1019px)");

// import Swiper from "swiper";
import Swiper from 'swiper/bundle';
import "swiper/css/bundle";

function getAdvantagesSwiper() {
  const advantagesSlider = new Swiper(".advantages__box", {
    slidesPerView: 2,
    width: 545,
    spaceBetween: 25,

    pagination: {
      el: ".advantages__pagination",
      clickable: "true",
    },

    navigation: {
      nextEl: ".advantages__btn--next",
      prevEl: ".advantages__btn--prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        width: null,
        spaceBetween: 25,
      },

      700: {
        slidesPerView: 2,
        width: 545,
        spaceBetween: 25,
      },
    },
  });
}

function getDuffbeersSwiper() {
  const duffbeerSlider =  new Swiper(".duffbeer__box", {
    slidesPerView: 2,
    width: 545,
    spaceBetween: 25,

    pagination: {
      el: ".duffbeer__pagination",
      clickable: "true",
    },

    navigation: {
      nextEl: ".duffbeer__btn--next",
      prevEl: ".duffbeer__btn--prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        width: null,
        spaceBetween: 25,
      },

      700: {
        slidesPerView: 2,
        width: 545,
        spaceBetween: 25,
      },
    },
  });
}

mediaQueryS.addEventListener("change", getAdvantagesSwiper);
mediaQueryS.addEventListener("change", getDuffbeersSwiper);
