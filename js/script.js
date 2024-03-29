//burger
const catalog = document.querySelector(".catalog");
const burgerIcon = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const burgerLink = document.querySelector(".burger-item");
const burgerImg = document.querySelector(".burger-img");

catalog.addEventListener("click", () => {
  burgerMenu.classList.toggle("burgerClick");
  burgerIcon.classList.toggle("icon");
  burgerImg.classList.toggle("burgerImgContent");
});
//burger

// accordion
const burgerAccordions = document.querySelectorAll(".burger-accordion");

burgerAccordions.forEach((burgerAccordion) => {
  const AccName = burgerAccordion.querySelector(".burger-item");
  const AccContent = document.createElement("div");
  AccContent.className = "accordion__content";
  AccContent.style.display = 'none'
  AccContent.innerHTML = `<p class="accordion-text">Some content for ${AccName.textContent}</p>`;
  burgerAccordion.appendChild(AccContent);

  burgerAccordion.addEventListener("click", () => {
    burgerAccordions.forEach((el) => {
      if (el !== burgerAccordion) {
        const content = el.querySelector(".accordion__content");
        content.style.display = "none";
        el.classList.remove("accordion__active");
      }
    });

    const content = burgerAccordion.querySelector(".accordion__content");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    burgerAccordion.classList.toggle("accordion__active");
  });
});
// accordion

//swiper main layout

const swiper = new Swiper(".swipe", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,

  autoplay: {
    delay: 5000,
  },
});
//swiper main layout

//catalog swiper

const swiperContent = new Swiper(".wrap-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

const newSwiperContent = new Swiper(".newSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 1,
    },
  },
});

//catalog swiper
