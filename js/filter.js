const manga = [
  {
    id: 1,
    name: "One Piece. Большой куш. Книга 18",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/21/gMrmowQVig3xlkvN8dCfr1vIjyjTypRZE46zXLZL-636x_.jpg.webp",
    price: 995,
  },
  {
    id: 2,
    name: "Моя геройская академия. Книга 18",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/21/U9f6rV3ZED9csJj80VGrBXFwBDPMQDFir5JAoCKW-636x_.jpg.webp",
    price: 840,
  },
  {
    id: 3,
    name: "Судзуки просто хочет жить спокойно. Том 1",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/16/jqzDCwoNn1FwZuuZSKeeDaYOyENBjEMdyX70CvAo-636x_.jpg.webp",
    price: 495,
  },
  {
    id: 4,
    name: "Как избавиться от 100 друзей. Том 2",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/25/gqQkU31sFmMw4TT8tYUZc31KonHbojSDSCdqT6v3-636x_.jpg.webp",
    price: 465,
  },
  {
    id: 5,
    name: "Истории сумочек",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/16/jqCPhEqhz5CenolswH405rELHpp2Q3SfEtXrKrgM-636x_.jpg.webp",
    price: 495,
  },
  {
    id: 6,
    name: "Гяру не могут быть добры к отаку?! Том 1",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/09/ISwPjI3sHDS7PbFQzOh7yUXgwjoEALJqfBat68pF-636x_.jpg.webp",
    price: 435,
  },
  {
    id: 7,
    name: "Семь смертных грехов. Том 9",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/20/rVLE4ANVL3AkSELW4mJtx8Oi9XBMXDXpbzHbZ5uz-636x_.jpg.webp",
    price: 770,
  },
  {
    id: 8,
    name: "Человек-бензопила. Книга 10. Закуска",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/kSXNvowwPOf9IvPopuIz5RKsiGVm66ehZnhZtQ2g-636x_.jpg.webp",
    price: 645,
  },
  {
    id: 9,
    name: "Сакура, собирательница карт. Том 5.",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/18/983Cj22dagWI67LpKbwm1eMyJM640l06C7b5I4Jm-636x_.jpg.webp",
    price: 735,
  },
  {
    id: 10,
    name: "Сакура, собирательница карт. Том 4",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/18/nec2nBpJmN2OLPmfrqNpliQQE69YBS43x4GEqUak-636x_.jpg.webp",
    price: 735,
  },
  {
    id: 11,
    name: "Сакура, собирательница карт. Том 3",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/18/ofbh6sndigUNFqDjkkKXNhbQx2QCGtd37LJVlD3n-636x_.jpg.webp",
    price: 735,
  },
  {
    id: 12,
    name: "Beastars. Выдающиеся звери. Бокс 3. (Том 8-11)",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/18/lm8pvuB52yAAlbCWmxe0dbywqcZpgummX2lzaqli-636x_.jpg.webp",
    price: 6305,
  },
  {
    id: 13,
    name: "Истории монстров. Том 18",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/16/IyW1iFhkYuLNnwhvsWKcEwEHJUC7ivUywayYZI1N-636x_.jpg.webp",
    price: 505,
  },
  {
    id: 14,
    name: "Истории монстров. Том 17",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/16/p5zaDaND2uWd8knT48yKLZPJigiScyaSmMF8JQyi-636x_.jpg.webp",
    price: 505,
  },
  {
    id: 15,
    name: "Истории монстров. Том 16",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/16/BtfZoXtyai1nYurs1cxlTOKJB5h4w8E2TteeKdZK-636x_.jpg.webp",
    price: 505,
  },
  {
    id: 16,
    name: "GTO. Крутой учитель Онидзука. Том 5",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/10/NR0n2gvHQp19BkeD2EqaUvHzbxt4dCHgDZZ7jhl7-636x_.jpg.webp",
    price: 1500,
  },
  {
    id: 17,
    name: "Beast Complex. Звериный комплекс. Том 3",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/29/qTxi2UOnGsOkBj4YVZBXugrVepRXToAReGoDkiso-636x_.png.webp",
    price: 755,
  },
  {
    id: 18,
    name: "Медалистка. Том 4",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/25/P3Mr9Gey0ipLh5uqBLQUc45oni7hcwhGe3XQ7d1n-636x_.jpg.webp",
    price: 675,
  },
  {
    id: 19,
    name: "Путешествие Кино. Том 3",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/11/RN8ekPfycOCBy6RifTCLJzNg1OEQbC9Vd2cVixTW-636x_.jpg.webp",
    price: 490,
  },
  {
    id: 20,
    name: "Путешествие Кино. Том 2",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/11/T4BXao8vve3RHQnxpKRRFTyrHW0RpvMVbz9fOg6o-636x_.jpg.webp",
    price: 490,
  },
  {
    id: 21,
    name: "Путешествие Кино. Том 1",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/11/J3A0X0gOJ0GJD86fSeAHsFgZWdNjdCMF9a0PO4vk-636x_.jpg.webp",
    price: 490,
  },
  {
    id: 22,
    name: "Я и недовольный монстрик",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/11/kZXgXP4uuRwU0ktZrL8Ucy1UIVDXocStfPyIl4UM-636x_.jpg.webp",
    price: 490,
  },
  {
    id: 23,
    name: "Я и маленький монстрик",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/11/6C6m9JipGgLJplIa3Df8uonDq40UZ4fC10wxJQ8c-636x_.jpg.webp",
    price: 490,
  },
  {
    id: 24,
    name: "Однажды я переродилась принцем севера. Том 1",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/07/SugjiR4StlCQ6mR1Ac3cPF6NtWWUPvRADX8eFspU-636x_.jpg.webp",
    price: 1460,
  },
  {
    id: 25,
    name: "Темный призыватель. Выпуск 1",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/27/cEesCDmo4oTOd0NZdqpScbf76EJjC0jflO5kXEeN-636x_.jpg.webp",
    price: 1425,
  },
  {
    id: 26,
    name: "Истории монстров. Том 14",
    img: "https://fast-anime.ru/storage/uploads/images/2024/01/29/Y5fh3NCgYwDSJb4e8znrBJWgYUYB91BsDgAr9uhJ-636x_.jpg.webp",
    price: 505,
  },
  {
    id: 27,
    name: "Истории монстров. Том 13",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/13/9svAaYAINBWUpZcagX3FsGUWWVoUknmpBI52tEVS-636x_.jpg.webp",
    price: 505,
  },
  {
    id: 28,
    name: "Старина. Том 3",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/30/jB5MZrfddD3lEofozqDcgOgtBfQZrVMM1j0rsAnC-636x_.jpg.webp",
    price: 890,
  },
  {
    id: 29,
    name: "Старина. Том 4",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/30/i6g0PBnuNl5w3sUqVh784VLwR40ZGkyNr0IJHzxQ-636x_.jpg.webp",
    price: 890,
  },
  {
    id: 30,
    name: "Магическая битва. Том 10",
    img: "https://fast-anime.ru/storage/uploads/images/2023/12/25/2cBD5YOmYSsQyaE1knKvDugdLA1fIXqccjCAHqEB-636x_.jpg.webp",
    price: 845,
  },
];

