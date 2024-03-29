const dataApi = [
  {
    name: "Манга",
    img: "https://fast-anime.ru/storage/uploads/products/28078/2021/08/04/fr819PbsRddesuIYjLMsd3X9xTD1Px1yyQoKxNaK-636x_.jpeg.webp",
    category: "manga",
  },
  {
    name: "Маньхуа",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/19/743lSnqGIjiRhjug9wWE0PXDuponTw87r8UABNP0-636x_.jpg.webp",
    category: "manhua",
  },
  {
    name: "Манхва",
    img: "https://fast-anime.ru/storage/uploads/products/53977/2021/11/12/anDxvw2l6tjEARSoVM6MWXshYixlrr57HQ3cKeIS-408x_.jpeg.webp",
    category: "manhva",
  },
  {
    name: "Ранобэ",
    img: "https://fast-anime.ru/storage/uploads/images/2023/08/31/ksX8fcwFMYU8wqd6VlOjwbwep53NPcM9PI7s2zaL-636x_.jpg.webp",
    category: "ranobe",
  },
  {
    name: "Комиксы",
    img: "https://fast-anime.ru/storage/uploads/images/2023/10/10/ejolm1nhdAJqtifDans2xqDWt7WBBmqvVfGRFsQx-636x_.jpg.webp",
    category: "comics",
  },
  {
    name: "Фигурки",
    img: "https://fast-anime.ru/storage/uploads/images/2023/10/19/9OrNMdq8G4SZ5Za9MjdqwF6HaakubgG9bhNFhKfp-636x_.png.webp",
    category: "figure",
  },
  {
    name: "Pop Up Parade",
    img: "https://fast-anime.ru/storage/uploads/products/54384/2021/11/12/RorMDjmkrSV7EaWlGdW5P81bJGDv1AMQuqp3XfuV-636x_.jpeg.webp",
    category: "pop up",
  },
  {
    name: "Nendoroid",
    img: "https://fast-anime.ru/storage/uploads/images/2023/07/05/jGg0sRaRLXYqNKmYjOC1ftRCbCxIMs6hYtluz6Kd-636x_.jpg.webp",
    category: "nendoroid",
  },
  {
    name: "артбуки",
    img: "https://fast-anime.ru/storage/uploads/images/2023/11/27/WWpodyLJAC7VuaFNOJRMzaviKogZMatiTihEB77y-636x_.jpg.webp",
    category: "artbooks",
  },
  {
    name: "Значки",
    img: "https://fast-anime.ru/storage/uploads/images/2024/02/12/S7i7roAygRs0Ktbb1Wa1M1IxbYJkaaqjGcGGtOAz-636x_.jpg.webp",
    category: "icon",
  },
  {
    name: "Наклейки",
    img: "https://fast-anime.ru/storage/uploads/images/2023/11/21/5tuwgzRPuSbR8KeVvdbWdjPJDhPPBdpYpjZcio7w-636x_.jpg.webp",
    category: "sticker",
  },
  {
    name: "Плакаты",
    img: "https://fast-anime.ru/storage/uploads/images/2024/03/19/Y7G453fzti26eRLHAvaeRArLAm7hHEXfJVya7gqC-636x_.jpg.webp",
    category: "poster",
  },
  {
    name: "Кружки",
    img: "https://fast-anime.ru/storage/uploads/images/2023/04/28/IKRfospPZreDHzMBPvLtHOZKhNJJrYzJKEMrWbQK-636x_.jpg.webp",
    category: "Mugs",
  },
];

const search = document.querySelector(".search-wrap input");
const searchMenu = document.querySelector(".search-menu");
const searchSwipe = document.querySelector(".search-swipe");

search.addEventListener("click", (event) => {
  event.stopPropagation();
  searchMenu.classList.add("search-click");
});

document.body.addEventListener("click", () => {
  searchMenu.classList.remove("search-click");
});

let uniqueCategory = "all menu";

const searchRender = (data) => {
  searchSwipe.innerHTML = "";
  data.forEach((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const link = document.createElement("a");
    link.textContent = el.name;
    image.src = el.img;

    link.addEventListener('click', () => {
      
    })

    div.append(image, link);
    searchSwipe.append(div);
  });
};
searchRender(dataApi);

const dynamicSearch = () => {
  const search = document.querySelector(".search");
  search.addEventListener("input", () => {
    const filteredData = dataApi.filter(
      (item) =>
        item.name.toLowerCase().includes(search.value.toLowerCase()) &&
        (item.category === uniqueCategory || uniqueCategory === "all menu")
    );
    if (filteredData.length === 0) {
      return (searchSwipe.innerHTML = "Товаров нет в базе");
    }
    searchRender(filteredData);
  });
};
dynamicSearch();
