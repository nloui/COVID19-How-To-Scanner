module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article.js":
/*!*******************************!*\
  !*** ./components/Article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nickloui/Dev/sandbox/COVID19-How-To-Scanner/components/Article.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Article extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      options: [{
        label: 'All',
        value: null
      }, {
        label: 'News',
        value: 'newsmedia'
      }, {
        label: 'Social',
        value: 'social'
      }, {
        label: 'YouTube',
        value: 'youtube'
      }],
      filter: null
    };
  }

  render() {
    const {
      title,
      summary,
      badges,
      articles
    } = this.props;
    const {
      isShown
    } = this.state;
    return __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      display: "flex",
      padding: 16,
      margin: 16,
      background: "tint2",
      borderRadius: 3,
      flexDirection: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      size: 600,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, title, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pill"], {
      display: "inline-flex",
      margin: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, articles && articles.length.toLocaleString())), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "muted",
      marginTop: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, summary), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      display: "flex",
      flexDirection: "row",
      height: 40,
      alignItems: "center",
      justifyContent: "space-between",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      paddingTop: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, badges.map(b => __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      color: b.color,
      key: b.label,
      marginRight: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 22
      }
    }, b.label))), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      marginTop: 16,
      iconAfter: "arrow-right",
      appearance: "minimal",
      onClick: () => this.setState({
        isShown: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, "Explore Articles")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["SideSheet"], {
      isShown: isShown,
      onCloseComplete: () => this.setState({
        isShown: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      padding: 16,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      padding: 16,
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["SegmentedControl"], {
      width: 240,
      options: this.state.options,
      value: this.state.filter,
      onChange: value => this.setState({
        filter: value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    })), articles.filter(x => this.state.filter ? x.source === this.state.filter : true).map(d => __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      elevation: 1,
      margin: 12,
      padding: 18,
      display: "flex",
      justifyContent: "center",
      alignItems: "left",
      flexDirection: "column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 15
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      size: 500,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, d.source), ' ', d.rawtext), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      color: "neutral",
      href: d.url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, d.url.replace('https://', '').replace('http://', '').replace('www.', '').slice(0, 50)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! evergreen-ui */ "evergreen-ui");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Article */ "./components/Article.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/nickloui/Dev/sandbox/COVID19-How-To-Scanner/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      clusters
    } = this.props;
    return __jsx("div", {
      id: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      display: "flex",
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      size: 800,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, "COVID-19 \"How To\" Tracker")), __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Pane"], {
      display: "flex",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx(evergreen_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      size: 500,
      color: "muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, "Common Themes")), clusters.map(c => __jsx(_components_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: c.Cluster,
      summary: c.Summary,
      badges: [{
        "color": "neutral",
        "label": "Cleaning"
      }, {
        "color": "green",
        "label": "Home"
      }],
      articles: c.Documents,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 27
      }
    })));
  }

}

async function getStaticProps() {
  const res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:3000/api/json');
  const clusters = res.data;
  return {
    props: {
      clusters
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nickloui/Dev/sandbox/COVID19-How-To-Scanner/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "evergreen-ui":
/*!*******************************!*\
  !*** external "evergreen-ui" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("evergreen-ui");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map