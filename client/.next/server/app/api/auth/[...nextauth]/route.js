"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_kuba8_WebstormProjects_MatProject_client_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\kuba8\\\\WebstormProjects\\\\MatProject\\\\client\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_kuba8_WebstormProjects_MatProject_client_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMS4yX3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtYXBwLWxvYWRlci5qcz9uYW1lPWFwcCUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUudHMmYXBwRGlyPUMlM0ElNUNVc2VycyU1Q2t1YmE4JTVDV2Vic3Rvcm1Qcm9qZWN0cyU1Q01hdFByb2plY3QlNUNjbGllbnQlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2t1YmE4JTVDV2Vic3Rvcm1Qcm9qZWN0cyU1Q01hdFByb2plY3QlNUNjbGllbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0M7QUFDNUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vP2I3NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxca3ViYThcXFxcV2Vic3Rvcm1Qcm9qZWN0c1xcXFxNYXRQcm9qZWN0XFxcXGNsaWVudFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxrdWJhOFxcXFxXZWJzdG9ybVByb2plY3RzXFxcXE1hdFByb2plY3RcXFxcY2xpZW50XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../node_modules/.pnpm/next-auth@4.24.6_next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../node_modules/.pnpm/next-auth@4.24.6_next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/discord */ \"(rsc)/../node_modules/.pnpm/next-auth@4.24.6_next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/providers/discord.js\");\n/* harmony import */ var _lib_mongoClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/mongoClient */ \"(rsc)/./lib/mongoClient.ts\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/../node_modules/.pnpm/@auth+mongodb-adapter@2.5.0_mongodb@6.4.0/node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/User */ \"(rsc)/./models/User.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_dist_server_typescript_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dist/server/typescript/utils */ \"(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/typescript/utils.js\");\n/* harmony import */ var next_dist_server_typescript_utils__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_typescript_utils__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_4__.MongoDBAdapter)(_lib_mongoClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        session: ({ session, user })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                (0,next_dist_server_typescript_utils__WEBPACK_IMPORTED_MODULE_7__.log)(user);\n                if (user) {\n                    const isMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_6___default().compare(credentials.password, user.password);\n                    if (isMatch) {\n                        return user;\n                    }\n                }\n                return {\n                    ok: false,\n                    error: \"Invalid credentials\"\n                };\n            }\n        }),\n        (0,next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: \"1214646824049311805\",\n            clientSecret: \"CdHkv4zVynHgIJczBLR6bzPItCFLbwc5\",\n            authorization: \"https://discord.com/oauth2/authorize?client_id=1214646824049311805&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+email\"\n        })\n    ]\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2U7QUFDaEI7QUFFTTtBQUNIO0FBRVY7QUFDZjtBQUUwQjtBQVdwRCxNQUFNUSxVQUFVUixnREFBUUEsQ0FBQztJQUN2QlMsU0FBU0wscUVBQWNBLENBQUNELHdEQUFhQTtJQUNyQ08sT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsV0FBVztRQUNUQyxTQUFTLENBQUMsRUFBQ0EsT0FBTyxFQUFFQyxJQUFJLEVBQUMsR0FBTTtnQkFDN0IsR0FBR0QsT0FBTztnQkFDVkMsTUFBTTtvQkFDSixHQUFHRCxRQUFRQyxJQUFJO29CQUNmQyxJQUFJRCxLQUFLQyxFQUFFO2dCQUNiO1lBQ0Y7SUFDRjtJQUNBQyxXQUFXO1FBQ1RmLDJFQUFtQkEsQ0FBQztZQUNsQmdCLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUNDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU07Z0JBQ3BDQyxVQUFVO29CQUFDRixPQUFPO29CQUFZQyxNQUFNO2dCQUFVO1lBQ2hEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVyxFQUFFTSxHQUFHO2dCQUM5QixNQUFNVCxPQUFPLE1BQU1ULG9EQUFJQSxDQUFDbUIsT0FBTyxDQUFDO29CQUFDTixPQUFPRCxZQUFZQyxLQUFLO2dCQUFBO2dCQUN6RFgsc0VBQUdBLENBQUNPO2dCQUNKLElBQUlBLE1BQU07b0JBQ1IsTUFBTVcsVUFBVSxNQUFNbkIscURBQWMsQ0FBQ1csWUFBWUksUUFBUSxFQUFFUCxLQUFLTyxRQUFRO29CQUN4RSxJQUFJSSxTQUFTO3dCQUNYLE9BQU9YO29CQUNUO2dCQUNGO2dCQUNBLE9BQU87b0JBQUNhLElBQUk7b0JBQU9DLE9BQU87Z0JBQXFCO1lBQ2pEO1FBQ0Y7UUFDQTFCLHVFQUFPQSxDQUFDO1lBQ04yQixVQUFVO1lBQ1ZDLGNBQWM7WUFDZEMsZUFBZTtRQUNqQjtLQUNEO0FBQ0g7QUFFeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz9jOGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwge0RlZmF1bHRTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBEaXNjb3JkIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2Rpc2NvcmRcIjtcclxuaW1wb3J0IEdpdGh1YiBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9tb25nb0NsaWVudFwiO1xyXG5pbXBvcnQge01vbmdvREJBZGFwdGVyfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XHJcbmltcG9ydCB7QWRhcHRlcn0gZnJvbSBcIm5leHQtYXV0aC9hZGFwdGVyc1wiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtsb2d9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3R5cGVzY3JpcHQvdXRpbHNcIjtcclxuXHJcbmRlY2xhcmUgbW9kdWxlIFwibmV4dC1hdXRoXCIge1xyXG4gIGludGVyZmFjZSBTZXNzaW9uIGV4dGVuZHMgRGVmYXVsdFNlc3Npb24ge1xyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc3RyaW5nO1xyXG4gICAgfSAmIERlZmF1bHRTZXNzaW9uW1widXNlclwiXTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XHJcbiAgICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSBhcyBBZGFwdGVyLFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJ1xyXG4gICAgfSxcclxuICAgIGNhbGxiYWNrczoge1xyXG4gICAgICBzZXNzaW9uOiAoe3Nlc3Npb24sIHVzZXJ9KSA9PiAoe1xyXG4gICAgICAgIC4uLnNlc3Npb24sXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgLi4uc2Vzc2lvbi51c2VyLFxyXG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICBlbWFpbDoge2xhYmVsOiBcImVtYWlsXCIsIHR5cGU6IFwidGV4dFwifSxcclxuICAgICAgICAgIHBhc3N3b3JkOiB7bGFiZWw6IFwicGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwifSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtlbWFpbDogY3JlZGVudGlhbHMuZW1haWx9KTtcclxuICAgICAgICAgIGxvZyh1c2VyKVxyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdXNlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4ge29rOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wifTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgICAgRGlzY29yZCh7XHJcbiAgICAgICAgY2xpZW50SWQ6IFwiMTIxNDY0NjgyNDA0OTMxMTgwNVwiLFxyXG4gICAgICAgIGNsaWVudFNlY3JldDogXCJDZEhrdjR6VnluSGdJSmN6QkxSNmJ6UEl0Q0ZMYndjNVwiLFxyXG4gICAgICAgIGF1dGhvcml6YXRpb246IFwiaHR0cHM6Ly9kaXNjb3JkLmNvbS9vYXV0aDIvYXV0aG9yaXplP2NsaWVudF9pZD0xMjE0NjQ2ODI0MDQ5MzExODA1JnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cCUzQSUyRiUyRmxvY2FsaG9zdCUzQTMwMDAlMkZhcGklMkZhdXRoJTJGY2FsbGJhY2slMkZkaXNjb3JkJnNjb3BlPWlkZW50aWZ5K2VtYWlsXCJcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxuICBleHBvcnQge2hhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1R9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJEaXNjb3JkIiwiY2xpZW50UHJvbWlzZSIsIk1vbmdvREJBZGFwdGVyIiwiVXNlciIsImJjcnlwdCIsImxvZyIsImhhbmRsZXIiLCJhZGFwdGVyIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlciIsImlkIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZmluZE9uZSIsImlzTWF0Y2giLCJjb21wYXJlIiwib2siLCJlcnJvciIsImNsaWVudElkIiwiY2xpZW50U2VjcmV0IiwiYXV0aG9yaXphdGlvbiIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongoClient.ts":
/*!****************************!*\
  !*** ./lib/mongoClient.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\n\nconst uri = \"mongodb+srv://Whiffmaster:MVngsAWnAFFGCSma@cluster0.pvkvq1u.mongodb.net/Mat\";\nconst options = {};\nlet client;\nlet clientPromise;\nmongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(uri, options).then(()=>console.log(\"Mongoose connected to MongoDB\"));\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29DbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxrR0FBa0c7QUFDL0Q7QUFDSDtBQUVoQyxNQUFNRSxNQUFNQyw2RUFBdUI7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFDSlAsdURBQWdCLENBQUNDLEtBQUtJLFNBQVNJLElBQUksQ0FBQyxJQUFNQyxRQUFRQyxHQUFHLENBQUM7QUFFdEQsSUFBSVQsSUFBc0MsRUFBRTtJQUMxQyxJQUFJLENBQUNVLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CUCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDRSxLQUFLSTtRQUM5Qk8sT0FBT0MsbUJBQW1CLEdBQUdQLE9BQU9FLE9BQU87SUFDN0M7SUFDQUQsZ0JBQWdCSyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUdOO0FBRUQsaUVBQWVOLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29DbGllbnQudHM/NDMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxyXG5pbXBvcnQge01vbmdvQ2xpZW50fSBmcm9tIFwibW9uZ29kYlwiXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbmNvbnN0IG9wdGlvbnMgPSB7fVxyXG5cclxubGV0IGNsaWVudFxyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cclxubW9uZ29vc2UuY29ubmVjdCh1cmksIG9wdGlvbnMpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coXCJNb25nb29zZSBjb25uZWN0ZWQgdG8gTW9uZ29EQlwiKSlcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2VcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2UiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJtb25nb29zZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiY29ubmVjdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongoClient.ts\n");

/***/ }),

