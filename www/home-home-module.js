(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"categories\">\n  <ion-item-divider color=\"white\" class=\"ion-padding\" [class]=\"id_lang == 1 ? 'pr' : ''\">\n    <ion-label color=\"dark\" class=\"text-bold\" *ngIf=\"id_lang == 1 else arabicLabel\">Categories</ion-label>\n    <ion-button *ngIf=\"id_lang == 1 else arabicButton\" class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"color1\" routerLink=\"/displayAll/categories\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n  <ion-slides *ngIf=\"categories.length > 0\" [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of categories.slice(0,10)\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"ion-no-margin\" routerLink=\"/tabs/tab2\" routerDirection=\"root\">\n              <div class=\"card-img\" [style.background-image]=\"'url(https://www.bs.version-recette.com/img/c/'+ item.id +'.jpg)'\"></div>\n              <ion-card-header>\n                <ion-card-title class=\"ion-padding-bottom\"> {{item.name[id_lang - 1].value}}</ion-card-title>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n  \n</div>\n\n<ng-template #arabicLabel>\n  <ion-label color=\"dark\" class=\"text-bold flr\">التصنيفات</ion-label>\n</ng-template>\n<ng-template #arabicButton>\n  <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"start\" color=\"color1\" routerLink=\"/displayAll/categories\"\n  routerDirection=\"root\">إظهار الكل</ion-button>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured-products/featured-products.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured-products/featured-products.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"featured-products\">\n  <ion-item-divider color=\"white\" class=\"ion-padding\" [class]=\"id_lang == 1 ? 'pr' : ''\">\n    <ion-label color=\"dark\" class=\"text-bold\" *ngIf=\"id_lang == 1 else arabicLabel\">Feautured products</ion-label>\n    <ion-button *ngIf=\"id_lang == 1 else arabicButton\" class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"color1\" routerLink=\"/displayAll/categories\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of products\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card class=\"ion-no-margin card\"  (click)=\"goToProductDetails(item.id)\">\n              <div class=\"card-img\" [style.background-image]=\"'url(' + item.cover_url + ')'\" (click)=\"goToProductDetails(item)\"></div>\n              <!--<ion-fab vertical=\"top\" horizontal=\"end\">\n                <ion-fab-button>\n                  <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                  <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                </ion-fab-button>\n              </ion-fab>-->\n\n              <ion-card-content>\n                <ion-row class=\"product-name\"> \n                  <h4>{{item.name | slice:0:20}}</h4>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<ng-template #arabicLabel>\n  <ion-label color=\"dark\" class=\"text-bold flr\">منتجات مميزة</ion-label>\n</ng-template>\n<ng-template #arabicButton>\n  <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"start\" color=\"color1\" routerLink=\"/displayAll/categories\"\n  routerDirection=\"root\">إظهار الكل</ion-button>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-top-slider/home-top-slider.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-top-slider/home-top-slider.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Top Banner Slider -->\n<div id=\"top-slider\" class=\"ion-padding\" *ngIf=\"!isEmpty(this.slides)\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let slide of slides\">\n      <img src=\"{{slide['path']}}\" />\n    </ion-slide>\n  </ion-slides>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hot-deals/hot-deals.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hot-deals/hot-deals.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"hot-deals\">\n  <ion-item-divider color=\"white\" class=\"ion-padding\" [class]=\"id_lang == 0 ? 'pr' : ''\">\n    <ion-label color=\"dark\" class=\"text-bold\" *ngIf=\"id_lang == 0 else arabicLabel\">Our celebrities</ion-label>\n    <ion-button *ngIf=\"id_lang == 0 else arabicButton\" class=\"ion-margin-end\" size=\"small\" slot=\"end\" color=\"color1\" routerLink=\"/displayAll/categories\"\n      routerDirection=\"root\">Sell All</ion-button>\n  </ion-item-divider>\n\n  <ion-slides [options]=\"slideOpts\" class=\"ion-padding-top\">\n    <ion-slide *ngFor=\"let item of images\">\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-no-padding\">\n          <ion-col>\n            <ion-card class=\"ion-no-padding\">\n              <img [src]=\"item.id\" />\n              <ion-card-title _ngcontent-nvf-c146=\"\" class=\"ion-padding-bottom ion-inherit-color md hydrated\" role=\"heading\" aria-level=\"2\">\n                {{item.name}}\n              </ion-card-title>\n              <ion-card-header>\n                <ion-card-subtitle></ion-card-subtitle>\n              </ion-card-header>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<ng-template #arabicLabel>\n  <ion-label color=\"dark\" class=\"text-bold flr\">مشاهيرنا</ion-label>\n</ng-template>\n<ng-template #arabicButton>\n  <ion-button class=\"ion-margin-end\" size=\"small\" slot=\"start\" color=\"color1\" routerLink=\"/displayAll/categories\"\n  routerDirection=\"root\">إظهار الكل</ion-button>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/searchbar/searchbar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/searchbar/searchbar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"searchbar\" class=\"ion-padding\">\n  <ion-searchbar [class]=\"id_lang == 1 ? 'ion-text-start' : 'ion-text-end'\" \n  [placeholder]=\"id_lang == 1 ? 'Search your product' : 'ابحث في منتجك'\" (ionFocus)=\"gotoSearchPage()\"></ion-searchbar>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Header -->\n<ion-header [translucent]=\"true\" class=\"ion-no-border\" *ngIf=\"id_lang == 1 else arabicMenu\">\n  <ion-toolbar class=\"login-logo\" color=\"color1\">\n\n    <!-- Menu Option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Title of the app -->\n    <img mode=\"ios\" src=\"assets/images/buqsha.png\" alt=\"logo\">\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ng-template #arabicMenu>\n  <ion-header [translucent]=\"true\" class=\"ion-no-border\">\n    <ion-toolbar class=\"login-logo\" color=\"color1\">\n      <!-- Title of the app -->\n      <img mode=\"ios\" src=\"assets/images/buqsha.png\" alt=\"logo\">\n      <!-- Cart Button Option -->\n      <ion-buttons slot=\"start\">\n        <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n          <ion-icon name=\"cart\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n        <!-- Menu Option -->\n        <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</ng-template>\n\n<!-- Contents -->\n<ion-content id=\"home\" fullscreen>\n\n  <!-- Search bar -->\n  <app-searchbar></app-searchbar>\n\n  <!-- Top Banner Slider -->\n  <app-home-top-slider></app-home-top-slider>\n\n  <!-- Categories -->\n  <app-categories></app-categories>\n\n  <!-- Featured Products -->\n  <app-featured-products></app-featured-products>\n\n  <!-- Hot Deals -->\n  <app-hot-deals></app-hot-deals>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/categories/categories.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categories/categories.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#categories ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#categories ion-card-title {\n  font-size: 1rem;\n}\n#categories .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#categories .text-bold {\n  font-weight: bold;\n}\n#categories ion-item-divider {\n  padding-bottom: 0 !important;\n}\n#categories .flr {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n}\n#categories .pr {\n  padding-right: 0 !important;\n}\n#categories ion-card {\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL0M6XFxVc2Vyc1xcbGVub3ZvXFxEb3dubG9hZHNcXGJ1cXNoYUFwcC1tYWluICgzKS9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUNBUjtBREdJO0VBQ0ksZUFBQTtBQ0RSO0FESUk7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0FDSFI7QURLSTtFQUNJLDRCQUFBO0FDSFI7QURLSTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUNIUjtBREtJO0VBQ0ksMkJBQUE7QUNIUjtBREtJO0VBQ0ksYUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2F0ZWdvcmllcyB7XG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5jYXJkLWltZyB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuXG4gICAgLnRleHQtYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZsciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5wciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIH1cbn0iLCIjY2F0ZWdvcmllcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG4jY2F0ZWdvcmllcyBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiNjYXRlZ29yaWVzIC5jYXJkLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG4jY2F0ZWdvcmllcyAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jY2F0ZWdvcmllcyBpb24taXRlbS1kaXZpZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiNjYXRlZ29yaWVzIC5mbHIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuI2NhdGVnb3JpZXMgLnByIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuI2NhdGVnb3JpZXMgaW9uLWNhcmQge1xuICBoZWlnaHQ6IDI0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_ht_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ht//category.service */ "./src/app/services/ht/category.service.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, storage) {
        this.categoryService = categoryService;
        this.storage = storage;
        this.categories = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 2,
        };
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        /*this.storage.get('id_lang').then(id_lang => {
          this.id_lang = id_lang;
          this.categoryService.getAll().subscribe(res => {
            let str = res.body.substring(res.body.indexOf('RETURN HTTP BODY</h6><pre>') + 50 , res.body.lastIndexOf(']}') + 1);
            let data = JSON.parse(this.decodeHTML(str));
            data.forEach(item => {
              if(item['id_parent'] == 2 &&
              item.hasOwnProperty('associations') && item.associations.hasOwnProperty('products') &&
              item.associations.products.length > 0) {
              //if(item['id_parent'] != 0 && item['id_parent'] != 2 && item['id_parent'] != 1) {
                item.categoriy_name = item.name.find(el => el.id == this.id_lang).value;
                this.categories.push(item)
              }
            });
          })
        })
    
    
        this.storage.get('id_lang').then(id_lang => {
          this.id_lang = id_lang;
          this.categoryService.getFirstLevel().subscribe(res => {
            if(res.status === 200) {
              this.categories = res.body['categories'];
            }
          })
        })*/
        var _this = this;
        this.getCategories().then(function () {
            _this.categories.forEach(function (category, index) {
                _this.categoryService.getImageUrl(category.id).subscribe(function (data) {
                    _this.createImageFromBlob(data.body, index);
                });
            });
        });
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        return this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
            return new Promise(function (resolve, reject) {
                _this.categoryService.getFirstLevel().subscribe(function (res) {
                    _this.categories = res.body['categories'];
                    resolve(_this.categories);
                }, function (error) { return reject(error); });
            });
        });
    };
    CategoriesComponent.prototype.decodeHTML = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    ;
    CategoriesComponent.prototype.checkImage = function (url) {
        var request = new XMLHttpRequest();
        var check = false;
        request.open("GET", url, true);
        request.send();
        request.onload = function () {
            check = request.status == 200;
        };
        return check;
    };
    CategoriesComponent.prototype.createImageFromBlob = function (image, index) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.categories[index].image = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _services_ht_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categories/categories.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categories.component.scss */ "./src/app/components/categories/categories.component.scss")).default]
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/components/featured-products/featured-products.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/featured-products/featured-products.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#featured-products .card {\n  height: 240px;\n}\n#featured-products .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#featured-products .product-name {\n  padding: 0;\n  text-align: left;\n}\n#featured-products .product-name h4 {\n  font-size: 1rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#featured-products .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#featured-products ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#featured-products .text-bold {\n  font-weight: bold;\n}\n#featured-products ion-item-divider {\n  padding-bottom: 0 !important;\n}\n#featured-products .flr {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n}\n#featured-products .pr {\n  padding-right: 0 !important;\n}\n#featured-products ion-card {\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9DOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxidXFzaGFBcHAtbWFpbiAoMykvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZlYXR1cmVkLXByb2R1Y3RzXFxmZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7QUNBUjtBREVJO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER0k7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0FDRFo7QURLSTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNIUjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDSlI7QURPSTtFQUNJLGlCQUFBO0FDTFI7QURPSTtFQUNJLDRCQUFBO0FDTFI7QURPSTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUNMUjtBRE9JO0VBQ0ksMkJBQUE7QUNMUjtBRE9JO0VBQ0ksYUFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlZC1wcm9kdWN0cy9mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmZWF0dXJlZC1wcm9kdWN0cyB7XG4gICAgLmNhcmQge1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIH1cbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByZXZpb3VzLXByaWNlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAudGV4dC1ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZmxyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLnByIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGhlaWdodDogMjQwcHg7XG4gICAgfVxufSIsIiNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCB7XG4gIGhlaWdodDogMjQwcHg7XG59XG4jZmVhdHVyZWQtcHJvZHVjdHMgLmNhcmQtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdC1uYW1lIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdC1uYW1lIGg0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogcmdiYSg4LCA4LCA4LCAwLjU4KTtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyAucHJldmlvdXMtcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jZmVhdHVyZWQtcHJvZHVjdHMgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuI2ZlYXR1cmVkLXByb2R1Y3RzIC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyBpb24taXRlbS1kaXZpZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyAuZmxyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiNmZWF0dXJlZC1wcm9kdWN0cyAucHIge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4jZmVhdHVyZWQtcHJvZHVjdHMgaW9uLWNhcmQge1xuICBoZWlnaHQ6IDI0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/featured-products/featured-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/featured-products/featured-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FeaturedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductsComponent", function() { return FeaturedProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_ht_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ht/product.service */ "./src/app/services/ht/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");






