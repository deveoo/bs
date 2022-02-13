(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Signup Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- Back To Landing Page -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-back\" routerLink=\"/landing\"\n        routerDirection=\"root\">\n      </ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"signup\" fullscreen>\n  <div class=\"section_one\">\n    <h2>SIGN UP</h2>\n    <p>Fill the details & create your account</p>\n  </div>\n\n  <!-- SignUp Form -->\n  <div class=\"section_two ion-padding\">\n    <form class=\"ion-padding\" (ngSubmit)=\"submitForm()\">\n      <!-- Name -->\n      <ion-item>\n        <ion-label>\n          <ion-icon name=\"person\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"text\" id=\"name\" placeholder=\"Name\" name=\"name\"></ion-input>\n      </ion-item>\n\n      <!-- Email -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"mail\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"email\" placeholder=\"Email\" name=\"email\"></ion-input>\n      </ion-item>\n\n      <!-- Phone Number -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"call\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"number\" placeholder=\"Phone Number\" name=\"phone\"></ion-input>\n      </ion-item>\n\n      <!-- Password -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-label>\n          <ion-icon name=\"eye\" color=\"color2\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"password\" placeholder=\"Password\" name=\"password\"></ion-input>\n      </ion-item>\n\n      <!-- SignUp Button -->\n      <div class=\"buttons ion-padding-top\">\n        <!--<ion-button expand=\"block\" color=\"color1\" routerLink=\"/tabs/tab1\" routerDirection=\"root\">\n          <ion-text><strong>SIGN UP</strong></ion-text>\n        </ion-button>-->\n        <ion-button type=\"submit\" expand=\"block\" color=\"color1\">\n          <ion-text><strong>SIGN UP</strong></ion-text>\n        </ion-button>\n        \n      </div>\n    </form>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#signup {\n  text-align: center;\n}\n#signup .section_one {\n  height: 10%;\n}\n#signup .section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n#signup .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#signup a.btn-social,\n#signup .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 35px;\n  line-height: 35px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  width: 35px;\n}\n#signup .btn-facebook {\n  background-color: #3b5998;\n}\n#signup .btn-google-plus {\n  background-color: #dd4b39;\n}\n#signup .btn-instagram {\n  background-color: #3f729b;\n}\n#signup .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWdudXAvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDRlI7QURLSTtFQUNJLHlCQUFBO0FDSFI7QURNSTtFQUNJLHlCQUFBO0FDSlI7QURPSTtFQUNJLHlCQUFBO0FDTFI7QURRSTtFQUNJLHlCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbnVwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuc2VjdGlvbl9vbmUge1xuICAgICAgICBoZWlnaHQ6IDEwJTtcblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGEuYnRuLXNvY2lhbCxcbiAgICAuYnRuLXNvY2lhbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW46IDhweCA0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1mYWNlYm9vayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gICAgfVxuXG4gICAgLmJ0bi1nb29nbGUtcGx1cyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG4gICAgfVxuXG4gICAgLmJ0bi1pbnN0YWdyYW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xuICAgIH1cblxuICAgIC5idG4tdHdpdHRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG4gICAgfVxufSIsIiNzaWdudXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jc2lnbnVwIC5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTAlO1xufVxuI3NpZ251cCAuc2VjdGlvbl9vbmUgaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogMiU7XG59XG4jc2lnbnVwIC5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNzaWdudXAgYS5idG4tc29jaWFsLFxuI3NpZ251cCAuYnRuLXNvY2lhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDhweCA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIHdpZHRoOiAzNXB4O1xufVxuI3NpZ251cCAuYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cbiNzaWdudXAgLmJ0bi1nb29nbGUtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG59XG4jc2lnbnVwIC5idG4taW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5Yjtcbn1cbiNzaWdudXAgLmJ0bi10d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.submitForm = function () {
    };
    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/auth/signup/signup.component.scss")).default]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/pages/auth/signup/signup.component.ts");







var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
                    }
                ])
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-signup-signup-module.js.map