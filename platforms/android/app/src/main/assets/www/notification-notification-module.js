(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared-item/shared-item.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared-item/shared-item.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"face\">\n\t<div class=\"eyes\"></div>\n\t<div class=\"dimples\"></div>\n\t<div class=\"mouth\"></div>\n</div>\n<h1>Oops! No Data Available</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Notification Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side Menu -->\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"tabs/tab2\"></ion-back-button>\n    </ion-buttons>\n\n    <!-- Page Title -->\n    <ion-title>{{catName}}</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"notifications\">\n  <div class=\"ion-padding-vertical\">\n  <div *ngIf=\"subcatById.length > 0;else alertEvents\">\n  <div *ngFor=\"let item of subcatById\"class=\"category-block\">\n      <ion-row no-padding class=\"category-banner\" (click)=\"gotoProductPage(item.id)\">\n        <ion-col text-left align-self-center>\n          {{item.name[0].value}}\n        </ion-col>\n      </ion-row>\n  </div>\n</div>\n<ng-template #alertEvents>\n  <app-shared-item></app-shared-item>\n</ng-template>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/shared-item/shared-item.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/shared-item/shared-item.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: #F2EEE8;\n  font-family: \"Open Sans\";\n}\n\n*, *:before, *:after {\n  box-sizing: content-box;\n  transform: translate3d(0, 0, 0);\n}\n\n.face {\n  width: 230px;\n  height: 230px;\n  border: 4px solid #383A41;\n  border-radius: 10px;\n  background-color: #FFFFFF;\n  margin: 0 auto;\n  margin-top: 100px;\n}\n\n@media screen and (max-width: 400px) {\n  .face {\n    margin-top: 40px;\n    transform: scale(0.8);\n  }\n}\n\n.face .band {\n  width: 350px;\n  height: 27px;\n  border: 4px solid #383A41;\n  border-radius: 5px;\n  margin-left: -25px;\n  margin-top: 50px;\n}\n\n.face .band .red {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #EB6D6D;\n}\n\n.face .band .white {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #FFFFFF;\n}\n\n.face .band .blue {\n  height: calc(100% / 3);\n  width: 100%;\n  background-color: #5E7FDC;\n}\n\n.face .band:before {\n  content: \"\";\n  display: inline-block;\n  height: 27px;\n  width: 30px;\n  background-color: rgba(255, 255, 255, 0.3);\n  position: absolute;\n  z-index: 999;\n}\n\n.face .band:after {\n  content: \"\";\n  display: inline-block;\n  height: 27px;\n  width: 30px;\n  background-color: rgba(56, 58, 65, 0.3);\n  position: absolute;\n  z-index: 999;\n  right: 0;\n  margin-top: -27px;\n}\n\n.face .eyes {\n  width: 128px;\n  margin: 0 auto;\n  margin-top: 70px;\n}\n\n.face .eyes:before {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  border: 7px solid #383A41;\n  margin-right: 20px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  border-bottom: 0;\n}\n\n.face .eyes:after {\n  content: \"\";\n  display: inline-block;\n  width: 30px;\n  height: 15px;\n  border: 7px solid #383A41;\n  margin-left: 20px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n  border-bottom: 0;\n}\n\n.face .dimples {\n  width: 180px;\n  margin: 0 auto;\n  margin-top: 15px;\n}\n\n.face .dimples:before {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-right: 80px;\n  border-radius: 50%;\n  background-color: rgba(235, 109, 109, 0.4);\n}\n\n.face .dimples:after {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin-left: 80px;\n  border-radius: 50%;\n  background-color: rgba(235, 109, 109, 0.4);\n}\n\n.face .mouth {\n  width: 40px;\n  height: 5px;\n  border-radius: 5px;\n  background-color: #383A41;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n\nh1 {\n  font-weight: 800;\n  color: #383A41;\n  text-align: center;\n  font-size: 2.5em;\n  padding-top: 20px;\n}\n\n@media screen and (max-width: 400px) {\n  h1 {\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 2em;\n  }\n}\n\n.btn {\n  font-family: \"Open Sans\";\n  font-weight: 400;\n  padding: 20px;\n  background-color: #5e7fdc;\n  color: white;\n  width: 320px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 1.2em;\n  border-radius: 5px;\n  cursor: pointer;\n  margin-top: 80px;\n  margin-bottom: 50px;\n  transition: all 0.2s linear;\n}\n\n@media screen and (max-width: 400px) {\n  .btn {\n    margin: 0 auto;\n    margin-top: 60px;\n    margin-bottom: 50px;\n    width: 200px;\n  }\n}\n\n.btn:hover {\n  background-color: rgba(94, 127, 220, 0.8);\n  transition: all 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtaXRlbS9DOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxidXFzaGFBcHAtbWFpbiAoMykvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZC1pdGVtXFxzaGFyZWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtaXRlbS9zaGFyZWQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBYkk7RUFjSix3QkFBQTtBQ1BEOztBRFVBO0VBQ0MsdUJBQUE7RUFDQSwrQkFBQTtBQ1BEOztBRFVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBMUJJO0VBMkJKLGNBQUE7RUFDQSxpQkFBQTtBQ1BEOztBRFNDO0VBVEQ7SUFVRSxnQkFBQTtJQUNHLHFCQUFBO0VDTkg7QUFDRjs7QURRQztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURRRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQTVDRztBQ3NDTjs7QURTRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXBERTtBQzZDTDs7QURVRTtFQUNDLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXZESTtBQytDUDs7QURXRTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNUSDs7QURZRTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNWSDs7QURjQztFQUNDLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNaRjs7QURjRTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0csNkJBQUE7RUFDSCxnQkFBQTtBQ1pIOztBRGVFO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDRyw2QkFBQTtFQUNILGdCQUFBO0FDYkg7O0FEaUJDO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2ZGOztBRGlCRTtFQUNDLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDZkg7O0FEa0JFO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNoQkg7O0FEb0JDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQS9JSztFQWdKTCxjQUFBO0VBQ0EsZ0JBQUE7QUNsQkY7O0FEc0JBO0VBQ0MsZ0JBQUE7RUFDQSxjQXZKTTtFQXdKTixrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNuQkQ7O0FEcUJDO0VBUEQ7SUFRRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtFQ2xCQTtBQUNGOztBRHFCQTtFQUNDLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDbEJEOztBRG9CQztFQWhCRDtJQWlCRSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNHLFlBQUE7RUNqQkg7QUFDRjs7QURtQkM7RUFDQyx5Q0FBQTtFQUNBLDJCQUFBO0FDakJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtaXRlbS9zaGFyZWQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRnYjogI0YyRUVFODtcbiR3aDogI0ZGRkZGRjtcbiRkYXJrOiAjMzgzQTQxO1xuJHJlZDogI0VCNkQ2RDtcbiRibHVlOiAjNUU3RkRDO1xuXG4kYnJlYWs6IDQwMHB4O1xuXG5odG1sLCBib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdGJhY2tncm91bmQtY29sb3I6ICRnYjtcblx0Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xufVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uZmFjZSB7XG5cdHdpZHRoOiAyMzBweDtcblx0aGVpZ2h0OiAyMzBweDtcblx0Ym9yZGVyOiA0cHggc29saWQgJGRhcms7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR3aDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbi10b3A6IDEwMHB4O1xuXHRcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrKSB7XG5cdFx0bWFyZ2luLXRvcDogNDBweDtcbiAgICBcdHRyYW5zZm9ybTogc2NhbGUoLjgpO1xuICBcdH1cblx0XG5cdC5iYW5kIHtcblx0XHR3aWR0aDogMzUwcHg7XG5cdFx0aGVpZ2h0OiAyN3B4O1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICRkYXJrO1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRtYXJnaW4tbGVmdDogLTI1cHg7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHRcblx0XHQucmVkIHtcblx0XHRcdGhlaWdodDogY2FsYygxMDAlIC8gMyk7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XG5cdFx0fVxuXHRcdFxuXHRcdC53aGl0ZSB7XG5cdFx0XHRoZWlnaHQ6IGNhbGMoMTAwJSAvIDMpO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkd2g7XG5cdFx0fVxuXHRcdFxuXHRcdC5ibHVlIHtcblx0XHRcdGhlaWdodDogY2FsYygxMDAlIC8gMyk7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xuXHRcdH1cblx0XHRcblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0aGVpZ2h0OiAyN3B4O1xuXHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aCwwLjMpO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1x0XG5cdFx0XHR6LWluZGV4OiA5OTk7XG5cdFx0fVxuXHRcdFxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdGhlaWdodDogMjdweDtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZGFyaywwLjMpO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1x0XG5cdFx0XHR6LWluZGV4OiA5OTk7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdG1hcmdpbi10b3A6IC0yN3B4O1xuXHRcdH1cblx0fVxuXHRcblx0LmV5ZXMge1xuXHRcdHdpZHRoOiAxMjhweDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRtYXJnaW4tdG9wOiA3MHB4O1xuXHRcdFxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdGhlaWdodDogMTVweDtcblx0XHRcdGJvcmRlcjogN3B4IHNvbGlkICRkYXJrO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAyMHB4OyBcblx0XHRcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIycHg7XG4gICAgXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMnB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcblx0XHR9XG5cdFx0XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRoZWlnaHQ6IDE1cHg7XG5cdFx0XHRib3JkZXI6IDdweCBzb2xpZCAkZGFyaztcblx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjJweDtcbiAgICBcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XG5cdFx0XHRib3JkZXItYm90dG9tOiAwO1xuXHRcdH1cblx0fVxuXHRcblx0LmRpbXBsZXMge1xuXHRcdHdpZHRoOiAxODBweDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHRcdFxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR3aWR0aDogMTBweDtcblx0XHRcdGhlaWdodDogMTBweDtcblx0XHRcdG1hcmdpbi1yaWdodDogODBweDsgXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRyZWQsMC40KTtcblx0XHR9XG5cdFx0XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwcHg7XG5cdFx0XHRoZWlnaHQ6IDEwcHg7XG5cdFx0XHRtYXJnaW4tbGVmdDogODBweDtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHJlZCwwLjQpO1xuXHRcdH1cblx0fVxuXHRcblx0Lm1vdXRoIHtcblx0XHR3aWR0aDogNDBweDtcblx0XHRoZWlnaHQ6IDVweDtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGRhcms7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0bWFyZ2luLXRvcDogMjVweDtcblx0fVxufVxuXG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdGNvbG9yOiAkZGFyaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDIuNWVtO1xuXHRwYWRkaW5nLXRvcDogMjBweDtcblx0XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRicmVhaykge1xuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRcdGZvbnQtc2l6ZTogMmVtO1xuICBcdH1cbn1cblxuLmJ0biB7XG5cdGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRibHVlLDEuMCk7XG5cdGNvbG9yOiB3aGl0ZTtcblx0d2lkdGg6IDMyMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGN1cnNvcjogcG9pbnRlcjsgXG5cdG1hcmdpbi10b3A6IDgwcHg7XG5cdG1hcmdpbi1ib3R0b206IDUwcHg7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXHRcblx0QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrKSB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0bWFyZ2luLXRvcDogNjBweDtcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIFx0d2lkdGg6IDIwMHB4O1xuICBcdH1cblx0XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJsdWUsMC44KTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcblx0fVxufSIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRUVFODtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG5cbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5mYWNlIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjMzgzQTQxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuZmFjZSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIH1cbn1cbi5mYWNlIC5iYW5kIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMzODNBNDE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLmZhY2UgLmJhbmQgLnJlZCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUI2RDZEO1xufVxuLmZhY2UgLmJhbmQgLndoaXRlIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLyAzKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4uZmFjZSAuYmFuZCAuYmx1ZSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMyk7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUU3RkRDO1xufVxuLmZhY2UgLmJhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDI3cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xufVxuLmZhY2UgLmJhbmQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU4LCA2NSwgMC4zKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAtMjdweDtcbn1cbi5mYWNlIC5leWVzIHtcbiAgd2lkdGg6IDEyOHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5mYWNlIC5leWVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyOiA3cHggc29saWQgIzM4M0E0MTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjJweDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5mYWNlIC5leWVzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXI6IDdweCBzb2xpZCAjMzgzQTQxO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIycHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG4uZmFjZSAuZGltcGxlcyB7XG4gIHdpZHRoOiAxODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZmFjZSAuZGltcGxlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMTA5LCAxMDksIDAuNCk7XG59XG4uZmFjZSAuZGltcGxlczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDEwOSwgMTA5LCAwLjQpO1xufVxuLmZhY2UgLm1vdXRoIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODNBNDE7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMzgzQTQxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgaDEge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5cbi5idG4ge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVlN2ZkYztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NCwgMTI3LCAyMjAsIDAuOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shared-item/shared-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/shared-item/shared-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: SharedItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedItemComponent", function() { return SharedItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SharedItemComponent = /** @class */ (function () {
    function SharedItemComponent() {
    }
    SharedItemComponent.prototype.ngOnInit = function () { };
    SharedItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shared-item',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./shared-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared-item/shared-item.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./shared-item.component.scss */ "./src/app/components/shared-item/shared-item.component.scss")).default]
        })
    ], SharedItemComponent);
    return SharedItemComponent;
}());