var FeaturedProductsComponent = /** @class */ (function () {
    function FeaturedProductsComponent(productService, modalController, router, storage) {
        this.productService = productService;
        this.modalController = modalController;
        this.router = router;
        this.storage = storage;
        this.products = [];
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 2,
        };
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    FeaturedProductsComponent.prototype.getProductList = function () {
        var _this = this;
        this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
            _this.productService.getFeatured(id_lang).subscribe(function (res) {
                Object.values(res.body).forEach(function (product, index) {
                    var cover_id = product.cover_image_id;
                    var cover_url = 'https://www.bs.version-recette.com/img/p';
                    cover_id.split('').forEach(function (item, index) {
                        cover_url += index == cover_id.split('').length ? "/" + item + "/" : "/" + item;
                    });
                    cover_url += "/" + cover_id + ".jpg";
                    product.cover_url = cover_url;
                    _this.products.push(product);
                });
            });
        });
    };
    FeaturedProductsComponent.prototype.goToProductDetails = function (id) {
        this.router.navigate(['categoryProduct', id]);
    };
    FeaturedProductsComponent.prototype.decodeHTML = function (html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };
    ;
    FeaturedProductsComponent.ctorParameters = function () { return [
        { type: _services_ht_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    FeaturedProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured-products',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./featured-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/featured-products/featured-products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./featured-products.component.scss */ "./src/app/components/featured-products/featured-products.component.scss")).default]
        })
    ], FeaturedProductsComponent);
    return FeaturedProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/home-top-slider/home-top-slider.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-top-slider/home-top-slider.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#top-slider ion-slides {\n  --bullet-background: var(--ion-color-light);\n  --bullet-background-active: var(--ion-color-white);\n}\n#top-slider ion-slides img {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXRvcC1zbGlkZXIvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lLXRvcC1zbGlkZXJcXGhvbWUtdG9wLXNsaWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXRvcC1zbGlkZXIvaG9tZS10b3Atc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksMkNBQUE7RUFDQSxrREFBQTtBQ0FSO0FERVE7RUFDSSxtQkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXRvcC1zbGlkZXIvaG9tZS10b3Atc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvcC1zbGlkZXIge1xuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIjdG9wLXNsaWRlciBpb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG4jdG9wLXNsaWRlciBpb24tc2xpZGVzIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/home-top-slider/home-top-slider.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-top-slider/home-top-slider.component.ts ***!
  \*************************************************************************/
