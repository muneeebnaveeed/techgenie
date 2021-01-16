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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/WcL":
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Nvcc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carousel; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/WcL");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const PaginationIcon = ({
  icon,
  position,
  onClick
}) => {
  const translation = position === "left" ? "-left-12" : "-right-12 md:-right-10";
  const Icon = icon;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Icon, {
    onClick: onClick,
    style: {
      transform: "translateY(-50%)"
    },
    className: `z-10 absolute top-1/2 block text-6xl md:text-2xl text-indigo-500 transition-all cursor-pointer hover:text-black focus:outline-black ${translation}`
  });
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
      customPaging: () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaDotCircle"], {
        className: `text-sm text-gray-200 cursor-pointer hover:opacity-50 transition-all`
      }),
      appendDots: dots => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        style: _objectSpread({
          bottom: "-50px"
        }, props === null || props === void 0 ? void 0 : props.dotsStyle),
        children: [dots, " "]
      }),
      prevArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(PaginationIcon, {
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillLeftCircle"],
        position: "left"
      }),
      nextArrow: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(PaginationIcon, {
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillRightCircle"],
        position: "right"
      }),
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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, sliderSettings), {}, {
    children: props.children
  }));
}

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__("/WcL");

// CONCATENATED MODULE: ./src/components/Footer.jsx



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ListItem = ({
  children,
  rest
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", _objectSpread(_objectSpread({
  className: "cursor-pointer transition-all hover:opacity-50"
}, rest), {}, {
  children: children
}));

const Footer_Icon = (_ref) => {
  let {
    icon
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["icon"]);

  const Icon = icon;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, _objectSpread(_objectSpread({}, rest), {}, {
    className: "cursor-pointer hover:opacity-50 transition-all duration-300 focus:outline-black"
  }));
};

const Footer = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", _objectSpread(_objectSpread({
    className: "w-full bg-gray-50 py-8 md:h-156 lg:h-auto"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tw-container flex h-full flex-col items-start gap-6 md:gap-12 text-base text-gray-700 md:flex-wrap lg:flex-row lg:justify-between",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "md:w-3/5 lg:w-4/6 flex flex-1 flex-col gap-3 lg:gap-16 items-start lg:flex-row",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col gap-3 items-start",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "overflow-hidden",
            style: {
              width: "130px",
              height: "35px"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: "w-full h-full object-contain",
              src: "/logo.png",
              alt: "Logo"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "When it comes to creating online presence for businesses and digital sales channels, Tech Genie is the name you can trust!"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "33 Yonge St, Toronto, ON M5E 0A9"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "647-370-7357"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "info@techgenie.ca"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full flex text-4xl justify-start gap-2 mb-4",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Icon, {
              icon: ai_["AiFillFacebook"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Icon, {
              icon: ai_["AiFillTwitterSquare"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Icon, {
              icon: ai_["AiFillLinkedin"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Icon, {
              icon: ai_["AiFillInstagram"]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/certification.png"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col gap-3 items-start",
          style: {
            minWidth: "222px"
          },
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "font-semibold text-lg border-b-2 border-indigo-500",
              children: "Services"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Icon, {
              icon: ai_["AiOutlineDown"]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: "list-none flex flex-col gap-2 hover:border-b-2 hover:border-indigo-500 mb-4",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
              children: "Website design"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
              children: "Wordpress development"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
              children: "Ecommerce website development"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
              children: "Web App Development"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-col gap-3",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "font-semibold text-lg border-b-2 border-indigo-500",
            children: "About Us"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Icon, {
            icon: ai_["AiOutlineDown"]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "list-none flex flex-col gap-2 hover:border-b-2 hover:border-indigo-500",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
            children: "Portfolio"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
            children: "About Us"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListItem, {
            children: "Packages"
          })]
        })]
      })]
    })
  }));
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/routes.js
const routes = [{
  name: "Home",
  path: "/"
}, {
  name: "Portfolio",
  path: "/portfolio"
}];
/* harmony default export */ var src_routes = (routes);
// CONCATENATED MODULE: ./src/components/Navbar.jsx



