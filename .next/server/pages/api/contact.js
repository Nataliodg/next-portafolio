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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    (__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: 'no.replyy.code@gmail.com',\n            pass: process.env.PASSWORD\n        },\n        secure: true\n    });\n    const mailData = {\n        from: 'no.replyy.code@gmail.com',\n        to: 'natadks13@gmail.com',\n        subject: `Message From ${req.body.name}`,\n        text: req.body.message + \" | Sent from: \" + req.body.email,\n        html: `<div>${req.body.message}</div><p>Sent from:\n    ${req.body.email}</p>`\n    };\n    transporter.sendMail(mailData, function(err, info) {\n        if (err) console.log(err);\n        else console.log(info);\n    });\n    res.status(200);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ2UsUUFBUSxDQUFDQSxPQUFPLENBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDeENDLG9EQUF3QjtJQUUxQixHQUFHLENBQUNFLFVBQVUsR0FBR0YsbUJBQU8sQ0FBQyw4QkFBWTtJQUNyQyxLQUFLLENBQUNHLFdBQVcsR0FBR0QsVUFBVSxDQUFDRSxlQUFlLENBQUMsQ0FBQztRQUM5Q0MsSUFBSSxFQUFFLEdBQUc7UUFDVEMsSUFBSSxFQUFFLENBQWdCO1FBQ3RCQyxJQUFJLEVBQUUsQ0FBQztZQUNMQyxJQUFJLEVBQUUsQ0FBMEI7WUFDaENDLElBQUksRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVE7UUFDNUIsQ0FBQztRQUNEQyxNQUFNLEVBQUUsSUFBSTtJQUNkLENBQUM7SUFDRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxDQUFDO1FBQ2hCQyxJQUFJLEVBQUUsQ0FBMEI7UUFDaENDLEVBQUUsRUFBRSxDQUFxQjtRQUN6QkMsT0FBTyxHQUFHLGFBQWEsRUFBRW5CLEdBQUcsQ0FBQ29CLElBQUksQ0FBQ0MsSUFBSTtRQUN0Q0MsSUFBSSxFQUFFdEIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDRyxPQUFPLEdBQUcsQ0FBZ0Isa0JBQUd2QixHQUFHLENBQUNvQixJQUFJLENBQUNJLEtBQUs7UUFDMURDLElBQUksR0FBRyxLQUFLLEVBQUV6QixHQUFHLENBQUNvQixJQUFJLENBQUNHLE9BQU8sQ0FBQztJQUMvQixFQUFFdkIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDSSxLQUFLLENBQUMsSUFBSTtJQUN2QixDQUFDO0lBQ0RuQixXQUFXLENBQUNxQixRQUFRLENBQUNWLFFBQVEsRUFBRSxRQUFRLENBQUVXLEdBQUcsRUFBRUMsSUFBSSxFQUFFLENBQUM7UUFDbkQsRUFBRSxFQUFDRCxHQUFHLEVBQ0pFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHO2FBRWZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJO0lBQ3BCLENBQUM7SUFDRDNCLEdBQUcsQ0FBQzhCLE1BQU0sQ0FBQyxHQUFHO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRhZm9saW8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz8zNDkzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xyXG4gICAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuICBcclxuICBsZXQgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcclxuICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcclxuICAgIHBvcnQ6IDQ2NSxcclxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcclxuICAgIGF1dGg6IHtcclxuICAgICAgdXNlcjogJ25vLnJlcGx5eS5jb2RlQGdtYWlsLmNvbScsXHJcbiAgICAgIHBhc3M6IHByb2Nlc3MuZW52LlBBU1NXT1JELFxyXG4gICAgfSxcclxuICAgIHNlY3VyZTogdHJ1ZSxcclxuICB9KVxyXG4gIGNvbnN0IG1haWxEYXRhID0ge1xyXG4gICAgZnJvbTogJ25vLnJlcGx5eS5jb2RlQGdtYWlsLmNvbScsXHJcbiAgICB0bzogJ25hdGFka3MxM0BnbWFpbC5jb20nLFxyXG4gICAgc3ViamVjdDogYE1lc3NhZ2UgRnJvbSAke3JlcS5ib2R5Lm5hbWV9YCxcclxuICAgIHRleHQ6IHJlcS5ib2R5Lm1lc3NhZ2UgKyBcIiB8IFNlbnQgZnJvbTogXCIgKyByZXEuYm9keS5lbWFpbCxcclxuICAgIGh0bWw6IGA8ZGl2PiR7cmVxLmJvZHkubWVzc2FnZX08L2Rpdj48cD5TZW50IGZyb206XHJcbiAgICAke3JlcS5ib2R5LmVtYWlsfTwvcD5gXHJcbiAgfVxyXG4gIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxEYXRhLCBmdW5jdGlvbiAoZXJyLCBpbmZvKSB7XHJcbiAgICBpZihlcnIpXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIGVsc2VcclxuICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICB9KVxyXG4gIHJlcy5zdGF0dXMoMjAwKVxyXG59Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXF1aXJlIiwiY29uZmlnIiwibm9kZW1haWxlciIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0IiwicG9ydCIsImhvc3QiLCJhdXRoIiwidXNlciIsInBhc3MiLCJwcm9jZXNzIiwiZW52IiwiUEFTU1dPUkQiLCJzZWN1cmUiLCJtYWlsRGF0YSIsImZyb20iLCJ0byIsInN1YmplY3QiLCJib2R5IiwibmFtZSIsInRleHQiLCJtZXNzYWdlIiwiZW1haWwiLCJodG1sIiwic2VuZE1haWwiLCJlcnIiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();