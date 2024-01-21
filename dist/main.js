/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_selectPage_selectPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/components/selectPage/selectPage */ \"./src/components/selectPage/selectPage.js\");\n// ---------------------Импорт страниц приложения------------------------\r\n\r\n\r\n\r\n// ---------------------Создание глобального хранилища-------------------\r\n\r\nconst state = {\r\n  page: \"select\",\r\n  level: '4',\r\n};\r\n\r\n//-----------------------Создание Роутера--------------------------------\r\n\r\nconst appRouter = (state) => {\r\n  let page = state.page;\r\n  switch (page) {\r\n    case \"select\":\r\n      (0,_src_components_selectPage_selectPage__WEBPACK_IMPORTED_MODULE_0__.selectPage)(state);\r\n\r\n      break;\r\n\r\n    default:\r\n      break;\r\n  }\r\n};\r\n\r\nappRouter(state)\n\n//# sourceURL=webpack://cardgame/./index.js?");

/***/ }),

/***/ "./src/components/selectPage/renderSelectField.js":
/*!********************************************************!*\
  !*** ./src/components/selectPage/renderSelectField.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderSelectField: () => (/* binding */ renderSelectField)\n/* harmony export */ });\n\r\nconst renderSelectField = (state) => {\r\n  const listOfItems = [];\r\n\r\n  for (let i = 1; i <= 3; i++) {\r\n    let className =\r\n      i === Number(state.level) ? \"select__item select__item_active \" : \"select__item\";\r\n      listOfItems.push(`\r\n        <div class=\"${className}\">${i}</div>\r\n        `);\r\n  }  \r\n  \r\n  return listOfItems.join(\"\");\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://cardgame/./src/components/selectPage/renderSelectField.js?");

/***/ }),

/***/ "./src/components/selectPage/selectPage.js":
/*!*************************************************!*\
  !*** ./src/components/selectPage/selectPage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectPage: () => (/* binding */ selectPage)\n/* harmony export */ });\n/* harmony import */ var _scripts_initEventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scripts/initEventListeners */ \"./src/scripts/initEventListeners.js\");\n/* harmony import */ var _renderSelectField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSelectField */ \"./src/components/selectPage/renderSelectField.js\");\n\r\n\r\n\r\nconst selectPage = (state) => {\r\n  // -----------------Создаем статичную разметку----------------\r\n\r\n  const appElement = document.getElementById(\"app\");\r\n\r\n  const selectHtmlStatic = () => {\r\n    return `\r\n        <div class=\"modal select\">\r\n            <div class=\"select__title\">Выбери сложность</div>\r\n            <div class=\"select__field\"></div>\r\n            <div class=\"select__button\">Старт</div>\r\n        </div>\r\n        `;\r\n  };\r\n\r\n  appElement.innerHTML = selectHtmlStatic();\r\n\r\n  // ------------Добавляем в разметку кнопок выбора------------\r\n\r\n  const selectField = document.querySelector(\".select__field\");\r\n  selectField.innerHTML = (0,_renderSelectField__WEBPACK_IMPORTED_MODULE_1__.renderSelectField)(state);\r\n\r\n//   -----------Добавляем обработчик на кнопки-----------------\r\n\r\n  const clickSelectItem = (item) => {\r\n    state.level = item.innerText;\r\n    selectField.innerHTML = (0,_renderSelectField__WEBPACK_IMPORTED_MODULE_1__.renderSelectField)(state);\r\n    (0,_scripts_initEventListeners__WEBPACK_IMPORTED_MODULE_0__.initEventListeners)(\".select__item\", \"click\", clickSelectItem);    \r\n  };\r\n\r\n  (0,_scripts_initEventListeners__WEBPACK_IMPORTED_MODULE_0__.initEventListeners)(\".select__item\", \"click\", clickSelectItem);\r\n\r\n  // ---------------Добавляем обработчик на кнопку старт---------\r\n  \r\n  const startButton =document.querySelector(\".select__button\")\r\n  \r\n  startButton.addEventListener(\"click\",()=>{\r\n      console.log(\"go to Game\")\r\n  })\r\n\r\n};\r\n\r\n\n\n//# sourceURL=webpack://cardgame/./src/components/selectPage/selectPage.js?");

/***/ }),

/***/ "./src/scripts/initEventListeners.js":
/*!*******************************************!*\
  !*** ./src/scripts/initEventListeners.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initEventListeners: () => (/* binding */ initEventListeners)\n/* harmony export */ });\n// -------------Функция для подключения листенеров в списке------------------------\r\n\r\nconst initEventListeners = (selector, listener, action, array) => {\r\n  const listElements = document.querySelectorAll(selector);\r\n  for (let item of listElements) {\r\n    item.addEventListener(listener, (event) => action(item, event, array));\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://cardgame/./src/scripts/initEventListeners.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;