function Navbar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Navbar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Navbar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Navbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Navbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Navbar_ownKeys(Object(source), true).forEach(function (key) { Navbar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Navbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const CollapsibleNav = props => {
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", Navbar_objectSpread(Navbar_objectSpread({
    className: "bg-white transition-all shadow-lg flex flex-col absolute left-0 w-full"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tw-container py-8",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CollapsibleNavItem, {
        children: "Portfolio"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CollapsibleNavItem, {
        children: "Packages"
      })]
    })
  }));
};

const CollapsibleNavItem = (_ref) => {
  let {
    children
  } = _ref,
      rest = Navbar_objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", Navbar_objectSpread(Navbar_objectSpread({
    className: "cursor-pointer hover:opacity-50 transition-all flex py-4"
  }, rest), {}, {
    children: children
  }));
};

const NavItem = (_ref2) => {
  let {
    children,
    className
  } = _ref2,
      rest = Navbar_objectWithoutProperties(_ref2, ["children", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", Navbar_objectSpread(Navbar_objectSpread({
    className: `cursor-pointer hover:opacity-50 transition-all font-bold ${className || ""}`
  }, rest), {}, {
    children: children
  }));
};

const Navbar = props => {
  const {
    0: isCollapsed,
    1: setIsCollapsed
  } = Object(external_react_["useState"])(true);
  const toggleCollapsed = Object(external_react_["useCallback"])(() => setIsCollapsed(prev => !prev), []);
  const router = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", Navbar_objectSpread(Navbar_objectSpread({
    className: "relative w-full z-20 transition-all duration-300"
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: "w-full shadow-md nv:shadow-none",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "tw-container py-8",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "overflow-hidden",
            style: {
              width: "130px",
              height: "35px"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: "w-full h-full object-contain",
              src: "/logo.png",
              alt: "Logo"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            className: "hidden nv:flex items-center gap-6",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
              onClick: () => router.push("/packages"),
              children: "Packages"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
              onClick: () => router.push("/packages"),
              children: "Portfolio"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavItem, {
              className: "font-semibold tw-button-secondary hover:opacity-100",
              children: "Contact Us"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "nv:hidden transition-all text-4xl cursor-pointer opacity-100 hover:opacity-40",
            onClick: toggleCollapsed,
            children: isCollapsed ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ai_["AiOutlineMenu"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(ai_["AiOutlineClose"], {})
          })]
        })
      })
    }), !isCollapsed && /*#__PURE__*/Object(jsx_runtime_["jsx"])(CollapsibleNav, {})]
  }));
};

/* harmony default export */ var components_Navbar = (Navbar);
// CONCATENATED MODULE: ./src/layouts/LandingPageAuth.jsx




const LandingPageLayout = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "min-h-screen flex flex-col",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Navbar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "flex-grow",
      children: props.children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {})]
  });
};
// CONCATENATED MODULE: ./src/layouts/index.js
 // export { default as LandingPageLayout } from "./LandingPageAuth";
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./src/components/Carousel.jsx
var Carousel = __webpack_require__("Nvcc");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./src/components/Testimonials.jsx



function Testimonials_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Testimonials_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Testimonials_ownKeys(Object(source), true).forEach(function (key) { Testimonials_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Testimonials_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Testimonials_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




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
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "",
    style: {
      width: "800px"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "mb-4 text-lg",
      children: testimonial
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "font-bold text-center mb-1",
      children: client
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex justify-center text-lg",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaStar"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaStar"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaStar"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaStar"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaStar"], {})]
    })]
  });
};

function Testimonials() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: "bg-diagonal",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tw-container py-14",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-bold text-4xl",
          children: "Our client testimonials says it all"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "relative w-12 h-12 bg-gradient-brand rounded-full flex justify-center items-center",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/icon-quotes.png",
            alt: "Quotes",
            className: "pointer-events-none w-6 h-6 object-contain transform"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "text-center mb-44",
        children: "The feedback we get from our customers tells about our cooperation better than we do and makes us move forward."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "tw-container mb-44",
        style: {
          maxWidth: "400px"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Carousel["a" /* default */], Testimonials_objectSpread(Testimonials_objectSpread({}, sliderSettings), {}, {
          children: testimonials.map((testimonial, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Testimonial, {
            testimonial: testimonial.testimonial,
            client: testimonial.client
          }, index))
        }))
      })]
    })
  });
}
// CONCATENATED MODULE: ./src/components/Sponsors.jsx


