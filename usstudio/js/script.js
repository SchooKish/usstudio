function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

const swiper = new Swiper(".my-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-mybutton-next",
    prevEl: ".swiper-mybutton-prev",
  },
  breakpoints: {
    1171: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 4,
    },

    600: {
      slidesPerView: 3,
    },

    320: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
