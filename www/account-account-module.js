(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Account Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side Menu -->\n    <ion-buttons [slot]=\"id_lang == 1 ? 'start' : 'end'\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Page title -->\n    <ion-title *ngIf=\"id_lang == 1 else arabicTitle\">Account</ion-title>\n    <ng-template #arabicTitle>\n      <ion-title class=\"ion-text-end\">الحساب</ion-title>\n    </ng-template>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"account\" class=\"ion-padding\" *ngIf=\"id_lang == 1 else arabicTemplate\">\n\n  <!-- User/Profile Infos -->\n  <ion-item lines=\"none\">\n    <!-- Avatar/Image of User -->\n\n    <!-- Name of User -->\n    <ion-label>\n      <h2 class=\"ion-text-center\">{{ AppUser.firstname }} {{ AppUser.lastname }}</h2>\n    </ion-label>\n  </ion-item>\n\n  <!-- Some Menu Options -->\n  <ion-card>\n    <ion-grid>\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <ion-icon name=\"heart\" style=\"zoom:1.5;\"></ion-icon><br />\n          <ion-text>Wish List</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"checkbox-outline\" style=\"zoom:1.5;\"></ion-icon><br />\n          Orders\n        </ion-col>\n        <ion-col>\n          <ion-icon name=\"cart\" style=\"zoom:1.5;\"></ion-icon><br />\n          Cart\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- Some Orders Option -->\n  <ion-card>\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>Orders</ion-label>\n      </ion-item-divider>\n\n      <ion-item lines=\"none\">\n        <ion-label>Unpaid</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>To be shipped</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Shipped</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>To be reviewed</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>In dispute</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n\n  <ion-card>\n    <ion-item-group>\n      <ion-item lines=\"none\">\n        <ion-label>Wallet</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Shipping Address</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Redeem invite code</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Questions & Answers</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n\n  <ion-card>\n    <ion-item-group>\n      <ion-item lines=\"none\">\n        <ion-label>Settings</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>App Suggestion</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>Help Center</ion-label>\n        <ion-icon name=\"arrow-forward\" size=\"small\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n</ion-content>\n\n\n<ng-template #arabicTemplate>\n  <ion-content id=\"account\" class=\"ion-padding\">\n\n    <!-- User/Profile Infos -->\n    <ion-item lines=\"none\" class=\"ion-text-end\">\n      <!-- Avatar/Image of User -->\n  \n      <!-- Name of User -->\n      <ion-label>\n        <h2 class=\"ion-text-center\">{{ AppUser.firstname }} {{ AppUser.lastname }}</h2>\n      </ion-label>\n    </ion-item>\n  \n    <!-- Some Menu Options -->\n    <ion-card>\n      <ion-grid>\n        <ion-row class=\"ion-text-center\">\n          <ion-col>\n            <ion-icon name=\"heart\" style=\"zoom:1.5;\"></ion-icon><br />\n            <ion-text class=\"float-r\">قائمة الرغبات</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"checkbox-outline\" style=\"zoom:1.5;\"></ion-icon><br />\n            الطلبات\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"cart\" style=\"zoom:1.5;\"></ion-icon><br />\n            عربة التسوق\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  \n    <!-- Some Orders Option -->\n    <ion-card>\n      <ion-item-group>\n        <ion-item-divider>\n          <ion-label>الطلبات</ion-label>\n        </ion-item-divider>\n  \n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>غير مدفوعة</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>ليتم شحنها</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>تم شحنها </ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>للمراجعة</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>في النزاع</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n  \n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>محفظة نقود</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>عنوان الشحن</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>استرداد رمز الدعوة</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>أسئلة و أجوبة</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n  \n    <ion-card>\n      <ion-item-group>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>إعدادات</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>اقتراح التطبيق</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" class=\"ion-text-end\">\n          <ion-label>مركز المساعدة</ion-label>\n          <ion-icon name=\"arrow-back\" size=\"small\" slot=\"start\"></ion-icon>\n        </ion-item>\n      </ion-item-group>\n    </ion-card>\n  </ion-content>\n</ng-template>");

/***/ }),

