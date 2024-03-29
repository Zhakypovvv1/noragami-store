const posterApi = [
  {
    id: 1,
    name: "Плакат Песнь ночных сов",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/22/tTXQSCXKPukdEg0ePsV6cGnWw5TsRpfekJ1eFrPx-636x_.jpg.webp",
    price: 200,
    category: "Романтика",
  },
  {
    id: 2,
    name: "Плакат Адский рай",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/22/JiY7iFRpaLlJxNB4Dti4ho8BxD8387ymdzFaEshj-636x_.jpg.webp",
    price: 200,
    category: "Сенён",
  },
  {
    id: 3,
    name: "Плакат Восхождение в тени",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/22/bA7W6fjdsKmZUzf7dS91s34edEGb6MU63iCIEvzJ-636x_.jpg.webp",
    price: 200,
    category: "Комедия",
  },
  {
    id: 4,
    name: "Плакат Сто девушек, которые очень-очень-очень-очень-очень тебя любят",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/22/Y2r5jizzEYAAp8E5vZkofVz7p7sl3c1MnhzBZWLe-636x_.jpg.webp",
    price: 200,
    category: "Романтика",
  },
  {
    id: 5,
    name: "Плакат Монстр",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/Y7G453fzti26eRLHAvaeRArLAm7hHEXfJVya7gqC-636x_.jpg.webp",
    price: 200,
    category: "Психика",
  },
  {
    id: 6,
    name: "Плакат Ахерон",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/BoK04bIy6Ws4T4tjzpSahHbKzF38w5g6E0f6F8Hs-636x_.jpg.webp",
    price: 200,
    category: "Приключение",
  },
  {
    id: 7,
    name: "Плакат Zenless Zone Zero",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/uZI8i2ikkqIcDVg1BNq4raKQlurCnkuk9srQIsCO-636x_.jpg.webp",
    price: 200,
    category: "Комедия",
  },
  {
    id: 8,
    name: "Плакат Дандадан",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/0ry1FGVfhQRnVeHIxDh7trZXPNLzacolczrRHPCT-636x_.jpg.webp",
    price: 200,
    category: "Комедия",
  },
  {
    id: 9,
    name: "Плакат Нежить и Неудача",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/sr7mTfhha8N3JKbluGHIGDjuUin51CnqHVRnR41S-636x_.jpg.webp",
    price: 200,
    category: "Комедия",
  },
  {
    id: 10,
    name: "Плакат Клинок, рассекающий демонов",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/DswjReB3cPMhxCzKmgT74SAmlUivh609NH5JW3Jv-636x_.jpg.webp",
    price: 200,
    category: "Сенён",
  },
  {
    id: 11,
    name: "Плакат Авантюрин",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/14/YUNHTcO6JBPH14iUXRx8a0OiCurxudSIoJvMGpuR-636x_.jpg.webp",
    price: 200,
    category: "Детектив",
  },
  {
    id: 12,
    name: "Плакат Пожиратель Луны",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/14/YWUC2L5dyemU9NsvJ8gSPVtLjdyABxxHw35TTkH2-636x_.jpg.webp",
    price: 200,
    category: "Приключение",
  },
  {
    id: 13,
    name: "Плакат Wind Breaker",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/14/LtWERNjLpBOWyHFhdnOxn2JV6zKbI3GC0Kj1hbvr-636x_.jpg.webp",
    price: 200,
    category: "Комедия",
  },
  {
    id: 14,
    name: "Плакат Haikyuu!!",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/14/uT6bTx15srIazMybr4tEO4k6IpCZqEOfHJehbcJR-636x_.jpg.webp",
    price: 200,
    category: "Спорт",
  },
  {
    id: 15,
    name: "Плакат Project SEKAI: Colorful Stage",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/14/h139AdqA6O0hSdHAhlWEoS11KE0sVJNHkReZo4bW-636x_.jpg.webp",
    price: 200,
    category: "Исекай",
  },
  {
    id: 16,
    name: "Плакат О моём перерождении в слизь",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/14/qUVDbwGOOe76ggm3RwZKpqq3HoKPobZTCnNdAtKZ-636x_.jpg.webp",
    price: 200,
    category: "Исекай",
  },
  {
    id: 17,
    name: "Плакат Kaiju No.",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/06/Lq4qKU8V937ncce921KyHdzS1nRseDvBAT1x1o2g-636x_.jpg.webp",
    price: 200,
    category: "Ужасы",
  },
  {
    id: 18,
    name: "Плакат Хоро",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/06/QOD3X6sh6OsuQ2Ch7oy6pQz3mfRdC7gj07h8FwWH-636x_.jpg.webp",
    price: 200,
    category: "Романтика",
  },
  {
    id: 19,
    name: "Плакат NieR:Automata Ver1.1a",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/28/el6YBTkMTmvujiRyxKoFlZb2WfpMcI7EGC1QwaWb-636x_.jpg.webp",
    price: 200,
    category: "Меха",
  },
  {
    id: 20,
    name: "Плакат Сатору Годзё",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/06/jJMfZxfh4SK2tYVBg8cWQHsochVkVUtwBQmrWn5F-636x_.jpg.webp",
    price: 200,
    category: "Сенён",
  },
];

const posterLink = document.querySelector(".pageBtn:nth-child(2)");
const posterLogo = document.querySelector(".logo");
const mainPostContent = document.querySelector(".main-content");
const posterPage = document.querySelector(".poster-page");

posterLogo.addEventListener("click", (event) => {
  mainPostContent.classList.remove("mainContent__click");
  posterPage.classList.remove("poster-page__click");
});

posterLink.addEventListener("click", (event) => {
  mainContent.classList.add("mainContent__click");
  posterPage.classList.add("poster-page__click");
});

const posterCardBox = document.querySelector(".poster-page__box");
let uniqueName = "all menu";
let uniquesCategory = "Все жанры";

const renderPosterItem = (data) => {
  posterCardBox.innerHTML = "";
  data.forEach((el) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("p");
    const price = document.createElement("span");
    const btns = document.createElement("button");
    price.textContent = `${el.price}р`;
    btns.textContent = "Предзаказ";
    image.src = el.img;
    title.innerHTML = `${el.name}`;
    card.className = "poster-card__order";

    card.append(image, title, price, btns);
    posterCardBox.append(card);
  });
};
renderPosterItem(posterApi);

const renderButtons = () => {
  const btnwrap = document.querySelector(".btnwrap");
  const btnsData = posterApi.reduce(
    (acc, rec) => {
      const category = rec.category;
      if (acc.indexOf(category) === -1) {
        return [...acc, category];
      }
      return acc;
    },
    ["Все жанры"]
  );

  btnsData.forEach((el, index) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = el;

    if (index === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      uniquesCategory = el;
      const filteredData = posterApi.filter((item) => item.category === el);
      const checkData = filteredData.length > 0 ? filteredData : posterApi;
      renderPosterItem(checkData);
      const allBtns = document.querySelectorAll(".btn");
      allBtns.forEach((el, indexChild) => {
        if (index === indexChild) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    });
    btnwrap.append(btn);
  });
};
renderButtons();

const posterSearch = () => {
  const search = document.querySelector(".search-poster");
  search.addEventListener("input", () => {
    const filteredData = posterApi.filter(
      (item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase()) &&
        (item.price === uniqueName || uniqueName === "all menu")
    );
    if (filteredData.length === 0) {
      return (posterCardBox.innerHTML = "Товаров нет в базе");
    }
    renderPosterItem(filteredData);
  });
};
posterSearch();

const clearBtn = document.querySelector(".clearContent");

clearButton.addEventListener("click", () => {
  const search = document.querySelector(".search-poster");
  search.value = "";
  uniqueName = "all menu";
  renderPosterItem(posterApi);
});
