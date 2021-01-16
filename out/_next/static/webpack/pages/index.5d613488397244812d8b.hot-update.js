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
var sponsors = [1, 2, 3, 4, 5];
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
      children: sponsors.map(function (sponsor, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SponsorLogo, {
          index: index + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, _this2);
      })
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BvbnNvcnMuanN4Il0sIm5hbWVzIjpbIlNwb25zb3JMb2dvIiwicHJvcHMiLCJpbmRleCIsInNwb25zb3JzIiwic2xpZGVyU2V0dGluZ3MiLCJhcnJvd3MiLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJTcG9uc29ycyIsIm1hcCIsInNwb25zb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEI7QUFBSyxPQUFHLHNCQUFlQSxLQUFLLENBQUNDLEtBQXJCLENBQVI7QUFBc0MsYUFBUyxFQUFDLGdCQUFoRDtBQUFpRSxPQUFHLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURnQjtBQUFBLENBQXBCOztLQUFNRixXO0FBSU4sSUFBTUcsUUFBUSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBakI7QUFFQSxJQUFNQyxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSxJQURXO0FBRW5CQyxNQUFJLEVBQUUsS0FGYTtBQUduQkMsY0FBWSxFQUFFLENBSEs7QUFJbkJDLGdCQUFjLEVBQUU7QUFKRyxDQUF2QjtBQU9lLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFDL0Isc0JBQ0k7QUFBUyxhQUFTLEVBQUMsb0JBQW5CO0FBQUEsMkJBQ0kscUVBQUMsaURBQUQsa0NBQWNMLGNBQWQ7QUFBQSxnQkFDS0QsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVVCxLQUFWO0FBQUEsNEJBQ1YscUVBQUMsV0FBRDtBQUFhLGVBQUssRUFBRUEsS0FBSyxHQUFHO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIO01BVnVCTyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkNjEzNDg4Mzk3MjQ0ODEyZDhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5cclxuY29uc3QgU3BvbnNvckxvZ28gPSAocHJvcHMpID0+IChcclxuICAgIDxpbWcgc3JjPXtgL3Nwb25zb3JzLyR7cHJvcHMuaW5kZXh9YH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBhbHQ9XCJTcG9uc29yXCIgLz5cclxuKTtcclxuXHJcbmNvbnN0IHNwb25zb3JzID0gWzEsIDIsIDMsIDQsIDVdO1xyXG5cclxuY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB7XHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BvbnNvcnMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInR3LWNvbnRhaW5lciBweS0xMlwiPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNsaWRlclNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgIHtzcG9uc29ycy5tYXAoKHNwb25zb3IsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNwb25zb3JMb2dvIGluZGV4PXtpbmRleCArIDF9IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=