const logo = document.querySelector(".logo");
const link = document.querySelector(".pageBtn:nth-child(1)");
const mainContent = document.querySelector(".main-content");
const orderPage = document.querySelector(".order-page");


logo.addEventListener("click", (event) => {
  mainContent.classList.remove("mainContent__click");
  orderPage.classList.remove("order-page__click");
});

link.addEventListener("click", (event) => {
  mainContent.classList.add("mainContent__click");
  orderPage.classList.add("order-page__click");
});

const mangaCardBox = document.querySelector(".manga-order__box");
let uniquePrice = "all menu";

const renderPriceItem = (data) => {
  mangaCardBox.innerHTML = "";
  data.forEach((el) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("p");
    const price = document.createElement("span");
    const btn = document.createElement("button");
    price.textContent = `${el.price}р`;
    btn.textContent = "Предзаказ";
    image.src = el.img;
    title.innerHTML = `${el.name}`;
    card.className = "manga-card__order";

    card.append(image, title, price, btn);
    mangaCardBox.append(card);
  });
};
renderPriceItem(manga);

const priceFilter = document.querySelector("#priceFilter");


priceFilter.addEventListener("change", () => {
  const selectedPrice = parseInt(priceFilter.value);
  let filteredData;
  switch (selectedPrice) {
    case 500:
      filteredData = manga.filter((item) => item.price <= 500);
      break;
    case 1000:
      filteredData = manga.filter(
        (item) => item.price >= 0 && item.price < 1000
      );
      break;
    case 2000:
      filteredData = manga.filter(
        (item) => item.price >= 1000
      );
      break;
    default:
      filteredData = manga;
  }
  renderPriceItem(filteredData);
});

const mangaSearch = () => {
  const search = document.querySelector(".search-item");
  search.addEventListener("input", () => {
    const filteredData = manga.filter(
      (item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase()) &&
        (item.price === parseInt(uniquePrice) || uniquePrice === "all menu")
    );
    if (filteredData.length === 0) {
      return (mangaCardBox.innerHTML = "Товаров нет в базе");
    }
    renderPriceItem(filteredData);
  });
};
mangaSearch();

const clear = document.querySelector(".clear");

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  const search = document.querySelector(".search-item");
  search.value = "";
  priceFilter.value = "all menu";
  uniquePrice = "all menu";
  renderPriceItem(manga);
});
