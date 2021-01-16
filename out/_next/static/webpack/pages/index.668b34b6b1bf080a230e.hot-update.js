webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Portfolio/Projects.jsx":
/*!**************************************!*\
  !*** ./pages/Portfolio/Projects.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\pages\\Portfolio\\Projects.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ButtonFilter = function ButtonFilter(_ref) {
  var children = _ref.children,
      active = _ref.active;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("px-8 py-4 bg-gray-200 hover:bg-gray-300 font-semibold rounded-lg transition-all focus:outline-black", {
      "tw-button-primary": active
    }),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = ButtonFilter;

var TabFilter = function TabFilter(_ref2) {
  var children = _ref2.children,
      active = _ref2.active;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("flex-grow px-8 py-4 font-semibold rounded-lg transition-all rounded-b-none focus:outline-none focus:outline-black", {
      "bg-white hover:bg-white": active,
      "bg-gray-100 hover:bg-gray-300": !active
    }),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_c2 = TabFilter;

var ProjectItem = function ProjectItem(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "relative w-full md:w-64",
    onClick: function onClick() {
      return window.open("google.com");
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", _objectSpread({
      className: "w-full h-full object-cover rounded"
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "transition-all duration-500 absolute top-0 left-0 w-full h-full bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end p-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "",
        children: "SEO Optimization"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "text-2xl font-bold mb-4",
        children: "Designing a better cinema experience"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: "border px-4 py-2 bg-white rounded-md text-indigo-600 font-thin hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all focus:outline-white",
        children: "View Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_c3 = ProjectItem;
function Projects() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "w-full pb-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "transition-all bg-gray-100 mb-8",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "tw-container py-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
          className: "text-center font-bold text-4xl mb-4",
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "text-center",
          children: "Take a look at how we solve challenges to meet project requirements that deliver a greater level of functionality compared to traditional websites."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "tw-container flex flex-col md:flex-row gap-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProjectItem, {
        src: "https://via.placeholder.com/289x398"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProjectItem, {
        src: "https://via.placeholder.com/289x398"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProjectItem, {
        src: "https://via.placeholder.com/289x398"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);
}
_c4 = Projects;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ButtonFilter");
$RefreshReg$(_c2, "TabFilter");
$RefreshReg$(_c3, "ProjectItem");
$RefreshReg$(_c4, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9ydGZvbGlvL1Byb2plY3RzLmpzeCJdLCJuYW1lcyI6WyJCdXR0b25GaWx0ZXIiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImNsYXNzbmFtZSIsIlRhYkZpbHRlciIsIlByb2plY3RJdGVtIiwicHJvcHMiLCJ3aW5kb3ciLCJvcGVuIiwiUHJvamVjdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLE1BQWIsUUFBYUEsTUFBYjtBQUFBLHNCQUNqQjtBQUNJLGFBQVMsRUFBRUMsaURBQVMsQ0FDaEIscUdBRGdCLEVBRWhCO0FBQ0ksMkJBQXFCRDtBQUR6QixLQUZnQixDQUR4QjtBQUFBLGNBUUtEO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQjtBQUFBLENBQXJCOztLQUFNRCxZOztBQWFOLElBQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQTBCO0FBQUEsTUFBdkJILFFBQXVCLFNBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsU0FBYkEsTUFBYTtBQUN4QyxzQkFDSTtBQUNJLGFBQVMsRUFBRUMsaURBQVMsQ0FDaEIsbUhBRGdCLEVBRWhCO0FBQ0ksaUNBQTJCRCxNQUQvQjtBQUVJLHVDQUFpQyxDQUFDQTtBQUZ0QyxLQUZnQixDQUR4QjtBQUFBLGNBU0tEO0FBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0FkRDs7TUFBTUcsUzs7QUFnQk4sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFlBQVosQ0FBTjtBQUFBLEtBQWxEO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUF3REYsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsa0tBQWY7QUFBQSw4QkFDSTtBQUFHLGlCQUFTLEVBQUMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFHSTtBQUFRLGlCQUFTLEVBQUMsZ0tBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQWJEOztNQUFNRCxXO0FBZVMsU0FBU0ksUUFBVCxHQUFvQjtBQUMvQixzQkFDSTtBQUFTLGFBQVMsRUFBQyxhQUFuQjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLHFDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBVUk7QUFBSyxlQUFTLEVBQUMsOENBQWY7QUFBQSw4QkFDSSxxRUFBQyxXQUFEO0FBQWEsV0FBRyxFQUFDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLFdBQUQ7QUFBYSxXQUFHLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0kscUVBQUMsV0FBRDtBQUFhLFdBQUcsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7TUFuQnVCQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2OGIzNGI2YjFiZjA4MGEyMzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc25hbWUgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbkZpbHRlciA9ICh7IGNoaWxkcmVuLCBhY3RpdmUgfSkgPT4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lKFxyXG4gICAgICAgICAgICBcInB4LTggcHktNCBiZy1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTMwMCBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZm9jdXM6b3V0bGluZS1ibGFja1wiLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInR3LWJ1dHRvbi1wcmltYXJ5XCI6IGFjdGl2ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbik7XHJcblxyXG5jb25zdCBUYWJGaWx0ZXIgPSAoeyBjaGlsZHJlbiwgYWN0aXZlIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZShcclxuICAgICAgICAgICAgICAgIFwiZmxleC1ncm93IHB4LTggcHktNCBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgcm91bmRlZC1iLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtYmxhY2tcIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImJnLXdoaXRlIGhvdmVyOmJnLXdoaXRlXCI6IGFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICAgICBcImJnLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktMzAwXCI6ICFhY3RpdmUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvamVjdEl0ZW0gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWQ6dy02NFwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiZ29vZ2xlLmNvbVwiKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZFwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgcm91bmRlZCBvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS04MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgcC02XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5TRU8gT3B0aW1pemF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+RGVzaWduaW5nIGEgYmV0dGVyIGNpbmVtYSBleHBlcmllbmNlPC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMiBiZy13aGl0ZSByb3VuZGVkLW1kIHRleHQtaW5kaWdvLTYwMCBmb250LXRoaW4gaG92ZXI6YmctaW5kaWdvLTYwMCBob3Zlcjpib3JkZXItaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGZvY3VzOm91dGxpbmUtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IERldGFpbHNcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHBiLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBiZy1ncmF5LTEwMCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTR4bCBtYi00XCI+UHJvamVjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgYSBsb29rIGF0IGhvdyB3ZSBzb2x2ZSBjaGFsbGVuZ2VzIHRvIG1lZXQgcHJvamVjdCByZXF1aXJlbWVudHMgdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyIGEgZ3JlYXRlciBsZXZlbCBvZiBmdW5jdGlvbmFsaXR5IGNvbXBhcmVkIHRvIHRyYWRpdGlvbmFsIHdlYnNpdGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RJdGVtIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yODl4Mzk4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0SXRlbSBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjg5eDM5OFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdEl0ZW0gc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI4OXgzOThcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=