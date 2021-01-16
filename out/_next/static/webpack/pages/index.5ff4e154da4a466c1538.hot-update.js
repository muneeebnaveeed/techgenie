webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ContactForm.jsx":
/*!****************************************!*\
  !*** ./src/components/ContactForm.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\ContactForm.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var FormInput = function FormInput(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
    className: "transition-all duration-300 border border-opacity-50 focus:border-pink-500 flex-grow p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
    type: props.type || "text"
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = FormInput;
function ContactForm() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "w-full flex flex-col gap-4 mb-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Get An Instant Quote"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full flex flex-col md:flex-row gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          placeholder: "Your Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          placeholder: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-full flex flex-col md:flex-row gap-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          type: "number",
          placeholder: "Phone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FormInput, {
          placeholder: "Subject"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        style: {
          height: "360px",
          maxHeight: "360px"
        },
        className: "transition-all border border-opacity-50 focus:border-pink-500 duration-300 p-4 rounded-md bg-gray-100 focus:bg-white outline-none placeholder-gray-400 text-gray-800",
        type: "text",
        placeholder: "Body"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "tw-button-secondary w-full py-4 focus:outline-white",
      children: "Send Message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}
_c2 = ContactForm;

var _c, _c2;

$RefreshReg$(_c, "FormInput");
$RefreshReg$(_c2, "ContactForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdEZvcm0uanN4Il0sIm5hbWVzIjpbIkZvcm1JbnB1dCIsInByb3BzIiwidHlwZSIsIkNvbnRhY3RGb3JtIiwiaGVpZ2h0IiwibWF4SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLHNCQUNkO0FBQ0ksYUFBUyxFQUFDLGdMQURkO0FBRUksUUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQU4sSUFBYztBQUZ4QixLQUdRRCxLQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWxCOztLQUFNRCxTO0FBUVMsU0FBU0csV0FBVCxHQUF1QjtBQUNsQyxzQkFDSTtBQUFBLDRCQUNJO0FBQU0sZUFBUyxFQUFDLGlDQUFoQjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsd0NBQWY7QUFBQSxnQ0FDSSxxRUFBQyxTQUFEO0FBQVcscUJBQVcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLHFCQUFXLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQU1JO0FBQUssaUJBQVMsRUFBQyx3Q0FBZjtBQUFBLGdDQUNJLHFFQUFDLFNBQUQ7QUFBVyxjQUFJLEVBQUMsUUFBaEI7QUFBeUIscUJBQVcsRUFBQztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsU0FBRDtBQUFXLHFCQUFXLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQVVJO0FBQ0ksYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsT0FBVjtBQUFtQkMsbUJBQVMsRUFBRTtBQUE5QixTQURYO0FBRUksaUJBQVMsRUFBQyxzS0FGZDtBQUdJLFlBQUksRUFBQyxNQUhUO0FBSUksbUJBQVcsRUFBQztBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFrQkk7QUFBUSxlQUFTLEVBQUMscURBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKO0FBQUEsa0JBREo7QUF3Qkg7TUF6QnVCRixXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmZjRlMTU0ZGE0YTQ2NmMxNTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGb3JtSW5wdXQgPSAocHJvcHMpID0+IChcclxuICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBib3JkZXIgYm9yZGVyLW9wYWNpdHktNTAgZm9jdXM6Ym9yZGVyLXBpbmstNTAwIGZsZXgtZ3JvdyBwLTQgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgdHlwZT17cHJvcHMudHlwZSB8fCBcInRleHRcIn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGdhcC00IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5HZXQgQW4gSW5zdGFudCBRdW90ZTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQaG9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JbnB1dCBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMzYwcHhcIiwgbWF4SGVpZ2h0OiBcIjM2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBib3JkZXIgYm9yZGVyLW9wYWNpdHktNTAgZm9jdXM6Ym9yZGVyLXBpbmstNTAwIGR1cmF0aW9uLTMwMCBwLTQgcm91bmRlZC1tZCBiZy1ncmF5LTEwMCBmb2N1czpiZy13aGl0ZSBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXItZ3JheS00MDAgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQm9keVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidHctYnV0dG9uLXNlY29uZGFyeSB3LWZ1bGwgcHktNCBmb2N1czpvdXRsaW5lLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=