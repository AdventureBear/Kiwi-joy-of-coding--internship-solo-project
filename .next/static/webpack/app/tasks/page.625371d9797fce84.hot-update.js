"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tasks/page",{

/***/ "(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx":
/*!*************************************************!*\
  !*** ./app/componants/FilterSelectDropDown.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst FilterSelectDropDown = (param)=>{\n    let { options, title, onChange } = param;\n    _s();\n    const [selectedValues, setSelectedValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleCheckboxChange = (value)=>{\n        // console.log(value);\n        // setSelectedValues(['low','medium'])\n        // console.log(selectedValues)\n        // onChange(selectedValues)\n        if (selectedValues === null || selectedValues === void 0 ? void 0 : selectedValues.includes(value)) {\n            setSelectedValues(selectedValues.filter((oldValue)=>oldValue !== value));\n        }\n        setSelectedValues((prevSelectedValues)=>{\n            if (prevSelectedValues === null || prevSelectedValues === void 0 ? void 0 : prevSelectedValues.includes(value)) {\n                return prevSelectedValues.filter((oldValue)=>oldValue !== value);\n            } else {\n                return [\n                    value\n                ];\n            }\n        });\n        console.log(selectedValues);\n        onChange(selectedValues);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Root, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Trigger, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"outline\",\n                    size: \"1\",\n                    className: \"h-8 border-dashed\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Popover.Content, {\n                width: \"360px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                    gap: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        flexGrow: \"1\",\n                        children: options.map((option)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Flex, {\n                                gap: \"2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {\n                                        checked: selectedValues.includes(option.value),\n                                        onCheckedChange: ()=>handleCheckboxChange(option.value),\n                                        \"aria-checked\": selectedValues.includes(option.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                        children: option.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, option.value.toString(), true, {\n                                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ki\\\\github-classroom\\\\Joy-of-Coding\\\\Ticket 7\\\\task_manager\\\\app\\\\componants\\\\FilterSelectDropDown.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterSelectDropDown, \"9Oa0tMM4+puBb6n/dMw216bsKv0=\");\n_c = FilterSelectDropDown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterSelectDropDown);\nvar _c;\n$RefreshReg$(_c, \"FilterSelectDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25hbnRzL0ZpbHRlclNlbGVjdERyb3BEb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQThFO0FBQ3RDO0FBV3hDLE1BQU1RLHVCQUF1QjtRQUFDLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQVM7O0lBQy9ELE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQ2xELEVBQUU7SUFHSixNQUFNTyx1QkFBdUIsQ0FBQ0M7UUFDNUIsc0JBQXNCO1FBQ3RCLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLElBQUlILDJCQUFBQSxxQ0FBQUEsZUFBZ0JJLFFBQVEsQ0FBQ0QsUUFBUTtZQUNuQ0Ysa0JBQWtCRCxlQUFlSyxNQUFNLENBQUMsQ0FBQ0MsV0FBYUEsYUFBYUg7UUFDckU7UUFDQUYsa0JBQWtCLENBQUNNO1lBQ2pCLElBQUlBLCtCQUFBQSx5Q0FBQUEsbUJBQW9CSCxRQUFRLENBQUNELFFBQVE7Z0JBQ3ZDLE9BQU9JLG1CQUFtQkYsTUFBTSxDQUFDLENBQUNDLFdBQWFBLGFBQWFIO1lBQzlELE9BQU87Z0JBQ0wsT0FBTztvQkFBQ0E7aUJBQU07WUFDaEI7UUFDRjtRQUNBSyxRQUFRQyxHQUFHLENBQUNUO1FBQ1pELFNBQVNDO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ1QsMERBQVk7OzBCQUNYLDhEQUFDQSw2REFBZTswQkFDZCw0RUFBQ0gsb0RBQU1BO29CQUFDd0IsU0FBUTtvQkFBVUMsTUFBSztvQkFBSUMsV0FBVTs4QkFDMUNoQjs7Ozs7Ozs7Ozs7MEJBSUwsOERBQUNQLDZEQUFlO2dCQUFDeUIsT0FBTTswQkFDckIsNEVBQUMxQixrREFBSUE7b0JBQUMyQixLQUFJOzhCQUNSLDRFQUFDNUIsaURBQUdBO3dCQUFDNkIsVUFBUztrQ0FDWHJCLFFBQVFzQixHQUFHLENBQUMsQ0FBQ0M7NEJBQ1oscUJBQ0UsOERBQUM5QixrREFBSUE7Z0NBQStCMkIsS0FBSzs7a0RBQ3ZDLDhEQUFDeEIsc0RBQVFBO3dDQUNQNEIsU0FBU3JCLGVBQWVJLFFBQVEsQ0FBQ2dCLE9BQU9qQixLQUFLO3dDQUM3Q21CLGlCQUFpQixJQUFNcEIscUJBQXFCa0IsT0FBT2pCLEtBQUs7d0NBQ3hEb0IsZ0JBQWN2QixlQUFlSSxRQUFRLENBQUNnQixPQUFPakIsS0FBSzs7Ozs7O2tEQUVwRCw4REFBQ1gsa0RBQUlBO2tEQUFFNEIsT0FBT0ksS0FBSzs7Ozs7OzsrQkFOVkosT0FBT2pCLEtBQUssQ0FBQ3NCLFFBQVE7Ozs7O3dCQVNwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBcERNN0I7S0FBQUE7QUFzRE4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uYW50cy9GaWx0ZXJTZWxlY3REcm9wRG93bi50c3g/N2JjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEJveCwgRmxleCwgUG9wb3ZlciwgVGV4dCwgQ2hlY2tib3ggfSBmcm9tIFwiQHJhZGl4LXVpL3RoZW1lc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBvcHRpb25zOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgfVtdO1xyXG4gIG9uQ2hhbmdlOiAoc2VsZWN0ZWRWYWx1ZXM6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBGaWx0ZXJTZWxlY3REcm9wRG93biA9ICh7IG9wdGlvbnMsIHRpdGxlLCBvbkNoYW5nZSB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFZhbHVlcywgc2V0U2VsZWN0ZWRWYWx1ZXNdID0gdXNlU3RhdGU8KHN0cmluZyB8IGJvb2xlYW4pW10+KFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9ICh2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgLy8gc2V0U2VsZWN0ZWRWYWx1ZXMoWydsb3cnLCdtZWRpdW0nXSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWVzKVxyXG4gICAgLy8gb25DaGFuZ2Uoc2VsZWN0ZWRWYWx1ZXMpXHJcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZXM/LmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICBzZXRTZWxlY3RlZFZhbHVlcyhzZWxlY3RlZFZhbHVlcy5maWx0ZXIoKG9sZFZhbHVlKSA9PiBvbGRWYWx1ZSAhPT0gdmFsdWUpKVxyXG4gICAgfSBcclxuICAgIHNldFNlbGVjdGVkVmFsdWVzKChwcmV2U2VsZWN0ZWRWYWx1ZXMpID0+IHtcclxuICAgICAgaWYgKHByZXZTZWxlY3RlZFZhbHVlcz8uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZTZWxlY3RlZFZhbHVlcy5maWx0ZXIoKG9sZFZhbHVlKSA9PiBvbGRWYWx1ZSAhPT0gdmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbdmFsdWVdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWVzKTtcclxuICAgIG9uQ2hhbmdlKHNlbGVjdGVkVmFsdWVzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFBvcG92ZXIuUm9vdD5cclxuICAgICAgPFBvcG92ZXIuVHJpZ2dlcj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cIjFcIiBjbGFzc05hbWU9XCJoLTggYm9yZGVyLWRhc2hlZFwiPlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L1BvcG92ZXIuVHJpZ2dlcj5cclxuXHJcbiAgICAgIDxQb3BvdmVyLkNvbnRlbnQgd2lkdGg9XCIzNjBweFwiPlxyXG4gICAgICAgIDxGbGV4IGdhcD1cIjNcIj5cclxuICAgICAgICAgIDxCb3ggZmxleEdyb3c9XCIxXCI+XHJcbiAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxGbGV4IGtleT17b3B0aW9uLnZhbHVlLnRvU3RyaW5nKCl9IGdhcD17XCIyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KCkgPT4gaGFuZGxlQ2hlY2tib3hDaGFuZ2Uob3B0aW9uLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e3NlbGVjdGVkVmFsdWVzLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0PntvcHRpb24ubGFiZWx9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L1BvcG92ZXIuQ29udGVudD5cclxuICAgIDwvUG9wb3Zlci5Sb290PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJTZWxlY3REcm9wRG93bjtcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkJveCIsIkZsZXgiLCJQb3BvdmVyIiwiVGV4dCIsIkNoZWNrYm94IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZpbHRlclNlbGVjdERyb3BEb3duIiwib3B0aW9ucyIsInRpdGxlIiwib25DaGFuZ2UiLCJzZWxlY3RlZFZhbHVlcyIsInNldFNlbGVjdGVkVmFsdWVzIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiZmlsdGVyIiwib2xkVmFsdWUiLCJwcmV2U2VsZWN0ZWRWYWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiUm9vdCIsIlRyaWdnZXIiLCJ2YXJpYW50Iiwic2l6ZSIsImNsYXNzTmFtZSIsIkNvbnRlbnQiLCJ3aWR0aCIsImdhcCIsImZsZXhHcm93IiwibWFwIiwib3B0aW9uIiwiY2hlY2tlZCIsIm9uQ2hlY2tlZENoYW5nZSIsImFyaWEtY2hlY2tlZCIsImxhYmVsIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/componants/FilterSelectDropDown.tsx\n"));

/***/ })

});