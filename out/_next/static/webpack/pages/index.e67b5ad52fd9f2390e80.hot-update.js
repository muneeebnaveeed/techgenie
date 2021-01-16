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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: "https://via.placeholder.com/130x35",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
            className: "hidden nv:flex items-center gap-6",
            children: [lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(routes__WEBPACK_IMPORTED_MODULE_7__["default"], function (route, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NavItem, {
                onClick: function onClick() {
                  return router.push(route.path);
                },
                children: route.name
              }, "route-".concat(index), false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NavItem, {
              className: "font-semibold tw-button-secondary hover:opacity-100",
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "nv:hidden transition-all text-4xl cursor-pointer opacity-100 hover:opacity-40",
            onClick: toggleCollapsed,
            children: isCollapsed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineMenu"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 44
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineClose"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
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
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6WyJDb2xsYXBzaWJsZU5hdiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiXyIsIm1hcCIsInJvdXRlcyIsInJvdXRlIiwiaW5kZXgiLCJwdXNoIiwicGF0aCIsIm5hbWUiLCJDb2xsYXBzaWJsZU5hdkl0ZW0iLCJjaGlsZHJlbiIsInJlc3QiLCJOYXZJdGVtIiwiY2xhc3NOYW1lIiwiTmF2YmFyIiwidXNlU3RhdGUiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkIiwidXNlQ2FsbGJhY2siLCJwcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUNJLGFBQVMsRUFBQztBQURkLEtBRVFGLEtBRlI7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLGdCQUNLRyw2Q0FBQyxDQUFDQyxHQUFGLENBQU1DLDhDQUFOLEVBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsNEJBQ1gscUVBQUMsa0JBQUQ7QUFFSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRixLQUFLLENBQUNHLElBQWxCLENBQU47QUFBQSxXQUZiO0FBQUEsb0JBSUtILEtBQUssQ0FBQ0k7QUFKWCwyQkFDa0JILEtBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFkO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQTNCRDs7R0FBTVIsYztV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MGU4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpT3V0bGluZU1lbnUsIEFpT3V0bGluZUNsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSBcInJvdXRlc1wiO1xyXG5cclxuY29uc3QgQ29sbGFwc2libGVOYXYgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1sZyBmbGV4IGZsZXgtY29sIGFic29sdXRlIGxlZnQtMCB3LWZ1bGxcIlxyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS04XCI+XHJcbiAgICAgICAgICAgICAgICB7Xy5tYXAocm91dGVzLCAocm91dGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3V0ZS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHJvdXRlLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JvdXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzaWJsZU5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIHsvKiA8Q29sbGFwc2libGVOYXZJdGVtPkhvbWU8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+U2VydmljZXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+UG9ydGZvbGlvPC9Db2xsYXBzaWJsZU5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVOYXZJdGVtPlRlY2hub2xvZ2llczwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5BYm91dCBVczwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5QYWNrYWdlczwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5Db250YWN0IFVzPC9Db2xsYXBzaWJsZU5hdkl0ZW0+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbGxhcHNpYmxlTmF2SXRlbSA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3ZlcjpvcGFjaXR5LTUwIHRyYW5zaXRpb24tYWxsIGZsZXggcHktNFwiIHsuLi5yZXN0fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgTmF2SXRlbSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4gKFxyXG4gICAgPGxpXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbCBmb250LWJvbGQgJHtjbGFzc05hbWUgfHwgXCJcIn1gfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbGk+XHJcbik7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCB0b2dnbGVDb2xsYXBzZWQgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRJc0NvbGxhcHNlZCgocHJldikgPT4gIXByZXYpLCBbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgei0yMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIiB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LW1kIG52OnNoYWRvdy1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTMweDM1XCIgYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbnY6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLm1hcChyb3V0ZXMsIChyb3V0ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Byb3V0ZS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHJvdXRlLnBhdGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JvdXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHR3LWJ1dHRvbi1zZWNvbmRhcnkgaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm52OmhpZGRlbiB0cmFuc2l0aW9uLWFsbCB0ZXh0LTR4bCBjdXJzb3ItcG9pbnRlciBvcGFjaXR5LTEwMCBob3ZlcjpvcGFjaXR5LTQwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29sbGFwc2VkID8gPEFpT3V0bGluZU1lbnUgLz4gOiA8QWlPdXRsaW5lQ2xvc2UgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiA8Q29sbGFwc2libGVOYXYgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9