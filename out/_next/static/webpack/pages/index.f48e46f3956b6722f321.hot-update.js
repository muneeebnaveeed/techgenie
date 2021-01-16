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
    className: "cursor-pointer relative w-full md:w-64",
    onClick: function onClick() {
      return window.open("portfolio/".concat(index, ".jpg"));
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "object-cover overflow-hidden",
      style: {
        width: "289px",
        height: "398px"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", _objectSpread({
        className: "w-full h-full object-cover rounded"
      }, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "absolute top-0 left-0 w-full h-full bg-black rounded opacity-10",
      style: {
        width: "289px",
        height: "398px"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
        lineNumber: 34,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          className: "text-center",
          children: "Take a look at how we solve challenges to meet project requirements that deliver a greater level of functionality compared to traditional websites."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "tw-container flex flex-col md:flex-row gap-20 flex-wrap",
      children: data.map(function (project, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProjectItem, {
          index: index + 1,
          src: "/portfolio/".concat(index + 1, ".jpg"),
          title: project
        }, "project-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this2);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUG9ydGZvbGlvL1Byb2plY3RzLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiUHJvamVjdEl0ZW0iLCJ0aXRsZSIsImluZGV4IiwicmVzdCIsIndpbmRvdyIsIm9wZW4iLCJ3aWR0aCIsImhlaWdodCIsIlByb2plY3RzIiwibWFwIiwicHJvamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNULGNBRFMsRUFFVCxXQUZTLEVBR1QsV0FIUyxFQUlULFNBSlMsRUFLVCxVQUxTLEVBTVQsZ0JBTlMsRUFPVCxVQVBTLEVBUVQsV0FSUyxDQUFiOztBQVdBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQStCO0FBQUEsTUFBNUJDLEtBQTRCLFFBQTVCQSxLQUE0QjtBQUFBLE1BQXJCQyxLQUFxQixRQUFyQkEsS0FBcUI7QUFBQSxNQUFYQyxJQUFXOztBQUMvQyxzQkFDSTtBQUNJLGFBQVMsRUFBQyx3Q0FEZDtBQUVJLFdBQU8sRUFBRTtBQUFBLGFBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxxQkFBeUJILEtBQXpCLFVBQU47QUFBQSxLQUZiO0FBQUEsNEJBSUk7QUFDSSxlQUFTLEVBQUMsOEJBRGQ7QUFFSSxXQUFLLEVBQUU7QUFBRUksYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGNBQU0sRUFBRTtBQUExQixPQUZYO0FBQUEsNkJBSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBd0RKLElBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFVSTtBQUNJLGVBQVMsRUFBQyxpRUFEZDtBQUVJLFdBQUssRUFBRTtBQUFFRyxhQUFLLEVBQUUsT0FBVDtBQUFrQkMsY0FBTSxFQUFFO0FBQTFCO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKLGVBY0k7QUFDSSxlQUFTLEVBQUMsbUtBRGQ7QUFFSSxXQUFLLEVBQUU7QUFBRUQsYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGNBQU0sRUFBRTtBQUExQixPQUZYO0FBQUEsNkJBSUk7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUEsa0JBQXlDTjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBeEJEOztLQUFNRCxXO0FBMEJTLFNBQVNRLFFBQVQsR0FBb0I7QUFBQTs7QUFDL0Isc0JBQ0k7QUFBUyxhQUFTLEVBQUMsYUFBbkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxpQ0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyxxQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJO0FBQUssZUFBUyxFQUFDLHlEQUFmO0FBQUEsZ0JBQ0tULElBQUksQ0FBQ1UsR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBVVIsS0FBVjtBQUFBLDRCQUNOLHFFQUFDLFdBQUQ7QUFFSSxlQUFLLEVBQUVBLEtBQUssR0FBRyxDQUZuQjtBQUdJLGFBQUcsdUJBQWdCQSxLQUFLLEdBQUcsQ0FBeEIsU0FIUDtBQUlJLGVBQUssRUFBRVE7QUFKWCw2QkFDb0JSLEtBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRE07QUFBQSxPQUFUO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIO01BeEJ1Qk0sUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNDhlNDZmMzk1NmI2NzIyZjMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIFwiQ2hhYXIgQWNoYWFyXCIsXHJcbiAgICBcIkVjb21tZXJjZVwiLFxyXG4gICAgXCJGdXJuaXR1cmVcIixcclxuICAgIFwiTWVkaWNhbFwiLFxyXG4gICAgXCJIb3NwaXRhbFwiLFxyXG4gICAgXCJEaWdpdGFsIEFnZW5jeVwiLFxyXG4gICAgXCJCdXNpbmVzc1wiLFxyXG4gICAgXCJGdXJuaXR1cmVcIixcclxuXTtcclxuXHJcbmNvbnN0IFByb2plY3RJdGVtID0gKHsgdGl0bGUsIGluZGV4LCAuLi5yZXN0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByZWxhdGl2ZSB3LWZ1bGwgbWQ6dy02NFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGBwb3J0Zm9saW8vJHtpbmRleH0uanBnYCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI4OXB4XCIsIGhlaWdodDogXCIzOThweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZFwiIHsuLi5yZXN0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2sgcm91bmRlZCBvcGFjaXR5LTEwXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI4OXB4XCIsIGhlaWdodDogXCIzOThweFwiIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLWJsYWNrIHJvdW5kZWQgb3BhY2l0eS0wIGhvdmVyOm9wYWNpdHktODAgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktZW5kIHB4LTZcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjg5cHhcIiwgaGVpZ2h0OiBcIjM5OHB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgcGItOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGJnLWdyYXktMTAwIG1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtNHhsIG1iLTRcIj5Qcm9qZWN0czwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGFrZSBhIGxvb2sgYXQgaG93IHdlIHNvbHZlIGNoYWxsZW5nZXMgdG8gbWVldCBwcm9qZWN0IHJlcXVpcmVtZW50cyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGl2ZXIgYSBncmVhdGVyIGxldmVsIG9mIGZ1bmN0aW9uYWxpdHkgY29tcGFyZWQgdG8gdHJhZGl0aW9uYWwgd2Vic2l0ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC0yMCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgcHJvamVjdC0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9wb3J0Zm9saW8vJHtpbmRleCArIDF9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9