/*! exports provided: HomeTopSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTopSliderComponent", function() { return HomeTopSliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var HomeTopSliderComponent = /** @class */ (function () {
    function HomeTopSliderComponent(http) {
        this.http = http;
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            loop: true,
            autoplay: true,
            speed: 400,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
        };
    }
    HomeTopSliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSlides().subscribe(function (res) {
            if (res.status === 200) {
                _this.slides = res.body;
            }
        });
    };
    HomeTopSliderComponent.prototype.isEmpty = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
            }
        }
        return JSON.stringify(obj) === JSON.stringify({});
    };
    HomeTopSliderComponent.prototype.getSlides = function () {
        return this.http.get("https://www.bs.version-recette.com//modules/buqshaMobileSlides/ajax/get.php", {
            observe: 'response',
        });
    };
    HomeTopSliderComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HomeTopSliderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-top-slider',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-top-slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-top-slider/home-top-slider.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-top-slider.component.scss */ "./src/app/components/home-top-slider/home-top-slider.component.scss")).default]
        })
    ], HomeTopSliderComponent);
    return HomeTopSliderComponent;
}());



/***/ }),

/***/ "./src/app/components/hot-deals/hot-deals.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/hot-deals/hot-deals.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#hot-deals ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n#hot-deals ion-card-title {\n  font-size: 1.2rem;\n}\n#hot-deals .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#hot-deals .text-bold {\n  font-weight: bold;\n}\n#hot-deals .flr {\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n}\n#hot-deals .pr {\n  padding-right: 0 !important;\n}\n#hot-deals ion-card {\n  height: 240px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3QtZGVhbHMvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob3QtZGVhbHNcXGhvdC1kZWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob3QtZGVhbHMvaG90LWRlYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDQVI7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNGUjtBREtJO0VBQ0ksaUJBQUE7QUNIUjtBREtJO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQ0hSO0FES0k7RUFDSSwyQkFBQTtBQ0hSO0FES0k7RUFDSSxhQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvdC1kZWFscy9ob3QtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG90LWRlYWxzIHtcbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG5cbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmZsciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuICAgIC5wciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIH1cbn0iLCIjaG90LWRlYWxzIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn1cbiNob3QtZGVhbHMgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiNob3QtZGVhbHMgLmNhcmQtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiNob3QtZGVhbHMgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI2hvdC1kZWFscyAuZmxyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiNob3QtZGVhbHMgLnByIHtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuI2hvdC1kZWFscyBpb24tY2FyZCB7XG4gIGhlaWdodDogMjQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/hot-deals/hot-deals.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/hot-deals/hot-deals.component.ts ***!
  \*************************************************************/
