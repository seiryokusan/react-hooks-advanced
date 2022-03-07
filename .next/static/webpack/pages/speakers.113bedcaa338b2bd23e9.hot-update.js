self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.js */ "./src/Home.js");
/* harmony import */ var _Speakers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers.js */ "./src/Speakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "G:\\WorkWork\\react-tuto\\react-hooks-advanced\\src\\App.js",
    _this = undefined;




var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

var pageToShow = function pageToShow(pageName) {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home_js__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 35
  }, _this);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 39
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found!"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, _this);
};

var configValue = {
  showSpeakerSpeakingDays: true,
  showSignMeUp: true
};

var App = function App(_ref) {
  var pageName = _ref.pageName;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: pageToShow(pageName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5qcyJdLCJuYW1lcyI6WyJDb25maWdDb250ZXh0IiwiUmVhY3QiLCJwYWdlVG9TaG93IiwicGFnZU5hbWUiLCJjb25maWdWYWx1ZSIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwic2hvd1NpZ25NZVVwIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxnQkFBR0MsMERBQUEsRUFBdEI7O0FBRVAsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLE1BQUlBLFFBQVEsS0FBSyxNQUFqQixFQUF5QixvQkFBTyw4REFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDekIsTUFBSUEsUUFBUSxLQUFLLFVBQWpCLEVBQTZCLG9CQUFPLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUM3QixzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNQyxXQUFXLEdBQUc7QUFDbEJDLHlCQUF1QixFQUFFLElBRFA7QUFFbEJDLGNBQVksRUFBRTtBQUZJLENBQXBCOztBQUtBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQWtCO0FBQUEsTUFBZkosUUFBZSxRQUFmQSxRQUFlO0FBQzVCLHNCQUNFLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRUMsV0FBL0I7QUFBQSwyQkFDRTtBQUFBLGdCQUFNRixVQUFVLENBQUNDLFFBQUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O0tBQU1JLEc7QUFRTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy4xMTNiZWRjYWEzMzhiMmJkMjNlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lLmpzJztcclxuaW1wb3J0IFNwZWFrZXJzIGZyb20gJy4vU3BlYWtlcnMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBwYWdlVG9TaG93ID0gKHBhZ2VOYW1lKSA9PiB7XHJcbiAgaWYgKHBhZ2VOYW1lID09PSAnSG9tZScpIHJldHVybiA8SG9tZT48L0hvbWU+O1xyXG4gIGlmIChwYWdlTmFtZSA9PT0gJ1NwZWFrZXJzJykgcmV0dXJuIDxTcGVha2Vycz48L1NwZWFrZXJzPjtcclxuICByZXR1cm4gPGRpdj5Ob3QgRm91bmQhPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlnVmFsdWUgPSB7XHJcbiAgc2hvd1NwZWFrZXJTcGVha2luZ0RheXM6IHRydWUsXHJcbiAgc2hvd1NpZ25NZVVwOiB0cnVlLFxyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29uZmlnQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29uZmlnVmFsdWV9PlxyXG4gICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cclxuICAgIDwvQ29uZmlnQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9