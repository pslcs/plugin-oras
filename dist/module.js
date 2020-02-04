define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./Components/Gauge/Gauge.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!./Components/Gauge/Gauge.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".gauge-container {\n  background-color: transparent;\n  margin: 0px auto; }\n\n.body {\n  font-size: 32; }\n\n.mask {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  width: 6.25rem;\n  height: 3.125rem;\n  margin: 0.625rem; }\n\n.semi-circle {\n  position: relative;\n  display: block;\n  width: 6.25rem;\n  height: 3.125rem;\n  background: -webkit-gradient(linear, left top, right top, from(red), color-stop(50%, orange), color-stop(75%, yellow), to(green));\n  background: linear-gradient(to right, red 0%, orange 50%, yellow 75%, green 100%);\n  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%; }\n  .semi-circle::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    z-index: 2;\n    display: block;\n    width: 4.375rem;\n    height: 2.1875rem;\n    margin-left: -2.1875rem;\n    background: #161719;\n    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%; }\n\n.semi-circle--mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 6.25rem;\n  height: 6.25rem;\n  background: transparent;\n  -webkit-transform: rotate(180deg) translate3d(0, 0, 0);\n          transform: rotate(180deg) translate3d(0, 0, 0);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out; }\n  .semi-circle--mask::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0%;\n    z-index: 2;\n    display: block;\n    width: 6.3125rem;\n    height: 3.1875rem;\n    margin: -1px 0 0 -1px;\n    background: #f2f2f2;\n    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%; }\n\n.gauge-value {\n  font-size: 23px;\n  color: whitesmoke;\n  background-color: transparent;\n  position: relative;\n  z-index: 2;\n  left: 14px;\n  bottom: 34px;\n  display: block;\n  text-align: center;\n  line-height: 33px; }\n\n.box {\n  margin-top: 10px; }\n\n.gauge-name {\n  width: 75px;\n  font-size: 18px;\n  text-align: center;\n  position: absolute;\n  bottom: -18px;\n  left: 14px; }\n", "",{"version":3,"sources":["Gauge.scss"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;;AAEjB;EACE,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,iIAAiF;EAAjF,iFAAiF;EACjF,gDAAgD,EAAE;EAClD;IACE,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,SAAS;IACT,UAAU;IACV,cAAc;IACd,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;IACnB,gDAAgD,EAAE;;AAEtD;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,sDAA8C;UAA9C,8CAA8C;EAC9C,uCAA+B;UAA/B,+BAA+B;EAC/B,mCAA2B;UAA3B,2BAA2B;EAC3B,uCAA+B;EAA/B,+BAA+B,EAAE;EACjC;IACE,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,UAAU;IACV,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;IACrB,mBAAmB;IACnB,gDAAgD,EAAE;;AAEtD;EACE,eAAe;EACf,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,iBAAiB,EAAE;;AAErB;EACE,gBAAgB,EAAE;;AAEpB;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,UAAU,EAAE","file":"Gauge.scss","sourcesContent":[".gauge-container {\n  background-color: transparent;\n  margin: 0px auto; }\n\n.body {\n  font-size: 32; }\n\n.mask {\n  position: relative;\n  overflow: hidden;\n  display: block;\n  width: 6.25rem;\n  height: 3.125rem;\n  margin: 0.625rem; }\n\n.semi-circle {\n  position: relative;\n  display: block;\n  width: 6.25rem;\n  height: 3.125rem;\n  background: linear-gradient(to right, red 0%, orange 50%, yellow 75%, green 100%);\n  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%; }\n  .semi-circle::before {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    z-index: 2;\n    display: block;\n    width: 4.375rem;\n    height: 2.1875rem;\n    margin-left: -2.1875rem;\n    background: #161719;\n    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%; }\n\n.semi-circle--mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 6.25rem;\n  height: 6.25rem;\n  background: transparent;\n  transform: rotate(180deg) translate3d(0, 0, 0);\n  transform-origin: center center;\n  backface-visibility: hidden;\n  transition: all .3s ease-in-out; }\n  .semi-circle--mask::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0%;\n    z-index: 2;\n    display: block;\n    width: 6.3125rem;\n    height: 3.1875rem;\n    margin: -1px 0 0 -1px;\n    background: #f2f2f2;\n    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%; }\n\n.gauge-value {\n  font-size: 23px;\n  color: whitesmoke;\n  background-color: transparent;\n  position: relative;\n  z-index: 2;\n  left: 14px;\n  bottom: 34px;\n  display: block;\n  text-align: center;\n  line-height: 33px; }\n\n.box {\n  margin-top: 10px; }\n\n.gauge-name {\n  width: 75px;\n  font-size: 18px;\n  text-align: center;\n  position: absolute;\n  bottom: -18px;\n  left: 14px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./Components/GaugeBar/GaugeBar.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!./Components/GaugeBar/GaugeBar.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".gaugeBar-container {\n  background-color: transparent;\n  margin: 0px auto;\n  box-sizing: border-box;\n  position: relative; }\n\n.gaugeBar-value {\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 0; }\n\n.gaugeBar-arrow {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #000;\n  position: relative;\n  -webkit-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out; }\n\n.gaugeBar-gauge {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: 0px auto; }\n\n.gaugeBar-bar {\n  margin: 0px;\n  width: 24%;\n  height: 10px; }\n\n.red {\n  background-color: #ff1c1c; }\n\n.orange {\n  background-color: #ffbb3c; }\n\n.yellow {\n  background-color: #ffff55; }\n\n.green {\n  background-color: #2e832e; }\n", "",{"version":3,"sources":["GaugeBar.scss"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,gBAAgB;EAChB,sBAAsB;EACtB,kBAAkB,EAAE;;AAEtB;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,SAAS,EAAE;;AAEb;EACE,QAAQ;EACR,SAAS;EACT,mCAAmC;EACnC,oCAAoC;EACpC,2BAA2B;EAC3B,kBAAkB;EAClB,uCAA+B;EAA/B,+BAA+B,EAAE;;AAEnC;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;EACV,gBAAgB,EAAE;;AAEpB;EACE,WAAW;EACX,UAAU;EACV,YAAY,EAAE;;AAEhB;EACE,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB,EAAE","file":"GaugeBar.scss","sourcesContent":[".gaugeBar-container {\n  background-color: transparent;\n  margin: 0px auto;\n  box-sizing: border-box;\n  position: relative; }\n\n.gaugeBar-value {\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  margin: 0; }\n\n.gaugeBar-arrow {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #000;\n  position: relative;\n  transition: all .3s ease-in-out; }\n\n.gaugeBar-gauge {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: 0px auto; }\n\n.gaugeBar-bar {\n  margin: 0px;\n  width: 24%;\n  height: 10px; }\n\n.red {\n  background-color: #ff1c1c; }\n\n.orange {\n  background-color: #ffbb3c; }\n\n.yellow {\n  background-color: #ffff55; }\n\n.green {\n  background-color: #2e832e; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./styles.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!./styles.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".output-container {\n  width: 100px;\n  height: 65px;\n  background-color: rgba(255, 255, 255, 0.542);\n  color: black;\n  border: 1px solid black;\n  box-sizing: content-box;\n  padding: 0;\n  border-radius: 2px; }\n\n.output-name {\n  height: 15px;\n  text-align: center;\n  width: 100%;\n  font-size: 10px;\n  margin-bottom: 0px; }\n\n.dashboard {\n  position: absolute;\n  top: 0px;\n  left: 1000px;\n  width: 120px;\n  height: 100%;\n  background-color: #161719; }\n\n.editor-button {\n  background-color: #242424;\n  color: whitesmoke;\n  border: 1px solid whitesmoke;\n  margin: 2px; }\n\n.single-dashboard {\n  width: 100%;\n  position: relative;\n  height: 50px;\n  margin-bottom: 40px; }\n\n.dashboard-name {\n  color: whitesmoke;\n  font-size: 25px;\n  width: 200px; }\n", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,YAAY;EACZ,4CAA4C;EAC5C,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,UAAU;EACV,kBAAkB,EAAE;;AAEtB;EACE,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,kBAAkB,EAAE;;AAEtB;EACE,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBAAyB,EAAE;;AAE7B;EACE,yBAAyB;EACzB,iBAAiB;EACjB,4BAA4B;EAC5B,WAAW,EAAE;;AAEf;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB;EACjB,eAAe;EACf,YAAY,EAAE","file":"styles.scss","sourcesContent":[".output-container {\n  width: 100px;\n  height: 65px;\n  background-color: rgba(255, 255, 255, 0.542);\n  color: black;\n  border: 1px solid black;\n  box-sizing: content-box;\n  padding: 0;\n  border-radius: 2px; }\n\n.output-name {\n  height: 15px;\n  text-align: center;\n  width: 100%;\n  font-size: 10px;\n  margin-bottom: 0px; }\n\n.dashboard {\n  position: absolute;\n  top: 0px;\n  left: 1000px;\n  width: 120px;\n  height: 100%;\n  background-color: #161719; }\n\n.editor-button {\n  background-color: #242424;\n  color: whitesmoke;\n  border: 1px solid whitesmoke;\n  margin: 2px; }\n\n.single-dashboard {\n  width: 100%;\n  position: relative;\n  height: 50px;\n  margin-bottom: 40px; }\n\n.dashboard-name {\n  color: whitesmoke;\n  font-size: 25px;\n  width: 200px; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./Components/Gauge/Gauge.scss":
/*!*************************************!*\
  !*** ./Components/Gauge/Gauge.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-1!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/lib/loader.js!./Gauge.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./Components/Gauge/Gauge.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./Components/Gauge/Gauge.tsx":
/*!************************************!*\
  !*** ./Components/Gauge/Gauge.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Gauge_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gauge.scss */ "./Components/Gauge/Gauge.scss");
/* harmony import */ var _Gauge_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Gauge_scss__WEBPACK_IMPORTED_MODULE_1__);



var Gauge = function Gauge(_a) {
  var value = _a.value,
      size = _a.size,
      name = _a.name;
  value > 100 ? value = 100 : value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box gauge--1",
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mask"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "semi-circle"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "semi-circle--mask",
    style: {
      transform: "rotate(" + value * 1.8 + "deg)"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 'gauge-value'
  }, value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 'gauge-name'
  }, name));
};

