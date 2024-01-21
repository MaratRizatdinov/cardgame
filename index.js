// ---------------------Импорт страниц приложения------------------------

import { selectPage } from "./src/components/selectPage/selectPage";

// ---------------------Создание глобального хранилища-------------------

const state = {
  page: "select",
  level: '4',
};

//-----------------------Создание Роутера--------------------------------

const appRouter = (state) => {
  let page = state.page;
  switch (page) {
    case "select":
      selectPage(state);

      break;

    default:
      break;
  }
};

appRouter(state)