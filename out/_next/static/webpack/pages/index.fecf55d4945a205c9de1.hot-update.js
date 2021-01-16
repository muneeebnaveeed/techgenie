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
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\pages\\Portfolio\\Projects.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var data = ["Chaar Achaar", "Ecommerce", "Furniture", "Medical", "Hospital", "Digital Agency", "Business", "Furniture"];

var ProjectItem = function ProjectItem(_ref) {
  var title = _ref.title,
      index = _ref.index,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["title", "index"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "shadow cursor-pointer relative w-full md:w-64",
    onClick: function onClick() {
      return window.open("portfolio/".concat(index, ".jpg"));
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "object-cover overflow-hidden w-full md:w-289px h-398px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", _objectSpread({
        className: "w-full h-full object-cover rounded"
      }, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "transition-all duration-500 absolute top-0 left-0 w-full h-full bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end px-6 w-full md:w-289px h-398px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "text-2xl font-bold mb-4",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_c = ProjectItem;
function Projects() {
  var _this2 = this;

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
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "tw-container flex flex-col md:flex-row md:justify-center gap-20 flex-wrap",
      children: data.map(function (project, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProjectItem, {
          index: index + 1,
          src: "/portfolio/".concat(index + 1, ".jpg"),
          title: project
        }, "project-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, _this2);
      })
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
_c2 = Projects;

var _c, _c2;

$RefreshReg$(_c, "ProjectItem");
$RefreshReg$(_c2, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9ydGZvbGlvL1Byb2plY3RzLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiUHJvamVjdEl0ZW0iLCJ0aXRsZSIsImluZGV4IiwicmVzdCIsIndpbmRvdyIsIm9wZW4iLCJQcm9qZWN0cyIsIm1hcCIsInByb2plY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDVCxjQURTLEVBRVQsV0FGUyxFQUdULFdBSFMsRUFJVCxTQUpTLEVBS1QsVUFMUyxFQU1ULGdCQU5TLEVBT1QsVUFQUyxFQVFULFdBUlMsQ0FBYjs7QUFXQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUErQjtBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBWEMsSUFBVzs7QUFDL0Msc0JBQ0k7QUFDSSxhQUFTLEVBQUMsK0NBRGQ7QUFFSSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxNQUFNLENBQUNDLElBQVAscUJBQXlCSCxLQUF6QixVQUFOO0FBQUEsS0FGYjtBQUFBLDRCQUlJO0FBQUssZUFBUyxFQUFDLHdEQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBd0RDLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFXSTtBQUFLLGVBQVMsRUFBQyw2TEFBZjtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBQyx5QkFBZDtBQUFBLGtCQUF5Q0Y7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQWxCRDs7S0FBTUQsVztBQW9CUyxTQUFTTSxRQUFULEdBQW9CO0FBQUE7O0FBQy9CLHNCQUNJO0FBQVMsYUFBUyxFQUFDLGFBQW5CO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFLLGVBQVMsRUFBQywyRUFBZjtBQUFBLGdCQUNLUCxJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVOLEtBQVY7QUFBQSw0QkFDTixxRUFBQyxXQUFEO0FBRUksZUFBSyxFQUFFQSxLQUFLLEdBQUcsQ0FGbkI7QUFHSSxhQUFHLHVCQUFnQkEsS0FBSyxHQUFHLENBQXhCLFNBSFA7QUFJSSxlQUFLLEVBQUVNO0FBSlgsNkJBQ29CTixLQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURNO0FBQUEsT0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVCSDtNQXhCdUJJLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmVjZjU1ZDQ5NDVhMjA1YzlkZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICBcIkNoYWFyIEFjaGFhclwiLFxyXG4gICAgXCJFY29tbWVyY2VcIixcclxuICAgIFwiRnVybml0dXJlXCIsXHJcbiAgICBcIk1lZGljYWxcIixcclxuICAgIFwiSG9zcGl0YWxcIixcclxuICAgIFwiRGlnaXRhbCBBZ2VuY3lcIixcclxuICAgIFwiQnVzaW5lc3NcIixcclxuICAgIFwiRnVybml0dXJlXCIsXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHRpdGxlLCBpbmRleCwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHctZnVsbCBtZDp3LTY0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYHBvcnRmb2xpby8ke2luZGV4fS5qcGdgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgbWQ6dy0yODlweCBoLTM5OHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWRcIiB7Li4ucmVzdH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjayByb3VuZGVkIG9wYWNpdHktMTBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjg5cHhcIiwgaGVpZ2h0OiBcIjM5OHB4XCIgfX1cclxuICAgICAgICAgICAgPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgcm91bmRlZCBvcGFjaXR5LTAgaG92ZXI6b3BhY2l0eS04MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1lbmQgcHgtNiB3LWZ1bGwgbWQ6dy0yODlweCBoLTM5OHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBwYi04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgYmctZ3JheS0xMDAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC00eGwgbWItNFwiPlByb2plY3RzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUYWtlIGEgbG9vayBhdCBob3cgd2Ugc29sdmUgY2hhbGxlbmdlcyB0byBtZWV0IHByb2plY3QgcmVxdWlyZW1lbnRzIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlciBhIGdyZWF0ZXIgbGV2ZWwgb2YgZnVuY3Rpb25hbGl0eSBjb21wYXJlZCB0byB0cmFkaXRpb25hbCB3ZWJzaXRlcy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6anVzdGlmeS1jZW50ZXIgZ2FwLTIwIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bwcm9qZWN0LSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL3BvcnRmb2xpby8ke2luZGV4ICsgMX0uanBnYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=