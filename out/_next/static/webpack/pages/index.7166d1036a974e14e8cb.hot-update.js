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
    className: "cursor-pointer hover:opacity-50 transition-all font-bold text-white ".concat(className || "")
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
    className: "relative nv:absolute w-full z-20 top-0 left-0 transition-all duration-300"
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
            lineNumber: 65,
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
                lineNumber: 68,
                columnNumber: 33
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NavItem, {
              className: "font-semibold tw-button-secondary",
              children: "Contact Us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "nv:hidden transition-all text-4xl cursor-pointer opacity-100 hover:opacity-40",
            onClick: toggleCollapsed,
            children: isCollapsed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineMenu"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 44
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineClose"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 64
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this), !isCollapsed && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CollapsibleNav, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 30
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJdLCJuYW1lcyI6WyJDb2xsYXBzaWJsZU5hdiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiXyIsIm1hcCIsInJvdXRlcyIsInJvdXRlIiwiaW5kZXgiLCJwdXNoIiwicGF0aCIsIm5hbWUiLCJDb2xsYXBzaWJsZU5hdkl0ZW0iLCJjaGlsZHJlbiIsInJlc3QiLCJOYXZJdGVtIiwiY2xhc3NOYW1lIiwiTmF2YmFyIiwidXNlU3RhdGUiLCJpc0NvbGxhcHNlZCIsInNldElzQ29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkIiwidXNlQ2FsbGJhY2siLCJwcmV2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUNJLGFBQVMsRUFBQztBQURkLEtBRVFGLEtBRlI7QUFBQSwyQkFJSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLGdCQUNLRyw2Q0FBQyxDQUFDQyxHQUFGLENBQU1DLDhDQUFOLEVBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsNEJBQ1gscUVBQUMsa0JBQUQ7QUFFSSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRixLQUFLLENBQUNHLElBQWxCLENBQU47QUFBQSxXQUZiO0FBQUEsb0JBSUtILEtBQUssQ0FBQ0k7QUFKWCwyQkFDa0JILEtBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFkO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQTNCRDs7R0FBTVIsYztV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Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51LCBBaU91dGxpbmVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCJyb3V0ZXNcIjtcclxuXHJcbmNvbnN0IENvbGxhcHNpYmxlTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctbGcgZmxleCBmbGV4LWNvbCBhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsXCJcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAge18ubWFwKHJvdXRlcywgKHJvdXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcm91dGUtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChyb3V0ZS5wYXRoKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyb3V0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICB7LyogPENvbGxhcHNpYmxlTmF2SXRlbT5Ib21lPC9Db2xsYXBzaWJsZU5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVOYXZJdGVtPlNlcnZpY2VzPC9Db2xsYXBzaWJsZU5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2libGVOYXZJdGVtPlBvcnRmb2xpbzwvQ29sbGFwc2libGVOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNpYmxlTmF2SXRlbT5UZWNobm9sb2dpZXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+QWJvdXQgVXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+UGFja2FnZXM8L0NvbGxhcHNpYmxlTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzaWJsZU5hdkl0ZW0+Q29udGFjdCBVczwvQ29sbGFwc2libGVOYXZJdGVtPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBDb2xsYXBzaWJsZU5hdkl0ZW0gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbCBmbGV4IHB5LTRcIiB7Li4ucmVzdH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9saT5cclxuKTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcclxuICAgIDxsaVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNTAgdHJhbnNpdGlvbi1hbGwgZm9udC1ib2xkIHRleHQtd2hpdGUgJHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lIHx8IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgdG9nZ2xlQ29sbGFwc2VkID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0SXNDb2xsYXBzZWQoKHByZXYpID0+ICFwcmV2KSwgW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbnY6YWJzb2x1dGUgdy1mdWxsIHotMjAgdG9wLTAgbGVmdC0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3ctbWQgbnY6c2hhZG93LW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMzB4MzVcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBudjpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge18ubWFwKHJvdXRlcywgKHJvdXRlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHJvdXRlLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2gocm91dGUucGF0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm91dGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2SXRlbT5Ib21lPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+U2VydmljZXM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5Qb3J0Zm9saW88L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5UZWNobm9sb2dpZXM8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5BYm91dCBVczwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlBhY2thZ2VzPC9OYXZJdGVtPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdHctYnV0dG9uLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibnY6aGlkZGVuIHRyYW5zaXRpb24tYWxsIHRleHQtNHhsIGN1cnNvci1wb2ludGVyIG9wYWNpdHktMTAwIGhvdmVyOm9wYWNpdHktNDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQ29sbGFwc2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb2xsYXBzZWQgPyA8QWlPdXRsaW5lTWVudSAvPiA6IDxBaU91dGxpbmVDbG9zZSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICB7IWlzQ29sbGFwc2VkICYmIDxDb2xsYXBzaWJsZU5hdiAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=