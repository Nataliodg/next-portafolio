"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.js */ \"./components/Navbar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();\n        });\n        router.events.on(\"routeChangeError\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Portafolio\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                    lineNumber: 32,\n                    columnNumber: 4\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 31,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 34,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4 pt-1\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, _this),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-dark text-center more-style\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: \" \\xa9 Di Giacomo Natalio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                            lineNumber: 43,\n                            columnNumber: 8\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"ms-auto\",\n                            children: [\n                                \"2020 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                            lineNumber: 44,\n                            columnNumber: 8\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights Reserverd.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                            lineNumber: 45,\n                            columnNumber: 8\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Natalio\\\\Desktop\\\\Next-portafolio\\\\components\\\\Layout.js\",\n                lineNumber: 41,\n                columnNumber: 6\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNKO0FBQ0c7QUFDTTtBQUNKOzs7QUFFakMsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFBUSxRQUF1QixDQUFDO1FBQTlCQyxRQUFRLFNBQVJBLFFBQVEsa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBRyxJQUFJOztJQUV2QyxHQUFLLENBQUNDLE1BQU0sR0FBR0wsc0RBQVM7SUFFeEJELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZCxHQUFLLENBQUNPLGlCQUFpQixHQUFHLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7WUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1lBQ2ZOLHNEQUFlO1FBQ2pCLENBQUM7UUFFREksTUFBTSxDQUFDTSxNQUFNLENBQUNDLEVBQUUsQ0FBQyxDQUFrQixtQkFBRU4saUJBQWlCO1FBRXRERCxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLENBQXFCLHNCQUFFLFFBQVE7WUFBRlgsTUFBTSxDQUFOQSxxREFBYzs7UUFFNURJLE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBa0IsbUJBQUUsUUFBUTtZQUFGWCxNQUFNLENBQU5BLHFEQUFjOztRQUV6RCxNQUFNLENBQUMsUUFBUSxHQUFGLENBQUM7WUFDWkksTUFBTSxDQUFDTSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxDQUFrQixtQkFBRVIsaUJBQWlCO1FBQ3pELENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR04sTUFBTSw2RUFBQzs7d0ZBRUxSLGtEQUFJO3NHQUNIaUIsQ0FBSzs4QkFBQyxDQUFVOzs7Ozs7Ozs7Ozt3RkFFakJsQixrREFBTTs7Ozs7d0ZBQ0xtQixDQUFJO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUI7MEJBQ25DZCxRQUFROzs7Ozs7WUFJVkMsTUFBTSxnRkFDSEEsQ0FBTTtnQkFBQ2EsU0FBUyxFQUFDLENBQTBDO3NHQUMxREMsQ0FBRztvQkFBQ0QsU0FBUyxFQUFDLENBQWU7O29HQUM1QkUsQ0FBRTtzQ0FBQyxDQUEwQjs7Ozs7O29HQUM3QkMsQ0FBQzs0QkFBQ0gsU0FBUyxFQUFDLENBQVM7O2dDQUFDLENBQU87Z0NBQUMsR0FBRyxDQUFDSSxJQUFJLEdBQUdDLFdBQVc7Ozs7Ozs7b0dBQ3BERixDQUFDO3NDQUFDLENBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9CLENBQUM7R0E5Q0tsQixNQUFNOztRQUVJRixrREFBUzs7O0tBRm5CRSxNQUFNO0FBZ0RaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyLmpzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZX0pID0+IHtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codXJsKTtcclxuICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbiAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8PlxyXG5cdFx0PEhlYWQ+XHJcblx0XHRcdDx0aXRsZT5Qb3J0YWZvbGlvPC90aXRsZT5cclxuXHRcdDwvSGVhZD5cclxuXHRcdDxOYXZiYXIvPlxyXG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNCBwdC0xXCI+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9tYWluPlxyXG5cclxuXHRcdHtcclxuXHRcdFx0Zm9vdGVyICYmIChcclxuXHRcdFx0XHRcdDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWRhcmsgdGV4dC1jZW50ZXIgbW9yZS1zdHlsZVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDU+ICZjb3B5OyBEaSBHaWFjb21vIE5hdGFsaW88L2g1PlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1zLWF1dG9cIj4yMDIwIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PHA+QWxsIHJpZ2h0cyBSZXNlcnZlcmQuPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZm9vdGVyPlxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0PC8+XHJcblx0XHQpXHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiTmF2YmFyIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk5Qcm9ncmVzcyIsIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoNSIsInAiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});