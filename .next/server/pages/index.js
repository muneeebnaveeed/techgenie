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
        className: "flex flex-col justify-center gap-3 text-center nv:text-left ",
        style: {
          flex: 5
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white text-3xl font-light",
          children: "Custom Website Development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-white text-4xl",
          children: "We build Sales-Friendly and Future-Proof Websites"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-white text-xl font-light",
          children: "An unreliable, outdated, and mind-numbingly slow website is the quickest way to lose business and tarnish your brand image. Tech Genie is here to help you set that right."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
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
            lineNumber: 34,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Or Call Now 647-370-7357"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "w-full flex flex-col gap-4 mb-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "w-full flex flex-col gap-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
              placeholder: "Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
              placeholder: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
              type: "number",
              placeholder: "Phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
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
            lineNumber: 45,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "tw-button-secondary w-full py-4 focus:outline-white",
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
    className: "flex flex-col gap-4",
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
    className: "tw-container py-8 pt-0 flex flex-wrap gap-8",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvUG9ydGZvbGlvL1Byb2plY3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlcm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFja2FnZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NraWxscy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU29sdXRpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcG9uc29ycy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9MYW5kaW5nUGFnZUF1dGguanN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImRhdGEiLCJQcm9qZWN0SXRlbSIsInRpdGxlIiwiaW5kZXgiLCJyZXN0Iiwid2luZG93Iiwib3BlbiIsIlByb2plY3RzIiwibWFwIiwicHJvamVjdCIsIkhvbWUiLCJQb2ludCIsImNoaWxkcmVuIiwiaWNvbiIsIkFib3V0IiwiZmxleCIsIlBhZ2luYXRpb25JY29uIiwicG9zaXRpb24iLCJvbkNsaWNrIiwidHJhbnNsYXRpb24iLCJJY29uIiwidHJhbnNmb3JtIiwiQ2Fyb3VzZWwiLCJwcm9wcyIsInNsaWRlclNldHRpbmdzIiwidXNlTWVtbyIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjdXN0b21QYWdpbmciLCJhcHBlbmREb3RzIiwiYm90dG9tIiwiZG90c1N0eWxlIiwicHJldkFycm93IiwiQWlGaWxsTGVmdENpcmNsZSIsIm5leHRBcnJvdyIsIkFpRmlsbFJpZ2h0Q2lyY2xlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIkNvbnRhY3QiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIkZvcm1JbnB1dCIsInR5cGUiLCJDb250YWN0Rm9ybSIsIm1heEhlaWdodCIsIkxpc3RJdGVtIiwiRm9vdGVyIiwid2lkdGgiLCJBaUZpbGxGYWNlYm9vayIsIkFpRmlsbFR3aXR0ZXJTcXVhcmUiLCJBaUZpbGxMaW5rZWRpbiIsIkFpRmlsbEluc3RhZ3JhbSIsIm1pbldpZHRoIiwiQWlPdXRsaW5lRG93biIsIkhlcm8iLCJDb2xsYXBzaWJsZU5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsIkNvbGxhcHNpYmxlTmF2SXRlbSIsIk5hdkl0ZW0iLCJjbGFzc05hbWUiLCJOYXZiYXIiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwidXNlU3RhdGUiLCJ0b2dnbGVDb2xsYXBzZWQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJwdXNoIiwiUGFja2FnZSIsIm5hbWUiLCJwcmljZSIsImZlYXR1cmVzIiwiZmVhdHVyZSIsIlBhY2thZ2VzIiwiU2tpbGxJY29uIiwiU2tpbGwiLCJoZWFkaW5nIiwiU2tpbGxzIiwiU29sdXRpb25zIiwiU3BvbnNvckxvZ28iLCJzcG9uc29ycyIsIlNwb25zb3JzIiwic3BvbnNvciIsInRlc3RpbW9uaWFscyIsInRlc3RpbW9uaWFsIiwiY2xpZW50IiwiVGVzdGltb25pYWwiLCJUZXN0aW1vbmlhbHMiLCJMYW5kaW5nUGFnZUxheW91dCIsInJvdXRlcyIsInBhdGgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQ1QsY0FEUyxFQUVULFdBRlMsRUFHVCxXQUhTLEVBSVQsU0FKUyxFQUtULFVBTFMsRUFNVCxnQkFOUyxFQU9ULFVBUFMsRUFRVCxXQVJTLENBQWI7O0FBV0EsTUFBTUMsV0FBVyxHQUFHLFVBQStCO0FBQUEsTUFBOUI7QUFBRUMsU0FBRjtBQUFTQztBQUFULEdBQThCO0FBQUEsTUFBWEMsSUFBVzs7QUFDL0Msc0JBQ0k7QUFDSSxhQUFTLEVBQUMsK0NBRGQ7QUFFSSxXQUFPLEVBQUUsTUFBTUMsTUFBTSxDQUFDQyxJQUFQLENBQWEsYUFBWUgsS0FBTSxNQUEvQixDQUZuQjtBQUFBLDRCQUlJO0FBQUssZUFBUyxFQUFDLHdEQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBd0RDLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBV0k7QUFBSyxlQUFTLEVBQUMsK0tBQWY7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQSxrQkFBeUNGO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUJILENBbEJEOztBQW9CZSxTQUFTSyxRQUFULEdBQW9CO0FBQy9CLHNCQUNJO0FBQVMsYUFBUyxFQUFDLGFBQW5CO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFLLGVBQVMsRUFBQywyRUFBZjtBQUFBLGdCQUNLUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxDQUFDQyxPQUFELEVBQVVOLEtBQVYsa0JBQ04scUVBQUMsV0FBRDtBQUVJLGFBQUssRUFBRUEsS0FBSyxHQUFHLENBRm5CO0FBR0ksV0FBRyxFQUFHLGNBQWFBLEtBQUssR0FBRyxDQUFFLE1BSGpDO0FBSUksYUFBSyxFQUFFTTtBQUpYLFNBQ1UsV0FBVU4sS0FBTSxFQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1QkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTTyxJQUFULEdBQWdCO0FBQzNCLHNCQUNJLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSixlQVNJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUSixlQVVJLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixlQVdJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixlQVlJLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDs7QUFFQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxrQkFDVjtBQUFJLFdBQVMsRUFBQywwQkFBZDtBQUFBLGFBQ0tBLElBQUksaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURiLGVBRUk7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBLGNBQThCRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBT2UsU0FBU0UsS0FBVCxHQUFpQjtBQUM1QixzQkFDSTtBQUFTLGFBQVMsRUFBQyxtQ0FBbkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxxQ0FBZjtBQUFxRCxXQUFLLEVBQUU7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBNUQ7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFTSTtBQUFLLGlCQUFTLEVBQUMsc0RBQWY7QUFBQSxnQ0FDSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBaUJJO0FBQ0ksZUFBUyxFQUFDLDRDQURkO0FBRUksV0FBSyxFQUFFO0FBQ0hBLFlBQUksRUFBRTtBQURILE9BRlg7QUFBQSw2QkFNSTtBQUFLLFdBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsQ0FBQztBQUFFSCxNQUFGO0FBQVFJLFVBQVI7QUFBa0JDO0FBQWxCLENBQUQsS0FBaUM7QUFDcEQsUUFBTUMsV0FBVyxHQUFHRixRQUFRLEtBQUssTUFBYixHQUFzQixTQUF0QixHQUFrQyx1QkFBdEQ7QUFDQSxRQUFNRyxJQUFJLEdBQUdQLElBQWI7QUFDQSxzQkFDSSxxRUFBQyxJQUFEO0FBQ0ksV0FBTyxFQUFFSyxPQURiO0FBRUksU0FBSyxFQUFFO0FBQUVHLGVBQVMsRUFBRTtBQUFiLEtBRlg7QUFHSSxhQUFTLEVBQUcsdUlBQXNJRixXQUFZO0FBSGxLO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILENBVkQ7O0FBWWUsU0FBU0csUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDcEMsUUFBTUMsY0FBYyxHQUFHQyxxREFBTyxDQUMxQjtBQUFBOztBQUFBLFdBQU87QUFDSEMsWUFBTSxtQkFBRUgsS0FBSyxDQUFDRyxNQUFSLHlEQUFrQixJQURyQjtBQUVIQyxVQUFJLGlCQUFFSixLQUFLLENBQUNJLElBQVIscURBQWdCLElBRmpCO0FBR0hDLGNBQVEsRUFBRSxJQUhQO0FBSUhDLFdBQUssRUFBRSxHQUpKO0FBS0hDLGtCQUFZLHlCQUFFUCxLQUFLLENBQUNPLFlBQVIscUVBQXdCLENBTGpDO0FBTUhDLG9CQUFjLDJCQUFFUixLQUFLLENBQUNRLGNBQVIseUVBQTBCLENBTnJDO0FBT0hDLGtCQUFZLEVBQUUsbUJBQ1YscUVBQUMsMERBQUQ7QUFDSSxpQkFBUyxFQUFHO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRDtBQVlIQyxnQkFBVSxFQUFHTixJQUFELGlCQUFVO0FBQUksYUFBSztBQUFJTyxnQkFBTSxFQUFFO0FBQVosV0FBd0JYLEtBQXhCLGFBQXdCQSxLQUF4Qix1QkFBd0JBLEtBQUssQ0FBRVksU0FBL0IsQ0FBVDtBQUFBLG1CQUFzRFIsSUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWm5CO0FBYUhTLGVBQVMsZUFBRSxxRUFBQyxjQUFEO0FBQWdCLFlBQUksRUFBRUMsK0RBQXRCO0FBQXdDLGdCQUFRLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJSO0FBY0hDLGVBQVMsZUFBRSxxRUFBQyxjQUFEO0FBQWdCLFlBQUksRUFBRUMsZ0VBQXRCO0FBQXlDLGdCQUFRLEVBQUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRSO0FBZUhDLGdCQUFVLEVBQUVqQixLQUFLLENBQUNpQixVQUFOLElBQW9CLENBQzVCO0FBQ0lDLGtCQUFVLEVBQUUsSUFEaEI7QUFFSUMsZ0JBQVEsRUFBRTtBQUNOWixzQkFBWSxFQUFFLENBRFI7QUFFTkMsd0JBQWMsRUFBRTtBQUZWO0FBRmQsT0FENEIsRUFRNUI7QUFDSVUsa0JBQVUsRUFBRSxHQURoQjtBQUVJQyxnQkFBUSxFQUFFO0FBQ05aLHNCQUFZLEVBQUUsQ0FEUjtBQUVOQyx3QkFBYyxFQUFFO0FBRlY7QUFGZCxPQVI0QjtBQWY3QixLQUFQO0FBQUEsR0FEMEIsRUFpQzFCLEVBakMwQixDQUE5QjtBQW9DQSxzQkFBTyxxRUFBQyxrREFBRCxrQ0FBWVAsY0FBWjtBQUFBLGNBQTZCRCxLQUFLLENBQUNYO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUNBO0FBRWUsU0FBUytCLE9BQVQsR0FBbUI7QUFDOUIsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsaUJBQW5CO0FBQXFDLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUE1QztBQUFBLDRCQUNJO0FBQ0ksU0FBRyxFQUFDLHVDQURSO0FBRUksZUFBUyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSTtBQUFLLGVBQVMsRUFBQyxnR0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixhQUFLLEVBQUU7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQXJDO0FBQUEsK0JBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJEOztBQUVBLE1BQU1DLFNBQVMsR0FBSXZCLEtBQUQsaUJBQ2Q7QUFDSSxXQUFTLEVBQUMsZ0xBRGQ7QUFFSSxNQUFJLEVBQUVBLEtBQUssQ0FBQ3dCLElBQU4sSUFBYztBQUZ4QixHQUdReEIsS0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBUWUsU0FBU3lCLFdBQVQsR0FBdUI7QUFDbEMsc0JBQ0k7QUFBQSw0QkFDSTtBQUFNLGVBQVMsRUFBQyxpQ0FBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSxnQ0FDSSxxRUFBQyxTQUFEO0FBQVcscUJBQVcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLHFCQUFXLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLFNBQUQ7QUFBVyxjQUFJLEVBQUMsUUFBaEI7QUFBeUIscUJBQVcsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBTUk7QUFDSSxhQUFLLEVBQUU7QUFBRUosZ0JBQU0sRUFBRSxPQUFWO0FBQW1CSyxtQkFBUyxFQUFFO0FBQTlCLFNBRFg7QUFFSSxpQkFBUyxFQUFDLHNLQUZkO0FBR0ksWUFBSSxFQUFDLE1BSFQ7QUFJSSxtQkFBVyxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQWNJO0FBQVEsZUFBUyxFQUFDLHFEQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRKO0FBQUEsa0JBREo7QUFvQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JEOztBQVFBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUV0QyxVQUFGO0FBQVlSO0FBQVosQ0FBRCxrQkFDYjtBQUFJLFdBQVMsRUFBQztBQUFkLEdBQW1FQSxJQUFuRTtBQUFBLFlBQ0tRO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQU1BLE1BQU1RLElBQUksR0FBRyxVQUF1QjtBQUFBLE1BQXRCO0FBQUVQO0FBQUYsR0FBc0I7QUFBQSxNQUFYVCxJQUFXOztBQUNoQyxRQUFNZ0IsSUFBSSxHQUFHUCxJQUFiO0FBQ0Esc0JBQ0kscUVBQUMsSUFBRCxrQ0FDUVQsSUFEUjtBQUVJLGFBQVMsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU1ILENBUkQ7O0FBVUEsTUFBTStDLE1BQU0sR0FBSTVCLEtBQUQsSUFBVztBQUN0QixzQkFDSTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUFtRUEsS0FBbkU7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxtSUFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxnRkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxpQ0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFpQyxpQkFBSyxFQUFFO0FBQUU2QixtQkFBSyxFQUFFLE9BQVQ7QUFBa0JSLG9CQUFNLEVBQUU7QUFBMUIsYUFBeEM7QUFBQSxtQ0FDSTtBQUNJLHVCQUFTLEVBQUMsOEJBRGQ7QUFFSSxpQkFBRyxFQUFDLFdBRlI7QUFHSSxpQkFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSSixlQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpKLGVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBYkosZUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkSixlQWVJO0FBQUsscUJBQVMsRUFBQywrQ0FBZjtBQUFBLG9DQUNJLHFFQUFDLElBQUQ7QUFBTSxrQkFBSSxFQUFFUyw2REFBY0E7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLHFFQUFDLElBQUQ7QUFBTSxrQkFBSSxFQUFFQyxrRUFBbUJBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSSxxRUFBQyxJQUFEO0FBQU0sa0JBQUksRUFBRUMsNkRBQWNBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEosZUFJSSxxRUFBQyxJQUFEO0FBQU0sa0JBQUksRUFBRUMsOERBQWVBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWZKLGVBcUJJO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBd0JJO0FBQUssbUJBQVMsRUFBQyxpQ0FBZjtBQUFpRCxlQUFLLEVBQUU7QUFBRUMsb0JBQVEsRUFBRTtBQUFaLFdBQXhEO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLHlCQUFmO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLG9EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBSUkscUVBQUMsSUFBRDtBQUFNLGtCQUFJLEVBQUVDLDREQUFhQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU9JO0FBQUkscUJBQVMsRUFBQyw2RUFBZDtBQUFBLG9DQUNJLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKLGVBR0kscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixlQUlJLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBeUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxvREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJLHFFQUFDLElBQUQ7QUFBTSxnQkFBSSxFQUFFQSw0REFBYUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFPSTtBQUFJLG1CQUFTLEVBQUMsd0VBQWQ7QUFBQSxrQ0FDSSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUkscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJLHFFQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMkRILENBNUREOztBQThEZVAscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBOztBQUVBLE1BQU1MLFNBQVMsR0FBSXZCLEtBQUQsaUJBQ2Q7QUFDSSxXQUFTLEVBQUMsZ0xBRGQ7QUFFSSxNQUFJLEVBQUVBLEtBQUssQ0FBQ3dCLElBQU4sSUFBYztBQUZ4QixHQUdReEIsS0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBUWUsU0FBU29DLElBQVQsQ0FBY3BDLEtBQWQsRUFBcUI7QUFDaEMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsa0RBQW5CO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsa0ZBQWY7QUFBQSw4QkFDSTtBQUNJLGlCQUFTLEVBQUMsOERBRGQ7QUFFSSxhQUFLLEVBQUU7QUFBRVIsY0FBSSxFQUFFO0FBQVIsU0FGWDtBQUFBLGdDQUlJO0FBQUcsbUJBQVMsRUFBQyxnQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJO0FBQUksbUJBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQVFJO0FBQUcsbUJBQVMsRUFBQywrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWVJO0FBQ0ksaUJBQVMsRUFBQyxtRUFEZDtBQUVJLGFBQUssRUFBRTtBQUFFQSxjQUFJLEVBQUUsQ0FBUjtBQUFXOEIsa0JBQVEsRUFBRTtBQUFyQixTQUZYO0FBQUEsZ0NBSUk7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQVVJO0FBQU0sbUJBQVMsRUFBQyxpQ0FBaEI7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBQSxvQ0FDSSxxRUFBQyxTQUFEO0FBQVcseUJBQVcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLHlCQUFXLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSixlQUdJLHFFQUFDLFNBQUQ7QUFBVyxrQkFBSSxFQUFDLFFBQWhCO0FBQXlCLHlCQUFXLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFNSTtBQUNJLGlCQUFLLEVBQUU7QUFBRUksdUJBQVMsRUFBRTtBQUFiLGFBRFg7QUFFSSxxQkFBUyxFQUFDLHNLQUZkO0FBR0ksZ0JBQUksRUFBQyxNQUhUO0FBSUksdUJBQVcsRUFBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWSixlQXVCSTtBQUFRLG1CQUFTLEVBQUMscURBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFERDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1XLGNBQWMsR0FBSXJDLEtBQUQsSUFBVztBQUM5QixRQUFNc0MsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNJO0FBQ0ksYUFBUyxFQUFDO0FBRGQsS0FFUXZDLEtBRlI7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDhCQUNJLHFFQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBV0gsQ0FkRDs7QUFnQkEsTUFBTXdDLGtCQUFrQixHQUFHO0FBQUEsTUFBQztBQUFFbkQ7QUFBRixHQUFEO0FBQUEsTUFBZ0JSLElBQWhCOztBQUFBLHNCQUN2QjtBQUFJLGFBQVMsRUFBQztBQUFkLEtBQTZFQSxJQUE3RTtBQUFBLGNBQ0tRO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR1QjtBQUFBLENBQTNCOztBQU1BLE1BQU1vRCxPQUFPLEdBQUc7QUFBQSxNQUFDO0FBQUVwRCxZQUFGO0FBQVlxRDtBQUFaLEdBQUQ7QUFBQSxNQUEyQjdELElBQTNCOztBQUFBLHNCQUNaO0FBQ0ksYUFBUyxFQUFHLDREQUEyRDZELFNBQVMsSUFBSSxFQUFHO0FBRDNGLEtBRVE3RCxJQUZSO0FBQUEsY0FJS1E7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFk7QUFBQSxDQUFoQjs7QUFTQSxNQUFNc0QsTUFBTSxHQUFJM0MsS0FBRCxJQUFXO0FBQ3RCLFFBQU07QUFBQSxPQUFDNEMsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQUMsSUFBRCxDQUE5QztBQUNBLFFBQU1DLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxNQUFNSCxjQUFjLENBQUVJLElBQUQsSUFBVSxDQUFDQSxJQUFaLENBQXJCLEVBQXdDLEVBQXhDLENBQW5DO0FBQ0EsUUFBTVgsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBc0V2QyxLQUF0RTtBQUFBLDRCQUNJO0FBQU0sZUFBUyxFQUFDLGlDQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFpQyxpQkFBSyxFQUFFO0FBQUU2QixtQkFBSyxFQUFFLE9BQVQ7QUFBa0JSLG9CQUFNLEVBQUU7QUFBMUIsYUFBeEM7QUFBQSxtQ0FDSTtBQUNJLHVCQUFTLEVBQUMsOEJBRGQ7QUFFSSxpQkFBRyxFQUFDLFdBRlI7QUFHSSxpQkFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFRSTtBQUFJLHFCQUFTLEVBQUMsbUNBQWQ7QUFBQSxvQ0FDSSxxRUFBQyxPQUFEO0FBQVMscUJBQU8sRUFBRSxNQUFNaUIsTUFBTSxDQUFDWSxJQUFQLENBQVksV0FBWixDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLHFFQUFDLE9BQUQ7QUFBUyxxQkFBTyxFQUFFLE1BQU1aLE1BQU0sQ0FBQ1ksSUFBUCxDQUFZLFdBQVosQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSSxxRUFBQyxPQUFEO0FBQVMsdUJBQVMsRUFBQyxxREFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJKLGVBZUk7QUFDSSxxQkFBUyxFQUFDLCtFQURkO0FBRUksbUJBQU8sRUFBRUgsZUFGYjtBQUFBLHNCQUlLSCxXQUFXLGdCQUFHLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQUgsZ0JBQXVCLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQTJCSyxDQUFDQSxXQUFELGlCQUFnQixxRUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQStCSCxDQW5DRDs7QUFxQ2VELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7O0FBRUEsTUFBTVEsT0FBTyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxPQUFSO0FBQWVDO0FBQWYsQ0FBRCxrQkFDWjtBQUFLLFdBQVMsRUFBQyx3Q0FBZjtBQUFBLDBCQUNJO0FBQUksYUFBUyxFQUFDLDhDQUFkO0FBQUEsY0FBOERGO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUksYUFBUyxFQUFDLCtGQUFkO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsOEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS0MsS0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQU1JO0FBQUksYUFBUyxFQUFDLDZDQUFkO0FBQTRELFNBQUssRUFBRTtBQUFFM0IsZUFBUyxFQUFFO0FBQWIsS0FBbkU7QUFBQSxjQUNLNEIsUUFBUSxDQUFDckUsR0FBVCxDQUFhLENBQUNzRSxPQUFELEVBQVUzRSxLQUFWLGtCQUNWO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUEsOEJBQ0kscUVBQUMsZ0VBQUQ7QUFBbUIsaUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLEVBQWI7QUFBQSxrQkFBaUIyRTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsT0FBOEMsV0FBVTNFLEtBQU0sRUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQWNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDSTtBQUFRLGVBQVMsRUFBQyw0QkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBcUJlLFNBQVM0RSxRQUFULENBQWtCeEQsS0FBbEIsRUFBeUI7QUFDcEMsc0JBQ0k7QUFBUyxhQUFTLEVBQUM7QUFBbkIsS0FBc0RBLEtBQXREO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxvQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1JO0FBQUssaUJBQVMsRUFBQyxxQ0FBZjtBQUFBLGdDQUNJLHFFQUFDLE9BQUQ7QUFDSSxjQUFJLEVBQUMsU0FEVDtBQUVJLGVBQUssRUFBQyxRQUZWO0FBR0ksa0JBQVEsRUFBRSxDQUNOLGdCQURNLEVBRU4sZ0JBRk0sRUFHTixpQkFITSxFQUlOLHdCQUpNLEVBS04sOEJBTE0sRUFNTiw2QkFOTSxFQU9OLG9CQVBNLEVBUU4sc0JBUk0sRUFTTixxQkFUTSxFQVVOLHFCQVZNO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQWlCSSxxRUFBQyxPQUFEO0FBQ0ksY0FBSSxFQUFDLGNBRFQ7QUFFSSxlQUFLLEVBQUMsUUFGVjtBQUdJLGtCQUFRLEVBQUUsQ0FDTix5QkFETSxFQUVOLHlCQUZNLEVBR04sZ0JBSE0sRUFJTixrQkFKTSxFQUtOLHdCQUxNLEVBTU4sOEJBTk0sRUFPTiw2QkFQTSxFQVFOLG9CQVJNLEVBU04sc0JBVE0sRUFVTixxQkFWTSxFQVdOLHFCQVhNLEVBWU4scUJBWk0sRUFhTiw2QkFiTSxFQWNOLDhCQWRNLEVBZU4sMkJBZk0sRUFnQk4sMENBaEJNO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkosZUF1Q0kscUVBQUMsT0FBRDtBQUNJLGNBQUksRUFBQyxPQURUO0FBRUksZUFBSyxFQUFDLFFBRlY7QUFHSSxrQkFBUSxFQUFFLENBQ04sOEJBRE0sRUFFTixnQ0FGTSxFQUdOLG1CQUhNLEVBSU4sZ0RBSk0sRUFLTix1Q0FMTSxFQU1OLGNBTk0sRUFPTixpQ0FQTSxFQVFOLG9DQVJNLEVBU04sc0JBVE0sRUFVTiwwQkFWTSxFQVdOLDBCQVhNLEVBWU4seUJBWk0sRUFhTixnQkFiTSxFQWNOLGtCQWRNLEVBZU4sd0JBZk0sRUFnQk4sOEJBaEJNLEVBaUJOLDZCQWpCTSxFQWtCTixvQkFsQk0sRUFtQk4sc0JBbkJNLEVBb0JOLHFCQXBCTSxFQXFCTixxQkFyQk0sRUFzQk4scUJBdEJNLEVBdUJOLDZCQXZCTSxFQXdCTiw4QkF4Qk0sRUF5Qk4sMkJBekJNO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Q0osZUFzRUkscUVBQUMsT0FBRDtBQUNJLGNBQUksRUFBQyxRQURUO0FBRUksZUFBSyxFQUFDLFNBRlY7QUFHSSxrQkFBUSxFQUFFLENBQ04sOEJBRE0sRUFFTixnQ0FGTSxFQUdOLG1CQUhNLEVBSU4sZ0RBSk0sRUFLTix1Q0FMTSxFQU1OLGNBTk0sRUFPTixpQ0FQTSxFQVFOLG9DQVJNLEVBU04sc0JBVE0sRUFVTiwwQkFWTSxFQVdOLDBCQVhNLEVBWU4seUJBWk0sRUFhTixnQkFiTSxFQWNOLGtCQWRNLEVBZU4sd0JBZk0sRUFnQk4sOEJBaEJNLEVBaUJOLDZCQWpCTSxFQWtCTixvQkFsQk0sRUFtQk4sc0JBbkJNLEVBb0JOLHFCQXBCTSxFQXFCTixxQkFyQk0sRUFzQk4scUJBdEJNLEVBdUJOLDZCQXZCTSxFQXdCTiw4QkF4Qk0sRUF5Qk4sMkJBekJNO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUhILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJRDs7QUFFQSxNQUFNeUQsU0FBUyxHQUFJekQsS0FBRCxpQkFBVyw0R0FBU0EsS0FBVDtBQUFnQixPQUFLLEVBQUU7QUFBRTZCLFNBQUssRUFBRSxNQUFUO0FBQWlCUixVQUFNLEVBQUU7QUFBekI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE3Qjs7QUFFQSxNQUFNcUMsS0FBSyxHQUFHLENBQUM7QUFBRXJFLFVBQUY7QUFBWXNFLFNBQVo7QUFBcUJyRTtBQUFyQixDQUFELEtBQWlDO0FBQzNDLFFBQU1PLElBQUksR0FBR1AsSUFBYjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsZUFDS08sSUFETCxlQUVJO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUEsZ0JBQXNEOEQ7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBQSxnQkFBMkJ0RTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FURDs7QUFXZSxTQUFTdUUsTUFBVCxHQUFrQjtBQUM3QixzQkFDSTtBQUFTLGFBQVMsRUFBQyw2Q0FBbkI7QUFBQSw0QkFDSSxxRUFBQyxLQUFEO0FBQ0ksVUFBSSxlQUFFLHFFQUFDLFNBQUQ7QUFBVyxXQUFHLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFY7QUFFSSxhQUFPLEVBQUMsa0NBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJLHFFQUFDLEtBQUQ7QUFBTyxVQUFJLGVBQUUscUVBQUMsU0FBRDtBQUFXLFdBQUcsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBYjtBQUFxRCxhQUFPLEVBQUMsdUJBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFZSSxxRUFBQyxLQUFEO0FBQU8sVUFBSSxlQUFFLHFFQUFDLFNBQUQ7QUFBVyxXQUFHLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWI7QUFBdUQsYUFBTyxFQUFDLHVCQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBZ0JJLHFFQUFDLEtBQUQ7QUFDSSxVQUFJLGVBQUUscUVBQUMsU0FBRDtBQUFXLFdBQUcsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVjtBQUVJLGFBQU8sRUFBQyxtQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDRDs7QUFFQSxNQUFNeEUsS0FBSyxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsa0JBQ1Y7QUFBSSxXQUFTLEVBQUMsMEJBQWQ7QUFBQSxhQUNLQSxJQUFJLGlCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYixlQUVJO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQSxjQUE4QkQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQU9lLFNBQVN3RSxTQUFULEdBQXFCO0FBQ2hDLHNCQUNJO0FBQVMsYUFBUyxFQUFDLCtCQUFuQjtBQUFBLDRCQUNJO0FBQUssV0FBSyxFQUFFO0FBQUVyRSxZQUFJLEVBQUU7QUFBUixPQUFaO0FBQXlCLGVBQVMsRUFBQywrQkFBbkM7QUFBQSw2QkFDSTtBQUNJLFdBQUcsRUFBQyxnRkFEUjtBQUVJLGlCQUFTLEVBQUMsUUFGZDtBQUdJLGFBQUssRUFBRTtBQUFFOEIsa0JBQVEsRUFBRTtBQUFaO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVFJO0FBQUssV0FBSyxFQUFFO0FBQUU5QixZQUFJLEVBQUU7QUFBUixPQUFaO0FBQXlCLGVBQVMsRUFBQyxhQUFuQztBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBR0k7QUFBRyxpQkFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQVVJO0FBQUssaUJBQVMsRUFBQyxzREFBZjtBQUFBLGdDQUNJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0kscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISixlQUlJLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0QkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRDtBQUNBOztBQUVBLE1BQU1zRSxXQUFXLEdBQUk5RCxLQUFELGlCQUNoQjtBQUNJLEtBQUcsRUFBRyxhQUFZQSxLQUFLLENBQUNwQixLQUFNLE1BRGxDO0FBRUksV0FBUyxFQUFDLGdEQUZkO0FBR0ksS0FBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQVFBLE1BQU1tRixRQUFRLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFqQjtBQUVBLE1BQU05RCxjQUFjLEdBQUc7QUFDbkJFLFFBQU0sRUFBRSxJQURXO0FBRW5CQyxNQUFJLEVBQUUsS0FGYTtBQUduQkcsY0FBWSxFQUFFLENBSEs7QUFJbkJDLGdCQUFjLEVBQUU7QUFKRyxDQUF2QjtBQU9lLFNBQVN3RCxRQUFULEdBQW9CO0FBQy9CLHNCQUNJO0FBQVMsYUFBUyxFQUFDLG9CQUFuQjtBQUFBLDJCQUNJLHFFQUFDLGlEQUFELGtDQUFjL0QsY0FBZDtBQUFBLGdCQUNLOEQsUUFBUSxDQUFDOUUsR0FBVCxDQUFhLENBQUNnRixPQUFELEVBQVVyRixLQUFWLGtCQUNWLHFFQUFDLFdBQUQ7QUFBYSxhQUFLLEVBQUVBLEtBQUssR0FBRztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUVBLE1BQU1zRixZQUFZLEdBQUcsQ0FDakI7QUFDSUMsYUFBVyxFQUNQLDRIQUZSO0FBR0lDLFFBQU0sRUFBRTtBQUhaLENBRGlCLEVBTWpCO0FBQ0lELGFBQVcsRUFDUCx5SkFGUjtBQUdJQyxRQUFNLEVBQUU7QUFIWixDQU5pQixFQVdqQjtBQUNJRCxhQUFXLEVBQ1AsZ0xBRlI7QUFHSUMsUUFBTSxFQUFFO0FBSFosQ0FYaUIsQ0FBckI7QUFrQkEsTUFBTW5FLGNBQWMsR0FBRztBQUNuQkUsUUFBTSxFQUFFLElBRFc7QUFFbkJDLE1BQUksRUFBRSxLQUZhO0FBR25CRyxjQUFZLEVBQUUsQ0FISztBQUluQkMsZ0JBQWMsRUFBRSxDQUpHO0FBS25CSSxXQUFTLEVBQUU7QUFBRUQsVUFBTSxFQUFFO0FBQVYsR0FMUTtBQU1uQk0sWUFBVSxFQUFFO0FBTk8sQ0FBdkI7O0FBU0EsTUFBTW9ELFdBQVcsR0FBRyxDQUFDO0FBQUVGLGFBQUY7QUFBZUM7QUFBZixDQUFELEtBQTZCO0FBQzdDLHNCQUNJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBa0IsU0FBSyxFQUFFO0FBQUV2QyxXQUFLLEVBQUU7QUFBVCxLQUF6QjtBQUFBLDRCQUNJO0FBQUcsZUFBUyxFQUFDLGNBQWI7QUFBQSxnQkFBNkJzQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBRyxlQUFTLEVBQUMsNEJBQWI7QUFBQSxnQkFBMkNDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFLLGVBQVMsRUFBQyw2QkFBZjtBQUFBLDhCQUNJLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0kscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFLSSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBZEQ7O0FBZ0JlLFNBQVNFLFlBQVQsR0FBd0I7QUFDbkMsc0JBQ0k7QUFBUyxhQUFTLEVBQUMsYUFBbkI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyx5RUFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxvQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxvRkFBZjtBQUFBLGlDQUNJO0FBQ0ksZUFBRyxFQUFDLGtCQURSO0FBRUksZUFBRyxFQUFDLFFBRlI7QUFHSSxxQkFBUyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFXSTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQWdCSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixhQUFLLEVBQUU7QUFBRWhELGtCQUFRLEVBQUU7QUFBWixTQUFyQztBQUFBLCtCQUNJLHFFQUFDLGlEQUFELGtDQUFjckIsY0FBZDtBQUFBLG9CQUtLaUUsWUFBWSxDQUFDakYsR0FBYixDQUFpQixDQUFDa0YsV0FBRCxFQUFjdkYsS0FBZCxrQkFDZCxxRUFBQyxXQUFEO0FBRUksdUJBQVcsRUFBRXVGLFdBQVcsQ0FBQ0EsV0FGN0I7QUFHSSxrQkFBTSxFQUFFQSxXQUFXLENBQUNDO0FBSHhCLGFBQ1N4RixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREg7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkQ7QUFDQTtBQUVPLE1BQU0yRixpQkFBaUIsR0FBSXZFLEtBQUQsSUFBVztBQUN4QyxzQkFDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBLDRCQUNJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsZ0JBQTRCQSxLQUFLLENBQUNYO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtDQUNBLG9FOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBLE1BQU1tRixNQUFNLEdBQUcsQ0FDWDtBQUNJcEIsTUFBSSxFQUFFLE1BRFY7QUFFSXFCLE1BQUksRUFBRTtBQUZWLENBRFcsRUFLWDtBQUNJckIsTUFBSSxFQUFFLFdBRFY7QUFFSXFCLE1BQUksRUFBRTtBQUZWLENBTFcsQ0FBZjtBQVdlRCxxRUFBZixFOzs7Ozs7Ozs7OztBQ1hBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICBcIkNoYWFyIEFjaGFhclwiLFxyXG4gICAgXCJFY29tbWVyY2VcIixcclxuICAgIFwiRnVybml0dXJlXCIsXHJcbiAgICBcIk1lZGljYWxcIixcclxuICAgIFwiSG9zcGl0YWxcIixcclxuICAgIFwiRGlnaXRhbCBBZ2VuY3lcIixcclxuICAgIFwiQnVzaW5lc3NcIixcclxuICAgIFwiRnVybml0dXJlXCIsXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHRpdGxlLCBpbmRleCwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHctZnVsbCBtZDp3LTY0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYHBvcnRmb2xpby8ke2luZGV4fS5qcGdgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgbWQ6dy0yODlweCBoLTM5OHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIiB7Li4ucmVzdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjayByb3VuZGVkIG9wYWNpdHktMTBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjg5cHhcIiwgaGVpZ2h0OiBcIjM5OHB4XCIgfX1cclxuICAgICAgICAgICAgPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGJnLWJsYWNrIHJvdW5kZWQgb3BhY2l0eS0wIGhvdmVyOm9wYWNpdHktODAgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktZW5kIHB4LTYgdy1mdWxsIG1kOnctMjg5cHggaC0zOThweFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGJnLWdyYXktMTAwIG1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtNHhsIG1iLTRcIj5Qcm9qZWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFrZSBhIGxvb2sgYXQgaG93IHdlIHNvbHZlIGNoYWxsZW5nZXMgdG8gbWVldCBwcm9qZWN0IHJlcXVpcmVtZW50cyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXIgYSBncmVhdGVyIGxldmVsIG9mIGZ1bmN0aW9uYWxpdHkgY29tcGFyZWQgdG8gdHJhZGl0aW9uYWwgd2Vic2l0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmp1c3RpZnktY2VudGVyIGdhcC0yMCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcHJvamVjdC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9wb3J0Zm9saW8vJHtpbmRleCArIDF9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBMYW5kaW5nUGFnZUxheW91dCB9IGZyb20gXCJsYXlvdXRzXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1Rlc3RpbW9uaWFsc1wiO1xyXG5pbXBvcnQgU3BvbnNvcnMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1Nwb25zb3JzXCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZXJvXCI7XHJcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQWJvdXRcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL1BvcnRmb2xpby9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiY29tcG9uZW50cy9Db250YWN0XCI7XHJcbmltcG9ydCBTa2lsbHMgZnJvbSBcImNvbXBvbmVudHMvU2tpbGxzXCI7XHJcbmltcG9ydCBQYWNrYWdlcyBmcm9tIFwiY29tcG9uZW50cy9QYWNrYWdlc1wiO1xyXG5pbXBvcnQgU29sdXRpb25zIGZyb20gXCJjb21wb25lbnRzL1NvbHV0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExhbmRpbmdQYWdlTGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5XZWIgRGV2ZWxvcG1lbnQgLSBUZWNoIEdlbmllPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgICAgICA8U3BvbnNvcnMgLz5cclxuICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgIDxTa2lsbHMgLz5cclxuICAgICAgICAgICAgPFBhY2thZ2VzIC8+XHJcbiAgICAgICAgICAgIDxTb2x1dGlvbnMgLz5cclxuICAgICAgICAgICAgPFByb2plY3RzIC8+XHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbHMgLz5cclxuICAgICAgICAgICAgPENvbnRhY3QgLz5cclxuICAgICAgICA8L0xhbmRpbmdQYWdlTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQb2ludCA9ICh7IGNoaWxkcmVuLCBpY29uIH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHAtNCBwbC0wIHB0LTBcIj5cclxuICAgICAgICB7aWNvbiAmJiA8aWNvbiAvPn1cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2NoaWxkcmVufTwvcD5cclxuICAgIDwvbGk+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTggcHQtMCBmbGV4IGdhcC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBqdXN0aWZ5LWNlbnRlciBcIiBzdHlsZT17eyBmbGV4OiAyIH19PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+V2UgQnVpbGQgTWFzdGVycGllY2VzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb2VzbuKAmXQgbWF0dGVyIGlmIHlvdeKAmXJlIGxvb2tpbmcgdG8gY3JlYXRlIGEgYmFzaWMgY29udGVudC1iYXNlZCBXb3JkUHJlc3NcclxuICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlIG9yIGEgZnVsbC1mbGVkZ2VkIHdvcmtpbmcgZWNvbW1lcmNlIHdlYnNpdGUuIEZyb20gaW5pdGlhbCBmcm9udC1lbmRcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ24gY3JlYXRpb24gdG8gZmluYWwgZGVwbG95bWVudCwgb3VyIHRlY2huaWNhbCBtYW5hZ2VycyB3aWxsIGd1aWRlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3VnaG91dCB0aGUgcHJvY2VkdXJlIGFuZCBtYWtlIHN1cmUgdGhhdCB5b3UgZ2V0IGEgd2Vic2l0ZSB3aGljaCBjb21wbGV0ZWx5XHJcbiAgICAgICAgICAgICAgICAgICAgc3VpdHMgeW91ciBidXNpbmVzcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgeHM6anVzdGlmeS1zdGFydCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2ludD5GdWxseSBSZXNwb25zaXZlPC9Qb2ludD5cclxuICAgICAgICAgICAgICAgICAgICA8UG9pbnQ+RGV2aWNlIFRlc3Rpbmc8L1BvaW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2ludD5DbGVhbiAmIE1vZGVybjwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PkdyZWF0IEV4cGVyaWVuY2U8L1BvaW50PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAzLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3RlY2hnZW5pZS5jYS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNi93ZWItZGV2ZWxvcG1lbnQtcHJvY2Vzcy1pbWcucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpRmlsbExlZnRDaXJjbGUsIEFpRmlsbFJpZ2h0Q2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCB7IEZhRG90Q2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uSWNvbiA9ICh7IGljb24sIHBvc2l0aW9uLCBvbkNsaWNrIH0pID0+IHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gcG9zaXRpb24gPT09IFwibGVmdFwiID8gXCItbGVmdC04XCIgOiBcIi1yaWdodC04IG1kOi1yaWdodC0xMFwiO1xyXG4gICAgY29uc3QgSWNvbiA9IGljb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgei0xMCBhYnNvbHV0ZSB0b3AtMS8yIGJsb2NrIHRleHQtNHhsIG1kOnRleHQtMnhsIHRleHQtaW5kaWdvLTUwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtYmxhY2sgJHt0cmFuc2xhdGlvbn1gfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcclxuICAgIGNvbnN0IHNsaWRlclNldHRpbmdzID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHByb3BzLmFycm93cyA/PyB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBwcm9wcy5kb3RzID8/IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHByb3BzLnNsaWRlc1RvU2hvdyA/PyA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogcHJvcHMuc2xpZGVzVG9TY3JvbGwgPz8gNCxcclxuICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmFEb3RDaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIHRleHQtZ3JheS0yMDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbGB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBhcHBlbmREb3RzOiAoZG90cykgPT4gPHVsIHN0eWxlPXt7IGJvdHRvbTogXCItNTBweFwiLCAuLi5wcm9wcz8uZG90c1N0eWxlIH19Pntkb3RzfSA8L3VsPixcclxuICAgICAgICAgICAgcHJldkFycm93OiA8UGFnaW5hdGlvbkljb24gaWNvbj17QWlGaWxsTGVmdENpcmNsZX0gcG9zaXRpb249XCJsZWZ0XCIgLz4sXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogPFBhZ2luYXRpb25JY29uIGljb249e0FpRmlsbFJpZ2h0Q2lyY2xlfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz4sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHByb3BzLnJlc3BvbnNpdmUgfHwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBbXVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gPFNsaWRlciB7Li4uc2xpZGVyU2V0dGluZ3N9Pntwcm9wcy5jaGlsZHJlbn08L1NsaWRlcj47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZVwiIHN0eWxlPXt7IGhlaWdodDogXCI5MDBweFwiIH19PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjMyMHgzMjAwXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsIGFic29sdXRlIGxlZnQtMCB0b3AtMFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1ncmFkaWVudC1icmFuZCBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTBcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgdGV4dC13aGl0ZSBhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9udC1zYW5zIGZvbnQtbGlnaHRcIj5HZXQgc3RhcnRlZCBpbnN0YW50bHk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIiBmb250LWJvbGQgdGV4dC00eGwgbWItNFwiPkdldCBJbiBUb3VjaDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lclwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjcyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhY3RGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb3JtSW5wdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBib3JkZXIgYm9yZGVyLW9wYWNpdHktNTAgZm9jdXM6Ym9yZGVyLXBpbmstNTAwIGZsZXgtZ3JvdyBwLTQgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgdHlwZT17cHJvcHMudHlwZSB8fCBcInRleHRcIn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC00IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUlucHV0IHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQaG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIzNjBweFwiLCBtYXhIZWlnaHQ6IFwiMzYwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGJvcmRlciBib3JkZXItb3BhY2l0eS01MCBmb2N1czpib3JkZXItcGluay01MDAgZHVyYXRpb24tMzAwIHAtNCByb3VuZGVkLW1kIGJnLWdyYXktMTAwIGZvY3VzOmJnLXdoaXRlIG91dGxpbmUtbm9uZSBwbGFjZWhvbGRlci1ncmF5LTQwMCB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIElkZWFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInR3LWJ1dHRvbi1zZWNvbmRhcnkgdy1mdWxsIHB5LTQgZm9jdXM6b3V0bGluZS13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgU2VuZCBNZXNzYWdlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQWlGaWxsRmFjZWJvb2ssXHJcbiAgICBBaUZpbGxUd2l0dGVyU3F1YXJlLFxyXG4gICAgQWlGaWxsTGlua2VkaW4sXHJcbiAgICBBaUZpbGxJbnN0YWdyYW0sXHJcbiAgICBBaU91dGxpbmVEb3duLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuY29uc3QgTGlzdEl0ZW0gPSAoeyBjaGlsZHJlbiwgcmVzdCB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgaG92ZXI6b3BhY2l0eS01MFwiIHsuLi5yZXN0fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgSWNvbiA9ICh7IGljb24sIC4uLnJlc3QgfSkgPT4ge1xyXG4gICAgY29uc3QgSWNvbiA9IGljb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTUwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmb2N1czpvdXRsaW5lLWJsYWNrXCJcclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZvb3RlciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JheS01MCBweS04IG1kOmgtMTU2IGxnOmgtYXV0b1wiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIGZsZXggaC1mdWxsIGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC02IG1kOmdhcC0xMiB0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCBtZDpmbGV4LXdyYXAgbGc6ZmxleC1yb3cgbGc6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMy81IGxnOnctNC82IGZsZXggZmxleC0xIGZsZXgtY29sIGdhcC0zIGxnOmdhcC0xNiBpdGVtcy1zdGFydCBsZzpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBpdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IHdpZHRoOiBcIjEzMHB4XCIsIGhlaWdodDogXCIzNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gaXQgY29tZXMgdG8gY3JlYXRpbmcgb25saW5lIHByZXNlbmNlIGZvciBidXNpbmVzc2VzIGFuZCBkaWdpdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlcyBjaGFubmVscywgVGVjaCBHZW5pZSBpcyB0aGUgbmFtZSB5b3UgY2FuIHRydXN0IVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjMzIFlvbmdlIFN0LCBUb3JvbnRvLCBPTiBNNUUgMEE5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD42NDctMzcwLTczNTc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmluZm9AdGVjaGdlbmllLmNhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IHRleHQtNHhsIGp1c3RpZnktc3RhcnQgZ2FwLTIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17QWlGaWxsRmFjZWJvb2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtBaUZpbGxUd2l0dGVyU3F1YXJlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17QWlGaWxsTGlua2VkaW59IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtBaUZpbGxJbnN0YWdyYW19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jZXJ0aWZpY2F0aW9uLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIGl0ZW1zLXN0YXJ0XCIgc3R5bGU9e3sgbWluV2lkdGg6IFwiMjIycHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBib3JkZXItYi0yIGJvcmRlci1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtBaU91dGxpbmVEb3dufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBmbGV4IGZsZXgtY29sIGdhcC0yIGhvdmVyOmJvcmRlci1iLTIgaG92ZXI6Ym9yZGVyLWluZGlnby01MDAgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPldlYnNpdGUgZGVzaWduPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5Xb3JkcHJlc3MgZGV2ZWxvcG1lbnQ8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPkVjb21tZXJjZSB3ZWJzaXRlIGRldmVsb3BtZW50PC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5XZWIgQXBwIERldmVsb3BtZW50PC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBib3JkZXItYi0yIGJvcmRlci1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtBaU91dGxpbmVEb3dufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LW5vbmUgZmxleCBmbGV4LWNvbCBnYXAtMiBob3Zlcjpib3JkZXItYi0yIGhvdmVyOmJvcmRlci1pbmRpZ28tNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5Qb3J0Zm9saW88L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+QWJvdXQgVXM8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+UGFja2FnZXM8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRm9ybUlucHV0ID0gKHByb3BzKSA9PiAoXHJcbiAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYm9yZGVyIGJvcmRlci1vcGFjaXR5LTUwIGZvY3VzOmJvcmRlci1waW5rLTUwMCBmbGV4LWdyb3cgcC00IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGUgfHwgXCJ0ZXh0XCJ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8ocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlciBiZy1ncmFkaWVudC1icmFuZCBwLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIGZsZXggZmxleC1jb2wgbnY6ZmxleC1yb3cgZ2FwLTEyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGdhcC0zIHRleHQtY2VudGVyIG52OnRleHQtbGVmdCBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsZXg6IDUgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtM3hsIGZvbnQtbGlnaHRcIj5DdXN0b20gV2Vic2l0ZSBEZXZlbG9wbWVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBidWlsZCBTYWxlcy1GcmllbmRseSBhbmQgRnV0dXJlLVByb29mIFdlYnNpdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbiB1bnJlbGlhYmxlLCBvdXRkYXRlZCwgYW5kIG1pbmQtbnVtYmluZ2x5IHNsb3cgd2Vic2l0ZSBpcyB0aGUgcXVpY2tlc3Qgd2F5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIGxvc2UgYnVzaW5lc3MgYW5kIHRhcm5pc2ggeW91ciBicmFuZCBpbWFnZS4gVGVjaCBHZW5pZSBpcyBoZXJlIHRvIGhlbHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeW91IHNldCB0aGF0IHJpZ2h0LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTYgcHgtMTIgcHktOCBiZy1ncmF5LTMwMCByb3VuZGVkLXhsIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbGV4OiAzLCBtYXhXaWR0aDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwIHRvIDcwJSBPRkYgT24gTG9nbyBEZXNpZ24gJiBXZWJzaXRlIERlc2lnbnMgUGFja2FnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+T3IgQ2FsbCBOb3cgNjQ3LTM3MC03MzU3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC00IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtSW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUGhvbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IFwiMTAwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1vcGFjaXR5LTUwIGZvY3VzOmJvcmRlci1waW5rLTUwMCBkdXJhdGlvbi0zMDAgcC00IHJvdW5kZWQtbWQgYmctZ3JheS0xMDAgZm9jdXM6Ymctd2hpdGUgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyLWdyYXktNDAwIHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIElkZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInR3LWJ1dHRvbi1zZWNvbmRhcnkgdy1mdWxsIHB5LTQgZm9jdXM6b3V0bGluZS13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51LCBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCJyb3V0ZXNcIjtcclxuXHJcbmNvbnN0IENvbGxhcHNpYmxlTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5Qb3J0Zm9saW88L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+UGFja2FnZXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBDb2xsYXBzaWJsZU5hdkl0ZW0gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbCBmbGV4IHB5LTRcIiB7Li4ucmVzdH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcclxuICAgIDxsaVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNTAgdHJhbnNpdGlvbi1hbGwgZm9udC1ib2xkICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNDb2xsYXBzZWQoKHByZXYpID0+ICFwcmV2KSwgW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHotMjAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy1tZCBudjpzaGFkb3ctbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTMwcHhcIiwgaGVpZ2h0OiBcIjM1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbG9nby5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbnY6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BhY2thZ2VzXCIpfT5QYWNrYWdlczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BhY2thZ2VzXCIpfT5Qb3J0Zm9saW88L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHR3LWJ1dHRvbi1zZWNvbmRhcnkgaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm52OmhpZGRlbiB0cmFuc2l0aW9uLWFsbCB0ZXh0LTR4bCBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTEwMCBob3ZlcjpvcGFjaXR5LTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29sbGFwc2VkID8gPEFpT3V0bGluZU1lbnUgLz4gOiA8QWlPdXRsaW5lQ2xvc2UgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiA8Q29sbGFwc2libGVOYXYgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5jb25zdCBQYWNrYWdlID0gKHsgbmFtZSwgcHJpY2UsIGZlYXR1cmVzIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleC0xIHB5LTYgdGV4dC1sZWZ0IHJvdW5kZWRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LXNlbWlib2xkIHRleHQtMnhsIG1iLTYgcHgtMTJcIj57bmFtZX08L2gxPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtYm9sZCBweS02IHB4LTEyIHRleHQtNHhsIGJvcmRlci1kYXNoZWQgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIG1iLTZcIj5cclxuICAgICAgICAgICAgPHN1cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1ncmF5LTMwMCBtci0yXCI+JDwvc3VwPlxyXG4gICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHgtMTIgZmxleCBmbGV4LWNvbCBnYXAtMiBvdmVyZmxvdy15LXNjcm9sbFwiIHN0eWxlPXt7IG1heEhlaWdodDogXCIzNDBweFwiIH19PlxyXG4gICAgICAgICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCIga2V5PXtgZmVhdHVyZS0ke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxDaGVja0NpcmNsZSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntmZWF0dXJlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMiBwdC02XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHR3LWJ1dHRvbi1zZWNvbmRhcnlcIj5BdmFpbCBOb3c8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZXMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktOCB0ZXh0LWNlbnRlciBiZy1ncmF5LTEwMFwiIHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibGFjayB0ZXh0LTR4bCBmb250LWJvbGQgbWItMlwiPlBhY2thZ2VzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBXZSd2ZSBjb21lIHVwIHdpdGggdmFyaW91cyBwYWNrYWdlcyB0byBtZWV0IHRoZSBzcGVjaWZpYyBuZWVkcyBvZiBhbGwgYnVzaW5lc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgIG91dCB0aGVyZS4gT3VyIHBhY2thZ2VzIGFyZSBmb3IgdGhlIGZvbGxvd2luZyBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcCBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTdGFydHVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCIyNDkuOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IFN0b2NrIFBob3Rvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IFBhZ2UgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIzIEJhbm5lciBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMSBqUXVlcnkgU2xpZGVyIEJhbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmVlIEdvb2dsZSBGcmllbmRseSBTaXRlbWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIFczQyBDZXJ0aWZpZWQgSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0OCBUbyA3MiBIb3VycyBUQVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFjZWJvb2sgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHdpdHRlciBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VUdWJlIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiUHJvZmVzc2lvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCI1OTkuOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMCBVbmlxdWUgUGFnZXMgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDTVMvQWRtaW4gUGFuZWwgU3VwcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI4IFN0b2NrIFBob3Rvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IEJhbm5lciBEZXNpZ25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEgalF1ZXJ5IFNsaWRlciBCYW5uZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJlZSBHb29nbGUgRnJpZW5kbHkgU2l0ZW1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZSBXM0MgQ2VydGlmaWVkIEhUTUxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNDggVG8gNzIgSG91cnMgVEFUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZhY2Vib29rIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlR3aXR0ZXIgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91VHViZSBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZSBEZXBsb3ltZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgU2F0aXNmYWN0aW9uIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIFVuaXF1ZSBEZXNpZ24gR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgTW9uZXkgQmFjayBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmUgV2lsbCBCZSBBZGRpdGlvbmFsICQ5OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkVsaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCI5OTkuOTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVcHRvIDE1IFVuaXF1ZSBQYWdlcyBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbmNlcHR1YWwgQW5kIER5bmFtaWMgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPbmxpbmUgUmVzZXJ2YXRpb24vQXBwb2ludG1lbnQgVG9vbCAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ubGluZSBQYXltZW50IEludGVncmF0aW9uIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VzdG9tIEZvcm1zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxlYWQgQ2FwdHVyaW5nIEZvcm1zIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTmV3c2xldHRlciBTdWJzY3JpcHRpb24gKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXdzZmVlZCBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb2NpYWwgTWVkaWEgSW50ZWdyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2VhcmNoIEVuZ2luZSBTdWJtaXNzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNNUy9BZG1pbiBQYW5lbCBTdXBwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgU3RvY2sgUGhvdG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgQmFubmVyIERlc2lnbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMSBqUXVlcnkgU2xpZGVyIEJhbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmVlIEdvb2dsZSBGcmllbmRseSBTaXRlbWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIFczQyBDZXJ0aWZpZWQgSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0OCBUbyA3MiBIb3VycyBUQVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFjZWJvb2sgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHdpdHRlciBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VUdWJlIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIERlcGxveW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBTYXRpc2ZhY3Rpb24gR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgVW5pcXVlIERlc2lnbiBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBNb25leSBCYWNrIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNpbHZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPVwiMTU5OS45OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVwdG8gMTUgVW5pcXVlIFBhZ2VzIFdlYnNpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uY2VwdHVhbCBBbmQgRHluYW1pYyBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ubGluZSBSZXNlcnZhdGlvbi9BcHBvaW50bWVudCBUb29sIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFBheW1lbnQgSW50ZWdyYXRpb24gKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXN0b20gRm9ybXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGVhZCBDYXB0dXJpbmcgRm9ybXMgKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXdzbGV0dGVyIFN1YnNjcmlwdGlvbiAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5ld3NmZWVkIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvY2lhbCBNZWRpYSBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZWFyY2ggRW5naW5lIFN1Ym1pc3Npb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ01TL0FkbWluIFBhbmVsIFN1cHBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNSBTdG9jayBQaG90b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNSBCYW5uZXIgRGVzaWduc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxIGpRdWVyeSBTbGlkZXIgQmFubmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZyZWUgR29vZ2xlIEZyaWVuZGx5IFNpdGVtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgVzNDIENlcnRpZmllZCBIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjQ4IFRvIDcyIEhvdXJzIFRBVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWNlYm9vayBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUd2l0dGVyIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdVR1YmUgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgRGVwbG95bWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIFNhdGlzZmFjdGlvbiBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBVbmlxdWUgRGVzaWduIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIE1vbmV5IEJhY2sgR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNraWxsSWNvbiA9IChwcm9wcykgPT4gPGltZyB7Li4ucHJvcHN9IHN0eWxlPXt7IHdpZHRoOiBcIjUwcHhcIiwgaGVpZ2h0OiBcIjUwcHhcIiB9fSAvPjtcclxuXHJcbmNvbnN0IFNraWxsID0gKHsgY2hpbGRyZW4sIGhlYWRpbmcsIGljb24gfSkgPT4ge1xyXG4gICAgY29uc3QgSWNvbiA9IGljb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgICAgICB7SWNvbn1cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgdGV4dC1waW5rLTUwMFwiPntoZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTggcHQtMCBmbGV4IGZsZXgtd3JhcCBnYXAtOFwiPlxyXG4gICAgICAgICAgICA8U2tpbGxcclxuICAgICAgICAgICAgICAgIGljb249ezxTa2lsbEljb24gc3JjPVwiL2ljb25zL2Ntcy5zdmdcIiAvPn1cclxuICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJDTVMgV2Vic2l0ZSBEZXNpZ24gJiBEZXZlbG9wbWVudFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENNUy1iYXNlZCB3ZWJzaXRlcyBhcmUgdGltZSBzYXZpbmcgYW5kIGNvc3QgZWZmZWN0aXZlLiBHZXQgeW91ciB3ZWJzaXRlIGRldmVsb3BlZCBvblxyXG4gICAgICAgICAgICAgICAgV29yZFByZXNzLCBNYWdlbnRvLCBTaG9waWZ5IGV0Yy4gYW5kIHN0YXJ0IHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbCBpY29uPXs8U2tpbGxJY29uIHNyYz1cIi9pY29ucy93ZWJzaXRlLnN2Z1wiIC8+fSBoZWFkaW5nPVwiQ3VzdG9tIFdlYnNpdGUgRGVzaWduXCI+XHJcbiAgICAgICAgICAgICAgICBJZiB5b3UgYXJlIGxvb2tpbmcgZm9yIGEgY3VzdG9taXplZCB3ZWJzaXRlIHNvbHV0aW9uIHRoZW4gd2UgY2FuIG1ha2Ugc29tZSBncmVhdFxyXG4gICAgICAgICAgICAgICAgZGVzaWducyBmb3IgeW91IGZ1bGx5IGN1c3RvbWl6ZWQuXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbCBpY29uPXs8U2tpbGxJY29uIHNyYz1cIi9pY29ucy9lY29tbWVyY2Uuc3ZnXCIgLz59IGhlYWRpbmc9XCJFY29tbWVyY2UgRGV2ZWxvcG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIFNlbGxpbmcgb25saW5lIGlzIEhVR0UgdGhlc2UgZGF5cy4gR2V0IHlvdXIgd2Vic2l0ZXMgYW5kIG9ubGluZSBwcm9kdWN0cyByZWFkeSB0b2RheVxyXG4gICAgICAgICAgICAgICAgYW5kIHN0YXJ0IG1ha2luZyBtb25leS5cclxuICAgICAgICAgICAgPC9Ta2lsbD5cclxuICAgICAgICAgICAgPFNraWxsXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8U2tpbGxJY29uIHNyYz1cIi9pY29ucy9sYW5kaW5nLXBhZ2Uuc3ZnXCIgLz59XHJcbiAgICAgICAgICAgICAgICBoZWFkaW5nPVwiTGFuZGluZyBQYWdlIERlc2lnbiAmIERldmVsb3BtZW50XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2V0IGxhbmRpbmcgcGFnZXMgZGVzaWduZWQgZm9yIHlvdSB0YXJnZXRlZCBjYW1wYWlnbnMgdG9kYXkgYW5kIHN0YXJ0IGFjcXVpcmluZ1xyXG4gICAgICAgICAgICAgICAgbGVhZHMgYW5kIGNvbnZlcnRpbmcgdGhlbSBpbnRvIGN1c3RvbWVycy5cclxuICAgICAgICAgICAgPC9Ta2lsbD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBvaW50ID0gKHsgY2hpbGRyZW4sIGljb24gfSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgcC00IHBsLTAgcHQtMFwiPlxyXG4gICAgICAgIHtpY29uICYmIDxpY29uIC8+fVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbHV0aW9ucygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTEyIGZsZXggZ2FwLThcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAzIH19IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly90ZWNoZ2VuaWUuY2Evd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDYvd2ViLWRldmVsb3BtZW50LXRlY2hub2xvZ3kucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDIgfX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPldlIEJ1aWxkIE1hc3RlcnBpZWNlczwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvZXNu4oCZdCBtYXR0ZXIgaWYgeW914oCZcmUgbG9va2luZyB0byBjcmVhdGUgYSBiYXNpYyBjb250ZW50LWJhc2VkIFdvcmRQcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYnNpdGUgb3IgYSBmdWxsLWZsZWRnZWQgd29ya2luZyBlY29tbWVyY2Ugd2Vic2l0ZS4gRnJvbSBpbml0aWFsIGZyb250LWVuZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2lnbiBjcmVhdGlvbiB0byBmaW5hbCBkZXBsb3ltZW50LCBvdXIgdGVjaG5pY2FsIG1hbmFnZXJzIHdpbGwgZ3VpZGVcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdWdob3V0IHRoZSBwcm9jZWR1cmUgYW5kIG1ha2Ugc3VyZSB0aGF0IHlvdSBnZXQgYSB3ZWJzaXRlIHdoaWNoIGNvbXBsZXRlbHlcclxuICAgICAgICAgICAgICAgICAgICBzdWl0cyB5b3VyIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB4czpqdXN0aWZ5LXN0YXJ0IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PkN1c3RvbSBEZXZlbG9wbWVudDwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PmlPUyAmIEFuZHJvaWQgRGV2ZWxvcG1lbnQ8L1BvaW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2ludD5BcHBsaWNhdGlvbiBJbnRlZ3JhdGlvbjwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBvaW50PlNlY3VyaXR5IEFzc3VyYW5jZTwvUG9pbnQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgU3BvbnNvckxvZ28gPSAocHJvcHMpID0+IChcclxuICAgIDxpbWdcclxuICAgICAgICBzcmM9e2Avc3BvbnNvcnMvJHtwcm9wcy5pbmRleH0ucG5nYH1cclxuICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSBwb2ludGVyLWV2ZW50cy1ub25lXCJcclxuICAgICAgICBhbHQ9XCJTcG9uc29yXCJcclxuICAgIC8+XHJcbik7XHJcblxyXG5jb25zdCBzcG9uc29ycyA9IFsxLCAyLCAzLCA0LCA1XTtcclxuXHJcbmNvbnN0IHNsaWRlclNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb25zb3JzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktMTJcIj5cclxuICAgICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICB7c3BvbnNvcnMubWFwKChzcG9uc29yLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTcG9uc29yTG9nbyBpbmRleD17aW5kZXggKyAxfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBGYVN0YXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmNvbnN0IHRlc3RpbW9uaWFscyA9IFtcclxuICAgIHtcclxuICAgICAgICB0ZXN0aW1vbmlhbDpcclxuICAgICAgICAgICAgXCJBcyBsb25nIGFzIEkgaGF2ZSB0aGVzZSBndXlzIHdpdGggbWUsIEkgZG9uJ3QgZ2F2ZSB0byB3b3JyeSBhYm91dCBhbnkgdGVjaG5pY2FsIHN1cHBvcnQgd2hldGhlciBpdHMgZm9yIG15IHdlYnNpdGUgb3IgYXBwIVwiLFxyXG4gICAgICAgIGNsaWVudDogXCJIZWF0aGVyIFJhZmVpXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRlc3RpbW9uaWFsOlxyXG4gICAgICAgICAgICBcIkkgc2lnbmVkIHVwIHdpdGggVGVjaCBHZW5pZSB0byBkZXNpZ24gbXkgd2Vic2l0ZSBsYXN0ZSB5ZWFyLiBOb3cgSSBkb24ndCBvbmx5IGhhdmUgYSBiZWF1dGlmdWwgbG9va2luZyB3ZWJzaXRlLCBidXQgYSBjb21wZXRpdGl2ZSBtYXJrZXRpbmcgdGVhbSBhc3dlbGxcIixcclxuICAgICAgICBjbGllbnQ6IFwiVGVycnkgRXZhbnNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGVzdGltb25pYWw6XHJcbiAgICAgICAgICAgIFwiVGhlc2UgZ3V5cyByb2NrISBJdCdzIGJlZW4gbXkgNHRoIG1vbnRoIHdpdGggdGhlbSBhbmQgdGhlIHdlYnNpdGUgc2FsZXMgaGF2ZSBnb25lIHVwIDQwMCUuIE5vdyBJIGNhbiBmb2N1cyBvbiBleHBhbmRpbmcgbXkgYnVzaW5lc3MgYW5kIG5vdCBvbiBtYXJrZXRpbmcgc2luY2UgdGhleSd2ZSBnb3QgaXQhXCIsXHJcbiAgICAgICAgY2xpZW50OiBcIkdlb3JneSBCZXJyeWhpbGxcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5jb25zdCBzbGlkZXJTZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogdHJ1ZSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBkb3RzU3R5bGU6IHsgYm90dG9tOiBcIi00NXB4XCIgfSxcclxuICAgIHJlc3BvbnNpdmU6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgVGVzdGltb25pYWwgPSAoeyB0ZXN0aW1vbmlhbCwgY2xpZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyB3aWR0aDogXCI4MDBweFwiIH19PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGdcIj57dGVzdGltb25pYWx9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItMVwiPntjbGllbnR9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICAgICAgPEZhU3RhciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWRpYWdvbmFsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTE0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtNCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bFwiPk91ciBjbGllbnQgdGVzdGltb25pYWxzIHNheXMgaXQgYWxsPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMiBiZy1ncmFkaWVudC1icmFuZCByb3VuZGVkLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ljb24tcXVvdGVzLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJRdW90ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSB3LTYgaC02IG9iamVjdC1jb250YWluIHRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIGZlZWRiYWNrIHdlIGdldCBmcm9tIG91ciBjdXN0b21lcnMgdGVsbHMgYWJvdXQgb3VyIGNvb3BlcmF0aW9uIGJldHRlciB0aGFuXHJcbiAgICAgICAgICAgICAgICAgICAgd2UgZG8gYW5kIG1ha2VzIHVzIG1vdmUgZm9yd2FyZC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lclwiIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVzdGltb25pYWwgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzM4NXg1MzBcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbD17dGVzdGltb25pYWwudGVzdGltb25pYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50PXt0ZXN0aW1vbmlhbC5jbGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9OYXZiYXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5kaW5nUGFnZUxheW91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0xhbmRpbmdQYWdlQXV0aFwiO1xyXG4vLyBleHBvcnQgeyBkZWZhdWx0IGFzIExhbmRpbmdQYWdlTGF5b3V0IH0gZnJvbSBcIi4vTGFuZGluZ1BhZ2VBdXRoXCI7XHJcbiIsImNvbnN0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhvbWVcIixcclxuICAgICAgICBwYXRoOiBcIi9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQb3J0Zm9saW9cIixcclxuICAgICAgICBwYXRoOiBcIi9wb3J0Zm9saW9cIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=