/*! exports provided: HotDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotDealsComponent", function() { return HotDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");




var HotDealsComponent = /** @class */ (function () {
    function HotDealsComponent(categoryService, storage) {
        this.categoryService = categoryService;
        this.storage = storage;
        this.images = [];
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 2,
        };
    }
    HotDealsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
        });
        this.images = [
            {
                id: "https://www.bs.version-recette.com//img/cms/1638457647649.png",
                name: "Rasha Alneamy"
            },
            {
                id: "https://www.bs.version-recette.com//img/cms/1638457619687.png",
                name: "Nana",
            },
            {
                id: "https://www.bs.version-recette.com//img/cms/1638457606770.png",
                name: "Muna Artist",
            },
            {
                id: "https://www.bs.version-recette.com//img/cms/1638457582567.png",
                name: "Blogger ShoSho"
            }
        ];
    };
    HotDealsComponent.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    HotDealsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hot-deals',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./hot-deals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hot-deals/hot-deals.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./hot-deals.component.scss */ "./src/app/components/hot-deals/hot-deals.component.scss")).default]
        })
    ], HotDealsComponent);
    return HotDealsComponent;
}());



/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#searchbar {\n  background: var(--ion-color-color1);\n}\n#searchbar ion-searchbar {\n  --background: var(--ion-color-white);\n  --border-radius: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2hiYXJcXHNlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUNDSjtBREFJO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hiYXIvc2VhcmNoYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaGJhciB7XG4gICAgYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItY29sb3IxKTsgXG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAgMjVweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIjc2VhcmNoYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG59XG4jc2VhcmNoYmFyIGlvbi1zZWFyY2hiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/searchbar/searchbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");




