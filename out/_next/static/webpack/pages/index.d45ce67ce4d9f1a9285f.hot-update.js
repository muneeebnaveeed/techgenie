webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! routes */ "./src/routes.js");




var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Navbar.jsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var CollapsibleNav = function CollapsibleNav(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", _objectSpread(_objectSpread({
    className: "bg-white transition-all shadow-lg flex flex-col absolute left-0 w-full"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "tw-container py-8",
      children: lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(routes__WEBPACK_IMPORTED_MODULE_7__["default"], function (route, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CollapsibleNavItem, {
          onClick: function onClick() {
            return router.push(route.path);
          },
          children: route.name
        }, "route-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(CollapsibleNav, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = CollapsibleNav;

var CollapsibleNavItem = function CollapsibleNavItem(_ref) {
  var children = _ref.children,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", _objectSpread(_objectSpread({
    className: "cursor-pointer hover:opacity-50 transition-all flex py-4"
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_c2 = CollapsibleNavItem;

var NavItem = function NavItem(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["children", "className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", _objectSpread(_objectSpread({
    className: "cursor-pointer hover:opacity-50 transition-all font-bold ".concat(className || "")
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_c3 = NavItem;

var Navbar = function Navbar(props) {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isCollapsed = _useState[0],
      setIsCollapsed = _useState[1];

  var toggleCollapsed = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    return setIsCollapsed(function (prev) {
      return !prev;
    });
  }, []);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: "relative w-full z-20 transition-all duration-300"
  }, props), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "w-full shadow-md nv:shadow-none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "tw-container py-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "flex items-center justify-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "overflow-hidden",
            style: {
              width: "130px",
              height: "35px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
              className: "w-full h-full object-contain",
              src: "/logo.png",
              alt: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            className: "hidden nv:flex items-center gap-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NavItem, {
              onClick: function onClick() {
                return router.push("/packages");
              },
              children: "Packages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NavItem, {
              className: "font-semibold tw-button-secondary hover:opacity-100",
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "nv:hidden transition-all text-4xl cursor-pointer opacity-100 hover:opacity-40",
            onClick: toggleCollapsed,
            children: isCollapsed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineMenu"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 44
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineClose"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this), !isCollapsed && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CollapsibleNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 30
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, _this);
};

_s2(Navbar, "u5lcUqyuEEtWA1DBRgZUgJg1DxQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c4 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "CollapsibleNav");
$RefreshReg$(_c2, "CollapsibleNavItem");
$RefreshReg$(_c3, "NavItem");
$RefreshReg$(_c4, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6WyJDb2xsYXBzaWJsZU5hdiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiXyIsIm1hcCIsInJvdXRlcyIsInJvdXRlIiwiaW5kZXgiLCJwdXNoIiwicGF0aCIsIm5hbWUiLCJDb2xsYXBzaWJsZU5hdkl0ZW0iLCJjaGlsZHJlbiIsInJlc3QiLCJOYXZJdGVtIiwiY2xhc3NOYW1lIiwiTmF2YmFyIiwidXNlU3RhdGUiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNJO0FBQ0ksYUFBUyxFQUFDO0FBRGQsS0FFUUYsS0FGUjtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsZ0JBQ0tHLDZDQUFDLENBQUNDLEdBQUYsQ0FBTUMsOENBQU4sRUFBYyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSw0QkFDWCxxRUFBQyxrQkFBRDtBQUVJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTU4sTUFBTSxDQUFDTyxJQUFQLENBQVlGLEtBQUssQ0FBQ0csSUFBbEIsQ0FBTjtBQUFBLFdBRmI7QUFBQSxvQkFJS0gsS0FBSyxDQUFDSTtBQUpYLDJCQUNrQkgsS0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQWQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0JILENBM0JEOztHQUFNUixjO1VBQ2FHLHFEOzs7S0FEYkgsYzs7QUE2Qk4sSUFBTVksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWdCQyxJQUFoQjs7QUFBQSxzQkFDdkI7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUE2RUEsSUFBN0U7QUFBQSxjQUNLRDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEdUI7QUFBQSxDQUEzQjs7TUFBTUQsa0I7O0FBTU4sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHRixRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhRyxTQUFiLFNBQWFBLFNBQWI7QUFBQSxNQUEyQkYsSUFBM0I7O0FBQUEsc0JBQ1o7QUFDSSxhQUFTLHFFQUE4REUsU0FBUyxJQUFJLEVBQTNFO0FBRGIsS0FFUUYsSUFGUjtBQUFBLGNBSUtEO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURZO0FBQUEsQ0FBaEI7O01BQU1FLE87O0FBU04sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ2hCLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNnQmlCLHNEQUFRLENBQUMsSUFBRCxDQUR4QjtBQUFBLE1BQ2ZDLFdBRGU7QUFBQSxNQUNGQyxjQURFOztBQUV0QixNQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUM7QUFBQSxXQUFNRixjQUFjLENBQUMsVUFBQ0csSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBcEI7QUFBQSxHQUFELEVBQXdDLEVBQXhDLENBQW5DO0FBQ0EsTUFBTXJCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQXNFRixLQUF0RTtBQUFBLDRCQUNJO0FBQU0sZUFBUyxFQUFDLGlDQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxtQ0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFpQyxpQkFBSyxFQUFFO0FBQUV1QixtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLG9CQUFNLEVBQUU7QUFBMUIsYUFBeEM7QUFBQSxtQ0FDSTtBQUNJLHVCQUFTLEVBQUMsOEJBRGQ7QUFFSSxpQkFBRyxFQUFDLFdBRlI7QUFHSSxpQkFBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFRSTtBQUFJLHFCQUFTLEVBQUMsbUNBQWQ7QUFBQSxvQ0FDSSxxRUFBQyxPQUFEO0FBQVMscUJBQU8sRUFBRTtBQUFBLHVCQUFNdkIsTUFBTSxDQUFDTyxJQUFQLENBQVksV0FBWixDQUFOO0FBQUEsZUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyxPQUFEO0FBQVMsdUJBQVMsRUFBQyxxREFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKLGVBY0k7QUFDSSxxQkFBUyxFQUFDLCtFQURkO0FBRUksbUJBQU8sRUFBRVksZUFGYjtBQUFBLHNCQUlLRixXQUFXLGdCQUFHLHFFQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQUgsZ0JBQXVCLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBMEJLLENBQUNBLFdBQUQsaUJBQWdCLHFFQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4QkgsQ0FsQ0Q7O0lBQU1GLE07VUFHYWQscUQ7OztNQUhiYyxNO0FBb0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDVjZTY3Y2U0ZDlmMWE5Mjg1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZU1lbnUsIEFpT3V0bGluZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcInJvdXRlc1wiO1xyXG5cclxuY29uc3QgQ29sbGFwc2libGVOYXYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1sZyBmbGV4IGZsZXgtY29sIGFic29sdXRlIGxlZnQtMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS04XCI+XHJcbiAgICAgICAgICAgICAgICB7Xy5tYXAocm91dGVzLCAocm91dGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3V0ZS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHJvdXRlLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JvdXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzaWJsZU5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sbGFwc2libGVOYXZJdGVtPkhvbWU8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+U2VydmljZXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+UG9ydGZvbGlvPC9Db2xsYXBzaWJsZU5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVOYXZJdGVtPlRlY2hub2xvZ2llczwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5BYm91dCBVczwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5QYWNrYWdlczwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5Db250YWN0IFVzPC9Db2xsYXBzaWJsZU5hdkl0ZW0+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbGxhcHNpYmxlTmF2SXRlbSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTUwIHRyYW5zaXRpb24tYWxsIGZsZXggcHktNFwiIHsuLi5yZXN0fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgPGxpXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbCBmb250LWJvbGQgJHtjbGFzc05hbWUgfHwgXCJcIn1gfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbGk+XHJcbik7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0b2dnbGVDb2xsYXBzZWQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRJc0NvbGxhcHNlZCgocHJldikgPT4gIXByZXYpLCBbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgei0yMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LW1kIG52OnNoYWRvdy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17eyB3aWR0aDogXCIxMzBweFwiLCBoZWlnaHQ6IFwiMzVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBudjpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvcGFja2FnZXNcIil9PlBhY2thZ2VzPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0dy1idXR0b24tc2Vjb25kYXJ5IGhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJudjpoaWRkZW4gdHJhbnNpdGlvbi1hbGwgdGV4dC00eGwgY3Vyc29yLXBvaW50ZXIgb3BhY2l0eS0xMDAgaG92ZXI6b3BhY2l0eS00MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbGxhcHNlZCA/IDxBaU91dGxpbmVNZW51IC8+IDogPEFpT3V0bGluZUNsb3NlIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgPENvbGxhcHNpYmxlTmF2IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==