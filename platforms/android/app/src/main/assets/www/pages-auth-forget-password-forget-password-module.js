(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-forget-password-forget-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forget-password/forget-password.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forget-password/forget-password.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Forget Password Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- Back To Landing Page Option Button -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-back\" routerLink=\"/landing\"\n        routerDirection=\"root\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"forget-password\" fullscreen>\n\n  <div class=\"section_one ion-padding\">\n    <h2>FORGET PASSWORD ?</h2>\n    <p>We just need your registered phone number to send you password reset code</p>\n  </div>\n\n  <div class=\"section_two ion-padding\">\n\n    <img class=\"ion-padding\" src=\"assets/images/forgot-password.png\" />\n\n    <!-- Forget Password Form -->\n    <form class=\"ion-padding\">\n      <!-- Phone Number -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"call\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"number\" placeholder=\"Phone Number\" name=\"phone\"></ion-input>\n      </ion-item>\n\n      <!-- Submit Button -->\n      <div class=\"buttons ion-padding-top\">\n        <ion-button expand=\"block\" color=\"color1\" routerLink=\"/verification\" routerDirection=\"root\">\n          <ion-text><strong>SUBMIT</strong></ion-text>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n\n  <!-- SignUp Button -->\n  <div class=\"section_three\">\n    <ion-button fill=\"clear\" color=\"color2\" routerLink=\"/signup\" routerDirection=\"root\">\n      <span>Don't have an account? <b>Sign Up</b></span>\n    </ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/forget-password/forget-password.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/auth/forget-password/forget-password.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#forget-password {\n  text-align: center;\n  height: 100%;\n}\n#forget-password .section_one {\n  height: 15%;\n}\n#forget-password .section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n#forget-password .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#forget-password .section_two {\n  height: 70%;\n}\n#forget-password .section_two img {\n  height: 50%;\n}\n#forget-password .section_three {\n  height: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9mb3JnZXQtcGFzc3dvcmQvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcZm9yZ2V0LXBhc3N3b3JkXFxmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0FDQ1I7QURDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FDQVo7QURJSTtFQUNJLFdBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtBQ0ZaO0FETUk7RUFDSSxXQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9yZ2V0LXBhc3N3b3JkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnNlY3Rpb25fb25lIHtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbl90d28ge1xuICAgICAgICBoZWlnaHQ6IDcwJTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbl90aHJlZSB7XG4gICAgICAgIGhlaWdodDogMTUlO1xuICAgIH1cbn0iLCIjZm9yZ2V0LXBhc3N3b3JkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jZm9yZ2V0LXBhc3N3b3JkIC5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTUlO1xufVxuI2ZvcmdldC1wYXNzd29yZCAuc2VjdGlvbl9vbmUgaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG4jZm9yZ2V0LXBhc3N3b3JkIC5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNmb3JnZXQtcGFzc3dvcmQgLnNlY3Rpb25fdHdvIHtcbiAgaGVpZ2h0OiA3MCU7XG59XG4jZm9yZ2V0LXBhc3N3b3JkIC5zZWN0aW9uX3R3byBpbWcge1xuICBoZWlnaHQ6IDUwJTtcbn1cbiNmb3JnZXQtcGFzc3dvcmQgLnNlY3Rpb25fdGhyZWUge1xuICBoZWlnaHQ6IDE1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/forget-password/forget-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/auth/forget-password/forget-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent() {
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () { };
    ForgetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forget-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/forget-password/forget-password.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forget-password.component.scss */ "./src/app/pages/auth/forget-password/forget-password.component.scss")).default]
        })
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/forget-password/forget-password.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/auth/forget-password/forget-password.module.ts ***!
  \**********************************************************************/
/*! exports provided: ForgetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordModule", function() { return ForgetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _forget_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forget-password.component */ "./src/app/pages/auth/forget-password/forget-password.component.ts");







var ForgetPasswordModule = /** @class */ (function () {
    function ForgetPasswordModule() {
    }
    ForgetPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordComponent"]
                    }
                ])
            ],
            declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgetPasswordComponent"]]
        })
    ], ForgetPasswordModule);
    return ForgetPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-forget-password-forget-password-module.js.map