/* harmony default export */ __webpack_exports__["default"] = (Gauge);

/***/ }),

/***/ "./Components/GaugeBar/GaugeBar.scss":
/*!*******************************************!*\
  !*** ./Components/GaugeBar/GaugeBar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-1!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/lib/loader.js!./GaugeBar.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./Components/GaugeBar/GaugeBar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./Components/GaugeBar/GaugeBar.tsx":
/*!******************************************!*\
  !*** ./Components/GaugeBar/GaugeBar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GaugeBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GaugeBar.scss */ "./Components/GaugeBar/GaugeBar.scss");
/* harmony import */ var _GaugeBar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GaugeBar_scss__WEBPACK_IMPORTED_MODULE_1__);



var GaugeBar = function GaugeBar(_a) {
  var width = _a.width,
      height = _a.height,
      value = _a.value;

  if (value > 100) {
    value = 100;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gaugeBar-container",
    style: {
      width: width + "px",
      height: height + "px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "gaugeBar-value"
  }, value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'gaugeBar-arrow',
    style: {
      left: value * 0.8 + "px",
      top: "5px"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'gaugeBar-gauge'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gaugeBar-bar red"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gaugeBar-bar orange"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gaugeBar-bar yellow"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "gaugeBar-bar green"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GaugeBar);

/***/ }),

/***/ "./SimpleEditor.tsx":
/*!**************************!*\
  !*** ./SimpleEditor.tsx ***!
  \**************************/
/*! exports provided: SimpleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEditor", function() { return SimpleEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);





var SimpleEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimpleEditor, _super);

  function SimpleEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onTextChanged = function (_a) {
      var target = _a.target;

      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        url: target.value
      }));
    };

    _this.onTitleChange = function (event, dataPoint) {
      switch (dataPoint) {
        case 1:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            title: event.target.value
          }));

          break;

        case 2:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            title2: event.target.value
          }));

          break;

        case 3:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            title3: event.target.value
          }));

          break;

        case 4:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            title4: event.target.value
          }));

          break;

        case 5:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            title5: event.target.value
          }));

          break;

        default:
          break;
      }
    };

    _this.onXChanged = function (event, dataPoint) {
      switch (dataPoint) {
        case 1:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            x: event.target.value
          }));

          break;

        case 2:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            x2: event.target.value
          }));

          break;

        case 3:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            x3: event.target.value
          }));

          break;

        case 4:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            x4: event.target.value
          }));

          break;

        case 5:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            x5: event.target.value
          }));

          break;

        default:
          break;
      }
    };

    _this.onYChanged = function (event, dataPoint) {
      switch (dataPoint) {
        case 1:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            y: event.target.value
          }));

          break;

        case 2:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            y2: event.target.value
          }));

          break;

        case 3:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            y3: event.target.value
          }));

          break;

        case 4:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            y4: event.target.value
          }));

          break;

        case 5:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            y5: event.target.value
          }));

          break;

        default:
          break;
      }
    };

    _this.onValueChange = function (event, dataPoint) {
      var _a, _b, _c, _d, _e;

      switch (dataPoint) {
        case 1:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            value: (_a = event) === null || _a === void 0 ? void 0 : _a.target.value
          }));

          break;

        case 2:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            value2: (_b = event) === null || _b === void 0 ? void 0 : _b.target.value
          }));

          break;

        case 3:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            value3: (_c = event) === null || _c === void 0 ? void 0 : _c.target.value
          }));

          break;

        case 4:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            value4: (_d = event) === null || _d === void 0 ? void 0 : _d.target.value
          }));

          break;

        case 5:
          _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
            value5: (_e = event) === null || _e === void 0 ? void 0 : _e.target.value
          }));

          break;

        default:
          break;
      }
    };

    _this.onMonitorAmountAdd = function () {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        monitorAmount: _this.props.options.monitorAmount + 1
      }));
    };

    _this.onMonitorAmountSubstract = function () {
      _this.props.onOptionsChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.options), {
        monitorAmount: _this.props.options.monitorAmount - 1
      }));
    };

    return _this;
  }

  SimpleEditor.prototype.render = function () {
    var _this = this;

    var options = this.props.options;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, "Picture"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Provide picture url",
      labelWidth: 10,
      inputWidth: 20,
      type: "text",
      onChange: this.onTextChanged,
      value: options.url || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), this.props.options.monitorAmount > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "data-point-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, this.props.options.title || 'Data point 1'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Title",
      labelWidth: 6,
      inputWidth: 20,
      type: "text",
      onChange: function onChange(event) {
        return _this.onTitleChange(event, 1);
      },
      value: options.title || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "x position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onXChanged(event, 1);
      },
      value: options.x || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "y position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onYChanged(event, 1);
      },
      value: options.y || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Value",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onValueChange(event, 1);
      },
      value: options.value || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), this.props.options.monitorAmount > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "data-point-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, this.props.options.title2 || 'Data point 2'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Title",
      labelWidth: 6,
      inputWidth: 20,
      type: "text",
      onChange: function onChange(event) {
        return _this.onTitleChange(event, 2);
      },
      value: options.title2 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "x position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onXChanged(event, 2);
      },
      value: options.x2 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "y position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onYChanged(event, 2);
      },
      value: options.y2 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Value",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onValueChange(event, 2);
      },
      value: options.value2 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), this.props.options.monitorAmount > 2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "data-point-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, this.props.options.title3 || 'Data point 3'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Title",
      labelWidth: 6,
      inputWidth: 20,
      type: "text",
      onChange: function onChange(event) {
        return _this.onTitleChange(event, 3);
      },
      value: options.title3 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "x position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onXChanged(event, 3);
      },
      value: options.x3 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "y position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onYChanged(event, 3);
      },
      value: options.y3 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Value",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onValueChange(event, 3);
      },
      value: options.value3 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), this.props.options.monitorAmount > 3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "data-point-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, this.props.options.title4 || 'Data point 4'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Title",
      labelWidth: 6,
      inputWidth: 20,
      type: "text",
      onChange: function onChange(event) {
        return _this.onTitleChange(event, 4);
      },
      value: options.title4 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "x position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onXChanged(event, 4);
      },
      value: options.x4 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "y position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onYChanged(event, 4);
      },
      value: options.y4 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Value",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onValueChange(event, 4);
      },
      value: options.value4 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), this.props.options.monitorAmount > 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "data-point-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, this.props.options.title5 || 'Data point 5'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Title",
      labelWidth: 6,
      inputWidth: 20,
      type: "text",
      onChange: function onChange(event) {
        return _this.onTitleChange(event, 5);
      },
      value: options.title5 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "x position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onXChanged(event, 5);
      },
      value: options.x5 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "y position",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onYChanged(event, 5);
      },
      value: options.y5 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormField"], {
      label: "Value",
      labelWidth: 6,
      inputWidth: 4,
      type: "number",
      onChange: function onChange(event) {
        return _this.onValueChange(event, 5);
      },
      value: options.value5 || ''
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null)), this.props.options.monitorAmount < 5 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "editor-button",
      type: "button",
      onClick: this.onMonitorAmountAdd
    }, "Add new monitor"), this.props.options.monitorAmount > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "editor-button",
      type: "button",
      onClick: this.onMonitorAmountSubstract
    }, "Remove last monitor"));
  };

  return SimpleEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_GaugeBar_GaugeBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/GaugeBar/GaugeBar */ "./Components/GaugeBar/GaugeBar.tsx");
