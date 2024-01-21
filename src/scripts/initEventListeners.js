// -------------Функция для подключения листенеров в списке------------------------

export const initEventListeners = (selector, listener, action, array) => {
  const listElements = document.querySelectorAll(selector);
  for (let item of listElements) {
    item.addEventListener(listener, (event) => action(item, event, array));
  }
};
