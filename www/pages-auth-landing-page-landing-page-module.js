(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-landing-page-landing-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing-page/landing-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing-page/landing-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Landing Page Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<ion-content id=\"landing-page\" fullscreen>\n  <ion-back-button color=\"color1\" default-href=\"\" text=\"\" [icon]=\"id_lang == 1 ? 'arrow-back' : 'arrow-forward'\" routerLink=\"/onbroading\"\n  routerDirection=\"root\">\n </ion-back-button>\n  <div class=\"section_one\">\n    <img src=\"assets/images/buqsha-store-logo.jpeg\"/>\n  </div>\n\n  <div class=\"section_two\">\n    <img class=\"ion-padding\" src=\"assets/images/girls-shopping.jpg\" />\n  </div>\n\n  <div class=\"section_three\" *ngIf=\"id_lang == 1 else arabicTemplate\">\n    <p class=\"ion-padding\">Discover our full range of products specially designed for you and your lovers.</p>\n\n    <!-- Button Options -->\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" color=\"color1\" routerLink=\"/login\" routerDirection=\"root\">Login</ion-button>\n      <ion-button expand=\"block\" fill=\"outline\" color=\"color1\" routerLink=\"/register\" routerDirection=\"root\">Sign Up\n      </ion-button>\n\n      <p>Follow Us</p>\n\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fab fa-facebook-f\"></i></a>\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fab fa-instagram\"></i></a>\n      <a href=\"\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fab fa-twitter\"></i></a>\n\n    </div>\n  </div>\n\n  <ng-template #arabicTemplate>\n    <div class=\"section_three\">\n      <p class=\"ion-padding\">اكتشف مجموعتنا الكاملة من المنتجات المصممة خصيصًا لك ولأحبائك.</p>\n  \n      <!-- Button Options -->\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" color=\"color1\" routerLink=\"/login\" routerDirection=\"root\">تسجيل الدخول</ion-button>\n        <ion-button expand=\"block\" fill=\"outline\" color=\"color1\" routerLink=\"/register\" routerDirection=\"root\">اشتراك</ion-button>\n  \n        <p>تابعنا</p>\n  \n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-facebook\"><i class=\"fab fa-facebook-f\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-instagram\"><i class=\"fab fa-instagram\"></i></a>\n        <a href=\"\" target=\"_blank\" class=\"btn-social btn-twitter\"><i class=\"fab fa-twitter\"></i></a>\n  \n      </div>\n    </div>\n  </ng-template>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#landing-page {\n  text-align: center;\n}\n#landing-page .section_one {\n  height: 15%;\n}\n#landing-page .section_one h2 {\n  font-weight: 900;\n  padding-top: 5%;\n}\n#landing-page .section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n#landing-page .section_one img {\n  padding-top: 5%;\n}\n#landing-page .section_two {\n  height: 20%;\n}\n#landing-page .section_three {\n  height: 55%;\n  padding: 10px;\n}\n#landing-page .section_three p {\n  font-size: 1rem;\n  color: #6d6b6b;\n}\n#landing-page a.btn-social,\n#landing-page .btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 54px;\n  line-height: 54px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  width: 54px;\n}\n#landing-page .btn-facebook {\n  background-color: #3b5998;\n}\n#landing-page .btn-google-plus {\n  background-color: #dd4b39;\n}\n#landing-page .btn-instagram {\n  background-color: #3f729b;\n}\n#landing-page .btn-twitter {\n  background-color: #55acee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sYW5kaW5nLXBhZ2UvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7QUNDUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1o7QURFUTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREVRO0VBQ0ksZUFBQTtBQ0FaO0FESUk7RUFDSSxXQUFBO0FDRlI7QURLSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDSFI7QURLUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSFo7QURPSTs7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQ0xSO0FEUUk7RUFDSSx5QkFBQTtBQ05SO0FEU0k7RUFDSSx5QkFBQTtBQ1BSO0FEVUk7RUFDSSx5QkFBQTtBQ1JSO0FEV0k7RUFDSSx5QkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xhbmRpbmctcGFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLnNlY3Rpb25fb25lIHtcbiAgICAgICAgaGVpZ2h0OiAxNSU7XG4gICAgICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VjdGlvbl90d28ge1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbl90aHJlZSB7XG4gICAgICAgIGhlaWdodDogNTUlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2ZDZiNmI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhLmJ0bi1zb2NpYWwsXG4gICAgLmJ0bi1zb2NpYWwge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgICAgbWFyZ2luOiA4cHggNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XG4gICAgICAgIHdpZHRoOiA1NHB4O1xuICAgIH1cblxuICAgIC5idG4tZmFjZWJvb2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgIH1cblxuICAgIC5idG4tZ29vZ2xlLXBsdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICAgIH1cblxuICAgIC5idG4taW5zdGFncmFtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcbiAgICB9XG5cbiAgICAuYnRuLXR3aXR0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xuICAgIH1cblxufSIsIiNsYW5kaW5nLXBhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTUlO1xufVxuI2xhbmRpbmctcGFnZSAuc2VjdGlvbl9vbmUgaDIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNsYW5kaW5nLXBhZ2UgLnNlY3Rpb25fb25lIGltZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cbiNsYW5kaW5nLXBhZ2UgLnNlY3Rpb25fdHdvIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX3RocmVlIHtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4jbGFuZGluZy1wYWdlIC5zZWN0aW9uX3RocmVlIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNmQ2YjZiO1xufVxuI2xhbmRpbmctcGFnZSBhLmJ0bi1zb2NpYWwsXG4jbGFuZGluZy1wYWdlIC5idG4tc29jaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTRweDtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIG1hcmdpbjogOHB4IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgd2lkdGg6IDU0cHg7XG59XG4jbGFuZGluZy1wYWdlIC5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuI2xhbmRpbmctcGFnZSAuYnRuLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cbiNsYW5kaW5nLXBhZ2UgLmJ0bi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xufVxuI2xhbmRpbmctcGFnZSAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/esm/index.js");



var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(storage) {
        this.storage = storage;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.create().then(function () {
            _this.storage.get('id_lang').then(function (id_lang) {
                _this.id_lang = id_lang;
            });
        });
    };
    LandingPageComponent.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    LandingPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/landing-page/landing-page.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/pages/auth/landing-page/landing-page.component.scss")).default]
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/auth/landing-page/landing-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/landing-page/landing-page.module.ts ***!
  \****************************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/pages/auth/landing-page/landing-page.component.ts");







var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]
                    }
                ])
            ],
            declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-landing-page-landing-page-module.js.map