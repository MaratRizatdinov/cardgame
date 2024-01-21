import { initEventListeners } from "../../scripts/initEventListeners";
import { renderSelectField } from "./renderSelectField";

export const selectPage = (state) => {

  // -----------------Создаем статичную разметку----------------

  const appElement = document.getElementById("app");

  const selectHtmlStatic = () => {
    return `
        <div class="modal select">
            <div class="select__title">Выбери сложность</div>
            <div class="select__field"></div>
            <div class="select__button">Старт</div>
        </div>
        `;
  };

  appElement.innerHTML = selectHtmlStatic();

  // ------------Добавляем в разметку кнопок выбора------------

  const selectField = document.querySelector(".select__field");
  selectField.innerHTML = renderSelectField(state);

  //   -----------Добавляем обработчик на кнопки-----------------

  const clickSelectItem = (item) => {
    state.level = item.innerText;
    selectField.innerHTML = renderSelectField(state);
    initEventListeners(".select__item", "click", clickSelectItem);    
  };

  initEventListeners(".select__item", "click", clickSelectItem);

  // ---------------Добавляем обработчик на кнопку старт---------
  
  const startButton =document.querySelector(".select__button")
  
  startButton.addEventListener("click",()=>{
      console.log("go to Game")
  })

  //------------------------------------------------------------
                        //<< блок следующего кода >>
  //------------------------------------------------------------



};

