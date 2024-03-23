"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-aria-link@2.0.15_react@18.2.0";
exports.ids = ["vendor-chunks/@nextui-org+use-aria-link@2.0.15_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-link@2.0.15_react@18.2.0/node_modules/@nextui-org/use-aria-link/dist/index.mjs":
/*!*********************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@nextui-org+use-aria-link@2.0.15_react@18.2.0/node_modules/@nextui-org/use-aria-link/dist/index.mjs ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAriaLink: () => (/* binding */ useAriaLink)\n/* harmony export */ });\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/../node_modules/.pnpm/@react-aria+utils@3.23.2_react@18.2.0/node_modules/@react-aria/utils/dist/import.mjs\");\n/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/focus */ \"(ssr)/../node_modules/.pnpm/@react-aria+focus@3.16.2_react@18.2.0/node_modules/@react-aria/focus/dist/import.mjs\");\n/* harmony import */ var _nextui_org_use_aria_press__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/use-aria-press */ \"(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-press@2.0.1_react@18.2.0/node_modules/@nextui-org/use-aria-press/dist/index.mjs\");\n// src/index.ts\n\n\n\nfunction useAriaLink(props, ref) {\n  let {\n    elementType = \"a\",\n    onPress,\n    onPressStart,\n    onPressEnd,\n    onClick: deprecatedOnClick,\n    isDisabled,\n    ...otherProps\n  } = props;\n  let linkProps = {};\n  if (elementType !== \"a\") {\n    linkProps = {\n      role: \"link\",\n      tabIndex: !isDisabled ? 0 : void 0\n    };\n  }\n  let { focusableProps } = (0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_0__.useFocusable)(props, ref);\n  let { pressProps, isPressed } = (0,_nextui_org_use_aria_press__WEBPACK_IMPORTED_MODULE_1__.usePress)({ onPress, onPressStart, onPressEnd, isDisabled, ref });\n  let domProps = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.filterDOMProps)(otherProps, { labelable: true, isLink: elementType === \"a\" });\n  let interactionHandlers = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(focusableProps, pressProps);\n  let router = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  return {\n    isPressed,\n    linkProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(domProps, {\n      ...interactionHandlers,\n      ...linkProps,\n      \"aria-disabled\": isDisabled || void 0,\n      \"aria-current\": props[\"aria-current\"],\n      onClick: (e) => {\n        var _a;\n        (_a = pressProps.onClick) == null ? void 0 : _a.call(pressProps, e);\n        if (deprecatedOnClick) {\n          deprecatedOnClick(e);\n        }\n        if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.shouldClientNavigate)(e.currentTarget, e)) {\n          e.preventDefault();\n          router.open(e.currentTarget, e);\n        }\n      }\n    })\n  };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BuZXh0dWktb3JnK3VzZS1hcmlhLWxpbmtAMi4wLjE1X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvdXNlLWFyaWEtbGluay9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDZ0c7QUFDL0M7QUFDSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlCQUFpQixFQUFFLCtEQUFZO0FBQ3ZDLFFBQVEsd0JBQXdCLEVBQUUsb0VBQVEsR0FBRyxvREFBb0Q7QUFDakcsaUJBQWlCLGlFQUFjLGVBQWUsOENBQThDO0FBQzVGLDRCQUE0Qiw2REFBVTtBQUN0QyxlQUFlLDREQUFTO0FBQ3hCO0FBQ0E7QUFDQSxlQUFlLDZEQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUlBQW1JLHVFQUFvQjtBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BuZXh0dWktb3JnK3VzZS1hcmlhLWxpbmtAMi4wLjE1X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQG5leHR1aS1vcmcvdXNlLWFyaWEtbGluay9kaXN0L2luZGV4Lm1qcz84MzY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgZmlsdGVyRE9NUHJvcHMsIG1lcmdlUHJvcHMsIHVzZVJvdXRlciwgc2hvdWxkQ2xpZW50TmF2aWdhdGUgfSBmcm9tIFwiQHJlYWN0LWFyaWEvdXRpbHNcIjtcbmltcG9ydCB7IHVzZUZvY3VzYWJsZSB9IGZyb20gXCJAcmVhY3QtYXJpYS9mb2N1c1wiO1xuaW1wb3J0IHsgdXNlUHJlc3MgfSBmcm9tIFwiQG5leHR1aS1vcmcvdXNlLWFyaWEtcHJlc3NcIjtcbmZ1bmN0aW9uIHVzZUFyaWFMaW5rKHByb3BzLCByZWYpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50VHlwZSA9IFwiYVwiLFxuICAgIG9uUHJlc3MsXG4gICAgb25QcmVzc1N0YXJ0LFxuICAgIG9uUHJlc3NFbmQsXG4gICAgb25DbGljazogZGVwcmVjYXRlZE9uQ2xpY2ssXG4gICAgaXNEaXNhYmxlZCxcbiAgICAuLi5vdGhlclByb3BzXG4gIH0gPSBwcm9wcztcbiAgbGV0IGxpbmtQcm9wcyA9IHt9O1xuICBpZiAoZWxlbWVudFR5cGUgIT09IFwiYVwiKSB7XG4gICAgbGlua1Byb3BzID0ge1xuICAgICAgcm9sZTogXCJsaW5rXCIsXG4gICAgICB0YWJJbmRleDogIWlzRGlzYWJsZWQgPyAwIDogdm9pZCAwXG4gICAgfTtcbiAgfVxuICBsZXQgeyBmb2N1c2FibGVQcm9wcyB9ID0gdXNlRm9jdXNhYmxlKHByb3BzLCByZWYpO1xuICBsZXQgeyBwcmVzc1Byb3BzLCBpc1ByZXNzZWQgfSA9IHVzZVByZXNzKHsgb25QcmVzcywgb25QcmVzc1N0YXJ0LCBvblByZXNzRW5kLCBpc0Rpc2FibGVkLCByZWYgfSk7XG4gIGxldCBkb21Qcm9wcyA9IGZpbHRlckRPTVByb3BzKG90aGVyUHJvcHMsIHsgbGFiZWxhYmxlOiB0cnVlLCBpc0xpbms6IGVsZW1lbnRUeXBlID09PSBcImFcIiB9KTtcbiAgbGV0IGludGVyYWN0aW9uSGFuZGxlcnMgPSBtZXJnZVByb3BzKGZvY3VzYWJsZVByb3BzLCBwcmVzc1Byb3BzKTtcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4ge1xuICAgIGlzUHJlc3NlZCxcbiAgICBsaW5rUHJvcHM6IG1lcmdlUHJvcHMoZG9tUHJvcHMsIHtcbiAgICAgIC4uLmludGVyYWN0aW9uSGFuZGxlcnMsXG4gICAgICAuLi5saW5rUHJvcHMsXG4gICAgICBcImFyaWEtZGlzYWJsZWRcIjogaXNEaXNhYmxlZCB8fCB2b2lkIDAsXG4gICAgICBcImFyaWEtY3VycmVudFwiOiBwcm9wc1tcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIG9uQ2xpY2s6IChlKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gcHJlc3NQcm9wcy5vbkNsaWNrKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChwcmVzc1Byb3BzLCBlKTtcbiAgICAgICAgaWYgKGRlcHJlY2F0ZWRPbkNsaWNrKSB7XG4gICAgICAgICAgZGVwcmVjYXRlZE9uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyb3V0ZXIuaXNOYXRpdmUgJiYgZS5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiYgZS5jdXJyZW50VGFyZ2V0LmhyZWYgJiYgIWUuaXNEZWZhdWx0UHJldmVudGVkKCkgJiYgc2hvdWxkQ2xpZW50TmF2aWdhdGUoZS5jdXJyZW50VGFyZ2V0LCBlKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByb3V0ZXIub3BlbihlLmN1cnJlbnRUYXJnZXQsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfTtcbn1cbmV4cG9ydCB7XG4gIHVzZUFyaWFMaW5rXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-link@2.0.15_react@18.2.0/node_modules/@nextui-org/use-aria-link/dist/index.mjs\n");

/***/ })

};
;