/***/ "(rsc)/./models/User.ts":
/*!************************!*\
  !*** ./models/User.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PrivacySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    posts: {\n        type: String,\n        enum: [\n            \"public\",\n            \"friends\"\n        ]\n    },\n    profile: {\n        type: String,\n        enum: [\n            \"public\",\n            \"private\",\n            \"friends\"\n        ]\n    }\n});\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true,\n        unique: true,\n        maxLength: 20\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    friends: {\n        type: [\n            {\n                friend: {\n                    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                    ref: \"User\"\n                },\n                conversation: {\n                    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                    ref: \"Conversation\"\n                }\n            }\n        ],\n        default: []\n    },\n    groups: {\n        type: [\n            (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId\n        ],\n        ref: \"Group\",\n        default: []\n    },\n    invites: {\n        type: [\n            (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId\n        ],\n        ref: \"User\",\n        default: []\n    },\n    invitesSent: {\n        type: [\n            (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId\n        ],\n        ref: \"User\",\n        default: []\n    },\n    settings: {\n        type: {\n            privacy: PrivacySchema\n        },\n        default: {\n            privacy: {\n                posts: \"public\",\n                profile: \"public\"\n            }\n        }\n    },\n    image: {\n        type: String,\n        default: \"\"\n    },\n    following: {\n        type: [\n            (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId\n        ],\n        ref: \"User\",\n        default: []\n    },\n    followers: {\n        type: [\n            (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId\n        ],\n        ref: \"User\",\n        default: []\n    },\n    likes: {\n        type: [\n            (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId\n        ],\n        ref: \"Post\",\n        default: []\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUE0QjVDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUErQjtJQUN0RUcsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxNQUFNO1lBQUM7WUFBVTtTQUFVO0lBQzdCO0lBQ0FDLFNBQVM7UUFDUEgsTUFBTUM7UUFDTkMsTUFBTTtZQUFDO1lBQVU7WUFBVztTQUFVO0lBQ3hDO0FBQ0Y7QUFDQSxNQUFNRSxhQUFhLElBQUlSLHdEQUFlLENBQVE7SUFDNUNTLE1BQU07UUFDSkwsTUFBTUM7UUFDTkssVUFBVTtRQUNWQyxRQUFRO1FBQ1JDLFdBQVc7SUFDYjtJQUNBQyxPQUFPO1FBQ0xULE1BQU1DO1FBQ05LLFVBQVU7UUFDVkMsUUFBUTtJQUNWO0lBQ0FHLFNBQVM7UUFDUFYsTUFBTTtZQUFDO2dCQUNMVyxRQUFRO29CQUNOWCxNQUFNSix3REFBZSxDQUFDZ0IsS0FBSyxDQUFDQyxRQUFRO29CQUNwQ0MsS0FBSztnQkFDUDtnQkFDQUMsY0FBYztvQkFDWmYsTUFBTUosd0RBQWUsQ0FBQ2dCLEtBQUssQ0FBQ0MsUUFBUTtvQkFDcENDLEtBQUs7Z0JBQ1A7WUFDRjtTQUFFO1FBQ0ZFLFNBQVMsRUFBRTtJQUNiO0lBQ0FDLFFBQVE7UUFDTmpCLE1BQU07WUFBQ0osd0RBQWUsQ0FBQ2dCLEtBQUssQ0FBQ0MsUUFBUTtTQUFDO1FBQ3RDQyxLQUFLO1FBQ0xFLFNBQVMsRUFBRTtJQUNiO0lBQ0FFLFNBQVM7UUFDUGxCLE1BQU07WUFBQ0osd0RBQWUsQ0FBQ2dCLEtBQUssQ0FBQ0MsUUFBUTtTQUFDO1FBQ3RDQyxLQUFLO1FBQ0xFLFNBQVMsRUFBRTtJQUNiO0lBQ0FHLGFBQWE7UUFDWG5CLE1BQU07WUFBQ0osd0RBQWUsQ0FBQ2dCLEtBQUssQ0FBQ0MsUUFBUTtTQUFDO1FBQ3RDQyxLQUFLO1FBQ0xFLFNBQVMsRUFBRTtJQUNiO0lBQ0FJLFVBQVU7UUFDUnBCLE1BQU07WUFDSnFCLFNBQVN4QjtRQUNYO1FBQ0FtQixTQUFTO1lBQ1BLLFNBQVM7Z0JBQ1B0QixPQUFPO2dCQUNQSSxTQUFTO1lBQ1g7UUFDRjtJQUNGO0lBQ0FtQixPQUFPO1FBQ0x0QixNQUFNQztRQUNOZSxTQUFTO0lBQ1g7SUFDQU8sV0FBVztRQUNUdkIsTUFBTTtZQUFDSix3REFBZSxDQUFDZ0IsS0FBSyxDQUFDQyxRQUFRO1NBQUM7UUFDdENDLEtBQUs7UUFDTEUsU0FBUyxFQUFFO0lBQ2I7SUFDQVEsV0FBVztRQUNUeEIsTUFBTTtZQUFDSix3REFBZSxDQUFDZ0IsS0FBSyxDQUFDQyxRQUFRO1NBQUM7UUFDdENDLEtBQUs7UUFDTEUsU0FBUyxFQUFFO0lBQ2I7SUFDQVMsT0FBTztRQUNMekIsTUFBTTtZQUFDSix3REFBZSxDQUFDZ0IsS0FBSyxDQUFDQyxRQUFRO1NBQUM7UUFDdENDLEtBQUs7UUFDTEUsU0FBUyxFQUFFO0lBQ2I7QUFDRjtBQUdBLGlFQUFlcEIsd0RBQWUsQ0FBQytCLElBQUksSUFBSS9CLHFEQUFjLENBQVEsUUFBUVEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZGVscy9Vc2VyLnRzPzZkYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7T2JqZWN0SWR9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQge1Bvc3RzfSBmcm9tIFwiLi9Qb3N0XCI7XHJcbmltcG9ydCB7R3JvdXBzfSBmcm9tIFwiLi9Hcm91cFwiO1xyXG5pbXBvcnQge0NvbnZlcnNhdGlvbnN9IGZyb20gXCIuL0NvbnZlcnNhdGlvblwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VycyB7XHJcbiAgX2lkOiBPYmplY3RJZDtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGZvbGxvd2luZzogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkW10gfCBVc2Vyc1tdIHwgW107XHJcbiAgZm9sbG93ZXJzOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWRbXSB8IFVzZXJzW10gfCBbXTtcclxuICBmcmllbmRzOiB7XHJcbiAgICBmcmllbmQ6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCB8IFVzZXJzLFxyXG4gICAgY29udmVyc2F0aW9uOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQgfCBDb252ZXJzYXRpb25zLFxyXG4gIH1bXSB8IFtdO1xyXG4gIGdyb3VwczogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkW10gfCBHcm91cHNbXSB8IFtdO1xyXG4gIGludml0ZXM6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZFtdIHwgVXNlcnNbXSB8IFtdO1xyXG4gIGludml0ZXNTZW50OiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWRbXSB8IFVzZXJzW10gfCBbXTtcclxuICBsaWtlczogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkW10gfCBbXTtcclxuICBzZXR0aW5nczoge1xyXG4gICAgcHJpdmFjeToge1xyXG4gICAgICBwb3N0czogXCJwdWJsaWNcIiB8IFwiZnJpZW5kc1wiXHJcbiAgICAgIHByb2ZpbGU6IFwicHVibGljXCIgfCBcInByaXZhdGVcIiB8IFwiZnJpZW5kc1wiLFxyXG4gICAgfSxcclxuICB9IHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5jb25zdCBQcml2YWN5U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYTxVc2Vyc1tcInNldHRpbmdzXCJdW1wicHJpdmFjeVwiXT4oe1xyXG4gIHBvc3RzOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBlbnVtOiBbXCJwdWJsaWNcIiwgXCJmcmllbmRzXCJdLFxyXG4gIH0sXHJcbiAgcHJvZmlsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZW51bTogW1wicHVibGljXCIsIFwicHJpdmF0ZVwiLCBcImZyaWVuZHNcIl0sXHJcbiAgfSxcclxufSk7XHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hPFVzZXJzPih7XHJcbiAgbmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBtYXhMZW5ndGg6IDIwLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gIH0sXHJcbiAgZnJpZW5kczoge1xyXG4gICAgdHlwZTogW3tcclxuICAgICAgZnJpZW5kOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogXCJVc2VyXCJcclxuICAgICAgfSxcclxuICAgICAgY29udmVyc2F0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxyXG4gICAgICAgIHJlZjogXCJDb252ZXJzYXRpb25cIixcclxuICAgICAgfVxyXG4gICAgfV0sXHJcbiAgICBkZWZhdWx0OiBbXSxcclxuICB9LFxyXG4gIGdyb3Vwczoge1xyXG4gICAgdHlwZTogW21vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZF0sXHJcbiAgICByZWY6IFwiR3JvdXBcIixcclxuICAgIGRlZmF1bHQ6IFtdLFxyXG4gIH0sXHJcbiAgaW52aXRlczoge1xyXG4gICAgdHlwZTogW21vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZF0sXHJcbiAgICByZWY6IFwiVXNlclwiLFxyXG4gICAgZGVmYXVsdDogW10sXHJcbiAgfSxcclxuICBpbnZpdGVzU2VudDoge1xyXG4gICAgdHlwZTogW21vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZF0sXHJcbiAgICByZWY6IFwiVXNlclwiLFxyXG4gICAgZGVmYXVsdDogW10sXHJcbiAgfSxcclxuICBzZXR0aW5nczoge1xyXG4gICAgdHlwZToge1xyXG4gICAgICBwcml2YWN5OiBQcml2YWN5U2NoZW1hXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBwcml2YWN5OiB7XHJcbiAgICAgICAgcG9zdHM6IFwicHVibGljXCIsXHJcbiAgICAgICAgcHJvZmlsZTogXCJwdWJsaWNcIixcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbiAgZm9sbG93aW5nOiB7XHJcbiAgICB0eXBlOiBbbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkXSxcclxuICAgIHJlZjogXCJVc2VyXCIsXHJcbiAgICBkZWZhdWx0OiBbXSxcclxuICB9LFxyXG4gIGZvbGxvd2Vyczoge1xyXG4gICAgdHlwZTogW21vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZF0sXHJcbiAgICByZWY6IFwiVXNlclwiLFxyXG4gICAgZGVmYXVsdDogW10sXHJcbiAgfSxcclxuICBsaWtlczoge1xyXG4gICAgdHlwZTogW21vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZF0sXHJcbiAgICByZWY6IFwiUG9zdFwiLFxyXG4gICAgZGVmYXVsdDogW10sXHJcbiAgfSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8VXNlcnM+KFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlByaXZhY3lTY2hlbWEiLCJTY2hlbWEiLCJwb3N0cyIsInR5cGUiLCJTdHJpbmciLCJlbnVtIiwicHJvZmlsZSIsIlVzZXJTY2hlbWEiLCJuYW1lIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJtYXhMZW5ndGgiLCJlbWFpbCIsImZyaWVuZHMiLCJmcmllbmQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY29udmVyc2F0aW9uIiwiZGVmYXVsdCIsImdyb3VwcyIsImludml0ZXMiLCJpbnZpdGVzU2VudCIsInNldHRpbmdzIiwicHJpdmFjeSIsImltYWdlIiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwibGlrZXMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.1.2_react-dom@18.2.0_react@18.2.0","vendor-chunks/next-auth@4.24.6_next@14.1.2_react-dom@18.2.0_react@18.2.0","vendor-chunks/@babel+runtime@7.24.0","vendor-chunks/jose@4.15.4","vendor-chunks/openid-client@5.6.4","vendor-chunks/uuid@8.3.2","vendor-chunks/oauth@0.9.15","vendor-chunks/@panva+hkdf@1.1.1","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.19.6","vendor-chunks/oidc-token-hash@5.0.3","vendor-chunks/@auth+mongodb-adapter@2.5.0_mongodb@6.4.0","vendor-chunks/preact@10.19.6","vendor-chunks/object-hash@2.2.0","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.5.0"], () => (__webpack_exec__("(rsc)/../node_modules/.pnpm/next@14.1.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckuba8%5CWebstormProjects%5CMatProject%5Cclient&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();