/* harmony import */ var _Components_Gauge_Gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Gauge/Gauge */ "./Components/Gauge/Gauge.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);






var SimplePanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimplePanel, _super);

  function SimplePanel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SimplePanel.prototype.render = function () {
    var _a = this.props,
        options = _a.options,
        data = _a.data,
        width = _a.width,
        height = _a.height;
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'relative',
        width: width,
        height: height
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      width: "1000px",
      height: "auto",
      src: options.url,
      style: {
        position: 'absolute'
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "output-container",
      style: {
        position: 'absolute',
        top: options.y + "px",
        left: options.x + "px",
        display: options.monitorAmount > 0 ? 'unset' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "output-name"
    }, options.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_GaugeBar_GaugeBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: 100,
      height: 50,
      value: options.value
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "output-container",
      style: {
        position: 'absolute',
        top: options.y2 + "px",
        left: options.x2 + "px",
        display: options.monitorAmount > 1 ? 'unset' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "output-name"
    }, options.title2), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_GaugeBar_GaugeBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: 100,
      height: 50,
      value: options.value2
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "output-container",
      style: {
        position: 'absolute',
        top: options.y3 + "px",
        left: options.x3 + "px",
        display: options.monitorAmount > 2 ? 'unset' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "output-name"
    }, options.title3), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_GaugeBar_GaugeBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: 100,
      height: 50,
      value: options.value3
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "output-container",
      style: {
        position: 'absolute',
        top: options.y4 + "px",
        left: options.x4 + "px",
        display: options.monitorAmount > 3 ? 'unset' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "output-name"
    }, options.title4), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_GaugeBar_GaugeBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: 100,
      height: 50,
      value: options.value4
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "output-container",
      style: {
        position: 'absolute',
        top: options.y5 + "px",
        left: options.x5 + "px",
        display: options.monitorAmount > 4 ? 'unset' : 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "output-name"
    }, options.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_GaugeBar_GaugeBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: 100,
      height: 50,
      value: options.value5
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'dashboard'
    }, options.monitorAmount > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'single-dashboard'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Gauge_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: options.value,
      size: 75,
      name: options.title
    })), options.monitorAmount > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'single-dashboard'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Gauge_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: options.value2,
      size: 75,
      name: options.title2
    })), options.monitorAmount > 2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'single-dashboard'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Gauge_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: options.value3,
      size: 75,
      name: options.title3
    })), options.monitorAmount > 3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'single-dashboard'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Gauge_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: options.value4,
      size: 75,
      name: options.title4
    })), options.monitorAmount > 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: 'single-dashboard'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Gauge_Gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: options.value5,
      size: 75,
      name: options.title5
    })))));
  };

  SimplePanel.scrollable = true;
  return SimplePanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var _SimplePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SimplePanel */ "./SimplePanel.tsx");
/* harmony import */ var _SimpleEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SimpleEditor */ "./SimpleEditor.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_SimplePanel__WEBPACK_IMPORTED_MODULE_2__["SimplePanel"]).setDefaults(_types__WEBPACK_IMPORTED_MODULE_1__["defaults"]).setEditor(_SimpleEditor__WEBPACK_IMPORTED_MODULE_3__["SimpleEditor"]);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-1!../node_modules/postcss-loader/src??ref--9-2!../node_modules/sass-loader/lib/loader.js!./styles.scss */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!./styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaults = {
  url: '',
  title: '',
  x: 0,
  y: 0,
  title2: '',
  x2: 0,
  y2: 0,
  title3: '',
  x3: 0,
  y3: 0,
  title4: '',
  x4: 0,
  y4: 0,
  title5: '',
  x5: 0,
  y5: 0,
  value: 0,
  value2: 0,
  value3: 0,
  value4: 0,
  value5: 0,
  monitorAmount: 0
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map