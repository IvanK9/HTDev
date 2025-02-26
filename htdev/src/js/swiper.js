const mediaQueryS = window.matchMedia("(max-width: 700px)");

// import Swiper from "swiper";
import Swiper from 'swiper/bundle';
import "swiper/css/bundle";

function getAdvantagesSwiper() {
  new Swiper(".advantages__box", {
    // direction: "horizontal",
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 25,

    pagination: {
      el: ".advantages__pagination",
      clickable: "true",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // breakpoints: {
    //   0: {
    //     spaceBetween: 25,
    //   },

    //   700: {
    //     slidesPerView: 2,
    //     spaceBetween: 0,
    //   },
    // },
  });
}

function getDuffbeersSwiper() {
  console.log("Ok");
  new Swiper(".duffbeer__box", {
    // direction: "horizontal",
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 25,

    pagination: {
      el: ".duffbeer__pagination",
      clickable: "true",
    },

    navigation: {
      nextEl: ".duffbeer__btn--next",
      prevEl: ".duffbeer__btn--prev",
    },

    // breakpoints: {
    //   0: {
    //     spaceBetween: 25,
    //   },

    //   700: {
    //     slidesPerView: 2,
    //     spaceBetween: 0,
    //   },
    // },
  });
}

mediaQueryS.addEventListener("change", getAdvantagesSwiper);
mediaQueryS.addEventListener("change", getDuffbeersSwiper);
