"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0";
exports.ids = ["vendor-chunks/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-toggle-button/dist/index.mjs":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-toggle-button/dist/index.mjs ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAriaToggleButton: () => (/* binding */ useAriaToggleButton)\n/* harmony export */ });\n/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ \"(ssr)/../node_modules/.pnpm/@react-aria+utils@3.23.2_react@18.2.0/node_modules/@react-aria/utils/dist/import.mjs\");\n/* harmony import */ var _nextui_org_use_aria_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nextui-org/use-aria-button */ \"(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-button/dist/index.mjs\");\n// src/index.ts\n\n\n\nfunction useAriaToggleButton(props, state, ref) {\n  const { isSelected } = state;\n  const { isPressed, buttonProps } = (0,_nextui_org_use_aria_button__WEBPACK_IMPORTED_MODULE_0__.useAriaButton)(\n    {\n      ...props,\n      onPress: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.chain)(state.toggle, props.onPress)\n    },\n    ref\n  );\n  return {\n    isPressed,\n    buttonProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(buttonProps, {\n      \"aria-pressed\": isSelected\n    })\n  };\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BuZXh0dWktb3JnK3VzZS1hcmlhLXRvZ2dsZS1idXR0b25AMi4wLjZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AbmV4dHVpLW9yZy91c2UtYXJpYS10b2dnbGUtYnV0dG9uL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQzBDO0FBQ0s7QUFDYTtBQUM1RDtBQUNBLFVBQVUsYUFBYTtBQUN2QixVQUFVLHlCQUF5QixFQUFFLDBFQUFhO0FBQ2xEO0FBQ0E7QUFDQSxlQUFlLHdEQUFLO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBVTtBQUMzQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBR0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0BuZXh0dWktb3JnK3VzZS1hcmlhLXRvZ2dsZS1idXR0b25AMi4wLjZfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AbmV4dHVpLW9yZy91c2UtYXJpYS10b2dnbGUtYnV0dG9uL2Rpc3QvaW5kZXgubWpzP2NlY2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG5pbXBvcnQgeyBjaGFpbiB9IGZyb20gXCJAcmVhY3QtYXJpYS91dGlsc1wiO1xuaW1wb3J0IHsgbWVyZ2VQcm9wcyB9IGZyb20gXCJAcmVhY3QtYXJpYS91dGlsc1wiO1xuaW1wb3J0IHsgdXNlQXJpYUJ1dHRvbiB9IGZyb20gXCJAbmV4dHVpLW9yZy91c2UtYXJpYS1idXR0b25cIjtcbmZ1bmN0aW9uIHVzZUFyaWFUb2dnbGVCdXR0b24ocHJvcHMsIHN0YXRlLCByZWYpIHtcbiAgY29uc3QgeyBpc1NlbGVjdGVkIH0gPSBzdGF0ZTtcbiAgY29uc3QgeyBpc1ByZXNzZWQsIGJ1dHRvblByb3BzIH0gPSB1c2VBcmlhQnV0dG9uKFxuICAgIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgb25QcmVzczogY2hhaW4oc3RhdGUudG9nZ2xlLCBwcm9wcy5vblByZXNzKVxuICAgIH0sXG4gICAgcmVmXG4gICk7XG4gIHJldHVybiB7XG4gICAgaXNQcmVzc2VkLFxuICAgIGJ1dHRvblByb3BzOiBtZXJnZVByb3BzKGJ1dHRvblByb3BzLCB7XG4gICAgICBcImFyaWEtcHJlc3NlZFwiOiBpc1NlbGVjdGVkXG4gICAgfSlcbiAgfTtcbn1cbmV4cG9ydCB7XG4gIHVzZUFyaWFUb2dnbGVCdXR0b25cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/.pnpm/@nextui-org+use-aria-toggle-button@2.0.6_react@18.2.0/node_modules/@nextui-org/use-aria-toggle-button/dist/index.mjs\n");

/***/ })

};
;