/***/ }),

/***/ "./src/app/models/associations.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/associations.model.ts ***!
  \**********************************************/
/*! exports provided: Association */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Association", function() { return Association; });
var Association = /** @class */ (function () {
    function Association() {
    }
    return Association;
}());



/***/ }),

/***/ "./src/app/pages/notification/notification.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#notifications .unread {\n  --background: var(--ion-color-light);\n}\n#notifications .category-block {\n  margin-bottom: 4px;\n  color: var(--ion-color-color1);\n  text-transform: capitalize;\n}\n#notifications .category-block .description {\n  --font-weight: 10px;\n}\n#notifications .category-banner {\n  border-left: 8px solid var(--ion-color-color1);\n  background: var(--ion-color-light);\n  height: 50px;\n  padding: 10px;\n  font-weight: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90aWZpY2F0aW9uL0M6XFxVc2Vyc1xcbGVub3ZvXFxEb3dubG9hZHNcXGJ1cXNoYUFwcC1tYWluICgzKS9zcmNcXGFwcFxccGFnZXNcXG5vdGlmaWNhdGlvblxcbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDQVI7QURDUTtFQUNJLG1CQUFBO0FDQ1o7QURHSTtFQUNJLDhDQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlmaWNhdGlvbnMge1xuICAgIC51bnJlYWQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICAgIC5jYXRlZ29yeS1ibG9jayB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgLS1mb250LXdlaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgXG4gICAgLmNhdGVnb3J5LWJhbm5lciB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEycHg7XG4gICAgfVxufSIsIiNub3RpZmljYXRpb25zIC51bnJlYWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4jbm90aWZpY2F0aW9ucyAuY2F0ZWdvcnktYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4jbm90aWZpY2F0aW9ucyAuY2F0ZWdvcnktYmxvY2sgLmRlc2NyaXB0aW9uIHtcbiAgLS1mb250LXdlaWdodDogMTBweDtcbn1cbiNub3RpZmljYXRpb25zIC5jYXRlZ29yeS1iYW5uZXIge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/notification/notification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var src_app_models_associations_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/associations.model */ "./src/app/models/associations.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/**
 * Notification Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */







