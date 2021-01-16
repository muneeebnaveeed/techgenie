webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Packages.jsx":
/*!*************************************!*\
  !*** ./src/components/Packages.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Packages; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");



var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Packages.jsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Package = function Package(_ref) {
  var name = _ref.name,
      price = _ref.price,
      features = _ref.features;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "bg-white flex-1 py-6 text-left rounded",
    style: {
      width: "270px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "text-black font-semibold text-2xl mb-6 px-12",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "text-black font-bold py-6 px-12 text-4xl border-dashed border-t border-b border-gray-300 mb-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("sup", {
        className: "font-sans text-gray-300 mr-2",
        children: "$"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, _this), price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
      className: "px-12 flex flex-col gap-2 overflow-y-scroll",
      style: {
        maxHeight: "340px"
      },
      children: features.map(function (feature, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillCheckCircle"], {
            className: "text-indigo-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "",
            children: feature
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, _this)]
        }, "feature-".concat(index), true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "px-12 pt-6",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        className: "w-full tw-button-secondary",
        children: "Avail Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Package;
function Packages(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", _objectSpread(_objectSpread({
    className: "py-8 text-center bg-gray-100"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "tw-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        className: "text-black text-4xl font-bold mb-2",
        children: "Packages"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "mb-4",
        children: "We've come up with various packages to meet the specific needs of all businesses out there. Our packages are for the following services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "flex justify-center flex-wrap gap-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Package, {
          name: "Startup",
          price: "249.99",
          features: ["5 Stock Photos", "5 Page Website", "3 Banner Design", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Package, {
          name: "Professional",
          price: "599.99",
          features: ["10 Unique Pages Website", "CMS/Admin Panel Support", "8 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee", "Mobile Responsive Will Be Additional $99"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Package, {
          name: "Elite",
          price: "999.99",
          features: ["Upto 15 Unique Pages Website", "Conceptual And Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "CMS/Admin Panel Support", "5 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Package, {
          name: "Silver",
          price: "1599.99",
          features: ["Upto 15 Unique Pages Website", "Conceptual And Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)", "Custom Forms", "Lead Capturing Forms (Optional)", "Newsletter Subscription (Optional)", "Newsfeed Integration", "Social Media Integration", "Search Engine Submission", "CMS/Admin Panel Support", "5 Stock Photos", "5 Banner Designs", "1 jQuery Slider Banner", "Free Google Friendly Sitemap", "Complete W3C Certified HTML", "48 To 72 Hours TAT", "Facebook Page Design", "Twitter Page Design", "YouTube Page Design", "Complete Deployment", "100% Satisfaction Guarantee", "100% Unique Design Guarantee", "100% Money Back Guarantee"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}
_c2 = Packages;

var _c, _c2;

$RefreshReg$(_c, "Package");
$RefreshReg$(_c2, "Packages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFja2FnZXMuanN4Il0sIm5hbWVzIjpbIlBhY2thZ2UiLCJuYW1lIiwicHJpY2UiLCJmZWF0dXJlcyIsIndpZHRoIiwibWF4SGVpZ2h0IiwibWFwIiwiZmVhdHVyZSIsImluZGV4IiwiUGFja2FnZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxNQUFnQkMsUUFBaEIsUUFBZ0JBLFFBQWhCO0FBQUEsc0JBQ1o7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBd0QsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQS9EO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsOENBQWQ7QUFBQSxnQkFBOERIO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUksZUFBUyxFQUFDLCtGQUFkO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0MsS0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQU1JO0FBQUksZUFBUyxFQUFDLDZDQUFkO0FBQTRELFdBQUssRUFBRTtBQUFFRyxpQkFBUyxFQUFFO0FBQWIsT0FBbkU7QUFBQSxnQkFDS0YsUUFBUSxDQUFDRyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsNEJBQ1Y7QUFBSSxtQkFBUyxFQUFDLHlCQUFkO0FBQUEsa0NBQ0kscUVBQUMsZ0VBQUQ7QUFBbUIscUJBQVMsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBRyxxQkFBUyxFQUFDLEVBQWI7QUFBQSxzQkFB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LEVBd0JOLDhCQXhCTSxFQXlCTiwyQkF6Qk07QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpSEg7TUFsSHVCRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyMzNlZTJhZDAyNTRkZGFhMDJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFpRmlsbENoZWNrQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5jb25zdCBQYWNrYWdlID0gKHsgbmFtZSwgcHJpY2UsIGZlYXR1cmVzIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleC0xIHB5LTYgdGV4dC1sZWZ0IHJvdW5kZWRcIiBzdHlsZT17eyB3aWR0aDogXCIyNzBweFwiIH19PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgbWItNiBweC0xMlwiPntuYW1lfTwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgZm9udC1ib2xkIHB5LTYgcHgtMTIgdGV4dC00eGwgYm9yZGVyLWRhc2hlZCBib3JkZXItdCBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgbWItNlwiPlxyXG4gICAgICAgICAgICA8c3VwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWdyYXktMzAwIG1yLTJcIj4kPC9zdXA+XHJcbiAgICAgICAgICAgIHtwcmljZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJweC0xMiBmbGV4IGZsZXgtY29sIGdhcC0yIG92ZXJmbG93LXktc2Nyb2xsXCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjM0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIiBrZXk9e2BmZWF0dXJlLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpRmlsbENoZWNrQ2lyY2xlIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e2ZlYXR1cmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEyIHB0LTZcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgdHctYnV0dG9uLXNlY29uZGFyeVwiPkF2YWlsIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlcyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04IHRleHQtY2VudGVyIGJnLWdyYXktMTAwXCIgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHRleHQtNHhsIGZvbnQtYm9sZCBtYi0yXCI+UGFja2FnZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlJ3ZlIGNvbWUgdXAgd2l0aCB2YXJpb3VzIHBhY2thZ2VzIHRvIG1lZXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIGFsbCBidXNpbmVzc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0IHRoZXJlLiBPdXIgcGFja2FnZXMgYXJlIGZvciB0aGUgZm9sbG93aW5nIHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhY2thZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlN0YXJ0dXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT1cIjI0OS45OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgU3RvY2sgUGhvdG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgUGFnZSBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjMgQmFubmVyIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxIGpRdWVyeSBTbGlkZXIgQmFubmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZyZWUgR29vZ2xlIEZyaWVuZGx5IFNpdGVtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgVzNDIENlcnRpZmllZCBIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjQ4IFRvIDcyIEhvdXJzIFRBVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWNlYm9vayBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUd2l0dGVyIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdVR1YmUgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYWNrYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJQcm9mZXNzaW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT1cIjU5OS45OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwIFVuaXF1ZSBQYWdlcyBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNNUy9BZG1pbiBQYW5lbCBTdXBwb3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjggU3RvY2sgUGhvdG9zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjUgQmFubmVyIERlc2lnbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMSBqUXVlcnkgU2xpZGVyIEJhbm5lclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmVlIEdvb2dsZSBGcmllbmRseSBTaXRlbWFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIFczQyBDZXJ0aWZpZWQgSFRNTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI0OCBUbyA3MiBIb3VycyBUQVRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFjZWJvb2sgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHdpdHRlciBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VUdWJlIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbXBsZXRlIERlcGxveW1lbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBTYXRpc2ZhY3Rpb24gR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgVW5pcXVlIERlc2lnbiBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBNb25leSBCYWNrIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNb2JpbGUgUmVzcG9uc2l2ZSBXaWxsIEJlIEFkZGl0aW9uYWwgJDk5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiRWxpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT1cIjk5OS45OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVwdG8gMTUgVW5pcXVlIFBhZ2VzIFdlYnNpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uY2VwdHVhbCBBbmQgRHluYW1pYyBXZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vYmlsZSBSZXNwb25zaXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9ubGluZSBSZXNlcnZhdGlvbi9BcHBvaW50bWVudCBUb29sIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFBheW1lbnQgSW50ZWdyYXRpb24gKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXN0b20gRm9ybXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTGVhZCBDYXB0dXJpbmcgRm9ybXMgKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOZXdzbGV0dGVyIFN1YnNjcmlwdGlvbiAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5ld3NmZWVkIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvY2lhbCBNZWRpYSBJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZWFyY2ggRW5naW5lIFN1Ym1pc3Npb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ01TL0FkbWluIFBhbmVsIFN1cHBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNSBTdG9jayBQaG90b3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNSBCYW5uZXIgRGVzaWduc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxIGpRdWVyeSBTbGlkZXIgQmFubmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZyZWUgR29vZ2xlIEZyaWVuZGx5IFNpdGVtYXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgVzNDIENlcnRpZmllZCBIVE1MXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjQ4IFRvIDcyIEhvdXJzIFRBVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWNlYm9vayBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUd2l0dGVyIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIllvdVR1YmUgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGxldGUgRGVwbG95bWVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIFNhdGlzZmFjdGlvbiBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwJSBVbmlxdWUgRGVzaWduIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIE1vbmV5IEJhY2sgR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFja2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU2lsdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9XCIxNTk5Ljk5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVXB0byAxNSBVbmlxdWUgUGFnZXMgV2Vic2l0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb25jZXB0dWFsIEFuZCBEeW5hbWljIFdlYnNpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9iaWxlIFJlc3BvbnNpdmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT25saW5lIFJlc2VydmF0aW9uL0FwcG9pbnRtZW50IFRvb2wgKE9wdGlvbmFsKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPbmxpbmUgUGF5bWVudCBJbnRlZ3JhdGlvbiAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkN1c3RvbSBGb3Jtc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMZWFkIENhcHR1cmluZyBGb3JtcyAoT3B0aW9uYWwpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5ld3NsZXR0ZXIgU3Vic2NyaXB0aW9uIChPcHRpb25hbClcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTmV3c2ZlZWQgSW50ZWdyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU29jaWFsIE1lZGlhIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlYXJjaCBFbmdpbmUgU3VibWlzc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDTVMvQWRtaW4gUGFuZWwgU3VwcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IFN0b2NrIFBob3Rvc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI1IEJhbm5lciBEZXNpZ25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEgalF1ZXJ5IFNsaWRlciBCYW5uZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJlZSBHb29nbGUgRnJpZW5kbHkgU2l0ZW1hcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZSBXM0MgQ2VydGlmaWVkIEhUTUxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiNDggVG8gNzIgSG91cnMgVEFUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZhY2Vib29rIFBhZ2UgRGVzaWduXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlR3aXR0ZXIgUGFnZSBEZXNpZ25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91VHViZSBQYWdlIERlc2lnblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZSBEZXBsb3ltZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgU2F0aXNmYWN0aW9uIEd1YXJhbnRlZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMDAlIFVuaXF1ZSBEZXNpZ24gR3VhcmFudGVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjEwMCUgTW9uZXkgQmFjayBHdWFyYW50ZWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==