var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    SearchbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
        });
    };
    SearchbarComponent.prototype.gotoSearchPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.router.navigate(['/tabs/search']);
                return [2 /*return*/];
            });
        });
    };
    SearchbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    SearchbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./searchbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/searchbar/searchbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./searchbar.component.scss */ "./src/app/components/searchbar/searchbar.component.scss")).default]
        })
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 16px;\n  text-align: center;\n  background-color: var(--ion-color-color1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxidXFzaGFBcHAtbWFpbiAoMykvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tbG9nbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgfSIsIi5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/login.service */ "./src/app/services/auth/login.service.ts");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, loginService, storage, toastController) {
        this.router = router;
        this.loginService = loginService;
        this.storage = storage;
        this.toastController = toastController;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
        });
    };
    // Go to cart page
    HomeComponent.prototype.gotoCartPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.router.navigate(['/cart']);
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/featured-products/featured-products.component */ "./src/app/components/featured-products/featured-products.component.ts");
/* harmony import */ var _components_hot_deals_hot_deals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/hot-deals/hot-deals.component */ "./src/app/components/hot-deals/hot-deals.component.ts");
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/categories/categories.component */ "./src/app/components/categories/categories.component.ts");
/* harmony import */ var _components_home_top_slider_home_top_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/home-top-slider/home-top-slider.component */ "./src/app/components/home-top-slider/home-top-slider.component.ts");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/searchbar/searchbar.component */ "./src/app/components/searchbar/searchbar.component.ts");












var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    }
                ])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_7__["FeaturedProductsComponent"],
                _components_hot_deals_hot_deals_component__WEBPACK_IMPORTED_MODULE_8__["HotDealsComponent"],
                _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"],
                _components_home_top_slider_home_top_slider_component__WEBPACK_IMPORTED_MODULE_10__["HomeTopSliderComponent"],
                _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_11__["SearchbarComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map