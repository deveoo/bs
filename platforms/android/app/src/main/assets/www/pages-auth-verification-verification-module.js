(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-verification-verification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verification/verification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verification/verification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Verification Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- Back To Landing Page -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-back\" routerLink=\"/landing\"\n        routerDirection=\"root\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"verification\" fullscreen>\n  <div class=\"section_one ion-padding\">\n    <h2>VERIFICATION</h2>\n    <p>Enter the verification code we just send you on your registered phone number</p>\n  </div>\n\n  <div class=\"section_two ion-padding\">\n\n    <img class=\"ion-padding\" src=\"assets/images/otp.jpg\" />\n\n    <!-- Enter Verification Code -->\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-input class=\"ion-text-center\" type=\"number\" name=\"number1\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-input class=\"ion-text-center\" type=\"number\" name=\"number2\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-input class=\"ion-text-center\" type=\"number\" name=\"number3\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item lines=\"none\">\n          <ion-input class=\"ion-text-center\" type=\"number\" name=\"number4\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <!-- Resend Varification Code Option Button -->\n    <ion-button fill=\"clear\" color=\"color2\">\n      <span>If you dont receive the code ?</span>\n      <ion-text color=\"color1\"><strong>RESEND</strong></ion-text>\n    </ion-button>\n\n    <!-- Submit Button -->\n    <div class=\"buttons ion-padding-top\">\n      <ion-button expand=\"block\" color=\"color1\" routerLink=\"/tabs/tab1\" routerDirection=\"root\">\n        <ion-text><strong>VERIFY & PROCEED</strong></ion-text>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/verification/verification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/verification/verification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#verification {\n  text-align: center;\n  height: 100%;\n}\n#verification .section_one {\n  height: 15%;\n}\n#verification .section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n#verification .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#verification .section_two {\n  height: 70%;\n}\n#verification .section_two img {\n  height: 50%;\n}\n#verification .section_two ion-item {\n  border: 2px solid var(--ion-color-color2);\n}\n#verification .section_three {\n  height: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC92ZXJpZmljYXRpb24vQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcdmVyaWZpY2F0aW9uXFx2ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvdmVyaWZpY2F0aW9uL3ZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0FDQ1I7QURDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FERVE7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FDQVo7QURJSTtFQUNJLFdBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtBQ0ZaO0FES1E7RUFDSSx5Q0FBQTtBQ0haO0FET0k7RUFDSSxXQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmVyaWZpY2F0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnNlY3Rpb25fb25lIHtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbl90d28ge1xuICAgICAgICBoZWlnaHQ6IDcwJTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItY29sb3IyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uX3RocmVlIHtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgfVxufSIsIiN2ZXJpZmljYXRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbiN2ZXJpZmljYXRpb24gLnNlY3Rpb25fb25lIHtcbiAgaGVpZ2h0OiAxNSU7XG59XG4jdmVyaWZpY2F0aW9uIC5zZWN0aW9uX29uZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cbiN2ZXJpZmljYXRpb24gLnNlY3Rpb25fb25lIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3ZlcmlmaWNhdGlvbiAuc2VjdGlvbl90d28ge1xuICBoZWlnaHQ6IDcwJTtcbn1cbiN2ZXJpZmljYXRpb24gLnNlY3Rpb25fdHdvIGltZyB7XG4gIGhlaWdodDogNTAlO1xufVxuI3ZlcmlmaWNhdGlvbiAuc2VjdGlvbl90d28gaW9uLWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItY29sb3IyKTtcbn1cbiN2ZXJpZmljYXRpb24gLnNlY3Rpb25fdGhyZWUge1xuICBoZWlnaHQ6IDE1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/verification/verification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/verification/verification.component.ts ***!
  \*******************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var VerificationComponent = /** @class */ (function () {
    function VerificationComponent() {
    }
    VerificationComponent.prototype.ngOnInit = function () { };
    VerificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verification/verification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verification.component.scss */ "./src/app/pages/auth/verification/verification.component.scss")).default]
        })
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/verification/verification.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/verification/verification.module.ts ***!
  \****************************************************************/
/*! exports provided: VerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModule", function() { return VerificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verification.component */ "./src/app/pages/auth/verification/verification.component.ts");







var VerificationModule = /** @class */ (function () {
    function VerificationModule() {
    }
    VerificationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _verification_component__WEBPACK_IMPORTED_MODULE_6__["VerificationComponent"]
                    }
                ])
            ],
            declarations: [_verification_component__WEBPACK_IMPORTED_MODULE_6__["VerificationComponent"]]
        })
    ], VerificationModule);
    return VerificationModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-verification-verification-module.js.map