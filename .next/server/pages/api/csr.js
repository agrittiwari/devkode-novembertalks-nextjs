"use strict";
(() => {
var exports = {};
exports.id = 782;
exports.ids = [782];
exports.modules = {

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/india`);
        console.log(response);
        const [data] = await response.json();
        // console.log(`this is backend log${data}`)
        return res.send(data);
    } catch (err) {
        console.error(err);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(692));
module.exports = __webpack_exports__;

})();