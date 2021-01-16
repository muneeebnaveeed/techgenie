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
      className: "object-cover overflow-hidden w-full md:w-289px h-auto md:h-398px",
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
      className: "transition-all duration-500 absolute top-0 left-0 w-full h-full bg-black rounded opacity-0 hover:opacity-80 text-white flex flex-col items-start justify-end px-6",
      style: {
        width: "289px",
        height: "398px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "text-2xl font-bold mb-4",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
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
          lineNumber: 42,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "text-center",
          children: "Take a look at how we solve challenges to meet project requirements that deliver a greater level of functionality compared to traditional websites."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
          lineNumber: 51,
          columnNumber: 21
        }, _this2);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9ydGZvbGlvL1Byb2plY3RzLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiUHJvamVjdEl0ZW0iLCJ0aXRsZSIsImluZGV4IiwicmVzdCIsIndpbmRvdyIsIm9wZW4iLCJ3aWR0aCIsImhlaWdodCIsIlByb2plY3RzIiwibWFwIiwicHJvamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNULGNBRFMsRUFFVCxXQUZTLEVBR1QsV0FIUyxFQUlULFNBSlMsRUFLVCxVQUxTLEVBTVQsZ0JBTlMsRUFPVCxVQVBTLEVBUVQsV0FSUyxDQUFiOztBQVdBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQStCO0FBQUEsTUFBNUJDLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFYQyxJQUFXOztBQUMvQyxzQkFDSTtBQUNJLGFBQVMsRUFBQywrQ0FEZDtBQUVJLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxxQkFBeUJILEtBQXpCLFVBQU47QUFBQSxLQUZiO0FBQUEsNEJBSUk7QUFBSyxlQUFTLEVBQUMsa0VBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUF3REMsSUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQVdJO0FBQ0ksZUFBUyxFQUFDLG1LQURkO0FBRUksV0FBSyxFQUFFO0FBQUVHLGFBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFNLEVBQUU7QUFBMUIsT0FGWDtBQUFBLDZCQUlJO0FBQUksaUJBQVMsRUFBQyx5QkFBZDtBQUFBLGtCQUF5Q047QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXJCRDs7S0FBTUQsVztBQXVCUyxTQUFTUSxRQUFULEdBQW9CO0FBQUE7O0FBQy9CLHNCQUNJO0FBQVMsYUFBUyxFQUFDLGFBQW5CO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMscUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFVSTtBQUFLLGVBQVMsRUFBQywyRUFBZjtBQUFBLGdCQUNLVCxJQUFJLENBQUNVLEdBQUwsQ0FBUyxVQUFDQyxPQUFELEVBQVVSLEtBQVY7QUFBQSw0QkFDTixxRUFBQyxXQUFEO0FBRUksZUFBSyxFQUFFQSxLQUFLLEdBQUcsQ0FGbkI7QUFHSSxhQUFHLHVCQUFnQkEsS0FBSyxHQUFHLENBQXhCLFNBSFA7QUFJSSxlQUFLLEVBQUVRO0FBSlgsNkJBQ29CUixLQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURNO0FBQUEsT0FBVDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVCSDtNQXhCdUJNLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmM2MjcxMTlhNjcwMzQxMmY0ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICBcIkNoYWFyIEFjaGFhclwiLFxyXG4gICAgXCJFY29tbWVyY2VcIixcclxuICAgIFwiRnVybml0dXJlXCIsXHJcbiAgICBcIk1lZGljYWxcIixcclxuICAgIFwiSG9zcGl0YWxcIixcclxuICAgIFwiRGlnaXRhbCBBZ2VuY3lcIixcclxuICAgIFwiQnVzaW5lc3NcIixcclxuICAgIFwiRnVybml0dXJlXCIsXHJcbl07XHJcblxyXG5jb25zdCBQcm9qZWN0SXRlbSA9ICh7IHRpdGxlLCBpbmRleCwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGN1cnNvci1wb2ludGVyIHJlbGF0aXZlIHctZnVsbCBtZDp3LTY0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oYHBvcnRmb2xpby8ke2luZGV4fS5qcGdgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgbWQ6dy0yODlweCBoLWF1dG8gbWQ6aC0zOThweFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciByb3VuZGVkXCIgey4uLnJlc3R9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgcm91bmRlZCBvcGFjaXR5LTEwXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI4OXB4XCIsIGhlaWdodDogXCIzOThweFwiIH19XHJcbiAgICAgICAgICAgID48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjayByb3VuZGVkIG9wYWNpdHktMCBob3ZlcjpvcGFjaXR5LTgwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBqdXN0aWZ5LWVuZCBweC02XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI4OXB4XCIsIGhlaWdodDogXCIzOThweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHBiLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBiZy1ncmF5LTEwMCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTR4bCBtYi00XCI+UHJvamVjdHM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRha2UgYSBsb29rIGF0IGhvdyB3ZSBzb2x2ZSBjaGFsbGVuZ2VzIHRvIG1lZXQgcHJvamVjdCByZXF1aXJlbWVudHMgdGhhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxpdmVyIGEgZ3JlYXRlciBsZXZlbCBvZiBmdW5jdGlvbmFsaXR5IGNvbXBhcmVkIHRvIHRyYWRpdGlvbmFsIHdlYnNpdGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDpqdXN0aWZ5LWNlbnRlciBnYXAtMjAgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHByb2plY3QtJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvcG9ydGZvbGlvLyR7aW5kZXggKyAxfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==