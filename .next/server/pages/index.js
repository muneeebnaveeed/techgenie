module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Portfolio/Projects.jsx":
/*!**************************************!*\
  !*** ./pages/Portfolio/Projects.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\pages\\Portfolio\\Projects.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const data = ["Chaar Achaar", "Ecommerce", "Furniture", "Medical", "Hospital", "Digital Agency", "Business", "Furniture"];

const ProjectItem = (_ref) => {
  let {
    title,
    index
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "index"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "shadow cursor-pointer relative w-full md:w-64",
    onClick: () => window.open(`portfolio/${index}.jpg`),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "object-cover overflow-hidden w-full md:w-289px h-398px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", _objectSpread({
        className: "w-full h-full object-cover rounded"
      }, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "transition-all duration-500 absolute top-0 left-0 bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end px-6 w-full md:w-289px h-398px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-2xl font-bold mb-4",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

function Projects() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "w-full pb-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "transition-all bg-gray-100 mb-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tw-container py-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-center font-bold text-4xl mb-4",
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-center",
          children: "Take a look at how we solve challenges to meet project requirements that deliver a greater level of functionality compared to traditional websites."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tw-container flex flex-col md:flex-row md:justify-center gap-20 flex-wrap",
      children: data.map((project, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProjectItem, {
        index: index + 1,
        src: `/portfolio/${index + 1}.jpg`,
        title: project
      }, `project-${index}`, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layouts */ "./src/layouts/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Testimonials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Testimonials */ "./src/components/Testimonials.jsx");
/* harmony import */ var _src_components_Sponsors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Sponsors */ "./src/components/Sponsors.jsx");
/* harmony import */ var _src_components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Hero */ "./src/components/Hero.jsx");
/* harmony import */ var _src_components_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/About */ "./src/components/About.jsx");
/* harmony import */ var _Portfolio_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Portfolio/Projects */ "./pages/Portfolio/Projects.jsx");
/* harmony import */ var components_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Contact */ "./src/components/Contact.jsx");
/* harmony import */ var components_Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Skills */ "./src/components/Skills.jsx");
/* harmony import */ var components_Packages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Packages */ "./src/components/Packages.jsx");
/* harmony import */ var components_Solutions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Solutions */ "./src/components/Solutions.jsx");

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\pages\\index.js";