var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(categoryservices, route, router, loadingController, toastController) {
        this.categoryservices = categoryservices;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        //notifications: any = [];
        this.subcategories = [];
        this.subcatById = [];
        this.catId = this.route.snapshot.paramMap.get('id');
        this.catName = this.route.snapshot.paramMap.get('name');
        console.log(this.catId + this.catName);
        //this.products.push(this.p2);
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.getNotification();
    };
    // Get list of notification
    NotificationComponent.prototype.getNotification = function () {
        var e_1, _a;
        //this.notifications = this.notificationsService.getNotifications();
        this.subcategories = this.categoryservices.getSubCategories();
        console.log(this.subcategories);
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subcategories), _c = _b.next(); !_c.done; _c = _b.next()) {
                var subcat = _c.value;
                if (subcat.id_parent == this.catId.toString()) {
                    this.subcatById.push(subcat);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log(this.subcatById);
    };
    NotificationComponent.prototype.gotoProductPage = function (id) {
        var e_2, _a;
        console.log(id);
        var name;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subcatById), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                if (sub.id == id) {
                    name = sub.name[0].value;
                    if (sub.associations != undefined) {
                        if (sub.associations.products != undefined) {
                            console.log("product exicts");
                            this.associations = new src_app_models_associations_model__WEBPACK_IMPORTED_MODULE_4__["Association"]();
                            this.associations.products = sub.associations.products;
                            this.categoryservices.setAssociation(this.associations);
                            this.router.navigate(['tabs/tab2/products/', name]);
                            /*for (var product of this.associations.products) {
                              console.log(product.id);
                            }*/
                        }
                        else {
                            console.log("product undefined");
                            this.presentToast('there are no products');
                        }
                    }
                    else {
                        console.log(" association undefined");
                        this.presentToast('there are no products');
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    // Go to cart page
    NotificationComponent.prototype.gotoCartPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.router.navigate(['/cart']);
                return [2 /*return*/];
            });
        });
    };
    NotificationComponent.prototype.presentToast = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top',
                            color: "warning"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationComponent.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/pages/notification/notification.component.scss")).default]
        })
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.component */ "./src/app/pages/notification/notification.component.ts");
/* harmony import */ var _components_shared_item_shared_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared-item/shared-item.component */ "./src/app/components/shared-item/shared-item.component.ts");








var NotificationModule = /** @class */ (function () {
    function NotificationModule() {
    }
    NotificationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"]
                    }
                ])
            ],
            declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_6__["NotificationComponent"], _components_shared_item_shared_item_component__WEBPACK_IMPORTED_MODULE_7__["SharedItemComponent"]]
        })
    ], NotificationModule);
    return NotificationModule;
}());



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map