function Sponsors_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Sponsors_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Sponsors_ownKeys(Object(source), true).forEach(function (key) { Sponsors_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Sponsors_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Sponsors_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SponsorLogo = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
  src: `/sponsors/${props.index}.png`,
  className: "cursor-pointer select-none pointer-events-none",
  alt: "Sponsor"
});

const sponsors = [1, 2, 3, 4, 5];
const Sponsors_sliderSettings = {
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 5
};
function Sponsors() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: "tw-container py-12",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Carousel["a" /* default */], Sponsors_objectSpread(Sponsors_objectSpread({}, Sponsors_sliderSettings), {}, {
      children: sponsors.map((sponsor, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(SponsorLogo, {
        index: index + 1
      }))
    }))
  });
}
// CONCATENATED MODULE: ./src/components/Hero.jsx



function Hero_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Hero_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Hero_ownKeys(Object(source), true).forEach(function (key) { Hero_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Hero_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Hero_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FormInput = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", Hero_objectSpread({
  className: "transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
  type: props.type || "text"
}, props));

function Hero(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: "w-full bg-center bg-cover bg-gradient-brand p-12",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tw-container flex flex-col nv:flex-row gap-12 justify-center items-center h-full",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-col justify-center gap-3 text-center nv:text-left ",
        style: {
          flex: 5
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-white text-3xl font-light",
          children: "Custom Website Development"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "text-white text-4xl",
          children: "We design and develop custom websites"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-white text-xl font-light",
          children: "We create responsive web applications and sites leveraging the most robust technologies in the industry to help you boost your business"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-col gap-6 px-12 py-8 bg-gray-300 rounded-xl text-center",
        style: {
          flex: 3,
          width: "500px"
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "text-2xl mb-4",
            children: "Up to 70% OFF On Logo Design & Website Designs Packages"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Or Call Now 647-370-7357"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
          className: "w-full flex flex-col gap-4 mb-4",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "w-full flex flex-col gap-4",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FormInput, {
              placeholder: "Name"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormInput, {
              placeholder: "Email"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormInput, {
              type: "number",
              placeholder: "Phone"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
            style: {
              maxHeight: "100px"
            },
            className: "transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
            type: "text",
            placeholder: "Your Idea"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "tw-button-secondary w-full py-4 focus:outline-white",
          children: "Send Message"
        })]
      })]
    })
  });
}
// CONCATENATED MODULE: ./src/components/About.jsx




const Point = ({
  children,
  icon
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
  className: "flex gap-4 p-4 pl-0 pt-0",
  children: [icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])("icon", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    className: "font-semibold",
    children: children
  })]
});

function About() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: "tw-container py-8 pt-0 flex gap-8",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-col gap-4 justify-center ",
      style: {
        flex: 2
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "text-4xl font-bold mb-4",
        children: "We Build Masterpieces"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "mb-4",
        children: "Doesn\u2019t matter if you\u2019re looking to create a basic content-based WordPress website or a full-fledged working ecommerce website. From initial front-end design creation to final deployment, our technical managers will guide throughout the procedure and make sure that you get a website which completely suits your business."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-wrap justify-center xs:justify-start gap-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
          children: "Fully Responsive"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
          children: "Device Testing"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
          children: "Clean & Modern"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Point, {
          children: "Great Experience"
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "hidden lg:flex justify-center items-center",
      style: {
        flex: 3
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "https://techgenie.ca/wp-content/uploads/2019/06/web-development-process-img.png"
      })
    })]
  });
}
// EXTERNAL MODULE: ./pages/Portfolio/Projects.jsx
var Projects = __webpack_require__("bMQp");

// CONCATENATED MODULE: ./src/components/ContactForm.jsx




function ContactForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ContactForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ContactForm_ownKeys(Object(source), true).forEach(function (key) { ContactForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ContactForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ContactForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ContactForm_FormInput = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", ContactForm_objectSpread({
  className: "transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
  type: props.type || "text"
}, props));