function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(layouts__WEBPACK_IMPORTED_MODULE_1__["LandingPageLayout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Web Development - Tech Genie"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Sponsors__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_About__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Skills__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Packages__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Solutions__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Portfolio_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Testimonials__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/About.jsx":
/*!**********************************!*\
  !*** ./src/components/About.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\About.jsx";


const Point = ({
  children,
  icon
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
  className: "flex gap-4 p-4 pl-0 pt-0",
  children: [icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("icon", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 18
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: "font-semibold",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "tw-container py-8 pt-0 flex gap-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-col gap-4 justify-center ",
      style: {
        flex: 2
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-4xl font-bold mb-4",
        children: "We Build Masterpieces"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-4",
        children: "Doesn\u2019t matter if you\u2019re looking to create a basic content-based WordPress website or a full-fledged working ecommerce website. From initial front-end design creation to final deployment, our technical managers will guide throughout the procedure and make sure that you get a website which completely suits your business."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-center xs:justify-start gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Fully Responsive"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Device Testing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Clean & Modern"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Great Experience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden lg:flex justify-center items-center",
      style: {
        flex: 3
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://techgenie.ca/wp-content/uploads/2019/06/web-development-process-img.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Carousel.jsx":
/*!*************************************!*\
  !*** ./src/components/Carousel.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Carousel.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PaginationIcon = ({
  icon,
  position,
  onClick
}) => {
  const translation = position === "left" ? "-left-8" : "-right-8 md:-right-10";
  const Icon = icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
    onClick: onClick,
    style: {
      transform: "translateY(-50%)"
    },
    className: `z-10 absolute top-1/2 block text-4xl md:text-2xl text-indigo-500 transition-all cursor-pointer hover:text-black focus:outline-black ${translation}`
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

function Carousel(props) {
  const sliderSettings = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    var _props$arrows, _props$dots, _props$slidesToShow, _props$slidesToScroll;

    return {
      arrows: (_props$arrows = props.arrows) !== null && _props$arrows !== void 0 ? _props$arrows : true,
      dots: (_props$dots = props.dots) !== null && _props$dots !== void 0 ? _props$dots : true,
      infinite: true,
      speed: 500,
      slidesToShow: (_props$slidesToShow = props.slidesToShow) !== null && _props$slidesToShow !== void 0 ? _props$slidesToShow : 4,
      slidesToScroll: (_props$slidesToScroll = props.slidesToScroll) !== null && _props$slidesToScroll !== void 0 ? _props$slidesToScroll : 4,
      customPaging: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaDotCircle"], {
        className: `text-sm text-gray-200 cursor-pointer hover:opacity-50 transition-all`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this),
      appendDots: dots => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        style: _objectSpread({
          bottom: "-50px"
        }, props === null || props === void 0 ? void 0 : props.dotsStyle),
        children: [dots, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 35
      }, this),
      prevArrow: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PaginationIcon, {
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillLeftCircle"],
        position: "left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 24
      }, this),
      nextArrow: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PaginationIcon, {
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillRightCircle"],
        position: "right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 24
      }, this),
      responsive: props.responsive || [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, sliderSettings), {}, {
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./src/components/Contact.jsx":
/*!************************************!*\
  !*** ./src/components/Contact.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactForm */ "./src/components/ContactForm.jsx");

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Contact.jsx";


function Contact() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "w-full relative",
    style: {
      height: "900px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://via.placeholder.com/2320x3200",
      className: "object-cover w-full h-full absolute left-0 top-0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full h-full bg-gradient-brand absolute left-0 top-0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full h-full text-white absolute left-0 top-0 flex flex-col justify-center items-center px-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "uppercase font-sans font-light",
        children: "Get started instantly"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: " font-bold text-4xl mb-4",
        children: "Get In Touch"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tw-container",
        style: {
          maxWidth: "720px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/ContactForm.jsx":
/*!****************************************!*\
  !*** ./src/components/ContactForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\ContactForm.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FormInput = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
  className: "transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
  type: props.type || "text"
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

function ContactForm() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "w-full flex flex-col gap-4 mb-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full flex flex-col gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          placeholder: "Your Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          placeholder: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          type: "number",
          placeholder: "Phone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        style: {
          height: "360px",
          maxHeight: "360px"
        },
        className: "transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
        type: "text",
        placeholder: "Your Idea"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "tw-button-secondary w-full py-4 focus:outline-white",
      children: "Send Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Footer.jsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ListItem = ({
  children,
  rest
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", _objectSpread(_objectSpread({
  className: "cursor-pointer transition-all hover:opacity-50"
}, rest), {}, {
  children: children
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 5
}, undefined);

const Icon = (_ref) => {
  let {
    icon
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["icon"]);

  const Icon = icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, _objectSpread(_objectSpread({}, rest), {}, {
    className: "cursor-pointer hover:opacity-50 transition-all duration-300 focus:outline-black"
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined);
};

const Footer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", _objectSpread(_objectSpread({
    className: "w-full bg-gray-50 py-8 md:h-156 lg:h-auto"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tw-container flex h-full flex-col items-start gap-6 md:gap-12 text-base text-gray-700 md:flex-wrap lg:flex-row lg:justify-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:w-3/5 lg:w-4/6 flex flex-1 flex-col gap-3 lg:gap-16 items-start lg:flex-row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col gap-3 items-start",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "overflow-hidden",
            style: {
              width: "130px",
              height: "35px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-full h-full object-contain",
              src: "/logo.png",
              alt: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "When it comes to creating online presence for businesses and digital sales channels, Tech Genie is the name you can trust!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "33 Yonge St, Toronto, ON M5E 0A9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "647-370-7357"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "info@techgenie.ca"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full flex text-4xl justify-start gap-2 mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillFacebook"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillTwitterSquare"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillLinkedin"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiFillInstagram"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/certification.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col gap-3 items-start",
          style: {
            minWidth: "222px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "font-semibold text-lg border-b-2 border-indigo-500",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
              icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineDown"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "list-none flex flex-col gap-2 hover:border-b-2 hover:border-indigo-500 mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
              children: "Website design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
              children: "Wordpress development"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
              children: "Ecommerce website development"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
              children: "Web App Development"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "font-semibold text-lg border-b-2 border-indigo-500",
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_1__["AiOutlineDown"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "list-none flex flex-col gap-2 hover:border-b-2 hover:border-indigo-500",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListItem, {
            children: "Packages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Hero.jsx":
/*!*********************************!*\
  !*** ./src/components/Hero.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Hero.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FormInput = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
  className: "transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
  type: props.type || "text"
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

function Hero(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "w-full bg-center bg-cover bg-gradient-brand p-12",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tw-container flex flex-col nv:flex-row gap-12 justify-center items-center h-full",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col justify-center gap-3  ",
        style: {
          flex: 5
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white text-3xl font-light text-left xs:text-left dt:text-center",
          children: "Custom Website Development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-white text-4xl text-left xs:text-left dt:text-center",
          children: "We build Sales-Friendly and Future-Proof Websites"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white text-xl font-light text-left xs:text-left dt:text-center",
          children: "An unreliable, outdated, and mind-numbingly slow website is the quickest way to lose business and tarnish your brand image. Tech Genie is here to help you set that right."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-col gap-6 px-12 py-8 bg-gray-300 rounded-xl text-center",
        style: {
          flex: 3,
          maxWidth: "500px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "text-2xl mb-4",
            children: "Up to 70% OFF On Logo Design & Website Designs Packages"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Or Call Now 647-370-7357"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "w-full flex flex-col gap-4 mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
              placeholder: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
              placeholder: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
              type: "number",
              placeholder: "Phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            style: {
              maxHeight: "100px"
            },
            className: "transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
            type: "text",
            placeholder: "Your Idea"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "tw-button-secondary w-full py-4 focus:outline-white",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! routes */ "./src/routes.js");

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Navbar.jsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CollapsibleNav = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", _objectSpread(_objectSpread({
    className: "bg-white transition-all shadow-lg flex flex-col absolute left-0 w-full"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tw-container py-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CollapsibleNavItem, {
        children: "Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CollapsibleNavItem, {
        children: "Packages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

const CollapsibleNavItem = (_ref) => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", _objectSpread(_objectSpread({
    className: "cursor-pointer hover:opacity-50 transition-all flex py-4"
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

const NavItem = (_ref2) => {
  let {
    children,
    className
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", _objectSpread(_objectSpread({
    className: `cursor-pointer hover:opacity-50 transition-all font-bold ${className || ""}`
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};

const Navbar = props => {
  const {
    0: isCollapsed,
    1: setIsCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const toggleCollapsed = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => setIsCollapsed(prev => !prev), []);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: "relative w-full z-20 transition-all duration-300"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "w-full shadow-md nv:shadow-none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tw-container py-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "overflow-hidden",
            style: {
              width: "130px",
              height: "35px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "w-full h-full object-contain",
              src: "/logo.png",
              alt: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "hidden nv:flex items-center gap-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              onClick: () => router.push("/packages"),
              children: "Packages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              onClick: () => router.push("/packages"),
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              className: "font-semibold tw-button-secondary hover:opacity-100",
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "nv:hidden transition-all text-4xl cursor-pointer opacity-100 hover:opacity-40",
            onClick: toggleCollapsed,
            children: isCollapsed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineMenu"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 44
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiOutlineClose"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 64
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined), !isCollapsed && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CollapsibleNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 30
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Packages.jsx":
/*!*************************************!*\
  !*** ./src/components/Packages.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Packages; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Packages.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Package = ({
  name,
  price,
  features
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "bg-white flex-1 py-6 text-left rounded",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    className: "text-black font-semibold text-2xl mb-6 px-12",
    children: name
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    className: "text-black font-bold py-6 px-12 text-4xl border-dashed border-t border-b border-gray-300 mb-6",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("sup", {
      className: "font-sans text-gray-300 mr-2",
      children: "$"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), price]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "px-12 flex flex-col gap-2 overflow-y-scroll",
    style: {
      maxHeight: "340px"
    },
    children: features.map((feature, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "flex items-center gap-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillCheckCircle"], {
        className: "text-indigo-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "",
        children: feature
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, undefined)]
    }, `feature-${index}`, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "px-12 pt-6",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "w-full tw-button-secondary",
      children: "Avail Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

function Packages(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", _objectSpread(_objectSpread({
    className: "py-8 text-center bg-gray-100"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tw-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-black text-4xl font-bold mb-2",
        children: "Packages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-4",
        children: "We've come up with various packages to meet the specific needs of all businesses out there. Our packages are for the following services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-center flex-wrap gap-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Package, {
          name: "Startup",
          price: "249.99",
          features: ["5 Stock Photos", "5 Page Website", "3 Banner Design", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Package, {
          name: "Professional",
          price: "599.99",
          features: ["10 Unique Pages Website", "CMS/Admin Panel Support", "8 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee", "Mobile Responsive Will Be Additional $99"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Package, {
          name: "Elite",
          price: "999.99",
          features: ["Upto 15 Unique Pages Website", "Conceptual And Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "CMS/Admin Panel Support", "5 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Package, {
          name: "Silver",
          price: "1599.99",
          features: ["Upto 15 Unique Pages Website", "Conceptual And Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "CMS/Admin Panel Support", "5 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Skills.jsx":
/*!***********************************!*\
  !*** ./src/components/Skills.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Skills.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SkillIcon = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", _objectSpread(_objectSpread({}, props), {}, {
  style: {
    width: "50px",
    height: "50px"
  }
}), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 30
}, undefined);

const Skill = ({
  children,
  heading,
  icon
}) => {
  const Icon = icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col gap-4 w-289px",
    children: [Icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-semibold text-2xl text-pink-500",
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-black",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

function Skills() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "tw-container py-8 pt-0 flex justify-center md:justify-between nv:justify-center flex-wrap gap-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SkillIcon, {
        src: "/icons/cms.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }, this),
      heading: "CMS Website Design & Development",
      children: "CMS-based websites are time saving and cost effective. Get your website developed on WordPress, Magento, Shopify etc. and start right away!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SkillIcon, {
        src: "/icons/website.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 26
      }, this),
      heading: "Custom Website Design",
      children: "If you are looking for a customized website solution then we can make some great designs for you fully customized."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SkillIcon, {
        src: "/icons/ecommerce.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 26
      }, this),
      heading: "Ecommerce Development",
      children: "Selling online is HUGE these days. Get your websites and online products ready today and start making money."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SkillIcon, {
        src: "/icons/landing-page.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 23
      }, this),
      heading: "Landing Page Design & Development",
      children: "Get landing pages designed for you targeted campaigns today and start acquiring leads and converting them into customers."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Solutions.jsx":
/*!**************************************!*\
  !*** ./src/components/Solutions.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Solutions; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Solutions.jsx";


const Point = ({
  children,
  icon
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
  className: "flex gap-4 p-4 pl-0 pt-0",
  children: [icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("icon", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 18
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    className: "font-semibold",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

function Solutions() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "tw-container py-12 flex gap-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        flex: 3
      },
      className: "hidden lg:flex justify-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "https://techgenie.ca/wp-content/uploads/2019/06/web-development-technology.png",
        className: "w-full",
        style: {
          maxWidth: "400px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        flex: 2
      },
      className: "text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "text-4xl font-bold mb-4",
        children: "We Build Masterpieces"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-8",
        children: "Doesn\u2019t matter if you\u2019re looking to create a basic content-based WordPress website or a full-fledged working ecommerce website. From initial front-end design creation to final deployment, our technical managers will guide throughout the procedure and make sure that you get a website which completely suits your business."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-wrap justify-center xs:justify-start gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Custom Development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "iOS & Android Development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Application Integration"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Point, {
          children: "Security Assurance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Sponsors.jsx":
/*!*************************************!*\
  !*** ./src/components/Sponsors.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sponsors; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./src/components/Carousel.jsx");

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Sponsors.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SponsorLogo = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
  src: `/sponsors/${props.index}.png`,
  className: "cursor-pointer select-none pointer-events-none",
  alt: "Sponsor"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

const sponsors = [1, 2, 3, 4, 5];
const sliderSettings = {
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 5
};
function Sponsors() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "tw-container py-12",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, sliderSettings), {}, {
      children: sponsors.map((sponsor, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SponsorLogo, {
        index: index + 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Testimonials.jsx":
/*!*****************************************!*\
  !*** ./src/components/Testimonials.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonials; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./src/components/Carousel.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Testimonials.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const testimonials = [{
  testimonial: "As long as I have these guys with me, I don't gave to worry about any technical support whether its for my website or app!",
  client: "Heather Rafei"
}, {
  testimonial: "I signed up with Tech Genie to design my website laste year. Now I don't only have a beautiful looking website, but a competitive marketing team aswell",
  client: "Terry Evans"
}, {
  testimonial: "These guys rock! It's been my 4th month with them and the website sales have gone up 400%. Now I can focus on expanding my business and not on marketing since they've got it!",
  client: "Georgy Berryhill"
}];
const sliderSettings = {
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsStyle: {
    bottom: "-45px"
  },
  responsive: []
};

const Testimonial = ({
  testimonial,
  client
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "",
    style: {
      width: "800px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mb-4 text-lg",
      children: testimonial
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "font-bold text-center mb-1",
      children: client
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex justify-center text-lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined);
};

function Testimonials() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "bg-diagonal",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tw-container py-14",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "font-bold text-4xl",
          children: "Our client testimonials says it all"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "relative w-12 h-12 bg-gradient-brand rounded-full flex justify-center items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/icon-quotes.png",
            alt: "Quotes",
            className: "pointer-events-none w-6 h-6 object-contain transform"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center mb-12",
        children: "The feedback we get from our customers tells about our cooperation better than we do and makes us move forward."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "tw-container",
        style: {
          maxWidth: "400px"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, sliderSettings), {}, {
          children: testimonials.map((testimonial, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Testimonial, {
            testimonial: testimonial.testimonial,
            client: testimonial.client
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, this))
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/layouts/LandingPageAuth.jsx":
/*!*****************************************!*\
  !*** ./src/layouts/LandingPageAuth.jsx ***!
  \*****************************************/
/*! exports provided: LandingPageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageLayout", function() { return LandingPageLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer.jsx");
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Navbar */ "./src/components/Navbar.jsx");

var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\layouts\\LandingPageAuth.jsx";


const LandingPageLayout = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "min-h-screen flex flex-col",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex-grow",
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! exports provided: LandingPageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LandingPageAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPageAuth */ "./src/layouts/LandingPageAuth.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingPageLayout", function() { return _LandingPageAuth__WEBPACK_IMPORTED_MODULE_0__["LandingPageLayout"]; });

 // export { default as LandingPageLayout } from "./LandingPageAuth";

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const routes = [{
  name: "Home",
  path: "/"
}, {
  name: "Portfolio",
  path: "/portfolio"
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9ydGZvbGlvL1Byb2plY3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlcm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFja2FnZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29sdXRpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcG9uc29ycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9MYW5kaW5nUGFnZUF1dGguanN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImRhdGEiLCJQcm9qZWN0SXRlbSIsInRpdGxlIiwiaW5kZXgiLCJyZXN0Iiwid2luZG93Iiwib3BlbiIsIlByb2plY3RzIiwibWFwIiwicHJvamVjdCIsIkhvbWUiLCJQb2ludCIsImNoaWxkcmVuIiwiaWNvbiIsIkFib3V0IiwiZmxleCIsIlBhZ2luYXRpb25JY29uIiwicG9zaXRpb24iLCJvbkNsaWNrIiwidHJhbnNsYXRpb24iLCJJY29uIiwidHJhbnNmb3JtIiwiQ2Fyb3VzZWwiLCJwcm9wcyIsInNsaWRlclNldHRpbmdzIiwidXNlTWVtbyIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjdXN0b21QYWdpbmciLCJhcHBlbmREb3RzIiwiYm90dG9tIiwiZG90c1N0eWxlIiwicHJldkFycm93IiwiQWlGaWxsTGVmdENpcmNsZSIsIm5leHRBcnJvdyIsIkFpRmlsbFJpZ2h0Q2lyY2xlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIkNvbnRhY3QiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIkZvcm1JbnB1dCIsInR5cGUiLCJDb250YWN0Rm9ybSIsIm1heEhlaWdodCIsIkxpc3RJdGVtIiwiRm9vdGVyIiwid2lkdGgiLCJBaUZpbGxGYWNlYm9vayIsIkFpRmlsbFR3aXR0ZXJTcXVhcmUiLCJBaUZpbGxMaW5rZWRpbiIsIkFpRmlsbEluc3RhZ3JhbSIsIm1pbldpZHRoIiwiQWlPdXRsaW5lRG93biIsIkhlcm8iLCJDb2xsYXBzaWJsZU5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsIkNvbGxhcHNpYmxlTmF2SXRlbSIsIk5hdkl0ZW0iLCJjbGFzc05hbWUiLCJOYXZiYXIiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwidXNlU3RhdGUiLCJ0b2dnbGVDb2xsYXBzZWQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJwdXNoIiwiUGFja2FnZSIsIm5hbWUiLCJwcmljZSIsImZlYXR1cmVzIiwiZmVhdHVyZSIsIlBhY2thZ2VzIiwiU2tpbGxJY29uIiwiU2tpbGwiLCJoZWFkaW5nIiwiU2tpbGxzIiwiU29sdXRpb25zIiwiU3BvbnNvckxvZ28iLCJzcG9uc29ycyIsIlNwb25zb3JzIiwic3BvbnNvciIsInRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsIiwiY2xpZW50IiwiVGVzdGltb25pYWwiLCJUZXN0aW1vbmlhbHMiLCJMYW5kaW5nUGFnZUxheW91dCIsInJvdXRlcyIsInBhdGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztR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WEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIFwiQ2hhYXIgQWNoYWFyXCIsXHJcbiAgICBcIkVjb21tZXJjZVwiLFxyXG4gICAgXCJGdXJuaXR1cmVcIixcclxuICAgIFwiTWVkaWNhbFwiLFxyXG4gICAgXCJIb3NwaXRhbFwiLFxyXG4gICAgXCJEaWdpdGFsIEFnZW5jeVwiLFxyXG4gICAgXCJCdXNpbmVzc1wiLFxyXG4gICAgXCJGdXJuaXR1cmVcIixcclxuXTtcclxuXHJcbmNvbnN0IFByb2plY3RJdGVtID0gKHsgdGl0bGUsIGluZGV4LCAuLi5yZXN0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgdy1mdWxsIG1kOnctNjRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihgcG9ydGZvbGlvLyR7aW5kZXh9LmpwZ2ApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBtZDp3LTI4OXB4IGgtMzk4cHhcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZFwiIHsuLi5yZXN0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLWJsYWNrIHJvdW5kZWQgb3BhY2l0eS0xMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyODlweFwiLCBoZWlnaHQ6IFwiMzk4cHhcIiB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgYmctYmxhY2sgcm91bmRlZCBvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS04MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgcHgtNiB3LWZ1bGwgbWQ6dy0yODlweCBoLTM5OHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBwYi04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgYmctZ3JheS0xMDAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC00eGwgbWItNFwiPlByb2plY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYWtlIGEgbG9vayBhdCBob3cgd2Ugc29sdmUgY2hhbGxlbmdlcyB0byBtZWV0IHByb2plY3QgcmVxdWlyZW1lbnRzIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlciBhIGdyZWF0ZXIgbGV2ZWwgb2YgZnVuY3Rpb25hbGl0eSBjb21wYXJlZCB0byB0cmFkaXRpb25hbCB3ZWJzaXRlcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1jZW50ZXIgZ2FwLTIwIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL3BvcnRmb2xpby8ke2luZGV4ICsgMX0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IExhbmRpbmdQYWdlTGF5b3V0IH0gZnJvbSBcImxheW91dHNcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzXCI7XHJcbmltcG9ydCBTcG9uc29ycyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU3BvbnNvcnNcIjtcclxuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hlcm9cIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BYm91dFwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vUG9ydGZvbGlvL1Byb2plY3RzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCJjb21wb25lbnRzL0NvbnRhY3RcIjtcclxuaW1wb3J0IFNraWxscyBmcm9tIFwiY29tcG9uZW50cy9Ta2lsbHNcIjtcclxuaW1wb3J0IFBhY2thZ2VzIGZyb20gXCJjb21wb25lbnRzL1BhY2thZ2VzXCI7XHJcbmltcG9ydCBTb2x1dGlvbnMgZnJvbSBcImNvbXBvbmVudHMvU29sdXRpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGFuZGluZ1BhZ2VMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPldlYiBEZXZlbG9wbWVudCAtIFRlY2ggR2VuaWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZXJvIC8+XHJcbiAgICAgICAgICAgIDxTcG9uc29ycyAvPlxyXG4gICAgICAgICAgICA8QWJvdXQgLz5cclxuICAgICAgICAgICAgPFNraWxscyAvPlxyXG4gICAgICAgICAgICA8UGFja2FnZXMgLz5cclxuICAgICAgICAgICAgPFNvbHV0aW9ucyAvPlxyXG4gICAgICAgICAgICA8UHJvamVjdHMgLz5cclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxyXG4gICAgICAgICAgICA8Q29udGFjdCAvPlxyXG4gICAgICAgIDwvTGFuZGluZ1BhZ2VMYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvaW50ID0gKHsgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcC00IHBsLTAgcHQtMFwiPlxyXG4gICAgICAgIHtpY29uICYmIDxpY29uIC8+fVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOCBwdC0wIGZsZXggZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGp1c3RpZnktY2VudGVyIFwiIHN0eWxlPXt7IGZsZXg6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5XZSBCdWlsZCBNYXN0ZXJwaWVjZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvZXNu4oCZdCBtYXR0ZXIgaWYgeW914oCZcmUgbG9va2luZyB0byBjcmVhdGUgYSBiYXNpYyBjb250ZW50LWJhc2VkIFdvcmRQcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYnNpdGUgb3IgYSBmdWxsLWZsZWRnZWQgd29ya2luZyBlY29tbWVyY2Ugd2Vic2l0ZS4gRnJvbSBpbml0aWFsIGZyb250LWVuZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbiBjcmVhdGlvbiB0byBmaW5hbCBkZXBsb3ltZW50LCBvdXIgdGVjaG5pY2FsIG1hbmFnZXJzIHdpbGwgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdWdob3V0IHRoZSBwcm9jZWR1cmUgYW5kIG1ha2Ugc3VyZSB0aGF0IHlvdSBnZXQgYSB3ZWJzaXRlIHdoaWNoIGNvbXBsZXRlbHlcclxuICAgICAgICAgICAgICAgICAgICBzdWl0cyB5b3VyIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB4czpqdXN0aWZ5LXN0YXJ0IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PkZ1bGx5IFJlc3BvbnNpdmU8L1BvaW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2ludD5EZXZpY2UgVGVzdGluZzwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PkNsZWFuICYgTW9kZXJuPC9Qb2ludD5cclxuICAgICAgICAgICAgICAgICAgICA8UG9pbnQ+R3JlYXQgRXhwZXJpZW5jZTwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDMsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdGVjaGdlbmllLmNhL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzA2L3dlYi1kZXZlbG9wbWVudC1wcm9jZXNzLWltZy5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlGaWxsTGVmdENpcmNsZSwgQWlGaWxsUmlnaHRDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgRmFEb3RDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmNvbnN0IFBhZ2luYXRpb25JY29uID0gKHsgaWNvbiwgcG9zaXRpb24sIG9uQ2xpY2sgfSkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcIi1sZWZ0LThcIiA6IFwiLXJpZ2h0LTggbWQ6LXJpZ2h0LTEwXCI7XHJcbiAgICBjb25zdCBJY29uID0gaWNvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTUwJSlcIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B6LTEwIGFic29sdXRlIHRvcC0xLzIgYmxvY2sgdGV4dC00eGwgbWQ6dGV4dC0yeGwgdGV4dC1pbmRpZ28tNTAwIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmxhY2sgZm9jdXM6b3V0bGluZS1ibGFjayAke3RyYW5zbGF0aW9ufWB9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xyXG4gICAgY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB1c2VNZW1vKFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICAgIGFycm93czogcHJvcHMuYXJyb3dzID8/IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHByb3BzLmRvdHMgPz8gdHJ1ZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcHJvcHMuc2xpZGVzVG9TaG93ID8/IDQsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBwcm9wcy5zbGlkZXNUb1Njcm9sbCA/PyA0LFxyXG4gICAgICAgICAgICBjdXN0b21QYWdpbmc6ICgpID0+IChcclxuICAgICAgICAgICAgICAgIDxGYURvdENpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gdGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTUwIHRyYW5zaXRpb24tYWxsYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGFwcGVuZERvdHM6IChkb3RzKSA9PiA8dWwgc3R5bGU9e3sgYm90dG9tOiBcIi01MHB4XCIsIC4uLnByb3BzPy5kb3RzU3R5bGUgfX0+e2RvdHN9IDwvdWw+LFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6IDxQYWdpbmF0aW9uSWNvbiBpY29uPXtBaUZpbGxMZWZ0Q2lyY2xlfSBwb3NpdGlvbj1cImxlZnRcIiAvPixcclxuICAgICAgICAgICAgbmV4dEFycm93OiA8UGFnaW5hdGlvbkljb24gaWNvbj17QWlGaWxsUmlnaHRDaXJjbGV9IHBvc2l0aW9uPVwicmlnaHRcIiAvPixcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogcHJvcHMucmVzcG9uc2l2ZSB8fCBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFtdXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiA8U2xpZGVyIHsuLi5zbGlkZXJTZXR0aW5nc30+e3Byb3BzLmNoaWxkcmVufTwvU2xpZGVyPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0Rm9ybVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjkwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMzIweDMyMDBcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgbGVmdC0wIHRvcC0wXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLWdyYWRpZW50LWJyYW5kIGFic29sdXRlIGxlZnQtMCB0b3AtMFwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCB0ZXh0LXdoaXRlIGFic29sdXRlIGxlZnQtMCB0b3AtMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb250LXNhbnMgZm9udC1saWdodFwiPkdldCBzdGFydGVkIGluc3RhbnRseTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCB0ZXh0LTR4bCBtYi00XCI+R2V0IEluIFRvdWNoPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyXCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNzIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvcm1JbnB1dCA9IChwcm9wcykgPT4gKFxyXG4gICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJvcmRlciBib3JkZXItb3BhY2l0eS01MCBmb2N1czpib3JkZXItcGluay01MDAgZmxleC1ncm93IHAtNCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIGZvY3VzOmJnLXdoaXRlIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICB0eXBlPXtwcm9wcy50eXBlIHx8IFwidGV4dFwifVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlBob25lXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjM2MHB4XCIsIG1heEhlaWdodDogXCIzNjBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1vcGFjaXR5LTUwIGZvY3VzOmJvcmRlci1waW5rLTUwMCBkdXJhdGlvbi0zMDAgcC00IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgSWRlYVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHctYnV0dG9uLXNlY29uZGFyeSB3LWZ1bGwgcHktNCBmb2N1czpvdXRsaW5lLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBBaUZpbGxGYWNlYm9vayxcclxuICAgIEFpRmlsbFR3aXR0ZXJTcXVhcmUsXHJcbiAgICBBaUZpbGxMaW5rZWRpbixcclxuICAgIEFpRmlsbEluc3RhZ3JhbSxcclxuICAgIEFpT3V0bGluZURvd24sXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5jb25zdCBMaXN0SXRlbSA9ICh7IGNoaWxkcmVuLCByZXN0IH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCBob3ZlcjpvcGFjaXR5LTUwXCIgey4uLnJlc3R9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbGk+XHJcbik7XHJcblxyXG5jb25zdCBJY29uID0gKHsgaWNvbiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgICBjb25zdCBJY29uID0gaWNvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGZvY3VzOm91dGxpbmUtYmxhY2tcIlxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTUwIHB5LTggbWQ6aC0xNTYgbGc6aC1hdXRvXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgZmxleCBoLWZ1bGwgZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTYgbWQ6Z2FwLTEyIHRleHQtYmFzZSB0ZXh0LWdyYXktNzAwIG1kOmZsZXgtd3JhcCBsZzpmbGV4LXJvdyBsZzpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0zLzUgbGc6dy00LzYgZmxleCBmbGV4LTEgZmxleC1jb2wgZ2FwLTMgbGc6Z2FwLTE2IGl0ZW1zLXN0YXJ0IGxnOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTMwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hlbiBpdCBjb21lcyB0byBjcmVhdGluZyBvbmxpbmUgcHJlc2VuY2UgZm9yIGJ1c2luZXNzZXMgYW5kIGRpZ2l0YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhbGVzIGNoYW5uZWxzLCBUZWNoIEdlbmllIGlzIHRoZSBuYW1lIHlvdSBjYW4gdHJ1c3QhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MzMgWW9uZ2UgU3QsIFRvcm9udG8sIE9OIE01RSAwQTk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjY0Ny0zNzAtNzM1NzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+aW5mb0B0ZWNoZ2VuaWUuY2E8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggdGV4dC00eGwganVzdGlmeS1zdGFydCBnYXAtMiBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtBaUZpbGxGYWNlYm9va30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e0FpRmlsbFR3aXR0ZXJTcXVhcmV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtBaUZpbGxMaW5rZWRpbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e0FpRmlsbEluc3RhZ3JhbX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NlcnRpZmljYXRpb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTMgaXRlbXMtc3RhcnRcIiBzdHlsZT17eyBtaW5XaWR0aDogXCIyMjJweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJvcmRlci1iLTIgYm9yZGVyLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e0FpT3V0bGluZURvd259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ub25lIGZsZXggZmxleC1jb2wgZ2FwLTIgaG92ZXI6Ym9yZGVyLWItMiBob3Zlcjpib3JkZXItaW5kaWdvLTUwMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+V2Vic2l0ZSBkZXNpZ248L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPldvcmRwcmVzcyBkZXZlbG9wbWVudDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+RWNvbW1lcmNlIHdlYnNpdGUgZGV2ZWxvcG1lbnQ8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPldlYiBBcHAgRGV2ZWxvcG1lbnQ8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJvcmRlci1iLTIgYm9yZGVyLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e0FpT3V0bGluZURvd259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBmbGV4IGZsZXgtY29sIGdhcC0yIGhvdmVyOmJvcmRlci1iLTIgaG92ZXI6Ym9yZGVyLWluZGlnby01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlBvcnRmb2xpbzwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5BYm91dCBVczwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5QYWNrYWdlczwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb3JtSW5wdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBib3JkZXIgYm9yZGVyLW9wYWNpdHktNTAgZm9jdXM6Ym9yZGVyLXBpbmstNTAwIGZsZXgtZ3JvdyBwLTQgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgdHlwZT17cHJvcHMudHlwZSB8fCBcInRleHRcIn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIGJnLWdyYWRpZW50LWJyYW5kIHAtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBudjpmbGV4LXJvdyBnYXAtMTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC0zICBcIiBzdHlsZT17eyBmbGV4OiA1IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0zeGwgZm9udC1saWdodCB0ZXh0LWxlZnQgeHM6dGV4dC1sZWZ0IGR0OnRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbSBXZWJzaXRlIERldmVsb3BtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIHRleHQtbGVmdCB4czp0ZXh0LWxlZnQgZHQ6dGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2UgYnVpbGQgU2FsZXMtRnJpZW5kbHkgYW5kIEZ1dHVyZS1Qcm9vZiBXZWJzaXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1sZWZ0IHhzOnRleHQtbGVmdCBkdDp0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbiB1bnJlbGlhYmxlLCBvdXRkYXRlZCwgYW5kIG1pbmQtbnVtYmluZ2x5IHNsb3cgd2Vic2l0ZSBpcyB0aGUgcXVpY2tlc3Qgd2F5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIGxvc2UgYnVzaW5lc3MgYW5kIHRhcm5pc2ggeW91ciBicmFuZCBpbWFnZS4gVGVjaCBHZW5pZSBpcyBoZXJlIHRvIGhlbHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeW91IHNldCB0aGF0IHJpZ2h0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTYgcHgtMTIgcHktOCBiZy1ncmF5LTMwMCByb3VuZGVkLXhsIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAzLCBtYXhXaWR0aDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwIHRvIDcwJSBPRkYgT24gTG9nbyBEZXNpZ24gJiBXZWJzaXRlIERlc2lnbnMgUGFja2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3IgQ2FsbCBOb3cgNjQ3LTM3MC03MzU3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC00IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiMTAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1vcGFjaXR5LTUwIGZvY3VzOmJvcmRlci1waW5rLTUwMCBkdXJhdGlvbi0zMDAgcC00IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIElkZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInR3LWJ1dHRvbi1zZWNvbmRhcnkgdy1mdWxsIHB5LTQgZm9jdXM6b3V0bGluZS13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51LCBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCJyb3V0ZXNcIjtcclxuXHJcbmNvbnN0IENvbGxhcHNpYmxlTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5Qb3J0Zm9saW88L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+UGFja2FnZXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBDb2xsYXBzaWJsZU5hdkl0ZW0gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbCBmbGV4IHB5LTRcIiB7Li4ucmVzdH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcclxuICAgIDxsaVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNTAgdHJhbnNpdGlvbi1hbGwgZm9udC1ib2xkICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNDb2xsYXBzZWQoKHByZXYpID0+ICFwcmV2KSwgW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHotMjAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy1tZCBudjpzaGFkb3ctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTMwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbnY6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BhY2thZ2VzXCIpfT5QYWNrYWdlczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BhY2thZ2VzXCIpfT5Qb3J0Zm9saW88L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHR3LWJ1dHRvbi1zZWNvbmRhcnkgaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm52OmhpZGRlbiB0cmFuc2l0aW9uLWFsbCB0ZXh0LTR4bCBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTEwMCBob3ZlcjpvcGFjaXR5LTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29sbGFwc2VkID8gPEFpT3V0bGluZU1lbnUgLz4gOiA8QWlPdXRsaW5lQ2xvc2UgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiA8Q29sbGFwc2libGVOYXYgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5jb25zdCBQYWNrYWdlID0gKHsgbmFtZSwgcHJpY2UsIGZlYXR1cmVzIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleC0xIHB5LTYgdGV4dC1sZWZ0IHJvdW5kZWRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LXNlbWlib2xkIHRleHQtMnhsIG1iLTYgcHgtMTJcIj57bmFtZX08L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtYm9sZCBweS02IHB4LTEyIHRleHQtNHhsIGJvcmRlci1kYXNoZWQgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIG1iLTZcIj5cclxuICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1ncmF5LTMwMCBtci0yXCI+JDwvc3VwPlxyXG4gICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHgtMTIgZmxleCBmbGV4LWNvbCBnYXAtMiBvdmVyZmxvdy15LXNjcm9sbFwiIHN0eWxlPXt7IG1heEhlaWdodDogXCIzNDBweFwiIH19PlxyXG4gICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCIga2V5PXtgZmVhdHVyZS0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntmZWF0dXJlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMiBwdC02XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHR3LWJ1dHRvbi1zZWNvbmRhcnlcIj5BdmFpbCBOb3c8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZXMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCB0ZXh0LWNlbnRlciBiZy1ncmF5LTEwMFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LTR4bCBmb250LWJvbGQgbWItMlwiPlBhY2thZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBXZSd2ZSBjb21lIHVwIHdpdGggdmFyaW91cyBwYWNrYWdlcyB0byBtZWV0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiBhbGwgYnVzaW5lc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCB0aGVyZS4gT3VyIHBhY2thZ2VzIGFyZSBmb3IgdGhlIGZvbGxvd2luZyBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTdGFydHVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCIyNDkuOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IFN0b2NrIFBob3Rvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IFBhZ2UgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzIEJhbm5lciBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMSBqUXVlcnkgU2xpZGVyIEJhbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmVlIEdvb2dsZSBGcmllbmRseSBTaXRlbWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIFczQyBDZXJ0aWZpZWQgSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0OCBUbyA3MiBIb3VycyBUQVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFjZWJvb2sgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHdpdHRlciBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VUdWJlIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUHJvZmVzc2lvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCI1OTkuOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMCBVbmlxdWUgUGFnZXMgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDTVMvQWRtaW4gUGFuZWwgU3VwcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI4IFN0b2NrIFBob3Rvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IEJhbm5lciBEZXNpZ25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEgalF1ZXJ5IFNsaWRlciBCYW5uZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJlZSBHb29nbGUgRnJpZW5kbHkgU2l0ZW1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZSBXM0MgQ2VydGlmaWVkIEhUTUxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNDggVG8gNzIgSG91cnMgVEFUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZhY2Vib29rIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlR3aXR0ZXIgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91VHViZSBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZSBEZXBsb3ltZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgU2F0aXNmYWN0aW9uIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIFVuaXF1ZSBEZXNpZ24gR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgTW9uZXkgQmFjayBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmUgV2lsbCBCZSBBZGRpdGlvbmFsICQ5OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkVsaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCI5OTkuOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVcHRvIDE1IFVuaXF1ZSBQYWdlcyBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbmNlcHR1YWwgQW5kIER5bmFtaWMgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPbmxpbmUgUmVzZXJ2YXRpb24vQXBwb2ludG1lbnQgVG9vbCAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ubGluZSBQYXltZW50IEludGVncmF0aW9uIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VzdG9tIEZvcm1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxlYWQgQ2FwdHVyaW5nIEZvcm1zIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTmV3c2xldHRlciBTdWJzY3JpcHRpb24gKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXdzZmVlZCBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb2NpYWwgTWVkaWEgSW50ZWdyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VhcmNoIEVuZ2luZSBTdWJtaXNzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNNUy9BZG1pbiBQYW5lbCBTdXBwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgU3RvY2sgUGhvdG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgQmFubmVyIERlc2lnbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMSBqUXVlcnkgU2xpZGVyIEJhbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmVlIEdvb2dsZSBGcmllbmRseSBTaXRlbWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIFczQyBDZXJ0aWZpZWQgSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0OCBUbyA3MiBIb3VycyBUQVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFjZWJvb2sgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHdpdHRlciBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VUdWJlIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIERlcGxveW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBTYXRpc2ZhY3Rpb24gR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgVW5pcXVlIERlc2lnbiBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBNb25leSBCYWNrIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNpbHZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPVwiMTU5OS45OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVwdG8gMTUgVW5pcXVlIFBhZ2VzIFdlYnNpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uY2VwdHVhbCBBbmQgRHluYW1pYyBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ubGluZSBSZXNlcnZhdGlvbi9BcHBvaW50bWVudCBUb29sIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFBheW1lbnQgSW50ZWdyYXRpb24gKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXN0b20gRm9ybXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGVhZCBDYXB0dXJpbmcgRm9ybXMgKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXdzbGV0dGVyIFN1YnNjcmlwdGlvbiAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5ld3NmZWVkIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvY2lhbCBNZWRpYSBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZWFyY2ggRW5naW5lIFN1Ym1pc3Npb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ01TL0FkbWluIFBhbmVsIFN1cHBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNSBTdG9jayBQaG90b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNSBCYW5uZXIgRGVzaWduc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxIGpRdWVyeSBTbGlkZXIgQmFubmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZyZWUgR29vZ2xlIEZyaWVuZGx5IFNpdGVtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgVzNDIENlcnRpZmllZCBIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjQ4IFRvIDcyIEhvdXJzIFRBVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWNlYm9vayBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUd2l0dGVyIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdVR1YmUgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgRGVwbG95bWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIFNhdGlzZmFjdGlvbiBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBVbmlxdWUgRGVzaWduIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIE1vbmV5IEJhY2sgR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNraWxsSWNvbiA9IChwcm9wcykgPT4gPGltZyB7Li4ucHJvcHN9IHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fSAvPjtcclxuXHJcbmNvbnN0IFNraWxsID0gKHsgY2hpbGRyZW4sIGhlYWRpbmcsIGljb24gfSkgPT4ge1xyXG4gICAgY29uc3QgSWNvbiA9IGljb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCB3LTI4OXB4XCI+XHJcbiAgICAgICAgICAgIHtJY29ufVxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB0ZXh0LXBpbmstNTAwXCI+e2hlYWRpbmd9PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFja1wiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOCBwdC0wIGZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1iZXR3ZWVuIG52Omp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtOFwiPlxyXG4gICAgICAgICAgICA8U2tpbGxcclxuICAgICAgICAgICAgICAgIGljb249ezxTa2lsbEljb24gc3JjPVwiL2ljb25zL2Ntcy5zdmdcIiAvPn1cclxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDTVMgV2Vic2l0ZSBEZXNpZ24gJiBEZXZlbG9wbWVudFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENNUy1iYXNlZCB3ZWJzaXRlcyBhcmUgdGltZSBzYXZpbmcgYW5kIGNvc3QgZWZmZWN0aXZlLiBHZXQgeW91ciB3ZWJzaXRlIGRldmVsb3BlZCBvblxyXG4gICAgICAgICAgICAgICAgV29yZFByZXNzLCBNYWdlbnRvLCBTaG9waWZ5IGV0Yy4gYW5kIHN0YXJ0IHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbCBpY29uPXs8U2tpbGxJY29uIHNyYz1cIi9pY29ucy93ZWJzaXRlLnN2Z1wiIC8+fSBoZWFkaW5nPVwiQ3VzdG9tIFdlYnNpdGUgRGVzaWduXCI+XHJcbiAgICAgICAgICAgICAgICBJZiB5b3UgYXJlIGxvb2tpbmcgZm9yIGEgY3VzdG9taXplZCB3ZWJzaXRlIHNvbHV0aW9uIHRoZW4gd2UgY2FuIG1ha2Ugc29tZSBncmVhdFxyXG4gICAgICAgICAgICAgICAgZGVzaWducyBmb3IgeW91IGZ1bGx5IGN1c3RvbWl6ZWQuXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbCBpY29uPXs8U2tpbGxJY29uIHNyYz1cIi9pY29ucy9lY29tbWVyY2Uuc3ZnXCIgLz59IGhlYWRpbmc9XCJFY29tbWVyY2UgRGV2ZWxvcG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIFNlbGxpbmcgb25saW5lIGlzIEhVR0UgdGhlc2UgZGF5cy4gR2V0IHlvdXIgd2Vic2l0ZXMgYW5kIG9ubGluZSBwcm9kdWN0cyByZWFkeSB0b2RheVxyXG4gICAgICAgICAgICAgICAgYW5kIHN0YXJ0IG1ha2luZyBtb25leS5cclxuICAgICAgICAgICAgPC9Ta2lsbD5cclxuICAgICAgICAgICAgPFNraWxsXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8U2tpbGxJY29uIHNyYz1cIi9pY29ucy9sYW5kaW5nLXBhZ2Uuc3ZnXCIgLz59XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nPVwiTGFuZGluZyBQYWdlIERlc2lnbiAmIERldmVsb3BtZW50XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2V0IGxhbmRpbmcgcGFnZXMgZGVzaWduZWQgZm9yIHlvdSB0YXJnZXRlZCBjYW1wYWlnbnMgdG9kYXkgYW5kIHN0YXJ0IGFjcXVpcmluZ1xyXG4gICAgICAgICAgICAgICAgbGVhZHMgYW5kIGNvbnZlcnRpbmcgdGhlbSBpbnRvIGN1c3RvbWVycy5cclxuICAgICAgICAgICAgPC9Ta2lsbD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvaW50ID0gKHsgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcC00IHBsLTAgcHQtMFwiPlxyXG4gICAgICAgIHtpY29uICYmIDxpY29uIC8+fVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbHV0aW9ucygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTEyIGZsZXggZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAzIH19IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90ZWNoZ2VuaWUuY2Evd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDYvd2ViLWRldmVsb3BtZW50LXRlY2hub2xvZ3kucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDIgfX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPldlIEJ1aWxkIE1hc3RlcnBpZWNlczwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvZXNu4oCZdCBtYXR0ZXIgaWYgeW914oCZcmUgbG9va2luZyB0byBjcmVhdGUgYSBiYXNpYyBjb250ZW50LWJhc2VkIFdvcmRQcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYnNpdGUgb3IgYSBmdWxsLWZsZWRnZWQgd29ya2luZyBlY29tbWVyY2Ugd2Vic2l0ZS4gRnJvbSBpbml0aWFsIGZyb250LWVuZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbiBjcmVhdGlvbiB0byBmaW5hbCBkZXBsb3ltZW50LCBvdXIgdGVjaG5pY2FsIG1hbmFnZXJzIHdpbGwgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdWdob3V0IHRoZSBwcm9jZWR1cmUgYW5kIG1ha2Ugc3VyZSB0aGF0IHlvdSBnZXQgYSB3ZWJzaXRlIHdoaWNoIGNvbXBsZXRlbHlcclxuICAgICAgICAgICAgICAgICAgICBzdWl0cyB5b3VyIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB4czpqdXN0aWZ5LXN0YXJ0IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PkN1c3RvbSBEZXZlbG9wbWVudDwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PmlPUyAmIEFuZHJvaWQgRGV2ZWxvcG1lbnQ8L1BvaW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2ludD5BcHBsaWNhdGlvbiBJbnRlZ3JhdGlvbjwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PlNlY3VyaXR5IEFzc3VyYW5jZTwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgU3BvbnNvckxvZ28gPSAocHJvcHMpID0+IChcclxuICAgIDxpbWdcclxuICAgICAgICBzcmM9e2Avc3BvbnNvcnMvJHtwcm9wcy5pbmRleH0ucG5nYH1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSBwb2ludGVyLWV2ZW50cy1ub25lXCJcclxuICAgICAgICBhbHQ9XCJTcG9uc29yXCJcclxuICAgIC8+XHJcbik7XHJcblxyXG5jb25zdCBzcG9uc29ycyA9IFsxLCAyLCAzLCA0LCA1XTtcclxuXHJcbmNvbnN0IHNsaWRlclNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb25zb3JzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktMTJcIj5cclxuICAgICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICB7c3BvbnNvcnMubWFwKChzcG9uc29yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcG9uc29yTG9nbyBpbmRleD17aW5kZXggKyAxfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmNvbnN0IHRlc3RpbW9uaWFscyA9IFtcclxuICAgIHtcclxuICAgICAgICB0ZXN0aW1vbmlhbDpcclxuICAgICAgICAgICAgXCJBcyBsb25nIGFzIEkgaGF2ZSB0aGVzZSBndXlzIHdpdGggbWUsIEkgZG9uJ3QgZ2F2ZSB0byB3b3JyeSBhYm91dCBhbnkgdGVjaG5pY2FsIHN1cHBvcnQgd2hldGhlciBpdHMgZm9yIG15IHdlYnNpdGUgb3IgYXBwIVwiLFxyXG4gICAgICAgIGNsaWVudDogXCJIZWF0aGVyIFJhZmVpXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsOlxyXG4gICAgICAgICAgICBcIkkgc2lnbmVkIHVwIHdpdGggVGVjaCBHZW5pZSB0byBkZXNpZ24gbXkgd2Vic2l0ZSBsYXN0ZSB5ZWFyLiBOb3cgSSBkb24ndCBvbmx5IGhhdmUgYSBiZWF1dGlmdWwgbG9va2luZyB3ZWJzaXRlLCBidXQgYSBjb21wZXRpdGl2ZSBtYXJrZXRpbmcgdGVhbSBhc3dlbGxcIixcclxuICAgICAgICBjbGllbnQ6IFwiVGVycnkgRXZhbnNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVzdGltb25pYWw6XHJcbiAgICAgICAgICAgIFwiVGhlc2UgZ3V5cyByb2NrISBJdCdzIGJlZW4gbXkgNHRoIG1vbnRoIHdpdGggdGhlbSBhbmQgdGhlIHdlYnNpdGUgc2FsZXMgaGF2ZSBnb25lIHVwIDQwMCUuIE5vdyBJIGNhbiBmb2N1cyBvbiBleHBhbmRpbmcgbXkgYnVzaW5lc3MgYW5kIG5vdCBvbiBtYXJrZXRpbmcgc2luY2UgdGhleSd2ZSBnb3QgaXQhXCIsXHJcbiAgICAgICAgY2xpZW50OiBcIkdlb3JneSBCZXJyeWhpbGxcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBzbGlkZXJTZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBkb3RzU3R5bGU6IHsgYm90dG9tOiBcIi00NXB4XCIgfSxcclxuICAgIHJlc3BvbnNpdmU6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgVGVzdGltb25pYWwgPSAoeyB0ZXN0aW1vbmlhbCwgY2xpZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogXCI4MDBweFwiIH19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGdcIj57dGVzdGltb25pYWx9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItMVwiPntjbGllbnR9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWRpYWdvbmFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTE0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bFwiPk91ciBjbGllbnQgdGVzdGltb25pYWxzIHNheXMgaXQgYWxsPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMiBiZy1ncmFkaWVudC1icmFuZCByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb24tcXVvdGVzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJRdW90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSB3LTYgaC02IG9iamVjdC1jb250YWluIHRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGZlZWRiYWNrIHdlIGdldCBmcm9tIG91ciBjdXN0b21lcnMgdGVsbHMgYWJvdXQgb3VyIGNvb3BlcmF0aW9uIGJldHRlciB0aGFuXHJcbiAgICAgICAgICAgICAgICAgICAgd2UgZG8gYW5kIG1ha2VzIHVzIG1vdmUgZm9yd2FyZC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lclwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbD17dGVzdGltb25pYWwudGVzdGltb25pYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50PXt0ZXN0aW1vbmlhbC5jbGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5kaW5nUGFnZUxheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0xhbmRpbmdQYWdlQXV0aFwiO1xyXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIExhbmRpbmdQYWdlTGF5b3V0IH0gZnJvbSBcIi4vTGFuZGluZ1BhZ2VBdXRoXCI7XHJcbiIsImNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhvbWVcIixcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgICAgICBwYXRoOiBcIi9wb3J0Zm9saW9cIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=