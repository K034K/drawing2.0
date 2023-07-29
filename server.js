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

/***/ "./src/server/classes/BaseRoute.js":
/*!*****************************************!*\
  !*** ./src/server/classes/BaseRoute.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BaseRoute)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar BaseRoute = /*#__PURE__*/function () {\n  function BaseRoute(req, res, next) {\n    _classCallCheck(this, BaseRoute);\n    _defineProperty(this, \"req\", null);\n    _defineProperty(this, \"res\", null);\n    _defineProperty(this, \"next\", null);\n    this.req = req;\n    this.res = res;\n    this.next = next;\n  }\n  _createClass(BaseRoute, [{\n    key: \"mOk\",\n    value: function mOk(add) {\n      this.res.json(_objectSpread({\n        ok: true\n      }, add));\n    }\n  }, {\n    key: \"mNotOk\",\n    value: function mNotOk(add) {\n      this.res.json(_objectSpread({\n        ok: false\n      }, add));\n    }\n  }, {\n    key: \"e500\",\n    value: function e500(add) {\n      this.res.status(500);\n      this.mNotOk.apply(this, _toConsumableArray(add));\n    }\n  }, {\n    key: \"onRequest\",\n    value: function onRequest(_ref) {\n      var db = _ref.db;\n      this.db = db;\n      this.on();\n    }\n  }]);\n  return BaseRoute;\n}();\n\n\n//# sourceURL=webpack://drawin2/./src/server/classes/BaseRoute.js?");

/***/ }),

/***/ "./src/server/controllers/Express.js":
/*!*******************************************!*\
  !*** ./src/server/controllers/Express.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Express)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_AppRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/AppRoute */ \"./src/server/routes/AppRoute.js\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n//import IndexRoute from \"../routes/Index\";\n\n\n//cookies\n\n\n//import files\n\n\n//port and host\nvar EXPRESS_HOST = \"localhost\";\nvar EXPRESS_PORT = 3000;\nvar db = {\n  users: [],\n  username2userindex: {},\n  _load: function _load() {\n    var data = fs__WEBPACK_IMPORTED_MODULE_3___default().existsSync(\"./db.json\") && fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(\"./db.json\");\n    var json = JSON.parse(data || \"{}\");\n    Object.assign(this, json);\n  },\n  _save: function _save() {\n    fs__WEBPACK_IMPORTED_MODULE_3___default().writeFileSync(\"./db.json\", JSON.stringify(this));\n  }\n};\nvar Express = /*#__PURE__*/function () {\n  function Express() {\n    _classCallCheck(this, Express);\n  }\n  _createClass(Express, [{\n    key: \"run\",\n    value: function run() {\n      db._load();\n      this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n      this.app.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\n      this.app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\n\n      // Cookies\n      this.app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\n\n      // Routes\n      //  this.get(IndexRoute);\n      this.post(_routes_AppRoute__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      this.app.get(\"/test\", function (req, res) {\n        res.json({\n          test: \"test\"\n        });\n      });\n      this.app.listen(EXPRESS_PORT, EXPRESS_HOST, function () {\n        console.log(\"Express listening on \".concat(EXPRESS_HOST, \":\").concat(EXPRESS_PORT));\n      });\n    }\n\n    //get for routes\n  }, {\n    key: \"get\",\n    value: function get(ClassRoute) {\n      this.listen(\"get\", ClassRoute);\n    }\n\n    // post for routes\n  }, {\n    key: \"post\",\n    value: function post(ClassRoute) {\n      this.listen(\"post\", ClassRoute);\n    }\n  }, {\n    key: \"listen\",\n    value: function listen(type, ClassRoute) {\n      console.log(\"listen\", type, ClassRoute.route);\n      this.app[type](ClassRoute.route, function (req, res, next) {\n        console.log(req.url);\n        try {\n          new ClassRoute(req, res, next).onRequest({\n            db: db\n          });\n        } catch (e) {\n          res.status(500).json({\n            error: e.message\n          });\n        }\n      });\n    }\n  }]);\n  return Express;\n}();\n\n\n//# sourceURL=webpack://drawin2/./src/server/controllers/Express.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_Express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/Express */ \"./src/server/controllers/Express.js\");\n\nnew _controllers_Express__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().run();\n\n//# sourceURL=webpack://drawin2/./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes/AppRoute.js":
