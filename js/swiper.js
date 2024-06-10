var swiper = new Swiper(".swiper-container", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

var prevButtons = document.querySelectorAll("#prevSlide");
var nextButtons = document.querySelectorAll("#nextSlide");

prevButtons.forEach(function (prevButton) {
  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });
});

nextButtons.forEach(function (nextButton) {
  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });
});