function ContactForm() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
      className: "w-full flex flex-col gap-4 mb-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "w-full flex flex-col gap-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactForm_FormInput, {
          placeholder: "Your Name"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactForm_FormInput, {
          placeholder: "Your Email"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactForm_FormInput, {
          type: "number",
          placeholder: "Phone"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
        style: {
          height: "360px",
          maxHeight: "360px"
        },
        className: "transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
        type: "text",
        placeholder: "Your Idea"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "tw-button-secondary w-full py-4 focus:outline-white",
      children: "Send Message"
    })]
  });
}
// CONCATENATED MODULE: ./src/components/Contact.jsx




function Contact() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: "w-full relative",
    style: {
      height: "900px"
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: "https://via.placeholder.com/2320x3200",
      className: "object-cover w-full h-full absolute left-0 top-0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full h-full bg-gradient-brand absolute left-0 top-0"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "w-full h-full text-white absolute left-0 top-0 flex flex-col justify-center items-center px-12",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "uppercase font-sans font-light",
        children: "Get started instantly"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: " font-bold text-4xl mb-4",
        children: "Get In Touch"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "tw-container",
        style: {
          maxWidth: "720px"
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContactForm, {})
      })]
    })]
  });
}
// CONCATENATED MODULE: ./src/components/Skills.jsx



function Skills_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Skills_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Skills_ownKeys(Object(source), true).forEach(function (key) { Skills_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Skills_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Skills_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const SkillIcon = props => /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", Skills_objectSpread(Skills_objectSpread({}, props), {}, {
  style: {
    width: "50px",
    height: "50px"
  }
}));

const Skill = ({
  children,
  heading,
  icon
}) => {
  const Icon = icon;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "flex flex-col gap-4",
    children: [Icon, /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: "font-semibold text-2xl text-pink-500",
      children: heading
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      className: "text-black",
      children: children
    })]
  });
};

function Skills() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: "tw-container py-8 pt-0 flex gap-8",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Skill, {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillIcon, {
        src: "/icons/cms.svg"
      }),
      heading: "CMS Website Design & Development",
      children: "CMS-based websites are time saving and cost effective. Get your website developed on WordPress, Magento, Shopify etc. and start right away!"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Skill, {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillIcon, {
        src: "/icons/website.svg"
      }),
      heading: "Custom Website Design",
      children: "If you are looking for a customized website solution then we can make some great designs for you fully customized."
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Skill, {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillIcon, {
        src: "/icons/ecommerce.svg"
      }),
      heading: "Ecommerce Development",
      children: "Selling online is HUGE these days. Get your websites and online products ready today and start making money."
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Skill, {
      icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SkillIcon, {
        src: "/icons/landing-page.svg"
      }),
      heading: "Landing Page Design & Development",
      children: "Get landing pages designed for you targeted campaigns today and start acquiring leads and converting them into customers."
    })]
  });
}
// CONCATENATED MODULE: ./src/components/Packages.jsx



function Packages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Packages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Packages_ownKeys(Object(source), true).forEach(function (key) { Packages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Packages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Packages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Package = ({
  name,
  price,
  features
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "bg-white py-6 text-left rounded",
  style: {
    width: "270px"
  },
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
    className: "text-black font-semibold text-2xl mb-6 px-12",
    children: name
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
    className: "text-black font-bold py-6 px-12 text-4xl border-dashed border-t border-b border-gray-300 mb-6",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("sup", {
      className: "font-sans text-gray-300 mr-2",
      children: "$"
    }), price]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    className: "px-12 flex flex-col gap-2 overflow-y-scroll",
    style: {
      maxHeight: "340px"
    },
    children: features.map((feature, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
      className: "flex items-center gap-4",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ai_["AiFillCheckCircle"], {
        className: "text-indigo-500"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "",
        children: feature
      })]
    }, `feature-${index}`))
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "px-12 pt-6",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: "w-full tw-button-secondary",
      children: "Avail Now"
    })
  })]
});