/*!***************************************!*\
  !*** ./src/server/routes/AppRoute.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AppRoute)\n/* harmony export */ });\n/* harmony import */ var _classes_BaseRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/BaseRoute */ \"./src/server/classes/BaseRoute.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar AppRoute = /*#__PURE__*/function (_BaseRoute) {\n  _inherits(AppRoute, _BaseRoute);\n  var _super = _createSuper(AppRoute);\n  function AppRoute() {\n    _classCallCheck(this, AppRoute);\n    return _super.apply(this, arguments);\n  }\n  _createClass(AppRoute, [{\n    key: \"on\",\n    value: function on() {\n      var action = this.req.params.action;\n      if (!action) {\n        this.mNotOk({\n          error: \"no action\"\n        });\n        return;\n      }\n      var mtd = \"\".concat(action, \"Action\");\n      if (!this[mtd]) {\n        this.mNotOk({\n          error: \"no action\"\n        });\n        return;\n      }\n      this[mtd]();\n    }\n  }, {\n    key: \"setAction\",\n    value: function setAction() {\n      var _this$req$body = this.req.body,\n        width = _this$req$body.width,\n        height = _this$req$body.height,\n        username = _this$req$body.username,\n        gridInit = _this$req$body.gridInit;\n      var userIndex = this.db.username2userindex[username];\n      if (userIndex === undefined) {\n        var newUsersCount = this.db.users.push({\n          username: username,\n          width: width,\n          height: height,\n          grid: gridInit\n        });\n        this.db.username2userindex[username] = newUsersCount - 1;\n      } else {\n        this.db.users[userIndex] = _objectSpread(_objectSpread({}, this.db.users[userIndex]), {}, {\n          width: width,\n          height: height,\n          grid: gridInit\n        });\n      }\n      this.db._save();\n      this.res.cookie(\"username\", username, {\n        maxAge: 60 * 60 * 24 * 1000,\n        sameSite: \"strict\",\n        httpOnly: true\n      });\n      this.mOk({\n        width: width,\n        height: height\n      });\n    }\n  }, {\n    key: \"getDimensionAction\",\n    value: function getDimensionAction() {\n      var localUsername = this.req.body.localUsername;\n\n      //console.log(\"getDimensionAction\", localUsername);\n\n      var userIndex = this.db.username2userindex[localUsername];\n      if (userIndex === undefined) {\n        this.mNotOk({\n          error: \"no user\"\n        });\n        return;\n      } else {\n        var _this$db$users$userIn = this.db.users[userIndex],\n          width = _this$db$users$userIn.width,\n          height = _this$db$users$userIn.height;\n        //console.log(\"getDimensionAction Width and Height\", width, height);\n        this.mOk({\n          width: width,\n          height: height\n        });\n      }\n    }\n  }, {\n    key: \"setGridAction\",\n    value: function setGridAction() {\n      var grid = this.req.body.grid;\n      console.log(this.req.cookies);\n      var localUsername = this.req.cookies.username;\n      var userIndex = this.db.username2userindex[localUsername];\n      if (userIndex === undefined) {\n        this.mNotOk({\n          error: \"no user\"\n        });\n        return;\n      } else {\n        this.db.users[userIndex].grid = grid;\n        this.db._save();\n        this.mOk();\n      }\n    }\n  }, {\n    key: \"getGridAction\",\n    value: function getGridAction() {\n      var localUsername = this.req.cookies.username;\n      var userIndex = this.db.username2userindex[localUsername];\n      if (userIndex === undefined) {\n        this.mOk({\n          grid: null\n        });\n        return;\n      } else {\n        var _this$db$users$userIn2 = this.db.users[userIndex],\n          grid = _this$db$users$userIn2.grid,\n          width = _this$db$users$userIn2.width,\n          height = _this$db$users$userIn2.height;\n        this.mOk({\n          grid: grid,\n          width: width,\n          height: height\n        });\n      }\n    }\n  }]);\n  return AppRoute;\n}(_classes_BaseRoute__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n_defineProperty(AppRoute, \"route\", \"/app/:action\");\n\n\n//# sourceURL=webpack://drawin2/./src/server/routes/AppRoute.js?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;