/***/ "./src/app/pages/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#account {\n  /*.card img{\n    position: absolute;\n    top: 20px;\n    right: 15px;\n    max-height: 120px;\n  }\n\n  .card-1{\n    background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);\n      background-repeat: no-repeat;\n      background-position: right;\n      background-size: 80px;\n  }\n\n  .card-2{\n     background-image: url(https://ionicframework.com/img/getting-started/components-card.png);\n        background-repeat: no-repeat;\n      background-position: right;\n      background-size: 80px;\n  }\n\n  .card-3{\n     background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);\n        background-repeat: no-repeat;\n      background-position: right;\n      background-size: 80px;\n  }*/\n}\n#account h2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n#account .card {\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);\n  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow;\n  padding: 14px 80px 18px 36px;\n  cursor: pointer;\n}\n#account .card:hover {\n  transform: scale(1.05);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 990px) {\n  #account {\n    /*.row {\n      display: grid;\n      grid-gap: 10px;\n      grid-template-columns: repeat(2,50%);\n      align-items: center;\n      justify-content: center;\n    }\n    .card {\n      padding: 0;\n      margin: 0;\n      height: 15vh;\n    }*/\n  }\n  #account .card {\n    margin: 20px;\n    margin: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  #account ion-icon {\n    font-size: 1.25em;\n  }\n}\n#account .float-r {\n  display: block;\n  width: 100%;\n  text-align: right;\n  padding-right: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9DOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxidXFzaGFBcHAtbWFpbiAoMykvc3JjXFxhcHBcXHBhZ2VzXFxhY2NvdW50XFxhY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFvQkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7QUNRSjtBRDNCSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUM2QlI7QUQzQkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUVBQUE7RUFDRSxtRkFBQTtFQUNKLDRCQUFBO0VBQ0EsZUFBQTtBQzZCTjtBRDFCSTtFQUNLLHNCQUFBO0VBQ0QsMEVBQUE7QUM0QlI7QURJSTtFQWhESjtJQTJETTs7Ozs7Ozs7Ozs7TUFBQTtFQ0FKO0VEVkk7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VDWU47RURWSTtJQUNFLGlCQUFBO0VDWU47QUFDRjtBREVJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWNjb3VudCB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLDAsMCwuMDgpLCAwIDAgNnB4IHJnYmEoMCwwLDAsLjA1KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMiksLjNzIGJveC1zaGFkb3csLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllciguMTU1LDEuMTA1LC4yOTUsMS4xMik7XG4gICAgICBwYWRkaW5nOiAxNHB4IDgwcHggMThweCAzNnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZDpob3ZlcntcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsLjEyKSwgMCA0cHggOHB4IHJnYmEoMCwwLDAsLjA2KTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyouY2FyZCBpbWd7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDIwcHg7XG4gICAgICByaWdodDogMTVweDtcbiAgICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC0xe1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2ltZy9nZXR0aW5nLXN0YXJ0ZWQvaW9uaWMtbmF0aXZlLWNhcmQucG5nKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmQtMntcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vaW1nL2dldHRpbmctc3RhcnRlZC9jb21wb25lbnRzLWNhcmQucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZC0ze1xuICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9pbWcvZ2V0dGluZy1zdGFydGVkL3RoZW1pbmctY2FyZC5wbmcpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XG4gICAgfSovXG4gICAgXG4gICAgQG1lZGlhKG1heC13aWR0aDogOTkwcHgpe1xuICAgICAgLmNhcmR7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICB9XG4gICAgICAvKi5yb3cge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiw1MCUpO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDE1dmg7XG4gICAgICB9Ki9cbiAgICB9IFxuICAgIC5mbG9hdC1yIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICB9XG59IiwiI2FjY291bnQge1xuICAvKi5jYXJkIGltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIG1heC1oZWlnaHQ6IDEyMHB4O1xuICB9XG5cbiAgLmNhcmQtMXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vaW1nL2dldHRpbmctc3RhcnRlZC9pb25pYy1uYXRpdmUtY2FyZC5wbmcpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICB9XG5cbiAgLmNhcmQtMntcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2ltZy9nZXR0aW5nLXN0YXJ0ZWQvY29tcG9uZW50cy1jYXJkLnBuZyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcbiAgfVxuXG4gIC5jYXJkLTN7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9pbWcvZ2V0dGluZy1zdGFydGVkL3RoZW1pbmctY2FyZC5wbmcpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XG4gIH0qL1xufVxuI2FjY291bnQgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jYWNjb3VudCAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHRyYW5zaXRpb246IDAuM3MgdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE1NSwgMS4xMDUsIDAuMjk1LCAxLjEyKSwgMC4zcyBib3gtc2hhZG93LCAwLjNzIC13ZWJraXQtdHJhbnNmb3JtIGN1YmljLWJlemllcigwLjE1NSwgMS4xMDUsIDAuMjk1LCAxLjEyKTtcbiAgcGFkZGluZzogMTRweCA4MHB4IDE4cHggMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2FjY291bnQgLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAjYWNjb3VudCB7XG4gICAgLyoucm93IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsNTAlKTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcmQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGhlaWdodDogMTV2aDtcbiAgICB9Ki9cbiAgfVxuICAjYWNjb3VudCAuY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIH1cbiAgI2FjY291bnQgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICB9XG59XG4jYWNjb3VudCAuZmxvYXQtciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/login.service */ "./src/app/services/auth/login.service.ts");
/* harmony import */ var _components_account_personal_informations_personal_informations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account/personal-informations/personal-informations.component */ "./src/app/components/account/personal-informations/personal-informations.component.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");









var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, route, loadingController, toastController, loginService, modalController, storage) {
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.loginService = loginService;
        this.modalController = modalController;
        this.storage = storage;
        this.isLoggedIn = false;
        this.AppUser = {
            'firstname': '',
            'lastname': '',
        };
        this.modalCompnents = [_components_account_personal_informations_personal_informations_component__WEBPACK_IMPORTED_MODULE_5__["PersonalInformationsComponent"]];
        route.params.subscribe(function (val) {
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
            _this.loginService.getUser().then(function (user) {
                if (user == null) {
                    _this.router.navigate(['login']);
                }
                else {
                    _this.isLoggedIn = true;
                    _this.AppUser = user[0];
                }
            });
        });
    };
    AccountComponent.prototype.presentLoading = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loading;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Please Wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [2 /*return*/, loading.present()];
                }
            });
        });
    };
    AccountComponent.prototype.presentModal = function (index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: this.modalCompnents[index],
                            componentProps: { user: this.AppUser }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
    ]; };
    AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/account/account.component.scss")).default]
        })
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.component */ "./src/app/pages/account/account.component.ts");







var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]
                    }
                ])
            ],
            declarations: [_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map