function Packages(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", Packages_objectSpread(Packages_objectSpread({
    className: "py-8 text-center bg-gray-100"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tw-container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "text-black text-4xl font-bold mb-2",
        children: "Packages"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "mb-4",
        children: "We've come up with various packages to meet the specific needs of all businesses out there. Our packages are for the following services"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex justify-center flex-wrap gap-6",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Package, {
          name: "Startup",
          price: "249.99",
          features: ["5 Stock Photos", "5 Page Website", "3 Banner Design", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Package, {
          name: "Professional",
          price: "599.99",
          features: ["10 Unique Pages Website", "CMS/Admin Panel Support", "8 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee", "Mobile Responsive Will Be Additional $99"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Package, {
          name: "Elite",
          price: "999.99",
          features: ["Upto 15 Unique Pages Website", "Conceptual And Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "CMS/Admin Panel Support", "5 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Package, {
          name: "Silver",
          price: "1599.99",
          features: ["Upto 15 Unique Pages Website", "Conceptual And Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "CMS/Admin Panel Support", "5 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"]
        })]
      })]
    })
  }));
}
// CONCATENATED MODULE: ./src/components/Solutions.jsx




const Solutions_Point = ({
  children,
  icon
}) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
  className: "flex gap-4 p-4 pl-0 pt-0",
  children: [icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])("icon", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    className: "font-semibold",
    children: children
  })]
});

function Solutions() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: "tw-container py-12 flex gap-8",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        flex: 3
      },
      className: "hidden lg:flex justify-center",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "https://techgenie.ca/wp-content/uploads/2019/06/web-development-technology.png",
        className: "w-full",
        style: {
          maxWidth: "400px"
        }
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        flex: 2
      },
      className: "text-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        className: "text-4xl font-bold mb-4",
        children: "We Build Masterpieces"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "mb-8",
        children: "Doesn\u2019t matter if you\u2019re looking to create a basic content-based WordPress website or a full-fledged working ecommerce website. From initial front-end design creation to final deployment, our technical managers will guide throughout the procedure and make sure that you get a website which completely suits your business."
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "flex flex-wrap justify-center xs:justify-start gap-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Solutions_Point, {
          children: "Custom Development"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Solutions_Point, {
          children: "iOS & Android Development"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Solutions_Point, {
          children: "Application Integration"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Solutions_Point, {
          children: "Security Assurance"
        })]
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react-scroll-to-component"
var external_react_scroll_to_component_ = __webpack_require__("q8gU");

// CONCATENATED MODULE: ./pages/index.js















function Home() {
  const refs = Object(external_react_["useRef"])([]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(LandingPageLayout, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Web Development - Tech Genie"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hero, {
      refs: refs
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sponsors, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(About, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Skills, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Packages, {
      onClick: () => console.log(refs.current),
      ref: ref => refs.current.push(ref)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Solutions, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Projects["default"], {
      ref: ref => refs.current.push(ref)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Testimonials, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Contact, {})]
  });
}

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "bMQp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "shadow cursor-pointer relative w-full md:w-64",
    onClick: () => window.open(`portfolio/${index}.jpg`),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "object-cover overflow-hidden",
      style: {
        width: "289px",
        height: "398px"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", _objectSpread({
        className: "w-full h-full object-cover rounded"
      }, rest))
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "transition-all duration-500 absolute top-0 left-0 w-full h-full bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end px-6",
      style: {
        width: "289px",
        height: "398px"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: "text-2xl font-bold mb-4",
        children: title
      })
    })]
  });
};

function Projects() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
    className: "w-full pb-8",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "transition-all bg-gray-100 mb-8",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "tw-container py-8",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
          className: "text-center font-bold text-4xl mb-4",
          children: "Projects"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          className: "text-center",
          children: "Take a look at how we solve challenges to meet project requirements that deliver a greater level of functionality compared to traditional websites."
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "tw-container flex flex-col md:flex-row gap-20 flex-wrap",
      children: data.map((project, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ProjectItem, {
        index: index + 1,
        src: `/portfolio/${index + 1}.jpg`,
        title: project
      }, `project-${index}`))
    })]
  });
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "q8gU":
/***/ (function(module, exports) {

module.exports = require("react-scroll-to-component");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });