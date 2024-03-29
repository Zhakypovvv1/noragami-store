const comicsApi = [
  {
    id: 1,
    name: "The Boys: Пацаны. Том 9. Лихая поездка",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/02/3egy5vdWKjnCllhA5uLtt4Go75Xe1pLEghAAxLzR-636x_.jpg.webp",
    price: 1200,
    category: "Фантастика",
  },
  {
    id: 2,
    name: "«Росомаха» Грега Раки. Полное издание",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/05/3iszzZLBKLcmsutyd1E2vYKOVSac17J2Y5xSblsf-636x_.jpg.webp",
    price: 2620,
    category: "Боевик",
  },
  {
    id: 3,
    name: "Закон Сансары. Том 2",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/01/oW4KvkUotG0LpkBGh376OXEOHTAGwjrblE6Z4I7C-636x_.jpg.webp",
    price: 770,
    category: "Приключения",
  },
  {
    id: 4,
    name: "Древние комиксы. Каспер – дружелюбное привидение",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/23/x3A7lWrB0uokC7dOTARWtKP7FsosYwWSdWB0DKu2-636x_.jpg.webp",
    price: 224,
    category: "Фантастика",
  },
  {
    id: 5,
    name: "Древние комиксы. Каспер – дружелюбное привидени",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/23/Hp77EicSsIJwCM8MLJxiCmOzvfCHCcUgkn1Bw5EC-636x_.jpg.webp",
    price: 186,
    category: "Фантастика",
  },
  {
    id: 6,
    name: "Древние комиксы. Призрачный всадник",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/23/ozZQ7K8qlkZf3o9NuIUHEuQ1qjVMzQnTeSld4JxR-636x_.jpg.webp",
    price: 186,
    category: "Приключение",
  },
  {
    id: 7,
    name: "Майлз Моралес: Человек-паук. Дела семейные. Том 3",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/19/DggxXuXzqV1XoOVR2BLCZmoywiSylgikNeV7mjHR-636x_.jpg.webp",
    price: 448,
    category: "Боевик",
  },
  {
    id: 8,
    name: "Фанки Фунги",
    img: "https://fast-anime.ru/storage/uploads/products/17819/2021/08/04/v5OR14HV1ph9p8eawFqM2sepS3WVI4tvfFSBadks-636x_.jpeg.webp",
    price: 634,
    category: "Роман",
  },
  {
    id: 9,
    name: "Что если?. . Железный человек проиграл войны брони",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/27/1jVtsXWaTgcmDQ4wV4e7RLn7h6pfFjgjmenEv5ue-636x_.jpg.webp",
    price: 175,
    category: "Боевик",
  },
  {
    id: 10,
    name: "Ариоль. Танцуют все! (твердый переплет)",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/26/M2DWcEbugSPxcpxccYBYMCYojJ0Cstbuoa2ayDVe-636x_.jpg.webp",
    price: 553,
    category: "Комедия",
  },
  {
    id: 11,
    name: "«Призрачный Гонщик» Гарта Энниса",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/26/liB4fWQcDHyfrGPxF2nA1RiSAI3nyhomWOZr3IVp-636x_.jpg.webp",
    price: 1463,
    category: "Боевик",
  },
  {
    id: 12,
    name: "Древние Комиксы. Дятел Вуди. Весы фортуны",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/06/QVmoK2tDs3GrK0idHzv1GtvNHZ7TlDIEP1IdJQio-636x_.jpg.webp",
    price: 186,
    category: "Комедия",
  },
  {
    id: 13,
    name: "Древние Комиксы. Дятел Вуди. Гнев Дятла",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/06/bmj0G3luEQ2VHkJNNwZ3XTyt09CsNwAC4JO1eqsH-636x_.jpg.webp",
    price: 186,
    category: "Комедия",
  },
  {
    id: 14,
    name: "Закон Сансары. Том 1",
    img: "https://fast-anime.ru/storage/uploads/images/2023/11/14/KA26oaDNJbF59kwBYMmAOFB4nQFiwuFbA7P8U6w4-636x_.jpg.webp",
    price: 840,
    category: "Приключения",
  },
  {
    id: 15,
    name: "Назад в будущее. По мотивам легендарного фильма Роберта Земекиса и Боба Гейла",
    img: "https://fast-anime.ru/storage/uploads/products/21345/2021/08/04/2o4G97hCHE6ak1KaKup5DMFZHqFqIaq7BnzQkNdK-636x_.jpeg.webp",
    price: 277,
    category: "Фантастика",
  },
  {
    id: 16,
    name: "Меня это не устраивает",
    img: "https://fast-anime.ru/storage/uploads/products/20983/2021/08/04/n2x1vaGAIsKKGme6iwpbZDlHVG82FuqPdYVR6evk-636x_.jpeg.webp",
    price: 301,
    category: "Драма",
  },
  {
    id: 17,
    name: "Комикс-погружение",
    img: "https://fast-anime.ru/storage/uploads/images/2023/11/16/Ic9uO3AhKHqQVaMOZ83EG6CLOWyxrer5ObmGAyA7-636x_.jpg.webp",
    price: 385,
    category: "Приключения",
  },
  {
    id: 18,
    name: "Снег, зеркало, яблоки",
    img: "https://fast-anime.ru/storage/uploads/products/20808/2021/08/04/Lj3RjcZNaEozYm8cgHWcuuSjdY7X7nePAMQeBqWR-636x_.jpeg.webp",
    price: 427,
    category: "Фэнтэзи",
  },
  {
    id: 19,
    name: "Марья Моревна. Том 1",
    img: "https://fast-anime.ru/storage/uploads/images/2023/10/24/jw6mMVjQ1i2G9YRPYA4kVLolnQzG6NFXuXXf6DrQ-636x_.jpg.webp",
    price: 770,
    category: "Фэнтэзи",
  },
  {
    id: 20,
    name: "Энциклопедия DC Comics. Хроники. Год за годом",
    img: "https://fast-anime.ru/storage/uploads/products/18654/2021/08/04/ckw6ImUVsx1puS09TipBoLnc6FFpSw29tZUKWkfv-636x_.jpeg.webp",
    price: 2716,
    category: "Сенён",
  },
];

