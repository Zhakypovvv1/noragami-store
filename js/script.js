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

const informationApi = [
  {
    description:
      "Манга — японские комиксы, иногда называемые комикку. Манга в форме, в которой она существует в настоящее время, начала развиваться после окончания Второй мировой войны, испытав сильное влияние западных традиций. Однако манга имеет глубокие корни в раннем японском искусстве.",
  },
  {
    description:
      "Манхва  — корейские комиксы. Термин означает также анимационные мультфильмы, карикатуру, а за пределами Кореи обычно употребляется для обозначения исключительно корейских комиксов.",
  },
  {
    description:
      "Маньхуа — китайские комиксы. Под этим понятием объединяют все комиксы, выпущенные в Китае, а также переводы японской манги на китайский язык. Несмотря на значительный рост производства маньхуа в материковом Китае, большинство комиксов по-прежнему выпускаются на Тайване и в Гонконге.",
  },
  {
    description:
      "Ранобэ — разновидность популярной японской литературы различных жанров, отличающаяся преимущественно фэнтезийным сюжетом, обилием диалогов, иллюстрациями в стиле аниме и манги и ориентированная в основном на подростковую и юношескую аудиторию.",
  },
  {
    description:
      "Комикс — рисованная история, рассказ в картинках. Комикс сочетает в себе черты таких видов искусства, как литература и изобразительное искусство. Разновидность книжно-журнальной иллюстрации, иногда используется в печатных СМИ.",
  },
];

const burgerAccordions = document.querySelectorAll(".burger-accordion");

burgerAccordions.forEach((burgerAccordion, index) => {
  const AccContent = document.createElement("div");
  AccContent.className = "accordion__content";
  AccContent.style.display = "none";
  AccContent.innerHTML = `<p class="accordion-text">${informationApi[index].description}</p>`;
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
