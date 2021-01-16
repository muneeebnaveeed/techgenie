webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Sponsors.jsx":
/*!*************************************!*\
  !*** ./src/components/Sponsors.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sponsors; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Carousel */ "./src/components/Carousel.jsx");



var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Sponsors.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var SponsorLogo = function SponsorLogo(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
    src: "/sponsors/".concat(props.index),
    className: "cursor-pointer",
    alt: "Sponsor"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = SponsorLogo;
var sliderSettings = {
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 5
};
function Sponsors() {
  var _this2 = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: "tw-container py-12",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, sliderSettings), {}, {
      children: new Array(5).map(function (sponsor, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SponsorLogo, {
          index: index + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this2);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
_c2 = Sponsors;

var _c, _c2;

$RefreshReg$(_c, "SponsorLogo");
$RefreshReg$(_c2, "Sponsors");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BvbnNvcnMuanN4Il0sIm5hbWVzIjpbIlNwb25zb3JMb2dvIiwicHJvcHMiLCJpbmRleCIsInNsaWRlclNldHRpbmdzIiwiYXJyb3dzIiwiZG90cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiU3BvbnNvcnMiLCJBcnJheSIsIm1hcCIsInNwb25zb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEI7QUFBSyxPQUFHLHNCQUFlQSxLQUFLLENBQUNDLEtBQXJCLENBQVI7QUFBc0MsYUFBUyxFQUFDLGdCQUFoRDtBQUFpRSxPQUFHLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURnQjtBQUFBLENBQXBCOztLQUFNRixXO0FBSU4sSUFBTUcsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUsSUFEVztBQUVuQkMsTUFBSSxFQUFFLEtBRmE7QUFHbkJDLGNBQVksRUFBRSxDQUhLO0FBSW5CQyxnQkFBYyxFQUFFO0FBSkcsQ0FBdkI7QUFPZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQy9CLHNCQUNJO0FBQVMsYUFBUyxFQUFDLG9CQUFuQjtBQUFBLDJCQUNJLHFFQUFDLGlEQUFELGtDQUFjTCxjQUFkO0FBQUEsZ0JBQ0ssSUFBSU0sS0FBSixDQUFVLENBQVYsRUFBYUMsR0FBYixDQUFpQixVQUFDQyxPQUFELEVBQVVULEtBQVY7QUFBQSw0QkFDZCxxRUFBQyxXQUFEO0FBQWEsZUFBSyxFQUFFQSxLQUFLLEdBQUc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEYztBQUFBLE9BQWpCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIO01BVnVCTSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBmOGU2YWQyNTE3ZGJjMjc5MjM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgU3BvbnNvckxvZ28gPSAocHJvcHMpID0+IChcclxuICAgIDxpbWcgc3JjPXtgL3Nwb25zb3JzLyR7cHJvcHMuaW5kZXh9YH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBhbHQ9XCJTcG9uc29yXCIgLz5cclxuKTtcclxuXHJcbmNvbnN0IHNsaWRlclNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwb25zb3JzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXIgcHktMTJcIj5cclxuICAgICAgICAgICAgPENhcm91c2VsIHsuLi5zbGlkZXJTZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICB7bmV3IEFycmF5KDUpLm1hcCgoc3BvbnNvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8U3BvbnNvckxvZ28gaW5kZXg9e2luZGV4ICsgMX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==