const comicsLink = document.querySelector(".pageBtn:nth-child(3)");
const comicsLogo = document.querySelector(".logo");
const mainComicsContent = document.querySelector(".main-content");
const comicsPage = document.querySelector(".comics-page");

comicsLogo.addEventListener("click", (event) => {
  mainComicsContent.classList.remove("mainContent__click");
  comicsPage.classList.remove("comics-page__click");
});

comicsLink.addEventListener("click", (event) => {
  mainComicsContent.classList.add("mainContent__click");
  comicsPage.classList.add("comics-page__click");
});

const comicsCardBox = document.querySelector(".comics-page__box");
const favoriteItemsBox = document.querySelector(".favorite-items");



const renderFavoriteItem = (item) => {
  favoriteItemsBox.innerHTML = "";
  const card = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("p");
  const price = document.createElement("span");
  price.textContent = `${item.price}р`;
  image.src = item.img;
  title.innerHTML = `${item.name}`;
  card.className = "comics-card__order";
  card.append(image, title, price);
  favoriteItemsBox.append(card);
};

const renderComicsItems = (data) => {
  comicsCardBox.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("p");
    const price = document.createElement("span");
    const btns = document.createElement("button");
    price.textContent = `${item.price}р`;
    btns.textContent = "Предзаказ";
    image.src = item.img;
    title.innerHTML = `${item.name}`;
    card.className = "comics-card__order";

    card.addEventListener("click", () => {
      renderFavoriteItem(item);
    });

    card.append(image, title, price, btns);
    comicsCardBox.append(card);
  });
};

renderComicsItems(comicsApi);
