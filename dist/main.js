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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #28292c;\\r\\n}\\r\\n\\r\\n#wrapper {\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.pokeContainer {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  width: 150px;\\r\\n  height: 250px;\\r\\n  border-radius: 15px;\\r\\n  margin: 5px;\\r\\n  color: aliceblue;\\r\\n}\\r\\n\\r\\n.pokeContainer p {\\r\\n  margin: 0;\\r\\n  margin-top: -15px;\\r\\n  font-size: 2vw;\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n}\\r\\n\\r\\n.pokeContainer:hover {\\r\\n  transform: scale(1.07);\\r\\n}\\r\\n\\r\\n.pikachu {\\r\\n  background-color: #ffcb71;\\r\\n}\\r\\n\\r\\n.mew {\\r\\n  background-color: rgb(229, 189, 255);\\r\\n}\\r\\n\\r\\n.mewtwo {\\r\\n  background-color: rgb(179, 179, 255);\\r\\n}\\r\\n\\r\\n.lugia {\\r\\n  background-color: #5c38ff;\\r\\n}\\r\\n\\r\\n.gengar {\\r\\n  background-color: #71b7c7;\\r\\n}\\r\\n\\r\\n.ninetales {\\r\\n  background-color: #ff4b81;\\r\\n}\\r\\n\\r\\n.charizard {\\r\\n  background-color: #f8a060;\\r\\n}\\r\\n\\r\\n.cresselia {\\r\\n  background-color: #c976f8;\\r\\n}\\r\\n\\r\\n.pokeFoto {\\r\\n  width: 120px;\\r\\n  height: 120px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background: #7c7c7c;\\r\\n  border-bottom: 3px inset rgba(0, 0, 0, 0.5);\\r\\n  border-left: 3px inset rgba(0, 0, 0, 0.5);\\r\\n  border-right: 3px inset rgba(255, 255, 255, 0.5);\\r\\n  border-top: 3px inset rgba(255, 255, 255, 0.5);\\r\\n  box-sizing: border-box;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  display: inline-block;\\r\\n  font-size: 0.9vw;\\r\\n  margin: 10px;\\r\\n  min-width: 90px;\\r\\n  padding: 0.1rem;\\r\\n  width: auto;\\r\\n  font-family: 'Press Start 2P', sans-serif;\\r\\n}\\r\\n\\r\\n.btn.primary {\\r\\n  background: #005800;\\r\\n  margin-bottom: -5px;\\r\\n}\\r\\n\\r\\n.btn.secondary {\\r\\n  background: #0000bc;\\r\\n}\\r\\n\\r\\n#comment-window {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pokemon-api/./src/style.css?./node_modules/css-loader/dist/cjs.js");

  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/css-loader/dist/runtime/api.js?");
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
  /*!**************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
    \**************************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pokemon-api/./src/style.css?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pokemon-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
  
  /***/ }),
  
  /***/ "./src/apiCall.js":
  /*!************************!*\
    !*** ./src/apiCall.js ***!
    \************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pokeCall\": () => (/* binding */ pokeCall)\n/* harmony export */ });\nconst pokeCall = async (e) => {\r\n  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`, {\r\n    method: 'GET',\r\n  });\r\n  const pokemonInfo = await response.json();\r\n  return pokemonInfo;\r\n};\r\n\r\n// eslint-disable-next-line import/prefer-default-export\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/apiCall.js?");
  
  /***/ }),
  
  /***/ "./src/comments.js":
  /*!*************************!*\
    !*** ./src/comments.js ***!
    \*************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postCom\": () => (/* binding */ postCom),\n/* harmony export */   \"getCom\": () => (/* binding */ getCom),\n/* harmony export */   \"displayPokemonStats\": () => (/* binding */ displayPokemonStats),\n/* harmony export */   \"toggle\": () => (/* binding */ toggle)\n/* harmony export */ });\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall.js */ \"./src/apiCall.js\");\n/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel.png */ \"./src/cancel.png\");\n/* eslint-disbale import/no-cycle */\r\n\r\n\r\n\r\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ntSEDKBSp5jVB8zr1TJB/comments';\r\n\r\nconst postCom = async (e) => {\r\n  const response = await fetch(baseURL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(e),\r\n  });\r\n  return response.json();\r\n};\r\n\r\nasync function getCom() {\r\n  const response = await fetch(baseURL);\r\n  return response.json();\r\n}\r\n\r\nconst commentWindow = document.getElementById('comment-window');\r\n\r\nconst displayPokemonStats = (e) => {\r\n  (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_0__.pokeCall)(e).then((poke) => {\r\n    const pokeImg = poke.sprites.front_shiny;\r\n    const pokeTypeOne = poke.types[0].type.name;\r\n    const pokeName = poke.name;\r\n    const pokeWeight = poke.weight;\r\n    const pokeHeight = poke.height;\r\n    const pokePower = poke.base_experience;\r\n\r\n    const cancelImage = document.createElement('img');\r\n    cancelImage.width = '48';\r\n    cancelImage.src = _cancel_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    const img = document.createElement('img');\r\n    img.src = pokeImg;\r\n    img.width = '160';\r\n    const name = document.createElement('h2');\r\n    name.innerText = pokeName[0].toUpperCase() + pokeName.slice(1);\r\n    const type = document.createElement('p');\r\n    type.innerText = `Type: ${pokeTypeOne[0].toUpperCase() + pokeTypeOne.slice(1)}`;\r\n    const weight = document.createElement('p');\r\n    weight.innerText = `Weight: ${pokeWeight} lbs`;\r\n    const height = document.createElement('p');\r\n    height.innerText = `Height: ${pokeHeight} ft`;\r\n    const power = document.createElement('p');\r\n    power.innerText = `Power: ${pokePower} pts`;\r\n    //Comment Section\r\n    const commentSection = document.createElement('comments-section');\r\n    commentSection.classList.add('comments-section');\r\n    const titleComment = document.createElement('h3');\r\n    titleComment.textContent = \"Best Comments\";\r\n    const listComments = document.createElement('ul');\r\n    listComments.classList.add('comments-list');\r\n    listComments.style.display = 'none';\r\n    const leaveComment = document.createElement('p');\r\n    leaveComment.textContent = \"Add your comment\";\r\n    const formComments = document.createElement('form');\r\n    formComments.classList.add('leave-comm');\r\n    const nameComment = document.createElement('input');\r\n    nameComment.classList.add('input-cname');\r\n    nameComment.placeholder = \"Your name\";\r\n    nameComment.setAttribute(\"required\", \"\");\r\n    nameComment.required = true;   \r\n    const textComment = document.createElement('textarea');\r\n    textComment.classList.add('input-textComment');\r\n    textComment.placeholder = \"Your comment\";\r\n    textComment.setAttribute(\"required\", \"\");\r\n    textComment.required = true; \r\n    const btnSubmitComment = document.createElement('submit');\r\n    btnSubmitComment.classList.add('pop-up-btn');\r\n    btnSubmitComment.textContent = \"Send your comment\";\r\n\r\n    commentSection.appendChild(titleComment);\r\n    commentSection.appendChild(listComments);\r\n    commentSection.appendChild(leaveComment);\r\n    commentSection.appendChild(formComments);\r\n    commentSection.appendChild(nameComment);\r\n    commentSection.appendChild(textComment);\r\n    commentSection.appendChild(btnSubmitComment);\r\n    \r\n    commentWindow.appendChild(img);\r\n    commentWindow.appendChild(cancelImage);\r\n    commentWindow.appendChild(name);\r\n    commentWindow.appendChild(type);\r\n    commentWindow.appendChild(weight);\r\n    commentWindow.appendChild(height);\r\n    commentWindow.appendChild(power);\r\n    commentWindow.appendChild(commentSection);\r\n    \r\n    cancelImage.addEventListener('click', () => {\r\n      if (commentWindow.style.display === 'block') {\r\n        commentWindow.style.display = 'none';\r\n        commentWindow.innerHTML = '';\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst toggle = (id) => {\r\n  if (commentWindow.style.display === 'none') {\r\n    commentWindow.style.display = 'block';\r\n    displayPokemonStats(id);\r\n  } else {\r\n    commentWindow.style.display = 'none';\r\n    commentWindow.innerHTML = '';\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/comments.js?");
  
  /***/ }),
  
  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pokedex\": () => (/* binding */ Pokedex),\n/* harmony export */   \"myPokedex\": () => (/* binding */ myPokedex),\n/* harmony export */   \"examplePokeArr\": () => (/* binding */ examplePokeArr)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCall.js */ \"./src/apiCall.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/comments.js\");\n/* eslint-disable max-classes-per-file */\r\n\r\n\r\n\r\n\r\n// class Pokecard {\r\n//   constructor(name, img, weight, height, power, id) {\r\n//     this.name = name;\r\n//     this.img = img;\r\n//     this.weight = weight;\r\n//     this.height = height;\r\n//     this.power = power;\r\n//     this.id = id;\r\n//   }\r\n// }\r\n\r\nclass Pokedex {\r\n  constructor() {\r\n    this.pokeList = [];\r\n  }\r\n\r\n  // Display Pokedex\r\n  // eslint-disable-next-line class-methods-use-this\r\n  displayPokedex(pokemon) {\r\n    const wrapper = document.getElementById('wrapper');\r\n    wrapper.style.display = 'flex';\r\n    const pokeContainer = document.createElement('div');\r\n    pokeContainer.classList.add('pokeContainer', `${pokemon.name}`);\r\n    const nameTest = document.createElement('p');\r\n    nameTest.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);\r\n    const pokeFoto = document.createElement('img');\r\n    pokeFoto.classList.add('pokeFoto');\r\n    pokeFoto.src = `${pokemon.sprites.front_shiny}`;\r\n    const commentBttn = document.createElement('button');\r\n    commentBttn.onclick = () => (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.toggle)(pokemon.id);\r\n    const reserveBttn = document.createElement('button');\r\n    commentBttn.id = `commentBttn${pokemon.id}`;\r\n    commentBttn.innerText = 'comment';\r\n    commentBttn.classList.add('btn', 'primary');\r\n    reserveBttn.id = `reserveBttn${pokemon.id}`;\r\n    reserveBttn.innerText = 'reservation';\r\n    reserveBttn.classList.add('btn', 'secondary');\r\n    pokeContainer.appendChild(pokeFoto);\r\n    pokeContainer.appendChild(nameTest);\r\n    pokeContainer.appendChild(commentBttn);\r\n    pokeContainer.appendChild(reserveBttn);\r\n\r\n    wrapper.appendChild(pokeContainer);\r\n  }\r\n\r\n  // Gets pokemon info from API\r\n  async getPokemon(e) {\r\n    (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_1__.pokeCall)(e).then((poke) => {\r\n      this.displayPokedex(poke);\r\n    });\r\n  }\r\n}\r\n\r\nconst examplePokeArr = ['pikachu', 'mewtwo', 'mew', 'ninetales', 'charizard', 'gengar', 'lugia', 'cresselia'];\r\nconst myPokedex = new Pokedex();\r\n\r\nfor (let i = 0; i < examplePokeArr.length; i += 1) {\r\n  myPokedex.getPokemon(examplePokeArr[i]);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://pokemon-api/./src/index.js?");
  
  /***/ }),
  
  /***/ "./src/cancel.png":
  /*!************************!*\
    !*** ./src/cancel.png ***!
    \************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("module.exports = __webpack_require__.p + \"1c2963ee3467352a1681.png\";\n\n//# sourceURL=webpack://pokemon-api/./src/cancel.png?");
  
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
  /******/ 			id: moduleId,
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
  /******/ 	/* webpack/runtime/global */
  /******/ 	(() => {
  /******/ 		__webpack_require__.g = (function() {
  /******/ 			if (typeof globalThis === 'object') return globalThis;
  /******/ 			try {
  /******/ 				return this || new Function('return this')();
  /******/ 			} catch (e) {
  /******/ 				if (typeof window === 'object') return window;
  /******/ 			}
  /******/ 		})();
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
  /******/ 	/* webpack/runtime/publicPath */
  /******/ 	(() => {
  /******/ 		var scriptUrl;
  /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
  /******/ 		var document = __webpack_require__.g.document;
  /******/ 		if (!scriptUrl && document) {
  /******/ 			if (document.currentScript)
  /******/ 				scriptUrl = document.currentScript.src
  /******/ 			if (!scriptUrl) {
  /******/ 				var scripts = document.getElementsByTagName("script");
  /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
  /******/ 			}
  /******/ 		}
  /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
  /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
  /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
  /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
  /******/ 		__webpack_require__.p = scriptUrl;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/ 	
  /******/ })()
  ;