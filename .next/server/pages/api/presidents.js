module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/presidents.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/presidents.js":
/*!*************************************!*\
  !*** ./src/pages/api/presidents.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return server; });\nconst data = [{\n  name: \"Joe Biden\",\n  period: \"2021-\"\n}, {\n  name: \"Donald Trump\",\n  period: \"2017-2021\"\n}, {\n  name: \"Barack Obama\",\n  period: \"2009-2017\"\n}];\nfunction server(req, res) {\n  res.status(200).json(data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3ByZXNpZGVudHMuanM/OGYxOCJdLCJuYW1lcyI6WyJkYXRhIiwibmFtZSIsInBlcmlvZCIsInNlcnZlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxNQUFNQSxJQUFJLEdBQUcsQ0FDVDtBQUFFQyxNQUFJLEVBQUUsV0FBUjtBQUFxQkMsUUFBTSxFQUFFO0FBQTdCLENBRFMsRUFFVDtBQUFFRCxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsUUFBTSxFQUFFO0FBQWhDLENBRlMsRUFHVDtBQUFFRCxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsUUFBTSxFQUFFO0FBQWhDLENBSFMsQ0FBYjtBQU1lLFNBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUNyQ0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJQLElBQXJCO0FBQ0giLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3ByZXNpZGVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRhID0gW1xuICAgIHsgbmFtZTogXCJKb2UgQmlkZW5cIiwgcGVyaW9kOiBcIjIwMjEtXCJ9LFxuICAgIHsgbmFtZTogXCJEb25hbGQgVHJ1bXBcIiwgcGVyaW9kOiBcIjIwMTctMjAyMVwifSxcbiAgICB7IG5hbWU6IFwiQmFyYWNrIE9iYW1hXCIsIHBlcmlvZDogXCIyMDA5LTIwMTdcIn0sXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlcnZlcihyZXEsIHJlcykge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/presidents.js\n");

/***/ })

/******/ });