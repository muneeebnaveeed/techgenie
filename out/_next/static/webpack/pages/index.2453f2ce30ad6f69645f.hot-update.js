webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Carousel.jsx":
/*!*************************************!*\
  !*** ./src/components/Carousel.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");



var _jsxFileName = "C:\\Users\\MuneebNaveed\\Desktop\\Development\\IRFAN\\techgenie\\src\\components\\Carousel.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var PaginationIcon = function PaginationIcon(_ref) {
  var icon = _ref.icon,
      position = _ref.position,
      onClick = _ref.onClick;
  var translation = position === "left" ? "-left-6" : "right-2";
  var Icon = icon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Icon, {
    onClick: onClick,
    className: "z-10 absolute top-1/2 block text-6xl md:text-4xl text-indigo-500 transition-all cursor-pointer hover:text-black focus:outline-black ".concat(translation)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};

_c = PaginationIcon;
function Carousel(props) {
  _s();

  var _this2 = this;

  var sliderSettings = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var _props$arrows, _props$dots, _props$slidesToShow, _props$slidesToScroll;

    return {
      arrows: (_props$arrows = props.arrows) !== null && _props$arrows !== void 0 ? _props$arrows : true,
      dots: (_props$dots = props.dots) !== null && _props$dots !== void 0 ? _props$dots : true,
      infinite: true,
      speed: 500,
      slidesToShow: (_props$slidesToShow = props.slidesToShow) !== null && _props$slidesToShow !== void 0 ? _props$slidesToShow : 4,
      slidesToScroll: (_props$slidesToScroll = props.slidesToScroll) !== null && _props$slidesToScroll !== void 0 ? _props$slidesToScroll : 4,
      customPaging: function customPaging() {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaDotCircle"], {
          className: "text-sm text-gray-200 cursor-pointer hover:opacity-50 transition-all"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this2);
      },
      appendDots: function appendDots(dots) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          style: _objectSpread({
            bottom: "-50px"
          }, props === null || props === void 0 ? void 0 : props.dotsStyle),
          children: [dots, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 35
        }, _this2);
      },
      prevArrow: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PaginationIcon, {
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillLeftCircle"],
        position: "left"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 24
      }, _this2),
      nextArrow: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PaginationIcon, {
        icon: react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillRightCircle"],
        position: "right"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 24
      }, _this2),
      responsive: props.responsive || [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, sliderSettings), {}, {
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 12
  }, this);
}

_s(Carousel, "UWMiboXPCqHiKeCV3fNCE98LVPs=");

_c2 = Carousel;

var _c, _c2;

$RefreshReg$(_c, "PaginationIcon");
$RefreshReg$(_c2, "Carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4Il0sIm5hbWVzIjpbIlBhZ2luYXRpb25JY29uIiwiaWNvbiIsInBvc2l0aW9uIiwib25DbGljayIsInRyYW5zbGF0aW9uIiwiSWNvbiIsIkNhcm91c2VsIiwicHJvcHMiLCJzbGlkZXJTZXR0aW5ncyIsInVzZU1lbW8iLCJhcnJvd3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiY3VzdG9tUGFnaW5nIiwiYXBwZW5kRG90cyIsImJvdHRvbSIsImRvdHNTdHlsZSIsInByZXZBcnJvdyIsIkFpRmlsbExlZnRDaXJjbGUiLCJuZXh0QXJyb3ciLCJBaUZpbGxSaWdodENpcmNsZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWlDO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDcEQsTUFBTUMsV0FBVyxHQUFHRixRQUFRLEtBQUssTUFBYixHQUFzQixTQUF0QixHQUFrQyxTQUF0RDtBQUNBLE1BQU1HLElBQUksR0FBR0osSUFBYjtBQUNBLHNCQUNJLHFFQUFDLElBQUQ7QUFDSSxXQUFPLEVBQUVFLE9BRGI7QUFFSSxhQUFTLGdKQUF5SUMsV0FBekk7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQVREOztLQUFNSixjO0FBV1MsU0FBU00sUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQTs7QUFDcEMsTUFBTUMsY0FBYyxHQUFHQyxxREFBTyxDQUMxQjtBQUFBOztBQUFBLFdBQU87QUFDSEMsWUFBTSxtQkFBRUgsS0FBSyxDQUFDRyxNQUFSLHlEQUFrQixJQURyQjtBQUVIQyxVQUFJLGlCQUFFSixLQUFLLENBQUNJLElBQVIscURBQWdCLElBRmpCO0FBR0hDLGNBQVEsRUFBRSxJQUhQO0FBSUhDLFdBQUssRUFBRSxHQUpKO0FBS0hDLGtCQUFZLHlCQUFFUCxLQUFLLENBQUNPLFlBQVIscUVBQXdCLENBTGpDO0FBTUhDLG9CQUFjLDJCQUFFUixLQUFLLENBQUNRLGNBQVIseUVBQTBCLENBTnJDO0FBT0hDLGtCQUFZLEVBQUU7QUFBQSw0QkFDVixxRUFBQywwREFBRDtBQUNJLG1CQUFTO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVTtBQUFBLE9BUFg7QUFZSEMsZ0JBQVUsRUFBRSxvQkFBQ04sSUFBRDtBQUFBLDRCQUFVO0FBQUksZUFBSztBQUFJTyxrQkFBTSxFQUFFO0FBQVosYUFBd0JYLEtBQXhCLGFBQXdCQSxLQUF4Qix1QkFBd0JBLEtBQUssQ0FBRVksU0FBL0IsQ0FBVDtBQUFBLHFCQUFzRFIsSUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFWO0FBQUEsT0FaVDtBQWFIUyxlQUFTLGVBQUUscUVBQUMsY0FBRDtBQUFnQixZQUFJLEVBQUVDLCtEQUF0QjtBQUF3QyxnQkFBUSxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYlI7QUFjSEMsZUFBUyxlQUFFLHFFQUFDLGNBQUQ7QUFBZ0IsWUFBSSxFQUFFQyxnRUFBdEI7QUFBeUMsZ0JBQVEsRUFBQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRSO0FBZUhDLGdCQUFVLEVBQUVqQixLQUFLLENBQUNpQixVQUFOLElBQW9CLENBQzVCO0FBQ0lDLGtCQUFVLEVBQUUsSUFEaEI7QUFFSUMsZ0JBQVEsRUFBRTtBQUNOWixzQkFBWSxFQUFFLENBRFI7QUFFTkMsd0JBQWMsRUFBRTtBQUZWO0FBRmQsT0FENEIsRUFRNUI7QUFDSVUsa0JBQVUsRUFBRSxHQURoQjtBQUVJQyxnQkFBUSxFQUFFO0FBQ05aLHNCQUFZLEVBQUUsQ0FEUjtBQUVOQyx3QkFBYyxFQUFFO0FBRlY7QUFGZCxPQVI0QjtBQWY3QixLQUFQO0FBQUEsR0FEMEIsRUFpQzFCLEVBakMwQixDQUE5QjtBQW9DQSxzQkFBTyxxRUFBQyxrREFBRCxrQ0FBWVAsY0FBWjtBQUFBLGNBQTZCRCxLQUFLLENBQUNvQjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7R0F0Q3VCckIsUTs7TUFBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNDUzZjJjZTMwYWQ2ZjY5NjQ1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBaUZpbGxMZWZ0Q2lyY2xlLCBBaUZpbGxSaWdodENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyBGYURvdENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3QgUGFnaW5hdGlvbkljb24gPSAoeyBpY29uLCBwb3NpdGlvbiwgb25DbGljayB9KSA9PiB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiLWxlZnQtNlwiIDogXCJyaWdodC0yXCI7XHJcbiAgICBjb25zdCBJY29uID0gaWNvbjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgei0xMCBhYnNvbHV0ZSB0b3AtMS8yIGJsb2NrIHRleHQtNnhsIG1kOnRleHQtNHhsIHRleHQtaW5kaWdvLTUwMCB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtYmxhY2sgJHt0cmFuc2xhdGlvbn1gfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHMpIHtcclxuICAgIGNvbnN0IHNsaWRlclNldHRpbmdzID0gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiAoe1xyXG4gICAgICAgICAgICBhcnJvd3M6IHByb3BzLmFycm93cyA/PyB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBwcm9wcy5kb3RzID8/IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHByb3BzLnNsaWRlc1RvU2hvdyA/PyA0LFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogcHJvcHMuc2xpZGVzVG9TY3JvbGwgPz8gNCxcclxuICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiAoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmFEb3RDaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIHRleHQtZ3JheS0yMDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS01MCB0cmFuc2l0aW9uLWFsbGB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBhcHBlbmREb3RzOiAoZG90cykgPT4gPHVsIHN0eWxlPXt7IGJvdHRvbTogXCItNTBweFwiLCAuLi5wcm9wcz8uZG90c1N0eWxlIH19Pntkb3RzfSA8L3VsPixcclxuICAgICAgICAgICAgcHJldkFycm93OiA8UGFnaW5hdGlvbkljb24gaWNvbj17QWlGaWxsTGVmdENpcmNsZX0gcG9zaXRpb249XCJsZWZ0XCIgLz4sXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogPFBhZ2luYXRpb25JY29uIGljb249e0FpRmlsbFJpZ2h0Q2lyY2xlfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz4sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHByb3BzLnJlc3BvbnNpdmUgfHwgW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBbXVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gPFNsaWRlciB7Li4uc2xpZGVyU2V0dGluZ3N9Pntwcm9wcy5jaGlsZHJlbn08L1NsaWRlcj47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==