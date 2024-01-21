
// --Функция создает разметку блока кнопок выбора. Активная кнопка выделяется в CSS---

export const renderSelectField = (state) => {
  const listOfItems = [];

  for (let i = 1; i <= 3; i++) {
    let className =
      i === Number(state.level) ? "select__item select__item_active " : "select__item";
      listOfItems.push(`
        <div class="${className}">${i}</div>
        `);
  }    
  return listOfItems.join("");
};


