webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Skills.jsx":
/*!***********************************!*\
  !*** ./src/components/Skills.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Skills.jsx",
    _this = undefined;



var Skill = function Skill(_ref) {
  var children = _ref.children,
      heading = _ref.heading,
      icon = _ref.icon;
  var Icon = icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "flex flex-col gap-4 text-center",
    children: [Icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 22
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "font-semibold text-2xl text-pink-500",
      children: heading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "text-black",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c = Skill;
function Skills() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "tw-container py-8 pt-0 flex gap-8",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      heading: "CMS Website Design & Development",
      children: "CMS-based websites are time saving and cost effective. Get your website developed on WordPress, Magento, Shopify etc. and start right away!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      heading: "Custom Website Design\r\n",
      children: "If you are looking for a customized website solution then we can make some great designs for you fully customized."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      heading: "Ecommerce Development",
      children: "Selling online is HUGE these days. Get your websites and online products ready today and start making money."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Skill, {
      heading: "Landing Page Design & Development\r\n",
      children: "Get landing pages designed for you targeted campaigns today and start acquiring leads and converting them into customers."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
_c2 = Skills;

var _c, _c2;

$RefreshReg$(_c, "Skill");
$RefreshReg$(_c2, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzeCJdLCJuYW1lcyI6WyJTa2lsbCIsImNoaWxkcmVuIiwiaGVhZGluZyIsImljb24iLCJJY29uIiwiU2tpbGxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFpQztBQUFBLE1BQTlCQyxRQUE4QixRQUE5QkEsUUFBOEI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzNDLE1BQU1DLElBQUksR0FBR0QsSUFBYjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUEsZUFDS0MsSUFBSSxpQkFBSSxxRUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEYixlQUVJO0FBQUksZUFBUyxFQUFDLHNDQUFkO0FBQUEsZ0JBQXNERjtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFHSTtBQUFHLGVBQVMsRUFBQyxZQUFiO0FBQUEsZ0JBQTJCRDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFPSCxDQVREOztLQUFNRCxLO0FBV1MsU0FBU0ssTUFBVCxHQUFrQjtBQUM3QixzQkFDSTtBQUFTLGFBQVMsRUFBQyxtQ0FBbkI7QUFBQSw0QkFDSSxxRUFBQyxLQUFEO0FBQU8sYUFBTyxFQUFDLGtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSSxxRUFBQyxLQUFEO0FBQ0ksYUFBTyxFQUFDLDJCQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFZSSxxRUFBQyxLQUFEO0FBQU8sYUFBTyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkosZUFnQkkscUVBQUMsS0FBRDtBQUNJLGFBQU8sRUFBQyx1Q0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBCSDtNQTNCdUJBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGRhNzM0MmZhNTIzZjc4YjJiNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFNraWxsID0gKHsgY2hpbGRyZW4sIGhlYWRpbmcsIGljb24gfSkgPT4ge1xyXG4gICAgY29uc3QgSWNvbiA9IGljb247XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICB7SWNvbiAmJiA8SWNvbiAvPn1cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgdGV4dC1waW5rLTUwMFwiPntoZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidHctY29udGFpbmVyIHB5LTggcHQtMCBmbGV4IGdhcC04XCI+XHJcbiAgICAgICAgICAgIDxTa2lsbCBoZWFkaW5nPVwiQ01TIFdlYnNpdGUgRGVzaWduICYgRGV2ZWxvcG1lbnRcIj5cclxuICAgICAgICAgICAgICAgIENNUy1iYXNlZCB3ZWJzaXRlcyBhcmUgdGltZSBzYXZpbmcgYW5kIGNvc3QgZWZmZWN0aXZlLiBHZXQgeW91ciB3ZWJzaXRlIGRldmVsb3BlZCBvblxyXG4gICAgICAgICAgICAgICAgV29yZFByZXNzLCBNYWdlbnRvLCBTaG9waWZ5IGV0Yy4gYW5kIHN0YXJ0IHJpZ2h0IGF3YXkhXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZz1cIkN1c3RvbSBXZWJzaXRlIERlc2lnblxyXG5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJZiB5b3UgYXJlIGxvb2tpbmcgZm9yIGEgY3VzdG9taXplZCB3ZWJzaXRlIHNvbHV0aW9uIHRoZW4gd2UgY2FuIG1ha2Ugc29tZSBncmVhdFxyXG4gICAgICAgICAgICAgICAgZGVzaWducyBmb3IgeW91IGZ1bGx5IGN1c3RvbWl6ZWQuXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbCBoZWFkaW5nPVwiRWNvbW1lcmNlIERldmVsb3BtZW50XCI+XHJcbiAgICAgICAgICAgICAgICBTZWxsaW5nIG9ubGluZSBpcyBIVUdFIHRoZXNlIGRheXMuIEdldCB5b3VyIHdlYnNpdGVzIGFuZCBvbmxpbmUgcHJvZHVjdHMgcmVhZHkgdG9kYXlcclxuICAgICAgICAgICAgICAgIGFuZCBzdGFydCBtYWtpbmcgbW9uZXkuXHJcbiAgICAgICAgICAgIDwvU2tpbGw+XHJcbiAgICAgICAgICAgIDxTa2lsbFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZz1cIkxhbmRpbmcgUGFnZSBEZXNpZ24gJiBEZXZlbG9wbWVudFxyXG5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHZXQgbGFuZGluZyBwYWdlcyBkZXNpZ25lZCBmb3IgeW91IHRhcmdldGVkIGNhbXBhaWducyB0b2RheSBhbmQgc3RhcnQgYWNxdWlyaW5nXHJcbiAgICAgICAgICAgICAgICBsZWFkcyBhbmQgY29udmVydGluZyB0aGVtIGludG8gY3VzdG9tZXJzLlxyXG4gICAgICAgICAgICA8L1NraWxsPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==