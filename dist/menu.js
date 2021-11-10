/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeS1mb29kLSh3ZWJwYWNrKS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5cclxuYXV0aCgpO1xyXG5tZW51KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n\tconst buttonAuth = document.querySelector('.button-auth');\r\n\tconst modalAuth = document.querySelector('.modal-auth');\r\n\tconst buttonOut = document.querySelector('.button-out');\r\n\tconst userName = document.querySelector('.user-name');\r\n\tconst closeAuth = document.querySelector('.close-auth');\r\n\tconst logInForm = document.getElementById('logInForm');\r\n\tconst inputLogin = document.getElementById('login');\r\n\tconst inputPassword = document.getElementById('password');\r\n\r\n\tconst TestLogin = (login) => {\r\n\t\tif (/^[a-zA-Z1-9]+$/.test(login) === false) { alert('В логине должны быть только латинские буквы'); return false; }\r\n\t\tif (login.length < 4 || login.length > 20) { alert('В логине должно быть от 4 до 20 символов'); return false; }\r\n\t\tif (parseInt(login.substr(0, 1))) { alert('Логин должен начинатся с буквы'); return false; }\r\n\t\treturn true;\r\n\t}\r\n\r\n\tconst login = (user) => {\r\n\t\tbuttonAuth.style.display = 'none';\r\n\r\n\t\tbuttonOut.style.display = 'flex';\r\n\t\tuserName.style.display = 'flex';\r\n\r\n\t\tuserName.textContent = user.login;\r\n\t\tmodalAuth.style.display = 'none';\r\n\r\n\t\tTestLogin(user.login);\r\n\t}\r\n\r\n\tconst logout = () => {\r\n\t\tbuttonAuth.style.display = 'flex';\r\n\t\tbuttonOut.style.display = 'none';\r\n\t\tuserName.style.display = 'none';\r\n\t\tuserName.textContent = '';\r\n\t\tlocalStorage.removeItem('user');\r\n\t}\r\n\r\n\tbuttonAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'flex';\r\n\t})\r\n\r\n\tcloseAuth.addEventListener('click', () => {\r\n\t\tmodalAuth.style.display = 'none';\r\n\t})\r\n\r\n\tbuttonOut.addEventListener('click', () => {\r\n\t\tlogout();\r\n\t})\r\n\r\n\tlogInForm.addEventListener('submit', (event) => {\r\n\t\tevent.preventDefault();\r\n\r\n\t\tconst user = {\r\n\t\t\tlogin: inputLogin.value,\r\n\t\t\tpassword: inputPassword.value\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem('user', JSON.stringify(user));\r\n\t\tlogin(user);\r\n\r\n\t})\r\n\r\n\tif (localStorage.getItem('user')) {\r\n\t\tlogin(JSON.parse(localStorage.getItem('user')));\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNEQUFzRDtBQUN0RywrQ0FBK0MsbURBQW1EO0FBQ2xHLHNDQUFzQyx5Q0FBeUM7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0RlbGl2ZXJ5LWZvb2QtKHdlYnBhY2spLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcblx0Y29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpO1xyXG5cdGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJyk7XHJcblx0Y29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKTtcclxuXHRjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcclxuXHRjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpO1xyXG5cdGNvbnN0IGxvZ0luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKTtcclxuXHRjb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcblx0Y29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG5cclxuXHRjb25zdCBUZXN0TG9naW4gPSAobG9naW4pID0+IHtcclxuXHRcdGlmICgvXlthLXpBLVoxLTldKyQvLnRlc3QobG9naW4pID09PSBmYWxzZSkgeyBhbGVydCgn0JIg0LvQvtCz0LjQvdC1INC00L7Qu9C20L3RiyDQsdGL0YLRjCDRgtC+0LvRjNC60L4g0LvQsNGC0LjQvdGB0LrQuNC1INCx0YPQutCy0YsnKTsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRpZiAobG9naW4ubGVuZ3RoIDwgNCB8fCBsb2dpbi5sZW5ndGggPiAyMCkgeyBhbGVydCgn0JIg0LvQvtCz0LjQvdC1INC00L7Qu9C20L3QviDQsdGL0YLRjCDQvtGCIDQg0LTQviAyMCDRgdC40LzQstC+0LvQvtCyJyk7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0aWYgKHBhcnNlSW50KGxvZ2luLnN1YnN0cigwLCAxKSkpIHsgYWxlcnQoJ9Cb0L7Qs9C40L0g0LTQvtC70LbQtdC9INC90LDRh9C40L3QsNGC0YHRjyDRgSDQsdGD0LrQstGLJyk7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcblx0XHRidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cdFx0YnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcblx0XHR1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuXHRcdHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuXHRcdFRlc3RMb2dpbih1c2VyLmxvZ2luKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuXHRcdGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHRcdGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0dXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG5cdH1cclxuXHJcblx0YnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cdH0pXHJcblxyXG5cdGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH0pXHJcblxyXG5cdGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGxvZ291dCgpO1xyXG5cdH0pXHJcblxyXG5cdGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlciA9IHtcclxuXHRcdFx0bG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcblx0XHRcdHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlXHJcblx0XHR9XHJcblxyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcblx0XHRsb2dpbih1c2VyKTtcclxuXHJcblx0fSlcclxuXHJcblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuXHRcdGxvZ2luKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\tconst restaurant = 'food-band';\r\n\r\n\tconst renderItems = (data) => {\r\n\t\tconsole.log(data);\r\n\t}\r\n\r\n\tfetch(`./db/${restaurant}.json`)\r\n\t\t.then((response) => response.json())\r\n\t\t.then((data) => { renderItems(data) })\r\n\t\t.catch((error) => {\r\n\t\t\tconsole.log(error);\r\n\t\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0RlbGl2ZXJ5LWZvb2QtKHdlYnBhY2spLy4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcblx0Y29uc3QgcmVzdGF1cmFudCA9ICdmb29kLWJhbmQnO1xyXG5cclxuXHRjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHR9XHJcblxyXG5cdGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudH0uanNvbmApXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdC50aGVuKChkYXRhKSA9PiB7IHJlbmRlckl0ZW1zKGRhdGEpIH0pXHJcblx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;