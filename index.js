/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nbody {\r\n  margin: 0;\n}\nul {\r\n  list-style: none;\r\n  padding: 0;\n}\n#root {\r\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  text-align: center;\r\n  color: #2c3e50;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.container[data-v-067fa87f] {\r\n  overflow-y: scroll;\n}\n.header[data-v-067fa87f] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 24px;\n}\n.title[data-v-067fa87f] {\r\n  font-size: 24px;\r\n  font-weight: bold;\n}\n.button[data-v-067fa87f] {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  padding: 8px 20px;\r\n  border-radius: 10px;\r\n  background: #f3f3f3;\n}\n.label[data-v-067fa87f] {\r\n  margin: 32px 32px 16px;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  text-align: left;\n}\n.input-row[data-v-067fa87f] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 32px;\n}\n.input-name[data-v-067fa87f] {\r\n  background: #f6f6f6;\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  padding: 12px 8px;\r\n  width: 66%;\n}\n.input-number[data-v-067fa87f] {\r\n  background: #f6f6f6;\r\n  border: none;\r\n  border-radius: 10px;\r\n  font-size: 14px;\r\n  padding: 12px 20px 12px 12px;\r\n  width: 16%;\r\n  text-align: end;\n}\n.preview[data-v-067fa87f] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 56px 32px 0;\n}\n.preview > .label[data-v-067fa87f] {\r\n  margin: 0;\n}\n.image-container[data-v-067fa87f] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 42px;\r\n  height: 42px;\r\n  background: salmon;\r\n  border: 2px solid black;\r\n  border-radius: 100%;\r\n  margin: 0 16px;\n}\n.image-container img[data-v-067fa87f]{\r\n  width: 28px;\r\n  height: 28px;\n}\n.icon-table[data-v-067fa87f] {\r\n\tmargin: 12px 32px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n  align-content: flex-start;\r\n\theight: 240px;\r\n\toverflow-x: scroll;\r\n  overflow-y: hidden;\n}\n.icon-container[data-v-067fa87f] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 48px;\r\n  height: 48px;\r\n  background: #eeeeee;\r\n  border-radius: 3px;\r\n  margin: 6px 12px 6px 0;\n}\n.selected-icon[data-v-067fa87f] {\r\n  width: 42px;\r\n  height: 42px;\r\n  border: 3px solid black;\r\n  border-radius: 6px;\n}\n.icon-container img[data-v-067fa87f] {\r\n  width: 28px;\r\n  height: 28px;\n}\n.color-table[data-v-067fa87f] {\r\n\tmargin: 32px 32px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tflex-wrap: wrap;\r\n\theight: 200px;\r\n\toverflow-x: scroll;\r\n  overflow-y: hidden;\n}\n.color[data-v-067fa87f] {\r\n  width: 28px;\r\n  height: 28px;\r\n  margin: 10px 20px 10px 0;\r\n  border-radius: 100%;\n}\n.selected-color[data-v-067fa87f] {\r\n  width: 22px;\r\n  height: 22px;\r\n  border: 3px solid black;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.list[data-v-14b1f2a7] {\r\n  margin-top: 24px;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  padding-bottom: 50px;\r\n  color: black;\n}\n.outside[data-v-14b1f2a7] {\r\n  display: flex;\r\n  align-items: center;\r\n  border: 2px solid #2c3e50;\r\n  margin: 8px;\r\n  height: 60px;\n}\n.icon-container[data-v-14b1f2a7] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 16%;\n}\n.icon[data-v-14b1f2a7] {\r\n  height: 36px;\r\n  width: 36px;\n}\n.name[data-v-14b1f2a7] {\r\n  width: 54%;\r\n  text-align: start;\n}\n.number[data-v-14b1f2a7] {\r\n  width: 16%;\r\n  font-weight: bold;\n}\n.arrow[data-v-14b1f2a7] {\r\n  width: 14%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  transition: transform .24s ease;\n}\n.rotate90[data-v-14b1f2a7] {\r\n  transform: rotate(90deg);\n}\n.inside[data-v-14b1f2a7] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin: 8px;\r\n  background: #f8f8f8;\r\n  border-radius: 3px;\r\n  overflow: hidden;\r\n  height: 0;\n}\n.inside-height[data-v-14b1f2a7] {\r\n  height: 72px;\n}\n.slide-down-enter-active[data-v-14b1f2a7], .slide-down-leave-active[data-v-14b1f2a7] {\r\n  transition: height .24s ease;\n}\n.delete[data-v-14b1f2a7], .done[data-v-14b1f2a7] {\r\n  margin: 8px 16px;\r\n  font-size: 12px;\n}\n.new[data-v-14b1f2a7] {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 60px;\r\n  margin: 8px;\r\n  background: #2c3e5011;\r\n  justify-content: center;\r\n  color: #2c3e5066;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.fade-down-enter-active[data-v-45b8205f] {\r\n  animation: fade-down-data-v-45b8205f .5s ease;\n}\n.fade-down-leave-active[data-v-45b8205f] {\r\n  animation: fade-down-data-v-45b8205f .5s reverse;\n}\n@keyframes fade-down-data-v-45b8205f {\nfrom {\r\n    transform: translateY(-80%);\r\n    opacity: 0;\n}\nto {\r\n    transform: translateY(0);\r\n    opacity: 100;\n}\n}\n.message[data-v-45b8205f] {\r\n  position: fixed;\r\n  top: 24px;\r\n  width: 100%;\r\n  z-index: 102;\r\n  display: flex;\r\n  justify-content: center;\n}\n.text[data-v-45b8205f] {\r\n  background: white;\r\n  border-radius: 6px;\r\n  box-shadow: 0 4px 12px #cccccccc;\r\n  padding: 12px 24px;\r\n  font-size: 14px;\r\n  color: #333333;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n#navigation[data-v-81440b78] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: fixed;\r\n  bottom: 0;\r\n  margin: 0;\r\n  border-top: 1px solid #eeeeee;\r\n  background: white;\r\n  width: 100%;\r\n  height: 54px;\r\n  z-index: 100;\n}\nli[data-v-81440b78] {\r\n  width: 72px;\n}\nimg[data-v-81440b78] {\r\n  width: 32px;\r\n  height: 32px;\n}\n.title[data-v-81440b78] {\r\n  font-size: 10px;\r\n  line-height: 8px;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n#score-panel[data-v-e734b07c] {\r\n  margin-top: 60px;\r\n  background: white;\n}\n.line-container[data-v-e734b07c] {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 0 8px;\n}\n.line[data-v-e734b07c] {\r\n  height: 2px;\r\n  width: 100%;\r\n  background: #2c3e50;\r\n  position: relative;\r\n  top: 60px;\n}\n.score[data-v-e734b07c] {\r\n  font-size: 100px;\r\n  background: white;\r\n  position: relative;\r\n  padding: 0 12px;\n}\n.subtitle[data-v-e734b07c] {\r\n  color: #2c3e5066;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.slide-enter-active[data-v-feb08e14] {\r\n  animation: slide-up-data-v-feb08e14 .5s;\n}\n.slide-leave-active[data-v-feb08e14] {\r\n  animation: slide-up-data-v-feb08e14 .5s reverse;\n}\n@keyframes slide-up-data-v-feb08e14 {\nfrom {\r\n    transform: translate3d(0, 100%, 0);\n}\nto {\r\n    transform: translate3d(0, 0, 0);\n}\n}\n.container[data-v-feb08e14] {\r\n  z-index: 101;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: white;\r\n  bottom: 0;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.done-record[data-v-2a1d6619] {\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\n}\n.header[data-v-2a1d6619] {\r\n  text-align: center;\r\n  background: #eeeeee;\r\n  padding: 12px;\n}\n.back[data-v-2a1d6619] {\r\n  margin: 0 16px;\r\n  float: left;\n}\n.title[data-v-2a1d6619] {\r\n  font-weight: bold;\n}\n.item[data-v-2a1d6619] {\r\n  display: flex;\r\n  padding: 18px;\r\n  margin: 6px 0;\r\n  color: #333333;\r\n  font-size: 14px;\n}\n.time[data-v-2a1d6619] {\r\n  width: 160px;\r\n  text-align: end;\r\n  margin-right: 40px;\n}\n.name[data-v-2a1d6619] {\r\n  width: 320px;\n}\n.number[data-v-2a1d6619] {\r\n  width: 120px;\r\n  text-align: end;\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.logo-container[data-v-a1076188] {\r\n  margin-top: 60px;\n}\n.logo[data-v-a1076188] {\r\n  width: 120px;\r\n  height: 120px;\n}\n.name[data-v-a1076188] {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  position: relative;\r\n  top: -28px;\n}\n.table[data-v-a1076188] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  padding: 0 54px;\n}\n.item[data-v-a1076188] {\r\n  border-radius: 6px;\r\n  background: #eeeeee;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100px;\r\n  width: 80px;\r\n  margin: 12px 6px;\r\n  font-size: 12px;\n}\n.icon[data-v-a1076188] {\r\n  width: 36px;\r\n  height: 36px;\r\n  margin-bottom: 6px;\n}\n.author[data-v-a1076188] {\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 60px;\r\n  text-align: center;\r\n  color: #cccccc;\r\n  font-size: 12px;\n} \r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navigation.vue */ "./src/components/Navigation.vue");
/* harmony import */ var _pages_Task_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Task.vue */ "./src/pages/Task.vue");
/* harmony import */ var _pages_Incentive_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Incentive.vue */ "./src/pages/Incentive.vue");
/* harmony import */ var _pages_More_index_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/More/index.vue */ "./src/pages/More/index.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Task: _pages_Task_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Incentive: _pages_Incentive_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    More: _pages_More_index_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  },
  data: function() {
    return {
      page: 'Task',
      pages: [
        { el: 'Task', title: '任务', icon: 'assignment' },
        { el: 'Incentive', title: '奖励', icon: 'bubble_chart' },
        { el: 'More', title: '更多', icon: 'more_horiz' },
      ]
    }
  },
  methods: {
    switchPage: function(el) {
      this.page = el
    }
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlideView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlideView.vue */ "./src/components/SlideView.vue");
/* harmony import */ var _common_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/icons */ "./src/common/icons.js");
/* harmony import */ var _common_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/colors */ "./src/common/colors.js");
/* harmony import */ var _components_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Message */ "./src/components/Message/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: Boolean,
    strings: Object,
  },
  data: function() {
    return {
      name: '',
      number: void 0,
      icons: _common_icons__WEBPACK_IMPORTED_MODULE_1__["default"][this.strings.key],
      selected_icon: _common_icons__WEBPACK_IMPORTED_MODULE_1__["default"][this.strings.key][0],
      colors: _common_colors__WEBPACK_IMPORTED_MODULE_2__["default"],
      selected_color: _common_colors__WEBPACK_IMPORTED_MODULE_2__["default"][0],
    }
  },
  components: {
    SlideView: _SlideView_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    init_data: function() {
      this.name = ''
      this.number = void 0
      this.selected_icon = this.icons[0]
      this.selected_color = this.colors[0]
    },
    save: function() {
      const { title, type_name } = this.strings
      if (this.name === '' && this.number === void 0) {
        _components_Message__WEBPACK_IMPORTED_MODULE_3__["default"].info(title + '还没有名字和' + type_name + '分呢！')
        return
      }
      if (this.name === '') {
        _components_Message__WEBPACK_IMPORTED_MODULE_3__["default"].info(title + '还没有名字呢！')
        return
      }
      if (this.number === void 0) {
        _components_Message__WEBPACK_IMPORTED_MODULE_3__["default"].info(title + '还没有给予' + type_name + '分呢！')
        reutrn
      }
      this.$emit('add', {
        name: this.name,
        number: this.number,
        icon: this.selected_icon,
        color: this.selected_color,
        birthtime: Date.now()
      })
      this.init_data()
      this.$emit('hide')
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message */ "./src/components/Message/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: String,
    list: Array,
  },
  data: function() {
    return {
      type_string: this.type === 'Task' ? '任务' : '奖励',
      show: Array(this.list.length).fill(false),
    }
  },
  watch: {
    list: function(nv) {
      this.show = Array(nv.length).fill(false)
    }
  },
  methods: {
    toSrc: function(icon) {
      return './images/ic_' + icon + '_black_48dp.png'
    },
    open: function(index) {
      this.show = this.show.map((v, i) => i === index ? !v : false)
    },
    add: function() {
      this.$emit('add')
      this.show = this.show.map(() => false)
    },
    deleteItem: function(index) {
      if (confirm('确定删除' + this.type_string + ' "' + this.list[index].name + '" ?')) {
        this.$emit('delete', index)
      }
    },
    done: function(index) {
      if (confirm('确定完成' + this.type_string + ' "' + this.list[index].name + '" ?')) {
        this.$emit('done', index)
      }
    }
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Message/Message.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    content: String,
    duration: Number,
  },
  data: function() {
    return {
      show: true
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.show = false
    }, this.duration * 1000)
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    list: Array,
    active: String,
  },
  methods: {
    getSrc: function(item) {
      return './images/ic_' + item.icon + '_black_48dp' + (item.el !== this.active ? '_grey' : '') + '.png'
    },
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScorePanel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    score: Number
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/components/SlideView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    up: Boolean,
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/Incentive.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Incentive.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ScorePanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ScorePanel.vue */ "./src/components/ScorePanel.vue");
/* harmony import */ var _components_MainList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainList.vue */ "./src/components/MainList.vue");
/* harmony import */ var _components_EditView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EditView.vue */ "./src/components/EditView.vue");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage */ "./src/storage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ScorePanel: _components_ScorePanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MainList: _components_MainList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditView: _components_EditView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function() {
    return {
      score: 0,
      incentive_list: [],
      show_edit: false,
      edit_strings: {
        key: 'incentive',
        title: '奖励',
        type_name: '消耗',
        placeholder: '例如游戏、购物等',
      },
      done_list: [],
    }
  },
  mounted: function() {
    let incentive_list = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('incentives')
    if (Array.isArray(incentive_list)) {
      this.incentive_list = incentive_list
    }
    let score = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('score')
    if (Number.isInteger(score)) {
      this.score = score
    }
    let done_list = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('dones')
    if (Array.isArray(done_list)) {
      this.done_list = done_list
    }
    window.addEventListener('beforeunload', () => this.storage_all())
  },
  destroyed: function() { 
    this.storage_all()
    window.removeEventListener('beforeunload', () => this.storage_all())
  },
  methods: {
    add_new_incentive: function(new_incentive) {
      this.incentive_list.push(new_incentive)
    },
    delete_item: function(index) {
      this.incentive_list = this.incentive_list.filter((v, i) => i !== index)
    },
    done: function(index) {
      const item = Object.assign({}, this.incentive_list[index])
      this.score -= item.number
      item.donetime = Date.now()
      item.type = 'incentive'
      this.done_list.push(item)
    },
    storage_all: function() {
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].set('incentives', this.incentive_list)
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].set('score', this.score)
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].set('dones', this.done_list)
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/DoneRecord.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storage */ "./src/storage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function() {
    return {
      dones: []
    }
  },
  mounted: function() {
    let dones = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].get('dones')
    if (Array.isArray(dones)) {
      this.dones = dones.reverse()
    }
  },
  methods: {
    toDateString: function(n) {
      const date = new Date(n)
      return (date.getMonth() + 1) + '月' + date.getDate() + '日'
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoneRecord_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoneRecord.vue */ "./src/pages/More/DoneRecord.vue");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storage */ "./src/storage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DoneRecord: _DoneRecord_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function() {
    return {
      path: '',
      list: [
        { name: '完成记录', icon: 'done', click: () => this.goto('DoneRecord') },
        { name: '历史任务', icon: 'assignment', click: this.to_be_continued },
        { name: '历史奖励', icon: 'bubble_chart', click: this.to_be_continued },
        { name: '清除数据', icon: 'delete', click: this.clear }
      ]
    }
  },
  methods: {
    goto: function(path) {
      this.path = path
    },
    to_be_continued: function() {
      alert('还在建设中..')
    },
    clear: function() {
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].clear()
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/pages/Task.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Task.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ScorePanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ScorePanel.vue */ "./src/components/ScorePanel.vue");
/* harmony import */ var _components_MainList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainList.vue */ "./src/components/MainList.vue");
/* harmony import */ var _components_EditView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EditView.vue */ "./src/components/EditView.vue");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage */ "./src/storage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ScorePanel: _components_ScorePanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    MainList: _components_MainList_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    EditView: _components_EditView_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function() {
    return {
      score: 0,
      task_list: [
        {name:'点击右边箭头完成该任务',number:1,icon:'star',color:'#bbf8f8',birthtime:0},
      ],
      show_editor: false,
      edit_strings: {
        key: 'task',
        title: '任务',
        type_name: '奖励',
        placeholder: '例如读书、做作业等',
      },
      done_list: []
    }
  },
  mounted: function() {
    let task_list = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('tasks')
    if (Array.isArray(task_list)) {
      this.task_list = task_list
    }
    let score = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('score')
    if (Number.isInteger(score)) {
      this.score = score
    }
    let done_list = _storage__WEBPACK_IMPORTED_MODULE_3__["default"].get('dones')
    if (Array.isArray(done_list)) {
      this.done_list = done_list
    }
    window.addEventListener('beforeunload', () => this.storage_all())
  },
  destroyed: function() {
    this.storage_all()
    window.removeEventListener('beforeunload', () => this.storage_all())
  },
  methods: {
    add_new_task: function(new_task) {
      this.task_list.push(new_task)
    },
    delete_item: function(index) {
      this.task_list = this.task_list.filter((v, i) => i !== index)
    },
    done: function(index) {
      const item = Object.assign({}, this.task_list[index])
      this.score += item.number
      item.donetime = Date.now()
      item.type = 'task'
      this.done_list.push(item)
    },
    storage_all: function() {
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].set('tasks', this.task_list)
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].set('score', this.score)
      _storage__WEBPACK_IMPORTED_MODULE_3__["default"].set('dones', this.done_list)
    }
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "root" } },
    [
      _c(_vm.page, { tag: "component" }),
      _vm._v(" "),
      _c("Navigation", {
        attrs: { list: _vm.pages, active: _vm.page },
        on: { "item-click": _vm.switchPage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=template&id=067fa87f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditView.vue?vue&type=template&id=067fa87f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("SlideView", { attrs: { up: _vm.show } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "header" }, [
        _c(
          "div",
          {
            staticClass: "button",
            on: {
              click: function($event) {
                return _vm.$emit("hide")
              }
            }
          },
          [_vm._v("取消")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "title" }, [
          _vm._v("新的" + _vm._s(_vm.strings.title))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "button", on: { click: _vm.save } }, [
          _vm._v("保存")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "label" }, [
        _vm._v(
          "给该" +
            _vm._s(_vm.strings.title) +
            "命名并附上" +
            _vm._s(_vm.strings.type_name) +
            "数："
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-row" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name,
              expression: "name"
            }
          ],
          staticClass: "input-name",
          attrs: {
            type: "text",
            placeholder: _vm.strings.placeholder,
            "placeholder-style": "color:#aaaaaa;"
          },
          domProps: { value: _vm.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.number,
              expression: "number",
              modifiers: { number: true }
            }
          ],
          staticClass: "input-number",
          attrs: {
            type: "number",
            min: "0",
            placeholder: _vm.strings.type_name + "分",
            "placeholder-style": "color:#aaaaaa;"
          },
          domProps: { value: _vm.number },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.number = _vm._n($event.target.value)
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "preview" }, [
        _c("div", { staticClass: "label" }, [_vm._v("挑选一个图标和颜色：")]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "image-container",
            style: { background: _vm.selected_color }
          },
          [
            _c("img", {
              attrs: {
                src: "./images/ic_" + _vm.selected_icon + "_black_48dp.png",
                alt: ""
              }
            })
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "icon-table" },
        _vm._l(_vm.icons, function(icon) {
          return _c(
            "div",
            {
              key: icon,
              class: [
                "icon-container",
                _vm.selected_icon === icon ? "selected-icon" : ""
              ],
              on: {
                click: function($event) {
                  _vm.selected_icon = icon
                }
              }
            },
            [
              _c("img", {
                attrs: {
                  src: "./images/ic_" + icon + "_black_48dp.png",
                  alt: ""
                }
              })
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "color-table" },
        _vm._l(_vm.colors, function(color) {
          return _c("div", {
            key: color,
            class: [
              "color",
              _vm.selected_color === color ? "selected-color" : ""
            ],
            style: { background: color },
            on: {
              click: function($event) {
                _vm.selected_color = color
              }
            }
          })
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=template&id=14b1f2a7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainList.vue?vue&type=template&id=14b1f2a7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "list" }, [
    _c(
      "ul",
      [
        _vm._l(_vm.list, function(item, index) {
          return _c(
            "li",
            { key: item.birthtime, staticClass: "item" },
            [
              _c(
                "div",
                { staticClass: "outside", style: { background: item.color } },
                [
                  _c("div", { staticClass: "icon-container" }, [
                    _c("img", {
                      staticClass: "icon",
                      attrs: { src: _vm.toSrc(item.icon), alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "name" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "number" }, [
                    _vm._v(
                      _vm._s((_vm.type === "Task" ? "+" : "-") + item.number) +
                        "分"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      class: { arrow: true, rotate90: _vm.show[index] },
                      on: {
                        click: function($event) {
                          return _vm.open(index)
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "icon",
                        attrs: {
                          src: _vm.toSrc("keyboard_arrow_right"),
                          alt: "->"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("transition", { attrs: { name: "slide-down" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.show[index],
                        expression: "show[index]"
                      }
                    ],
                    class: { inside: true, "inside-height": _vm.show[index] }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "delete",
                        on: {
                          click: function($event) {
                            return _vm.deleteItem(index)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "icon",
                          attrs: { src: _vm.toSrc("delete"), alt: "" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v("删除")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "done",
                        on: {
                          click: function($event) {
                            return _vm.done(index)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "icon",
                          attrs: { src: _vm.toSrc("done"), alt: "" }
                        }),
                        _vm._v(" "),
                        _c("div", [_vm._v("完成")])
                      ]
                    )
                  ]
                )
              ])
            ],
            1
          )
        }),
        _vm._v(" "),
        _c("li", { staticClass: "new", on: { click: _vm.add } }, [
          _vm._v("+ 添加一个" + _vm._s(_vm.type_string))
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=template&id=45b8205f&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Message/Message.vue?vue&type=template&id=45b8205f&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade-down" } }, [
    _vm.show
      ? _c("div", { staticClass: "message" }, [
          _c("div", { staticClass: "text" }, [_vm._v(_vm._s(_vm.content))])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { attrs: { id: "navigation" } },
    _vm._l(_vm.list, function(item) {
      return _c(
        "li",
        {
          key: item.title,
          on: {
            click: function($event) {
              return _vm.$emit("item-click", item.el)
            }
          }
        },
        [
          _c("img", { attrs: { src: _vm.getSrc(item), alt: item.title } }),
          _vm._v(" "),
          _c("div", { staticClass: "title" }, [_vm._v(_vm._s(item.title))])
        ]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "score-panel" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", [
      _c("span", { staticClass: "score" }, [_vm._v(_vm._s(_vm.score))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "subtitle" }, [_vm._v("累计分数")])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "line-container" }, [
      _c("div", { staticClass: "line" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=template&id=feb08e14&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SlideView.vue?vue&type=template&id=feb08e14&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "slide" } }, [
    _vm.up
      ? _c("div", { staticClass: "container" }, [_vm._t("default")], 2)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "incentive" } },
    [
      _c("ScorePanel", { attrs: { score: _vm.score } }),
      _vm._v(" "),
      _c("MainList", {
        attrs: { type: "Incentive", list: _vm.incentive_list },
        on: {
          add: function($event) {
            _vm.show_editor = true
          },
          delete: _vm.delete_item,
          done: _vm.done
        }
      }),
      _vm._v(" "),
      _c("EditView", {
        attrs: { strings: _vm.edit_strings, show: _vm.show_edit },
        on: {
          hide: function($event) {
            _vm.show_edit = false
          },
          add: _vm.add_new_incentive
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "done-record" },
    [
      _c("div", { staticClass: "header" }, [
        _c(
          "div",
          {
            staticClass: "back",
            on: {
              click: function($event) {
                return _vm.$emit("back")
              }
            }
          },
          [_vm._v("返回")]
        ),
        _vm._v("\n    历史数据\n  ")
      ]),
      _vm._v(" "),
      _vm._l(_vm.dones, function(item) {
        return _c("div", { key: item.donetime, staticClass: "item" }, [
          _c("div", { staticClass: "time" }, [
            _vm._v(_vm._s(_vm.toDateString(item.donetime)))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "name" }, [_vm._v(_vm._s(item.name))]),
          _vm._v(" "),
          _c("div", { staticClass: "number" }, [
            _vm._v(_vm._s((item.type === "task" ? "+" : "-") + item.number))
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=template&id=a1076188&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/index.vue?vue&type=template&id=a1076188&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.path === ""
    ? _c("div", { attrs: { id: "more" } }, [
        _c("div", { staticClass: "logo-container" }, [
          _c("img", {
            staticClass: "logo",
            attrs: { src: "./images/logo.png" }
          }),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table" },
          _vm._l(_vm.list, function(item) {
            return _c(
              "div",
              {
                key: item.name,
                staticClass: "item",
                on: { click: item.click }
              },
              [
                _c("img", {
                  staticClass: "icon",
                  attrs: { src: "./images/ic_" + item.icon + "_black_48dp.png" }
                }),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(item.name))])
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "author" }, [_vm._v("zhufuge")])
      ])
    : _c(_vm.path, {
        tag: "component",
        on: {
          back: function($event) {
            _vm.path = ""
          }
        }
      })
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name" }, [
      _c("span", { staticStyle: { color: "#ff2c00" } }, [_vm._v("T")]),
      _vm._v(" "),
      _c("span", { staticStyle: { color: "#ff9e00" } }, [_vm._v("N")]),
      _vm._v(" "),
      _c("span", { staticStyle: { color: "#009999" } }, [_vm._v("I")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name" }, [
      _c("span", { staticStyle: { color: "#ff2c00" } }, [_vm._v("Task")]),
      _vm._v(" "),
      _c("span", { staticStyle: { color: "#ff9e00" } }, [_vm._v("And")]),
      _vm._v(" "),
      _c("span", { staticStyle: { color: "#009999" } }, [_vm._v("Incentive")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Task.vue?vue&type=template&id=5f1969a9&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Task.vue?vue&type=template&id=5f1969a9&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "task" } },
    [
      _c("ScorePanel", { attrs: { score: _vm.score } }),
      _vm._v(" "),
      _c("MainList", {
        attrs: { type: "Task", list: _vm.task_list },
        on: {
          add: function($event) {
            _vm.show_editor = true
          },
          delete: _vm.delete_item,
          done: _vm.done
        }
      }),
      _vm._v(" "),
      _c("EditView", {
        attrs: { strings: _vm.edit_strings, show: _vm.show_editor },
        on: {
          hide: function($event) {
            _vm.show_editor = false
          },
          add: _vm.add_new_task
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("03ada772", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5c563e52", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("280c4f20", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e36f402", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ac316230", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a6072cee", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4c3c229e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7937ecce", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("de668a8a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "./src/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/common/colors.js":
/*!******************************!*\
  !*** ./src/common/colors.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  '#61CACA',
  '#7DCACA',
  '#1F7F7F',
  '#338585',
  '#2E9494',
  '#4159A7',
  '#445796',
  '#2C438F',
  '#7289D3',
  '#8C9DD3',
  '#5F41A9',
  '#5C4498',
  '#492C91',
  '#8E72D4',
  '#A18CD4',
  '#8039A5',
  '#763D94',
  '#6A268D',
  '#AF6BD2',
  '#B886D2',
  '#C83E89',
  '#B34481',
  '#AB2A70',
  '#E36EAE',
  '#E38DBC',
  '#D33434',
  '#F74C4C',
  '#DD5454',
  '#FB7979',
  '#FB9C9C',
  '#FBB479',
  '#F79A4C',
  '#DD9254',
  '#D37C34',
  '#FBC79C',
  '#F7C24C',
  '#DDB354',
  '#D3A234',
  '#FBD379',
  '#FBDD9C',
  '#F7DD4C',
  '#DDC954',
  '#D3BB34',
  '#FBE779',
  '#FBED9C',
  '#F4F64C',
  '#DBDD54',
  '#D1D334',
  '#F9FB79',
  '#F9FB9B',
  '#AFE647',
  '#A2CE4F',
  '#91C530',
  '#C7F275',
  '#D3F296',
  '#8CE28C',
  '#6DE26D',
  '#29A929',
  '#43B143',
  '#3DC63D',
]);


/***/ }),

/***/ "./src/common/icons.js":
/*!*****************************!*\
  !*** ./src/common/icons.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  task: [
    "assignment",
    "brush",
    "code",
    "color_lens",
    "date_range",
    "description",
    "desktop_windows",
    "directions_bike",
    "directions_run",
    "directions_walk",
    "do_not_disturb",
    "error_outline",
    "event",
    "filter_drama",
    "filter_hdr",
    "fitness_center",
    "flag",
    "group_work",
    "g_translate",
    "hearing",
    "hotel",
    "import_contacts",
    "kitchen",
    "lightbulb_outline",
    "local_library",
    "music_note",
    "pets",
    "record_voice_over",
    "schedule",
    "star",
    "style",
    "textsms",
    "theaters",
    "warning"
  ],
  incentive: [
    "gamepad",
    "local_bar",
    "local_cafe",
    "local_florist",
    "restaurant",
    "restaurant_menu",
    "shopping_cart",
    "videogame_asset",
    "lightbulb_outline",
    "star",
    "style"
  ]
});

/***/ }),

/***/ "./src/components/EditView.vue":
/*!*************************************!*\
  !*** ./src/components/EditView.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditView_vue_vue_type_template_id_067fa87f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditView.vue?vue&type=template&id=067fa87f&scoped=true& */ "./src/components/EditView.vue?vue&type=template&id=067fa87f&scoped=true&");
/* harmony import */ var _EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditView.vue?vue&type=script&lang=js& */ "./src/components/EditView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css& */ "./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditView_vue_vue_type_template_id_067fa87f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditView_vue_vue_type_template_id_067fa87f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "067fa87f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/EditView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/EditView.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/EditView.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./EditView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=style&index=0&id=067fa87f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_style_index_0_id_067fa87f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/EditView.vue?vue&type=template&id=067fa87f&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/components/EditView.vue?vue&type=template&id=067fa87f&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_067fa87f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./EditView.vue?vue&type=template&id=067fa87f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/EditView.vue?vue&type=template&id=067fa87f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_067fa87f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditView_vue_vue_type_template_id_067fa87f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/MainList.vue":
/*!*************************************!*\
  !*** ./src/components/MainList.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainList_vue_vue_type_template_id_14b1f2a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainList.vue?vue&type=template&id=14b1f2a7&scoped=true& */ "./src/components/MainList.vue?vue&type=template&id=14b1f2a7&scoped=true&");
/* harmony import */ var _MainList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainList.vue?vue&type=script&lang=js& */ "./src/components/MainList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css& */ "./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MainList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainList_vue_vue_type_template_id_14b1f2a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainList_vue_vue_type_template_id_14b1f2a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14b1f2a7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/MainList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/MainList.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/MainList.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./MainList.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=style&index=0&id=14b1f2a7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_style_index_0_id_14b1f2a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/MainList.vue?vue&type=template&id=14b1f2a7&scoped=true&":
/*!********************************************************************************!*\
  !*** ./src/components/MainList.vue?vue&type=template&id=14b1f2a7&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_template_id_14b1f2a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./MainList.vue?vue&type=template&id=14b1f2a7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/MainList.vue?vue&type=template&id=14b1f2a7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_template_id_14b1f2a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainList_vue_vue_type_template_id_14b1f2a7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Message/Message.vue":
/*!********************************************!*\
  !*** ./src/components/Message/Message.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue_vue_type_template_id_45b8205f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue?vue&type=template&id=45b8205f&scoped=true& */ "./src/components/Message/Message.vue?vue&type=template&id=45b8205f&scoped=true&");
/* harmony import */ var _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.vue?vue&type=script&lang=js& */ "./src/components/Message/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css& */ "./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Message_vue_vue_type_template_id_45b8205f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Message_vue_vue_type_template_id_45b8205f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45b8205f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Message/Message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Message/Message.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/components/Message/Message.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=style&index=0&id=45b8205f&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_style_index_0_id_45b8205f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Message/Message.vue?vue&type=template&id=45b8205f&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/components/Message/Message.vue?vue&type=template&id=45b8205f&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_45b8205f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Message.vue?vue&type=template&id=45b8205f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Message/Message.vue?vue&type=template&id=45b8205f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_45b8205f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Message_vue_vue_type_template_id_45b8205f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/Message/index.js":
/*!*****************************************!*\
  !*** ./src/components/Message/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Message_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Message.vue */ "./src/components/Message/Message.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  info: function (content, duration=3) {
    const body = document.getElementsByTagName('body')[0]
    const container = document.createElement('div')
    container.setAttribute('id', 'message')
    body.appendChild(container)

    return new Vue({
      render: function (h) {
        return h(_Message_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
          props: {
            content,
            duration,
          }
        })
      }
    }).$mount('#message')
  }
});

/***/ }),

/***/ "./src/components/Navigation.vue":
/*!***************************************!*\
  !*** ./src/components/Navigation.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=81440b78&scoped=true& */ "./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js& */ "./src/components/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css& */ "./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "81440b78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_81440b78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=81440b78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_81440b78_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ScorePanel.vue":
/*!***************************************!*\
  !*** ./src/components/ScorePanel.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScorePanel_vue_vue_type_template_id_e734b07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true& */ "./src/components/ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true&");
/* harmony import */ var _ScorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScorePanel.vue?vue&type=script&lang=js& */ "./src/components/ScorePanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css& */ "./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScorePanel_vue_vue_type_template_id_e734b07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScorePanel_vue_vue_type_template_id_e734b07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e734b07c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ScorePanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ScorePanel.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/ScorePanel.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./ScorePanel.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=style&index=0&id=e734b07c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_style_index_0_id_e734b07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_template_id_e734b07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ScorePanel.vue?vue&type=template&id=e734b07c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_template_id_e734b07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScorePanel_vue_vue_type_template_id_e734b07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/SlideView.vue":
/*!**************************************!*\
  !*** ./src/components/SlideView.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlideView_vue_vue_type_template_id_feb08e14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlideView.vue?vue&type=template&id=feb08e14&scoped=true& */ "./src/components/SlideView.vue?vue&type=template&id=feb08e14&scoped=true&");
/* harmony import */ var _SlideView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlideView.vue?vue&type=script&lang=js& */ "./src/components/SlideView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css& */ "./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SlideView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SlideView_vue_vue_type_template_id_feb08e14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SlideView_vue_vue_type_template_id_feb08e14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "feb08e14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/SlideView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/SlideView.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/SlideView.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./SlideView.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=style&index=0&id=feb08e14&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_style_index_0_id_feb08e14_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/SlideView.vue?vue&type=template&id=feb08e14&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/SlideView.vue?vue&type=template&id=feb08e14&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_template_id_feb08e14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./SlideView.vue?vue&type=template&id=feb08e14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SlideView.vue?vue&type=template&id=feb08e14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_template_id_feb08e14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlideView_vue_vue_type_template_id_feb08e14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");


const root = new Vue({
  el: '#root',
  render: function(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
  }
})

/***/ }),

/***/ "./src/pages/Incentive.vue":
/*!*********************************!*\
  !*** ./src/pages/Incentive.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Incentive_vue_vue_type_template_id_7b5a7df7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true& */ "./src/pages/Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true&");
/* harmony import */ var _Incentive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Incentive.vue?vue&type=script&lang=js& */ "./src/pages/Incentive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Incentive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Incentive_vue_vue_type_template_id_7b5a7df7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Incentive_vue_vue_type_template_id_7b5a7df7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b5a7df7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/Incentive.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/Incentive.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/pages/Incentive.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Incentive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Incentive.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/pages/Incentive.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Incentive_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/pages/Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incentive_vue_vue_type_template_id_7b5a7df7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Incentive.vue?vue&type=template&id=7b5a7df7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incentive_vue_vue_type_template_id_7b5a7df7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Incentive_vue_vue_type_template_id_7b5a7df7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/More/DoneRecord.vue":
/*!***************************************!*\
  !*** ./src/pages/More/DoneRecord.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DoneRecord_vue_vue_type_template_id_2a1d6619_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true& */ "./src/pages/More/DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true&");
/* harmony import */ var _DoneRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DoneRecord.vue?vue&type=script&lang=js& */ "./src/pages/More/DoneRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css& */ "./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DoneRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DoneRecord_vue_vue_type_template_id_2a1d6619_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DoneRecord_vue_vue_type_template_id_2a1d6619_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2a1d6619",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/More/DoneRecord.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/More/DoneRecord.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/pages/More/DoneRecord.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./DoneRecord.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=style&index=0&id=2a1d6619&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_style_index_0_id_2a1d6619_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/More/DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/pages/More/DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_template_id_2a1d6619_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/More/DoneRecord.vue?vue&type=template&id=2a1d6619&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_template_id_2a1d6619_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DoneRecord_vue_vue_type_template_id_2a1d6619_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/More/index.vue":
/*!**********************************!*\
  !*** ./src/pages/More/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a1076188_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a1076188&scoped=true& */ "./src/pages/More/index.vue?vue&type=template&id=a1076188&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/More/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css& */ "./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a1076188_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a1076188_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a1076188",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/More/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/More/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/pages/More/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=style&index=0&id=a1076188&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a1076188_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/More/index.vue?vue&type=template&id=a1076188&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/pages/More/index.vue?vue&type=template&id=a1076188&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a1076188_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a1076188&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/More/index.vue?vue&type=template&id=a1076188&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a1076188_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a1076188_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/Task.vue":
/*!****************************!*\
  !*** ./src/pages/Task.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task_vue_vue_type_template_id_5f1969a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=5f1969a9&scoped=true& */ "./src/pages/Task.vue?vue&type=template&id=5f1969a9&scoped=true&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./src/pages/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_5f1969a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Task_vue_vue_type_template_id_5f1969a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f1969a9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/Task.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/Task.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/pages/Task.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/pages/Task.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/pages/Task.vue?vue&type=template&id=5f1969a9&scoped=true&":
/*!***********************************************************************!*\
  !*** ./src/pages/Task.vue?vue&type=template&id=5f1969a9&scoped=true& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5f1969a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Task.vue?vue&type=template&id=5f1969a9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Task.vue?vue&type=template&id=5f1969a9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5f1969a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_5f1969a9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function(key) {
    let value = localStorage.getItem(key)
    if (value !== null) {
      try {
        value = JSON.parse(value)
      } catch (e) {
        console.log(e.message)
      }
    }
    return value
  },
  set: function(key, object) {
    localStorage.setItem(key, JSON.stringify(object))
  },
  clear: function() {
    localStorage.clear()
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/NDQ1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0Vmlldy52dWU/MGYyNCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluTGlzdC52dWU/ZDkyOSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UudnVlPzY1MGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWU/MTFjNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY29yZVBhbmVsLnZ1ZT84ZGQ5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NsaWRlVmlldy52dWU/MmFlZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9yZS9Eb25lUmVjb3JkLnZ1ZT9hZjkyIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb3JlL2luZGV4LnZ1ZT84ZDJlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9BcHAudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0Vmlldy52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01haW5MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1Njb3JlUGFuZWwudnVlIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TbGlkZVZpZXcudnVlIiwid2VicGFjazovLy9zcmMvcGFnZXMvSW5jZW50aXZlLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL01vcmUvRG9uZVJlY29yZC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9wYWdlcy9Nb3JlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3BhZ2VzL1Rhc2sudnVlIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzY0N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRWRpdFZpZXcudnVlPzg1OWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkxpc3QudnVlPzkwNjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnZ1ZT84ZDA2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlP2ExOTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NvcmVQYW5lbC52dWU/YTk1ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZVZpZXcudnVlP2E4MzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0luY2VudGl2ZS52dWU/NmFiNyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9yZS9Eb25lUmVjb3JkLnZ1ZT83MjgzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb3JlL2luZGV4LnZ1ZT81NThmIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9UYXNrLnZ1ZT9kNWVmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/ODdjNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0Vmlldy52dWU/MzI0MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluTGlzdC52dWU/YzRkZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UudnVlPzUzNzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWU/YmVkYSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY29yZVBhbmVsLnZ1ZT83MjAyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NsaWRlVmlldy52dWU/NjA3MSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9yZS9Eb25lUmVjb3JkLnZ1ZT8xNmRhIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb3JlL2luZGV4LnZ1ZT83OTMyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT82NDM4Iiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzI1ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/MjY4NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ljb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VkaXRWaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0Vmlldy52dWU/NjMxMyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0Vmlldy52dWU/NDI0OSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0Vmlldy52dWU/OTEwYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkxpc3QudnVlPzNhNjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkxpc3QudnVlPzkyMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbkxpc3QudnVlPzI3MmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UudnVlPzM2ZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLnZ1ZT80NzU2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lc3NhZ2UvTWVzc2FnZS52dWU/ZGM5MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmlnYXRpb24udnVlPzdkNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi52dWU/YmY4YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZT9kOTE1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Njb3JlUGFuZWwudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Njb3JlUGFuZWwudnVlPzAzZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NvcmVQYW5lbC52dWU/MjY1MyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY29yZVBhbmVsLnZ1ZT8wNDI0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NsaWRlVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVWaWV3LnZ1ZT81ZjkwIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NsaWRlVmlldy52dWU/ZmJhZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TbGlkZVZpZXcudnVlPzhiYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9JbmNlbnRpdmUudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9JbmNlbnRpdmUudnVlPzhhNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL0luY2VudGl2ZS52dWU/NDYyMSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9yZS9Eb25lUmVjb3JkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9yZS9Eb25lUmVjb3JkLnZ1ZT80NzAwIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9Nb3JlL0RvbmVSZWNvcmQudnVlPzFmY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01vcmUvRG9uZVJlY29yZC52dWU/YjUyNCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTW9yZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01vcmUvaW5kZXgudnVlP2Y5NzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01vcmUvaW5kZXgudnVlPzIzNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL01vcmUvaW5kZXgudnVlP2JlYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Rhc2sudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9UYXNrLnZ1ZT84MDkwIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9UYXNrLnZ1ZT9kOWE4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QSxRQUFRLDJEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIOEI7O0FBRWhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxR2M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJjO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSYztBQUNmO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05jO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR3pGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTJILENBQWdCLGtNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9JO0FBQUE7QUFBQTtBQUFBO0FBQXdULENBQWdCLG1XQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQStGO0FBQ3ZDO0FBQ0w7OztBQUduRDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF1SCxDQUFnQixpTUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxufVxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jcm9vdCB7XFxyXFxuICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogIzJjM2U1MDtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY29udGFpbmVyW2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDI0cHg7XFxufVxcbi50aXRsZVtkYXRhLXYtMDY3ZmE4N2ZdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYnV0dG9uW2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwYWRkaW5nOiA4cHggMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbn1cXG4ubGFiZWxbZGF0YS12LTA2N2ZhODdmXSB7XFxyXFxuICBtYXJnaW46IDMycHggMzJweCAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uaW5wdXQtcm93W2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCAzMnB4O1xcbn1cXG4uaW5wdXQtbmFtZVtkYXRhLXYtMDY3ZmE4N2ZdIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDhweDtcXHJcXG4gIHdpZHRoOiA2NiU7XFxufVxcbi5pbnB1dC1udW1iZXJbZGF0YS12LTA2N2ZhODdmXSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDEycHg7XFxyXFxuICB3aWR0aDogMTYlO1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG4ucHJldmlld1tkYXRhLXYtMDY3ZmE4N2ZdIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luOiA1NnB4IDMycHggMDtcXG59XFxuLnByZXZpZXcgPiAubGFiZWxbZGF0YS12LTA2N2ZhODdmXSB7XFxyXFxuICBtYXJnaW46IDA7XFxufVxcbi5pbWFnZS1jb250YWluZXJbZGF0YS12LTA2N2ZhODdmXSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBzYWxtb247XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgMTZweDtcXG59XFxuLmltYWdlLWNvbnRhaW5lciBpbWdbZGF0YS12LTA2N2ZhODdmXXtcXHJcXG4gIHdpZHRoOiAyOHB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG4uaWNvbi10YWJsZVtkYXRhLXYtMDY3ZmE4N2ZdIHtcXHJcXG5cXHRtYXJnaW46IDEycHggMzJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHRoZWlnaHQ6IDI0MHB4O1xcclxcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuLmljb24tY29udGFpbmVyW2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0OHB4O1xcclxcbiAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIG1hcmdpbjogNnB4IDEycHggNnB4IDA7XFxufVxcbi5zZWxlY3RlZC1pY29uW2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLmljb24tY29udGFpbmVyIGltZ1tkYXRhLXYtMDY3ZmE4N2ZdIHtcXHJcXG4gIHdpZHRoOiAyOHB4O1xcclxcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG4uY29sb3ItdGFibGVbZGF0YS12LTA2N2ZhODdmXSB7XFxyXFxuXFx0bWFyZ2luOiAzMnB4IDMycHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHRoZWlnaHQ6IDIwMHB4O1xcclxcblxcdG92ZXJmbG93LXg6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuLmNvbG9yW2RhdGEtdi0wNjdmYTg3Zl0ge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICBoZWlnaHQ6IDI4cHg7XFxyXFxuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG4uc2VsZWN0ZWQtY29sb3JbZGF0YS12LTA2N2ZhODdmXSB7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG4gIGhlaWdodDogMjJweDtcXHJcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5saXN0W2RhdGEtdi0xNGIxZjJhN10ge1xcclxcbiAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ub3V0c2lkZVtkYXRhLXYtMTRiMWYyYTddIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzJjM2U1MDtcXHJcXG4gIG1hcmdpbjogOHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG4uaWNvbi1jb250YWluZXJbZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE2JTtcXG59XFxuLmljb25bZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxuICB3aWR0aDogMzZweDtcXG59XFxuLm5hbWVbZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICB3aWR0aDogNTQlO1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcbi5udW1iZXJbZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICB3aWR0aDogMTYlO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hcnJvd1tkYXRhLXYtMTRiMWYyYTddIHtcXHJcXG4gIHdpZHRoOiAxNCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjI0cyBlYXNlO1xcbn1cXG4ucm90YXRlOTBbZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5pbnNpZGVbZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW46IDhweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uaW5zaWRlLWhlaWdodFtkYXRhLXYtMTRiMWYyYTddIHtcXHJcXG4gIGhlaWdodDogNzJweDtcXG59XFxuLnNsaWRlLWRvd24tZW50ZXItYWN0aXZlW2RhdGEtdi0xNGIxZjJhN10sIC5zbGlkZS1kb3duLWxlYXZlLWFjdGl2ZVtkYXRhLXYtMTRiMWYyYTddIHtcXHJcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuMjRzIGVhc2U7XFxufVxcbi5kZWxldGVbZGF0YS12LTE0YjFmMmE3XSwgLmRvbmVbZGF0YS12LTE0YjFmMmE3XSB7XFxyXFxuICBtYXJnaW46IDhweCAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ubmV3W2RhdGEtdi0xNGIxZjJhN10ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBtYXJnaW46IDhweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyYzNlNTAxMTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6ICMyYzNlNTA2NjtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmFkZS1kb3duLWVudGVyLWFjdGl2ZVtkYXRhLXYtNDViODIwNWZdIHtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZS1kb3duLWRhdGEtdi00NWI4MjA1ZiAuNXMgZWFzZTtcXG59XFxuLmZhZGUtZG93bi1sZWF2ZS1hY3RpdmVbZGF0YS12LTQ1YjgyMDVmXSB7XFxyXFxuICBhbmltYXRpb246IGZhZGUtZG93bi1kYXRhLXYtNDViODIwNWYgLjVzIHJldmVyc2U7XFxufVxcbkBrZXlmcmFtZXMgZmFkZS1kb3duLWRhdGEtdi00NWI4MjA1ZiB7XFxuZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtODAlKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXG59XFxudG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICAgIG9wYWNpdHk6IDEwMDtcXG59XFxufVxcbi5tZXNzYWdlW2RhdGEtdi00NWI4MjA1Zl0ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAyNHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxMDI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50ZXh0W2RhdGEtdi00NWI4MjA1Zl0ge1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4ICNjY2NjY2NjYztcXHJcXG4gIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNuYXZpZ2F0aW9uW2RhdGEtdi04MTQ0MGI3OF0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTRweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxubGlbZGF0YS12LTgxNDQwYjc4XSB7XFxyXFxuICB3aWR0aDogNzJweDtcXG59XFxuaW1nW2RhdGEtdi04MTQ0MGI3OF0ge1xcclxcbiAgd2lkdGg6IDMycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxufVxcbi50aXRsZVtkYXRhLXYtODE0NDBiNzhdIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA4cHg7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI3Njb3JlLXBhbmVsW2RhdGEtdi1lNzM0YjA3Y10ge1xcclxcbiAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4ubGluZS1jb250YWluZXJbZGF0YS12LWU3MzRiMDdjXSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDhweDtcXG59XFxuLmxpbmVbZGF0YS12LWU3MzRiMDdjXSB7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogNjBweDtcXG59XFxuLnNjb3JlW2RhdGEtdi1lNzM0YjA3Y10ge1xcclxcbiAgZm9udC1zaXplOiAxMDBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMCAxMnB4O1xcbn1cXG4uc3VidGl0bGVbZGF0YS12LWU3MzRiMDdjXSB7XFxyXFxuICBjb2xvcjogIzJjM2U1MDY2O1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zbGlkZS1lbnRlci1hY3RpdmVbZGF0YS12LWZlYjA4ZTE0XSB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLXVwLWRhdGEtdi1mZWIwOGUxNCAuNXM7XFxufVxcbi5zbGlkZS1sZWF2ZS1hY3RpdmVbZGF0YS12LWZlYjA4ZTE0XSB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLXVwLWRhdGEtdi1mZWIwOGUxNCAuNXMgcmV2ZXJzZTtcXG59XFxuQGtleWZyYW1lcyBzbGlkZS11cC1kYXRhLXYtZmViMDhlMTQge1xcbmZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbn1cXG50byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbn1cXG4uY29udGFpbmVyW2RhdGEtdi1mZWIwOGUxNF0ge1xcclxcbiAgei1pbmRleDogMTAxO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3R0b206IDA7XFxufVxcclxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRvbmUtcmVjb3JkW2RhdGEtdi0yYTFkNjYxOV0ge1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4uaGVhZGVyW2RhdGEtdi0yYTFkNjYxOV0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcbi5iYWNrW2RhdGEtdi0yYTFkNjYxOV0ge1xcclxcbiAgbWFyZ2luOiAwIDE2cHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXG59XFxuLnRpdGxlW2RhdGEtdi0yYTFkNjYxOV0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5pdGVtW2RhdGEtdi0yYTFkNjYxOV0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICBtYXJnaW46IDZweCAwO1xcclxcbiAgY29sb3I6ICMzMzMzMzM7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50aW1lW2RhdGEtdi0yYTFkNjYxOV0ge1xcclxcbiAgd2lkdGg6IDE2MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbn1cXG4ubmFtZVtkYXRhLXYtMmExZDY2MTldIHtcXHJcXG4gIHdpZHRoOiAzMjBweDtcXG59XFxuLm51bWJlcltkYXRhLXYtMmExZDY2MTldIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubG9nby1jb250YWluZXJbZGF0YS12LWExMDc2MTg4XSB7XFxyXFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG4ubG9nb1tkYXRhLXYtYTEwNzYxODhdIHtcXHJcXG4gIHdpZHRoOiAxMjBweDtcXHJcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbi5uYW1lW2RhdGEtdi1hMTA3NjE4OF0ge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0yOHB4O1xcbn1cXG4udGFibGVbZGF0YS12LWExMDc2MTg4XSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMCA1NHB4O1xcbn1cXG4uaXRlbVtkYXRhLXYtYTEwNzYxODhdIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIG1hcmdpbjogMTJweCA2cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5pY29uW2RhdGEtdi1hMTA3NjE4OF0ge1xcclxcbiAgd2lkdGg6IDM2cHg7XFxyXFxuICBoZWlnaHQ6IDM2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi5hdXRob3JbZGF0YS12LWExMDc2MTg4XSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogNjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjY2NjY2NjO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcbn0gXFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGlkPVwicm9vdFwiPlxyXG4gICAgPGNvbXBvbmVudCA6aXM9XCJwYWdlXCI+PC9jb21wb25lbnQ+XHJcbiAgICA8TmF2aWdhdGlvbiA6bGlzdD1cInBhZ2VzXCIgOmFjdGl2ZT1cInBhZ2VcIiBAaXRlbS1jbGljaz1cInN3aXRjaFBhZ2VcIj48L05hdmlnYXRpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiNyb290IHtcclxuICBmb250LWZhbWlseTogJ0F2ZW5pcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZSdcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9wYWdlcy9UYXNrLnZ1ZSdcclxuaW1wb3J0IEluY2VudGl2ZSBmcm9tICcuL3BhZ2VzL0luY2VudGl2ZS52dWUnXHJcbmltcG9ydCBNb3JlIGZyb20gJy4vcGFnZXMvTW9yZS9pbmRleC52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTmF2aWdhdGlvbixcclxuICAgIFRhc2ssXHJcbiAgICBJbmNlbnRpdmUsXHJcbiAgICBNb3JlLFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdlOiAnVGFzaycsXHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgeyBlbDogJ1Rhc2snLCB0aXRsZTogJ+S7u+WKoScsIGljb246ICdhc3NpZ25tZW50JyB9LFxyXG4gICAgICAgIHsgZWw6ICdJbmNlbnRpdmUnLCB0aXRsZTogJ+WlluWKsScsIGljb246ICdidWJibGVfY2hhcnQnIH0sXHJcbiAgICAgICAgeyBlbDogJ01vcmUnLCB0aXRsZTogJ+abtOWkmicsIGljb246ICdtb3JlX2hvcml6JyB9LFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzd2l0Y2hQYWdlOiBmdW5jdGlvbihlbCkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSBlbFxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8U2xpZGVWaWV3IDp1cD1cInNob3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCIkZW1pdCgnaGlkZScpXCI+5Y+W5raIPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5paw55qEe3sgc3RyaW5ncy50aXRsZSB9fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJzYXZlXCI+5L+d5a2YPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIj7nu5nor6V7eyBzdHJpbmdzLnRpdGxlIH195ZG95ZCN5bm26ZmE5LiKe3sgc3RyaW5ncy50eXBlX25hbWUgfX3mlbDvvJo8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXJvd1wiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dC1uYW1lXCJcclxuICAgICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInN0cmluZ3MucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXItc3R5bGU9XCJjb2xvcjojYWFhYWFhO1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzPVwiaW5wdXQtbnVtYmVyXCJcclxuICAgICAgICAgIHYtbW9kZWwubnVtYmVyPVwibnVtYmVyXCJcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgbWluPVwiMFwiXHJcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJzdHJpbmdzLnR5cGVfbmFtZSArICfliIYnXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyLXN0eWxlPVwiY29sb3I6I2FhYWFhYTtcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJldmlld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPuaMkemAieS4gOS4quWbvuagh+WSjOminOiJsu+8mjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IHNlbGVjdGVkX2NvbG9yIH1cIj5cclxuICAgICAgICAgIDxpbWcgOnNyYz1cIicuL2ltYWdlcy9pY18nICsgc2VsZWN0ZWRfaWNvbiArICdfYmxhY2tfNDhkcC5wbmcnXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvbi10YWJsZVwiPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICB2LWZvcj1cImljb24gaW4gaWNvbnNcIiA6a2V5PVwiaWNvblwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJbJ2ljb24tY29udGFpbmVyJywgc2VsZWN0ZWRfaWNvbiA9PT0gaWNvbiA/ICdzZWxlY3RlZC1pY29uJyA6ICcnXVwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RlZF9pY29uID0gaWNvblwiXHJcbiAgICAgICAgPjxpbWcgOnNyYz1cIicuL2ltYWdlcy9pY18nICsgaWNvbiArICdfYmxhY2tfNDhkcC5wbmcnXCIgYWx0PVwiXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItdGFibGVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB2LWZvcj1cImNvbG9yIGluIGNvbG9yc1wiIDprZXk9XCJjb2xvclwiXHJcbiAgICAgICAgICA6Y2xhc3M9XCJbJ2NvbG9yJywgc2VsZWN0ZWRfY29sb3IgPT09IGNvbG9yID8gJ3NlbGVjdGVkLWNvbG9yJyA6ICcnXVwiXHJcbiAgICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IGNvbG9yIH1cIlxyXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0ZWRfY29sb3IgPSBjb2xvclwiXHJcbiAgICAgICAgPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvU2xpZGVWaWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbn1cclxuLmxhYmVsIHtcclxuICBtYXJnaW46IDMycHggMzJweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5pbnB1dC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCAzMnB4O1xyXG59XHJcbi5pbnB1dC1uYW1lIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDEycHggOHB4O1xyXG4gIHdpZHRoOiA2NiU7XHJcbn1cclxuLmlucHV0LW51bWJlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4IDEycHggMTJweDtcclxuICB3aWR0aDogMTYlO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4ucHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogNTZweCAzMnB4IDA7XHJcbn1cclxuLnByZXZpZXcgPiAubGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJhY2tncm91bmQ6IHNhbG1vbjtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcbi5pbWFnZS1jb250YWluZXIgaW1ne1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG4uaWNvbi10YWJsZSB7XHJcblx0bWFyZ2luOiAxMnB4IDMycHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdGhlaWdodDogMjQwcHg7XHJcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiA2cHggMTJweCA2cHggMDtcclxufVxyXG4uc2VsZWN0ZWQtaWNvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uaWNvbi1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuLmNvbG9yLXRhYmxlIHtcclxuXHRtYXJnaW46IDMycHggMzJweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0b3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4uY29sb3Ige1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uc2VsZWN0ZWQtY29sb3Ige1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFNsaWRlVmlldyBmcm9tICcuL1NsaWRlVmlldy52dWUnXHJcbmltcG9ydCBJQ09OUyBmcm9tICcuLi9jb21tb24vaWNvbnMnXHJcbmltcG9ydCBDT0xPUlMgZnJvbSAnLi4vY29tbW9uL2NvbG9ycydcclxuaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBzaG93OiBCb29sZWFuLFxyXG4gICAgc3RyaW5nczogT2JqZWN0LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgbnVtYmVyOiB2b2lkIDAsXHJcbiAgICAgIGljb25zOiBJQ09OU1t0aGlzLnN0cmluZ3Mua2V5XSxcclxuICAgICAgc2VsZWN0ZWRfaWNvbjogSUNPTlNbdGhpcy5zdHJpbmdzLmtleV1bMF0sXHJcbiAgICAgIGNvbG9yczogQ09MT1JTLFxyXG4gICAgICBzZWxlY3RlZF9jb2xvcjogQ09MT1JTWzBdLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgU2xpZGVWaWV3XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBpbml0X2RhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSAnJ1xyXG4gICAgICB0aGlzLm51bWJlciA9IHZvaWQgMFxyXG4gICAgICB0aGlzLnNlbGVjdGVkX2ljb24gPSB0aGlzLmljb25zWzBdXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfY29sb3IgPSB0aGlzLmNvbG9yc1swXVxyXG4gICAgfSxcclxuICAgIHNhdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zdCB7IHRpdGxlLCB0eXBlX25hbWUgfSA9IHRoaXMuc3RyaW5nc1xyXG4gICAgICBpZiAodGhpcy5uYW1lID09PSAnJyAmJiB0aGlzLm51bWJlciA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgbWVzc2FnZS5pbmZvKHRpdGxlICsgJ+i/mOayoeacieWQjeWtl+WSjCcgKyB0eXBlX25hbWUgKyAn5YiG5ZGi77yBJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xyXG4gICAgICAgIG1lc3NhZ2UuaW5mbyh0aXRsZSArICfov5jmsqHmnInlkI3lrZflkaLvvIEnKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm51bWJlciA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgbWVzc2FnZS5pbmZvKHRpdGxlICsgJ+i/mOayoeaciee7meS6iCcgKyB0eXBlX25hbWUgKyAn5YiG5ZGi77yBJylcclxuICAgICAgICByZXV0cm5cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCdhZGQnLCB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXHJcbiAgICAgICAgaWNvbjogdGhpcy5zZWxlY3RlZF9pY29uLFxyXG4gICAgICAgIGNvbG9yOiB0aGlzLnNlbGVjdGVkX2NvbG9yLFxyXG4gICAgICAgIGJpcnRodGltZTogRGF0ZS5ub3coKVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmluaXRfZGF0YSgpXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2hpZGUnKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICA8dWw+XHJcbiAgICAgIDxsaSBjbGFzcz1cIml0ZW1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiIDprZXk9XCJpdGVtLmJpcnRodGltZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdXRzaWRlXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kOiBpdGVtLmNvbG9yIH1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJ0b1NyYyhpdGVtLmljb24pXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibnVtYmVyXCI+e3sgKHR5cGUgPT09ICdUYXNrJyA/ICcrJyA6ICctJykgKyBpdGVtLm51bWJlciB9feWIhjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7ICdhcnJvdyc6IHRydWUsICdyb3RhdGU5MCc6IHNob3dbaW5kZXhdIH1cIiBAY2xpY2s9XCJvcGVuKGluZGV4KVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJ0b1NyYygna2V5Ym9hcmRfYXJyb3dfcmlnaHQnKVwiIGFsdD1cIi0+XCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGUtZG93blwiPlxyXG4gICAgICAgIDxkaXYgOmNsYXNzPVwieyAnaW5zaWRlJzogdHJ1ZSwgJ2luc2lkZS1oZWlnaHQnOiBzaG93W2luZGV4XSB9XCIgdi1zaG93PVwic2hvd1tpbmRleF1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBAY2xpY2s9XCJkZWxldGVJdGVtKGluZGV4KVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJ0b1NyYygnZGVsZXRlJylcIiBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgPGRpdj7liKDpmaQ8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvbmVcIiBAY2xpY2s9XCJkb25lKGluZGV4KVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJ0b1NyYygnZG9uZScpXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXY+5a6M5oiQPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RyYW5zaXRpb24+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cIm5ld1wiIEBjbGljaz1cImFkZFwiPisg5re75Yqg5LiA5Liqe3sgdHlwZV9zdHJpbmcgfX08L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5saXN0IHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5vdXRzaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzJjM2U1MDtcclxuICBtYXJnaW46IDhweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmljb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDE2JTtcclxufVxyXG4uaWNvbiB7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG59XHJcbi5uYW1lIHtcclxuICB3aWR0aDogNTQlO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcbi5udW1iZXIge1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFycm93IHtcclxuICB3aWR0aDogMTQlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMjRzIGVhc2U7XHJcbn1cclxuLnJvdGF0ZTkwIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5pbnNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLmluc2lkZS1oZWlnaHQge1xyXG4gIGhlaWdodDogNzJweDtcclxufVxyXG4uc2xpZGUtZG93bi1lbnRlci1hY3RpdmUsIC5zbGlkZS1kb3duLWxlYXZlLWFjdGl2ZSB7XHJcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC4yNHMgZWFzZTtcclxufVxyXG5cclxuLmRlbGV0ZSwgLmRvbmUge1xyXG4gIG1hcmdpbjogOHB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubmV3IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyYzNlNTAxMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogIzJjM2U1MDY2O1xyXG59XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL01lc3NhZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGxpc3Q6IEFycmF5LFxyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlX3N0cmluZzogdGhpcy50eXBlID09PSAnVGFzaycgPyAn5Lu75YqhJyA6ICflpZblirEnLFxyXG4gICAgICBzaG93OiBBcnJheSh0aGlzLmxpc3QubGVuZ3RoKS5maWxsKGZhbHNlKSxcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBsaXN0OiBmdW5jdGlvbihudikge1xyXG4gICAgICB0aGlzLnNob3cgPSBBcnJheShudi5sZW5ndGgpLmZpbGwoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICB0b1NyYzogZnVuY3Rpb24oaWNvbikge1xyXG4gICAgICByZXR1cm4gJy4vaW1hZ2VzL2ljXycgKyBpY29uICsgJ19ibGFja180OGRwLnBuZydcclxuICAgIH0sXHJcbiAgICBvcGVuOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICB0aGlzLnNob3cgPSB0aGlzLnNob3cubWFwKCh2LCBpKSA9PiBpID09PSBpbmRleCA/ICF2IDogZmFsc2UpXHJcbiAgICB9LFxyXG4gICAgYWRkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnYWRkJylcclxuICAgICAgdGhpcy5zaG93ID0gdGhpcy5zaG93Lm1hcCgoKSA9PiBmYWxzZSlcclxuICAgIH0sXHJcbiAgICBkZWxldGVJdGVtOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBpZiAoY29uZmlybSgn56Gu5a6a5Yig6ZmkJyArIHRoaXMudHlwZV9zdHJpbmcgKyAnIFwiJyArIHRoaXMubGlzdFtpbmRleF0ubmFtZSArICdcIiA/JykpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdkZWxldGUnLCBpbmRleClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRvbmU6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIGlmIChjb25maXJtKCfnoa7lrprlrozmiJAnICsgdGhpcy50eXBlX3N0cmluZyArICcgXCInICsgdGhpcy5saXN0W2luZGV4XS5uYW1lICsgJ1wiID8nKSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2RvbmUnLCBpbmRleClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZS1kb3duXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiIHYtaWY9XCJzaG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+e3sgY29udGVudCB9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC90cmFuc2l0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmZhZGUtZG93bi1lbnRlci1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbjogZmFkZS1kb3duIC41cyBlYXNlO1xyXG59XHJcbi5mYWRlLWRvd24tbGVhdmUtYWN0aXZlIHtcclxuICBhbmltYXRpb246IGZhZGUtZG93biAuNXMgcmV2ZXJzZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtZG93biB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH0gdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTAwO1xyXG4gIH1cclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGV4dCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggI2NjY2NjY2NjO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgY29udGVudDogU3RyaW5nLFxyXG4gICAgZHVyYXRpb246IE51bWJlcixcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcclxuICAgIH0sIHRoaXMuZHVyYXRpb24gKiAxMDAwKVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDx1bCBpZD1cIm5hdmlnYXRpb25cIj5cclxuICAgIDxsaSB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiIDprZXk9XCJpdGVtLnRpdGxlXCIgQGNsaWNrPVwiJGVtaXQoJ2l0ZW0tY2xpY2snLCBpdGVtLmVsKVwiPlxyXG4gICAgICA8aW1nIDpzcmM9XCJnZXRTcmMoaXRlbSlcIiA6YWx0PVwiaXRlbS50aXRsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj57eyBpdGVtLnRpdGxlIH19PC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4jbmF2aWdhdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTRweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxubGkge1xyXG4gIHdpZHRoOiA3MnB4O1xyXG59XHJcbmltZyB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA4cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgbGlzdDogQXJyYXksXHJcbiAgICBhY3RpdmU6IFN0cmluZyxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdldFNyYzogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICByZXR1cm4gJy4vaW1hZ2VzL2ljXycgKyBpdGVtLmljb24gKyAnX2JsYWNrXzQ4ZHAnICsgKGl0ZW0uZWwgIT09IHRoaXMuYWN0aXZlID8gJ19ncmV5JyA6ICcnKSArICcucG5nJ1xyXG4gICAgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJzY29yZS1wYW5lbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxpbmUtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+PHNwYW4gY2xhc3M9XCJzY29yZVwiPnt7IHNjb3JlIH19PC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInN1YnRpdGxlXCI+57Sv6K6h5YiG5pWwPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4jc2NvcmUtcGFuZWwge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmxpbmUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG59XHJcbi5saW5lIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDYwcHg7XHJcbn1cclxuLnNjb3JlIHtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbn1cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogIzJjM2U1MDY2O1xyXG59XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNjb3JlOiBOdW1iZXJcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8dHJhbnNpdGlvbiBuYW1lPVwic2xpZGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiB2LWlmPVwidXBcIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC90cmFuc2l0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnNsaWRlLWVudGVyLWFjdGl2ZSB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAuNXM7XHJcbn1cclxuLnNsaWRlLWxlYXZlLWFjdGl2ZSB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAuNXMgcmV2ZXJzZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB6LWluZGV4OiAxMDE7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgdXA6IEJvb2xlYW4sXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImluY2VudGl2ZVwiPlxyXG4gICAgPFNjb3JlUGFuZWwgOnNjb3JlPVwic2NvcmVcIj48L1Njb3JlUGFuZWw+XHJcbiAgICA8TWFpbkxpc3RcclxuICAgICAgOnR5cGU9XCInSW5jZW50aXZlJ1wiXHJcbiAgICAgIDpsaXN0PVwiaW5jZW50aXZlX2xpc3RcIlxyXG4gICAgICBAYWRkPVwic2hvd19lZGl0b3IgPSB0cnVlXCJcclxuICAgICAgQGRlbGV0ZT1cImRlbGV0ZV9pdGVtXCJcclxuICAgICAgQGRvbmU9XCJkb25lXCJcclxuICAgID48L01haW5MaXN0PlxyXG4gICAgPEVkaXRWaWV3XHJcbiAgICAgIDpzdHJpbmdzPVwiZWRpdF9zdHJpbmdzXCJcclxuICAgICAgOnNob3c9XCJzaG93X2VkaXRcIlxyXG4gICAgICBAaGlkZT1cInNob3dfZWRpdCA9IGZhbHNlXCJcclxuICAgICAgQGFkZD1cImFkZF9uZXdfaW5jZW50aXZlXCJcclxuICAgID48L0VkaXRWaWV3PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgU2NvcmVQYW5lbCBmcm9tICcuLi9jb21wb25lbnRzL1Njb3JlUGFuZWwudnVlJ1xyXG5pbXBvcnQgTWFpbkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9NYWluTGlzdC52dWUnXHJcbmltcG9ydCBFZGl0VmlldyBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRWaWV3LnZ1ZSdcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi4vc3RvcmFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBTY29yZVBhbmVsLFxyXG4gICAgTWFpbkxpc3QsXHJcbiAgICBFZGl0Vmlld1xyXG4gIH0sXHJcbiAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzY29yZTogMCxcclxuICAgICAgaW5jZW50aXZlX2xpc3Q6IFtdLFxyXG4gICAgICBzaG93X2VkaXQ6IGZhbHNlLFxyXG4gICAgICBlZGl0X3N0cmluZ3M6IHtcclxuICAgICAgICBrZXk6ICdpbmNlbnRpdmUnLFxyXG4gICAgICAgIHRpdGxlOiAn5aWW5YqxJyxcclxuICAgICAgICB0eXBlX25hbWU6ICfmtojogJcnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn5L6L5aaC5ri45oiP44CB6LSt54mp562JJyxcclxuICAgICAgfSxcclxuICAgICAgZG9uZV9saXN0OiBbXSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGluY2VudGl2ZV9saXN0ID0gc3RvcmFnZS5nZXQoJ2luY2VudGl2ZXMnKVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5jZW50aXZlX2xpc3QpKSB7XHJcbiAgICAgIHRoaXMuaW5jZW50aXZlX2xpc3QgPSBpbmNlbnRpdmVfbGlzdFxyXG4gICAgfVxyXG4gICAgbGV0IHNjb3JlID0gc3RvcmFnZS5nZXQoJ3Njb3JlJylcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNjb3JlKSkge1xyXG4gICAgICB0aGlzLnNjb3JlID0gc2NvcmVcclxuICAgIH1cclxuICAgIGxldCBkb25lX2xpc3QgPSBzdG9yYWdlLmdldCgnZG9uZXMnKVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZG9uZV9saXN0KSkge1xyXG4gICAgICB0aGlzLmRvbmVfbGlzdCA9IGRvbmVfbGlzdFxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHRoaXMuc3RvcmFnZV9hbGwoKSlcclxuICB9LFxyXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24oKSB7IFxyXG4gICAgdGhpcy5zdG9yYWdlX2FsbCgpXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4gdGhpcy5zdG9yYWdlX2FsbCgpKVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYWRkX25ld19pbmNlbnRpdmU6IGZ1bmN0aW9uKG5ld19pbmNlbnRpdmUpIHtcclxuICAgICAgdGhpcy5pbmNlbnRpdmVfbGlzdC5wdXNoKG5ld19pbmNlbnRpdmUpXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlX2l0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIHRoaXMuaW5jZW50aXZlX2xpc3QgPSB0aGlzLmluY2VudGl2ZV9saXN0LmZpbHRlcigodiwgaSkgPT4gaSAhPT0gaW5kZXgpXHJcbiAgICB9LFxyXG4gICAgZG9uZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuaW5jZW50aXZlX2xpc3RbaW5kZXhdKVxyXG4gICAgICB0aGlzLnNjb3JlIC09IGl0ZW0ubnVtYmVyXHJcbiAgICAgIGl0ZW0uZG9uZXRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgIGl0ZW0udHlwZSA9ICdpbmNlbnRpdmUnXHJcbiAgICAgIHRoaXMuZG9uZV9saXN0LnB1c2goaXRlbSlcclxuICAgIH0sXHJcbiAgICBzdG9yYWdlX2FsbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHN0b3JhZ2Uuc2V0KCdpbmNlbnRpdmVzJywgdGhpcy5pbmNlbnRpdmVfbGlzdClcclxuICAgICAgc3RvcmFnZS5zZXQoJ3Njb3JlJywgdGhpcy5zY29yZSlcclxuICAgICAgc3RvcmFnZS5zZXQoJ2RvbmVzJywgdGhpcy5kb25lX2xpc3QpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImRvbmUtcmVjb3JkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrXCIgQGNsaWNrPVwiJGVtaXQoJ2JhY2snKVwiPui/lOWbnjwvZGl2PlxyXG4gICAgICDljoblj7LmlbDmja5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIml0ZW1cIiB2LWZvcj1cIml0ZW0gaW4gZG9uZXNcIiA6a2V5PVwiaXRlbS5kb25ldGltZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPnt7IHRvRGF0ZVN0cmluZyhpdGVtLmRvbmV0aW1lKSB9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnt7IGl0ZW0ubmFtZSB9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibnVtYmVyXCI+e3sgKGl0ZW0udHlwZSA9PT0gJ3Rhc2snID8gJysnIDogJy0nKSArIGl0ZW0ubnVtYmVyfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmRvbmUtcmVjb3JkIHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuLmJhY2sge1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLml0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBtYXJnaW46IDZweCAwO1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG4ubnVtYmVyIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi9zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZG9uZXM6IFtdXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgIGxldCBkb25lcyA9IHN0b3JhZ2UuZ2V0KCdkb25lcycpXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkb25lcykpIHtcclxuICAgICAgdGhpcy5kb25lcyA9IGRvbmVzLnJldmVyc2UoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG9EYXRlU3RyaW5nOiBmdW5jdGlvbihuKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuKVxyXG4gICAgICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJ+aciCcgKyBkYXRlLmdldERhdGUoKSArICfml6UnXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cIm1vcmVcIiB2LWlmPVwicGF0aCA9PT0gJydcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsb2dvLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIDpzcmM9XCInLi9pbWFnZXMvbG9nby5wbmcnXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjojZmYyYzAwXCI+VDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiNmZjllMDBcIj5OPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IzAwOTk5OVwiPkk8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6I2ZmMmMwMFwiPlRhc2s8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjojZmY5ZTAwXCI+QW5kPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IzAwOTk5OVwiPkluY2VudGl2ZTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0XCIgOmtleT1cIml0ZW0ubmFtZVwiIEBjbGljaz1cIml0ZW0uY2xpY2tcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIDpzcmM9XCInLi9pbWFnZXMvaWNfJyArIGl0ZW0uaWNvbiArICdfYmxhY2tfNDhkcC5wbmcnXCI+XHJcbiAgICAgICAgPGRpdj57e2l0ZW0ubmFtZX19PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+emh1ZnVnZTwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxjb21wb25lbnQgdi1lbHNlIDppcz1cInBhdGhcIiBAYmFjaz1cInBhdGggPSAnJ1wiPjwvY29tcG9uZW50PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMjhweDtcclxufVxyXG4udGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwIDU0cHg7XHJcbn1cclxuLml0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgbWFyZ2luOiAxMnB4IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uYXV0aG9yIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA2MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2NjY2NjYztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0gXHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRG9uZVJlY29yZCBmcm9tICcuL0RvbmVSZWNvcmQudnVlJ1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuLi8uLi9zdG9yYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIERvbmVSZWNvcmRcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGF0aDogJycsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7IG5hbWU6ICflrozmiJDorrDlvZUnLCBpY29uOiAnZG9uZScsIGNsaWNrOiAoKSA9PiB0aGlzLmdvdG8oJ0RvbmVSZWNvcmQnKSB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+WOhuWPsuS7u+WKoScsIGljb246ICdhc3NpZ25tZW50JywgY2xpY2s6IHRoaXMudG9fYmVfY29udGludWVkIH0sXHJcbiAgICAgICAgeyBuYW1lOiAn5Y6G5Y+y5aWW5YqxJywgaWNvbjogJ2J1YmJsZV9jaGFydCcsIGNsaWNrOiB0aGlzLnRvX2JlX2NvbnRpbnVlZCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ+a4hemZpOaVsOaNricsIGljb246ICdkZWxldGUnLCBjbGljazogdGhpcy5jbGVhciB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdvdG86IGZ1bmN0aW9uKHBhdGgpIHtcclxuICAgICAgdGhpcy5wYXRoID0gcGF0aFxyXG4gICAgfSxcclxuICAgIHRvX2JlX2NvbnRpbnVlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGFsZXJ0KCfov5jlnKjlu7rorr7kuK0uLicpXHJcbiAgICB9LFxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzdG9yYWdlLmNsZWFyKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGlkPVwidGFza1wiPlxyXG4gICAgPFNjb3JlUGFuZWwgOnNjb3JlPVwic2NvcmVcIj48L1Njb3JlUGFuZWw+XHJcbiAgICA8TWFpbkxpc3RcclxuICAgICAgOnR5cGU9XCInVGFzaydcIlxyXG4gICAgICA6bGlzdD1cInRhc2tfbGlzdFwiXHJcbiAgICAgIEBhZGQ9XCJzaG93X2VkaXRvciA9IHRydWVcIlxyXG4gICAgICBAZGVsZXRlPVwiZGVsZXRlX2l0ZW1cIlxyXG4gICAgICBAZG9uZT1cImRvbmVcIlxyXG4gICAgPjwvTWFpbkxpc3Q+XHJcbiAgICA8RWRpdFZpZXdcclxuICAgICAgOnN0cmluZ3M9XCJlZGl0X3N0cmluZ3NcIlxyXG4gICAgICA6c2hvdz1cInNob3dfZWRpdG9yXCJcclxuICAgICAgQGhpZGU9XCJzaG93X2VkaXRvciA9IGZhbHNlXCJcclxuICAgICAgQGFkZD1cImFkZF9uZXdfdGFza1wiXHJcbiAgICA+PC9FZGl0Vmlldz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFNjb3JlUGFuZWwgZnJvbSAnLi4vY29tcG9uZW50cy9TY29yZVBhbmVsLnZ1ZSdcclxuaW1wb3J0IE1haW5MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkxpc3QudnVlJ1xyXG5pbXBvcnQgRWRpdFZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9FZGl0Vmlldy52dWUnXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4uL3N0b3JhZ2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgU2NvcmVQYW5lbCxcclxuICAgIE1haW5MaXN0LFxyXG4gICAgRWRpdFZpZXdcclxuICB9LFxyXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIHRhc2tfbGlzdDogW1xyXG4gICAgICAgIHtuYW1lOifngrnlh7vlj7Povrnnrq3lpLTlrozmiJDor6Xku7vliqEnLG51bWJlcjoxLGljb246J3N0YXInLGNvbG9yOicjYmJmOGY4JyxiaXJ0aHRpbWU6MH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHNob3dfZWRpdG9yOiBmYWxzZSxcclxuICAgICAgZWRpdF9zdHJpbmdzOiB7XHJcbiAgICAgICAga2V5OiAndGFzaycsXHJcbiAgICAgICAgdGl0bGU6ICfku7vliqEnLFxyXG4gICAgICAgIHR5cGVfbmFtZTogJ+WlluWKsScsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICfkvovlpoLor7vkuabjgIHlgZrkvZzkuJrnrYknLFxyXG4gICAgICB9LFxyXG4gICAgICBkb25lX2xpc3Q6IFtdXHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgIGxldCB0YXNrX2xpc3QgPSBzdG9yYWdlLmdldCgndGFza3MnKVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFza19saXN0KSkge1xyXG4gICAgICB0aGlzLnRhc2tfbGlzdCA9IHRhc2tfbGlzdFxyXG4gICAgfVxyXG4gICAgbGV0IHNjb3JlID0gc3RvcmFnZS5nZXQoJ3Njb3JlJylcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHNjb3JlKSkge1xyXG4gICAgICB0aGlzLnNjb3JlID0gc2NvcmVcclxuICAgIH1cclxuICAgIGxldCBkb25lX2xpc3QgPSBzdG9yYWdlLmdldCgnZG9uZXMnKVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZG9uZV9saXN0KSkge1xyXG4gICAgICB0aGlzLmRvbmVfbGlzdCA9IGRvbmVfbGlzdFxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHRoaXMuc3RvcmFnZV9hbGwoKSlcclxuICB9LFxyXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnN0b3JhZ2VfYWxsKClcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB0aGlzLnN0b3JhZ2VfYWxsKCkpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhZGRfbmV3X3Rhc2s6IGZ1bmN0aW9uKG5ld190YXNrKSB7XHJcbiAgICAgIHRoaXMudGFza19saXN0LnB1c2gobmV3X3Rhc2spXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlX2l0ZW06IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgIHRoaXMudGFza19saXN0ID0gdGhpcy50YXNrX2xpc3QuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBpbmRleClcclxuICAgIH0sXHJcbiAgICBkb25lOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50YXNrX2xpc3RbaW5kZXhdKVxyXG4gICAgICB0aGlzLnNjb3JlICs9IGl0ZW0ubnVtYmVyXHJcbiAgICAgIGl0ZW0uZG9uZXRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgIGl0ZW0udHlwZSA9ICd0YXNrJ1xyXG4gICAgICB0aGlzLmRvbmVfbGlzdC5wdXNoKGl0ZW0pXHJcbiAgICB9LFxyXG4gICAgc3RvcmFnZV9hbGw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBzdG9yYWdlLnNldCgndGFza3MnLCB0aGlzLnRhc2tfbGlzdClcclxuICAgICAgc3RvcmFnZS5zZXQoJ3Njb3JlJywgdGhpcy5zY29yZSlcclxuICAgICAgc3RvcmFnZS5zZXQoJ2RvbmVzJywgdGhpcy5kb25lX2xpc3QpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJyb290XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKF92bS5wYWdlLCB7IHRhZzogXCJjb21wb25lbnRcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIk5hdmlnYXRpb25cIiwge1xuICAgICAgICBhdHRyczogeyBsaXN0OiBfdm0ucGFnZXMsIGFjdGl2ZTogX3ZtLnBhZ2UgfSxcbiAgICAgICAgb246IHsgXCJpdGVtLWNsaWNrXCI6IF92bS5zd2l0Y2hQYWdlIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiU2xpZGVWaWV3XCIsIHsgYXR0cnM6IHsgdXA6IF92bS5zaG93IH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoZWFkZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImhpZGVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLmlrDnmoRcIiArIF92bS5fcyhfdm0uc3RyaW5ncy50aXRsZSkpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLCBvbjogeyBjbGljazogX3ZtLnNhdmUgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5L+d5a2YXCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCLnu5nor6VcIiArXG4gICAgICAgICAgICBfdm0uX3MoX3ZtLnN0cmluZ3MudGl0bGUpICtcbiAgICAgICAgICAgIFwi5ZG95ZCN5bm26ZmE5LiKXCIgK1xuICAgICAgICAgICAgX3ZtLl9zKF92bS5zdHJpbmdzLnR5cGVfbmFtZSkgK1xuICAgICAgICAgICAgXCLmlbDvvJpcIlxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LXJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1uYW1lXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5zdHJpbmdzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlci1zdHlsZVwiOiBcImNvbG9yOiNhYWFhYWE7XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWwubnVtYmVyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubnVtYmVyLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgbnVtYmVyOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LW51bWJlclwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgbWluOiBcIjBcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uc3RyaW5ncy50eXBlX25hbWUgKyBcIuWIhlwiLFxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlci1zdHlsZVwiOiBcImNvbG9yOiNhYWFhYWE7XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubnVtYmVyIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgX3ZtLm51bWJlciA9IF92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsdXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcmV2aWV3XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIuaMkemAieS4gOS4quWbvuagh+WSjOminOiJsu+8mlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltYWdlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZDogX3ZtLnNlbGVjdGVkX2NvbG9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6IFwiLi9pbWFnZXMvaWNfXCIgKyBfdm0uc2VsZWN0ZWRfaWNvbiArIFwiX2JsYWNrXzQ4ZHAucG5nXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uLXRhYmxlXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5pY29ucywgZnVuY3Rpb24oaWNvbikge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogaWNvbixcbiAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICBcImljb24tY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX2ljb24gPT09IGljb24gPyBcInNlbGVjdGVkLWljb25cIiA6IFwiXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfaWNvbiA9IGljb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc3JjOiBcIi4vaW1hZ2VzL2ljX1wiICsgaWNvbiArIFwiX2JsYWNrXzQ4ZHAucG5nXCIsXG4gICAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xvci10YWJsZVwiIH0sXG4gICAgICAgIF92bS5fbChfdm0uY29sb3JzLCBmdW5jdGlvbihjb2xvcikge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGNvbG9yLFxuICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJjb2xvclwiLFxuICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfY29sb3IgPT09IGNvbG9yID8gXCJzZWxlY3RlZC1jb2xvclwiIDogXCJcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmQ6IGNvbG9yIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX2NvbG9yID0gY29sb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIHsga2V5OiBpdGVtLmJpcnRodGltZSwgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvdXRzaWRlXCIsIHN0eWxlOiB7IGJhY2tncm91bmQ6IGl0ZW0uY29sb3IgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbi1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0udG9TcmMoaXRlbS5pY29uKSwgYWx0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJudW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoKF92bS50eXBlID09PSBcIlRhc2tcIiA/IFwiK1wiIDogXCItXCIpICsgaXRlbS5udW1iZXIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi5YiGXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBhcnJvdzogdHJ1ZSwgcm90YXRlOTA6IF92bS5zaG93W2luZGV4XSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlbihpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS50b1NyYyhcImtleWJvYXJkX2Fycm93X3JpZ2h0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiLT5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwic2xpZGUtZG93blwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dbaW5kZXhdXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGluc2lkZTogdHJ1ZSwgXCJpbnNpZGUtaGVpZ2h0XCI6IF92bS5zaG93W2luZGV4XSB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlSXRlbShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnRvU3JjKFwiZGVsZXRlXCIpLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIuWIoOmZpFwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvbmUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS50b1NyYyhcImRvbmVcIiksIGFsdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi5a6M5oiQXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJuZXdcIiwgb246IHsgY2xpY2s6IF92bS5hZGQgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiKyDmt7vliqDkuIDkuKpcIiArIF92bS5fcyhfdm0udHlwZV9zdHJpbmcpKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyYW5zaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImZhZGUtZG93blwiIH0gfSwgW1xuICAgIF92bS5zaG93XG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY29udGVudCkpXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidWxcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcIm5hdmlnYXRpb25cIiB9IH0sXG4gICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwibGlcIixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaXRlbS50aXRsZSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaXRlbS1jbGlja1wiLCBpdGVtLmVsKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uZ2V0U3JjKGl0ZW0pLCBhbHQ6IGl0ZW0udGl0bGUgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpdGxlKSldKVxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcInNjb3JlLXBhbmVsXCIgfSB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2NvcmVcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uc2NvcmUpKV0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCIgfSwgW192bS5fdihcIue0r+iuoeWIhuaVsFwiKV0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUtY29udGFpbmVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaW5lXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0cmFuc2l0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJzbGlkZVwiIH0gfSwgW1xuICAgIF92bS51cFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBpZDogXCJpbmNlbnRpdmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJTY29yZVBhbmVsXCIsIHsgYXR0cnM6IHsgc2NvcmU6IF92bS5zY29yZSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiTWFpbkxpc3RcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcIkluY2VudGl2ZVwiLCBsaXN0OiBfdm0uaW5jZW50aXZlX2xpc3QgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBhZGQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnNob3dfZWRpdG9yID0gdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsZXRlOiBfdm0uZGVsZXRlX2l0ZW0sXG4gICAgICAgICAgZG9uZTogX3ZtLmRvbmVcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJFZGl0Vmlld1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHN0cmluZ3M6IF92bS5lZGl0X3N0cmluZ3MsIHNob3c6IF92bS5zaG93X2VkaXQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBoaWRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zaG93X2VkaXQgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYWRkOiBfdm0uYWRkX25ld19pbmNlbnRpdmVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImRvbmUtcmVjb3JkXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYWNrXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImJhY2tcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIui/lOWbnlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgIOWOhuWPsuaVsOaNrlxcbiAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmRvbmVzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaXRlbS5kb25ldGltZSwgc3RhdGljQ2xhc3M6IFwiaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b0RhdGVTdHJpbmcoaXRlbS5kb25ldGltZSkpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcygoaXRlbS50eXBlID09PSBcInRhc2tcIiA/IFwiK1wiIDogXCItXCIpICsgaXRlbS5udW1iZXIpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0ucGF0aCA9PT0gXCJcIlxuICAgID8gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtb3JlXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nby1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi4vaW1hZ2VzL2xvZ28ucG5nXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXRlbVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBpdGVtLmNsaWNrIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIuL2ltYWdlcy9pY19cIiArIGl0ZW0uaWNvbiArIFwiX2JsYWNrXzQ4ZHAucG5nXCIgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImF1dGhvclwiIH0sIFtfdm0uX3YoXCJ6aHVmdWdlXCIpXSlcbiAgICAgIF0pXG4gICAgOiBfYyhfdm0ucGF0aCwge1xuICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ucGF0aCA9IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjZmYyYzAwXCIgfSB9LCBbX3ZtLl92KFwiVFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiNmZjllMDBcIiB9IH0sIFtfdm0uX3YoXCJOXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzAwOTk5OVwiIH0gfSwgW192bS5fdihcIklcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiNmZjJjMDBcIiB9IH0sIFtfdm0uX3YoXCJUYXNrXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiI2ZmOWUwMFwiIH0gfSwgW192bS5fdihcIkFuZFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiMwMDk5OTlcIiB9IH0sIFtfdm0uX3YoXCJJbmNlbnRpdmVcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwidGFza1wiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcIlNjb3JlUGFuZWxcIiwgeyBhdHRyczogeyBzY29yZTogX3ZtLnNjb3JlIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJNYWluTGlzdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiVGFza1wiLCBsaXN0OiBfdm0udGFza19saXN0IH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgYWRkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zaG93X2VkaXRvciA9IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbGV0ZTogX3ZtLmRlbGV0ZV9pdGVtLFxuICAgICAgICAgIGRvbmU6IF92bS5kb25lXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRWRpdFZpZXdcIiwge1xuICAgICAgICBhdHRyczogeyBzdHJpbmdzOiBfdm0uZWRpdF9zdHJpbmdzLCBzaG93OiBfdm0uc2hvd19lZGl0b3IgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBoaWRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5zaG93X2VkaXRvciA9IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZGQ6IF92bS5hZGRfbmV3X3Rhc2tcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwM2FkYTc3MlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDY3ZmE4N2Ymc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVjNTYzZTUyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0Vmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNjdmYTg3ZiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDY3ZmE4N2Ymc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiMWYyYTcmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjI4MGM0ZjIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGIxZjJhNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiMWYyYTcmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWI4MjA1ZiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2UzNmY0MDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViODIwNWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViODIwNWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MTQ0MGI3OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYWMzMTYyMzBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODE0NDBiNzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODE0NDBiNzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NvcmVQYW5lbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNzM0YjA3YyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYTYwNzJjZWVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTczNGIwN2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTczNGIwN2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlYjA4ZTE0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YzNjMjI5ZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlYjA4ZTE0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TbGlkZVZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmViMDhlMTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9uZVJlY29yZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYTFkNjYxOSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzkzN2VjY2VcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmExZDY2MTkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmExZDY2MTkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTEwNzYxODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImRlNjY4YThhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTA3NjE4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTEwNzYxODgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvKipcbiAqIFRyYW5zbGF0ZXMgdGhlIGxpc3QgZm9ybWF0IHByb2R1Y2VkIGJ5IGNzcy1sb2FkZXIgaW50byBzb21ldGhpbmdcbiAqIGVhc2llciB0byBtYW5pcHVsYXRlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxjb2RlXFxcXE5vZGVcXFxccHJvamVjdFxcXFx0bmlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiYTViZDkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiYTViZDkwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiYTViZDkwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwJlwiIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICcjNjFDQUNBJyxcclxuICAnIzdEQ0FDQScsXHJcbiAgJyMxRjdGN0YnLFxyXG4gICcjMzM4NTg1JyxcclxuICAnIzJFOTQ5NCcsXHJcbiAgJyM0MTU5QTcnLFxyXG4gICcjNDQ1Nzk2JyxcclxuICAnIzJDNDM4RicsXHJcbiAgJyM3Mjg5RDMnLFxyXG4gICcjOEM5REQzJyxcclxuICAnIzVGNDFBOScsXHJcbiAgJyM1QzQ0OTgnLFxyXG4gICcjNDkyQzkxJyxcclxuICAnIzhFNzJENCcsXHJcbiAgJyNBMThDRDQnLFxyXG4gICcjODAzOUE1JyxcclxuICAnIzc2M0Q5NCcsXHJcbiAgJyM2QTI2OEQnLFxyXG4gICcjQUY2QkQyJyxcclxuICAnI0I4ODZEMicsXHJcbiAgJyNDODNFODknLFxyXG4gICcjQjM0NDgxJyxcclxuICAnI0FCMkE3MCcsXHJcbiAgJyNFMzZFQUUnLFxyXG4gICcjRTM4REJDJyxcclxuICAnI0QzMzQzNCcsXHJcbiAgJyNGNzRDNEMnLFxyXG4gICcjREQ1NDU0JyxcclxuICAnI0ZCNzk3OScsXHJcbiAgJyNGQjlDOUMnLFxyXG4gICcjRkJCNDc5JyxcclxuICAnI0Y3OUE0QycsXHJcbiAgJyNERDkyNTQnLFxyXG4gICcjRDM3QzM0JyxcclxuICAnI0ZCQzc5QycsXHJcbiAgJyNGN0MyNEMnLFxyXG4gICcjRERCMzU0JyxcclxuICAnI0QzQTIzNCcsXHJcbiAgJyNGQkQzNzknLFxyXG4gICcjRkJERDlDJyxcclxuICAnI0Y3REQ0QycsXHJcbiAgJyNEREM5NTQnLFxyXG4gICcjRDNCQjM0JyxcclxuICAnI0ZCRTc3OScsXHJcbiAgJyNGQkVEOUMnLFxyXG4gICcjRjRGNjRDJyxcclxuICAnI0RCREQ1NCcsXHJcbiAgJyNEMUQzMzQnLFxyXG4gICcjRjlGQjc5JyxcclxuICAnI0Y5RkI5QicsXHJcbiAgJyNBRkU2NDcnLFxyXG4gICcjQTJDRTRGJyxcclxuICAnIzkxQzUzMCcsXHJcbiAgJyNDN0YyNzUnLFxyXG4gICcjRDNGMjk2JyxcclxuICAnIzhDRTI4QycsXHJcbiAgJyM2REUyNkQnLFxyXG4gICcjMjlBOTI5JyxcclxuICAnIzQzQjE0MycsXHJcbiAgJyMzREM2M0QnLFxyXG5dXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB0YXNrOiBbXHJcbiAgICBcImFzc2lnbm1lbnRcIixcclxuICAgIFwiYnJ1c2hcIixcclxuICAgIFwiY29kZVwiLFxyXG4gICAgXCJjb2xvcl9sZW5zXCIsXHJcbiAgICBcImRhdGVfcmFuZ2VcIixcclxuICAgIFwiZGVzY3JpcHRpb25cIixcclxuICAgIFwiZGVza3RvcF93aW5kb3dzXCIsXHJcbiAgICBcImRpcmVjdGlvbnNfYmlrZVwiLFxyXG4gICAgXCJkaXJlY3Rpb25zX3J1blwiLFxyXG4gICAgXCJkaXJlY3Rpb25zX3dhbGtcIixcclxuICAgIFwiZG9fbm90X2Rpc3R1cmJcIixcclxuICAgIFwiZXJyb3Jfb3V0bGluZVwiLFxyXG4gICAgXCJldmVudFwiLFxyXG4gICAgXCJmaWx0ZXJfZHJhbWFcIixcclxuICAgIFwiZmlsdGVyX2hkclwiLFxyXG4gICAgXCJmaXRuZXNzX2NlbnRlclwiLFxyXG4gICAgXCJmbGFnXCIsXHJcbiAgICBcImdyb3VwX3dvcmtcIixcclxuICAgIFwiZ190cmFuc2xhdGVcIixcclxuICAgIFwiaGVhcmluZ1wiLFxyXG4gICAgXCJob3RlbFwiLFxyXG4gICAgXCJpbXBvcnRfY29udGFjdHNcIixcclxuICAgIFwia2l0Y2hlblwiLFxyXG4gICAgXCJsaWdodGJ1bGJfb3V0bGluZVwiLFxyXG4gICAgXCJsb2NhbF9saWJyYXJ5XCIsXHJcbiAgICBcIm11c2ljX25vdGVcIixcclxuICAgIFwicGV0c1wiLFxyXG4gICAgXCJyZWNvcmRfdm9pY2Vfb3ZlclwiLFxyXG4gICAgXCJzY2hlZHVsZVwiLFxyXG4gICAgXCJzdGFyXCIsXHJcbiAgICBcInN0eWxlXCIsXHJcbiAgICBcInRleHRzbXNcIixcclxuICAgIFwidGhlYXRlcnNcIixcclxuICAgIFwid2FybmluZ1wiXHJcbiAgXSxcclxuICBpbmNlbnRpdmU6IFtcclxuICAgIFwiZ2FtZXBhZFwiLFxyXG4gICAgXCJsb2NhbF9iYXJcIixcclxuICAgIFwibG9jYWxfY2FmZVwiLFxyXG4gICAgXCJsb2NhbF9mbG9yaXN0XCIsXHJcbiAgICBcInJlc3RhdXJhbnRcIixcclxuICAgIFwicmVzdGF1cmFudF9tZW51XCIsXHJcbiAgICBcInNob3BwaW5nX2NhcnRcIixcclxuICAgIFwidmlkZW9nYW1lX2Fzc2V0XCIsXHJcbiAgICBcImxpZ2h0YnVsYl9vdXRsaW5lXCIsXHJcbiAgICBcInN0YXJcIixcclxuICAgIFwic3R5bGVcIlxyXG4gIF1cclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2N2ZhODdmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXRWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0VkaXRWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2N2ZhODdmJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNjdmYTg3ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDY3ZmE4N2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDY3ZmE4N2YnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXRWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjdmYTg3ZiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNjdmYTg3ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvRWRpdFZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXRWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDY3ZmE4N2Ymc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDY3ZmE4N2Ymc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdFZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2N2ZhODdmJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYWluTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRiMWYyYTcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWluTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTRiMWYyYTcmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE0YjFmMmE3XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcY29kZVxcXFxOb2RlXFxcXHByb2plY3RcXFxcdG5pXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNGIxZjJhNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNGIxZjJhNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0YjFmMmE3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE0YjFmMmE3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9NYWluTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGIxZjJhNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNGIxZjJhNyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWluTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTRiMWYyYTcmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YjgyMDVmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ1YjgyMDVmJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NWI4MjA1ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDViODIwNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDViODIwNWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1YjgyMDVmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1YjgyMDVmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9NZXNzYWdlL01lc3NhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDViODIwNWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NWI4MjA1ZiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NWI4MjA1ZiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCBNZXNzYWdlIGZyb20gJy4vTWVzc2FnZS52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaW5mbzogZnVuY3Rpb24gKGNvbnRlbnQsIGR1cmF0aW9uPTMpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gbmV3IFZ1ZSh7XHJcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGgpIHtcclxuICAgICAgICByZXR1cm4gaChNZXNzYWdlLCB7XHJcbiAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KS4kbW91bnQoJyNtZXNzYWdlJylcclxuICB9XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgxNDQwYjc4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9OYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9OYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxNDQwYjc4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4MTQ0MGI3OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODE0NDBiNzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODE0NDBiNzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgxNDQwYjc4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgxNDQwYjc4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZpZ2F0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgxNDQwYjc4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdmlnYXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODE0NDBiNzgmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2aWdhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODE0NDBiNzgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3MzRiMDdjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY29yZVBhbmVsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TY29yZVBhbmVsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU3MzRiMDdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlNzM0YjA3Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTczNGIwN2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTczNGIwN2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3MzRiMDdjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U3MzRiMDdjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvY29tcG9uZW50cy9TY29yZVBhbmVsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY29yZVBhbmVsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY29yZVBhbmVsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU3MzRiMDdjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Njb3JlUGFuZWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTczNGIwN2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NvcmVQYW5lbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTczNGIwN2Mmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NsaWRlVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmViMDhlMTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TbGlkZVZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmViMDhlMTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImZlYjA4ZTE0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRjpcXFxcY29kZVxcXFxOb2RlXFxcXHByb2plY3RcXFxcdG5pXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmZWIwOGUxNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmZWIwOGUxNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZWIwOGUxNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmZWIwOGUxNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvU2xpZGVWaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TbGlkZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xpZGVWaWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlYjA4ZTE0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NsaWRlVmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZWIwOGUxNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TbGlkZVZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZlYjA4ZTE0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXHJcblxyXG5jb25zdCByb290ID0gbmV3IFZ1ZSh7XHJcbiAgZWw6ICcjcm9vdCcsXHJcbiAgcmVuZGVyOiBmdW5jdGlvbihoKSB7XHJcbiAgICByZXR1cm4gaChBcHApXHJcbiAgfVxyXG59KSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5jZW50aXZlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjVhN2RmNyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmNlbnRpdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmNlbnRpdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YjVhN2RmN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2I1YTdkZjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2I1YTdkZjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luY2VudGl2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1YTdkZjcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2I1YTdkZjcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9wYWdlcy9JbmNlbnRpdmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luY2VudGl2ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmNlbnRpdmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luY2VudGl2ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I1YTdkZjcmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhMWQ2NjE5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Eb25lUmVjb3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Eb25lUmVjb3JkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhMWQ2NjE5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYTFkNjYxOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmExZDY2MTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmExZDY2MTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhMWQ2NjE5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJhMWQ2NjE5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvcGFnZXMvTW9yZS9Eb25lUmVjb3JkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb25lUmVjb3JkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Eb25lUmVjb3JkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhMWQ2NjE5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RvbmVSZWNvcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmExZDY2MTkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRG9uZVJlY29yZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmExZDY2MTkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMTA3NjE4OCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTA3NjE4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTEwNzYxODhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJGOlxcXFxjb2RlXFxcXE5vZGVcXFxccHJvamVjdFxcXFx0bmlcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ExMDc2MTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ExMDc2MTg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTEwNzYxODgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTEwNzYxODgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9wYWdlcy9Nb3JlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWExMDc2MTg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWExMDc2MTg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMTA3NjE4OCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYxOTY5YTkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1ZjE5NjlhOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkY6XFxcXGNvZGVcXFxcTm9kZVxcXFxwcm9qZWN0XFxcXHRuaVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWYxOTY5YTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWYxOTY5YTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Rhc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMTk2OWE5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmMTk2OWE5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvcGFnZXMvVGFzay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXNrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjE5NjlhOSZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgbGV0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICB9LFxyXG4gIHNldDogZnVuY3Rpb24oa2V5LCBvYmplY3QpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSlcclxuICB9LFxyXG4gIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==