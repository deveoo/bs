(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Category Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side menu option -->\n    <ion-buttons [slot]=\"this.id_lang == 1 ? 'start' : 'end'\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Page tile -->\n    <ion-title class=\"ion-text-center\" *ngIf=\"id_lang == 1 else arabicTitle\">Categories</ion-title>\n    <ng-template #arabicTitle>\n      <ion-title class=\"ion-text-center\">التصنيفات</ion-title>\n    </ng-template>\n\n    <!-- Cart Button Option -->\n    <ion-buttons [slot]=\"this.id_lang == 1 ? 'end' : 'start'\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Main Contents -->\n<ion-content id=\"category\" class=\"ion-padding\">\n\n  <!-- Category View Options -->\n  <div class=\"ion-text-end categories_btns\" *ngIf=\"id_lang == 1 else arabicButtonsTemplate\">\n    <div class=\"back\" >\n      <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-back\" routerLink=\"/tabs/tab1\"\n       routerDirection=\"root\">\n      </ion-back-button>\n    </div> \n    <div class=\"options\">\n      <!-- One Column Option -->\n      <ion-button fill=\"clear\" [color]=\"oneColumn ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showOneColumn()\">\n        <ion-icon slot=\"icon-only\" name=\"square\"></ion-icon>\n      </ion-button>\n\n      <!-- Grid View Option -->\n      <ion-button fill=\"clear\" [color]=\"grid ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n        <ion-icon slot=\"icon-only\" name=\"grid\"></ion-icon>\n      </ion-button>\n\n      <!-- List view option -->\n      <ion-button fill=\"clear\" [color]=\"list ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showList()\">\n        <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n  <ng-template #arabicButtonsTemplate>\n    <div class=\"ion-text-end categories_btns ar\">\n      <div class=\"options\">\n        <!-- One Column Option -->\n        <ion-button fill=\"clear\" [color]=\"oneColumn ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showOneColumn()\">\n          <ion-icon slot=\"icon-only\" name=\"square\"></ion-icon>\n        </ion-button>\n  \n        <!-- Grid View Option -->\n        <ion-button fill=\"clear\" [color]=\"grid ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n          <ion-icon slot=\"icon-only\" name=\"grid\"></ion-icon>\n        </ion-button>\n  \n        <!-- List view option -->\n        <ion-button fill=\"clear\" [color]=\"list ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showList()\">\n          <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n        </ion-button>\n      </div>\n      <div class=\"back\" >\n        <ion-back-button color=\"color1\" default-href=\"\" text=\"\" icon=\"arrow-forward\" routerLink=\"/tabs/tab1\"\n         routerDirection=\"root\">\n        </ion-back-button>\n      </div> \n    </div>\n  </ng-template>\n  <!-- End Category View Options -->\n\n  <!-- Grid View Contents -->\n  <ion-grid>\n    <ion-row *ngIf=\"grid\">\n      <ion-col size=\"6\" *ngFor=\"let item of categories\">\n        <ion-card class=\"ion-no-padding ion-no-margin card\" routerLink=\"/subcategory/{{item['id']}}\" routerDirection=\"forward\">\n          <ion-img src=\"https://www.bs.version-recette.com/img/c/{{item.id}}.jpg\" class=\"category_img\"></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle class=\"category_title\">{{item.name[id_lang - 1].value}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- One COlumn View Contents -->\n    <ion-row *ngIf=\"oneColumn\">\n      <ion-col size=\"12\" *ngFor=\"let item of categories\">\n        <ion-card class=\"ion-no-padding ion-no-margin card\" routerLink=\"/tabs/products\" routerDirection=\"root\">\n          <ion-img src=\"https://www.bs.version-recette.com/img/c/{{item.id}}.jpg\" class=\"category_img\"></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle class=\"category_title\">{{item.name[id_lang - 1].value}}</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- List View Contents -->\n  <ion-list lines=\"none\" *ngIf=\"list\">\n    <ion-item class=\"ion-padding-bottom\" *ngFor=\"let item of categories\" routerLink=\"/tabs/products\"\n      routerDirection=\"root\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"https://www.bs.version-recette.com/img/c/{{item.id}}.jpg\" class=\"category_img\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-label>\n        <ion-card-subtitle class=\"category_title\">{{item.name[id_lang - 1].value}}</ion-card-subtitle>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/category/category.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/category/category.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#category ion-list {\n  margin-bottom: 0px !important;\n}\n#category .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#category .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#category .item h2 {\n  font-size: 1.5rem;\n}\n#category .card {\n  text-align: center;\n  height: 225px;\n}\n#category .category_img {\n  display: block;\n  margin: auto;\n}\n#category .category_title {\n  font-size: 13px;\n}\n#category .categories_btns {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#category .categories_btns.ar {\n  display: grid;\n  grid-template-columns: 33% 15%;\n  align-items: center;\n  justify-content: space-between;\n}\n#category .category_img.list img {\n  width: 50%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZCQUFBO0FDQVI7QURJUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRlo7QURJWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGaEI7QURNUTtFQUNJLGlCQUFBO0FDSlo7QURPSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0xSO0FET0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0xSO0FET0k7RUFDSSxlQUFBO0FDTFI7QURPSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTFI7QURPSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNMUjtBRE9JO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhdGVnb3J5IHtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAyMjVweDsgICBcbiAgICB9XG4gICAgLmNhdGVnb3J5X2ltZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5jYXRlZ29yeV90aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLmNhdGVnb3JpZXNfYnRucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhdGVnb3JpZXNfYnRucy5hciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDE1JTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAuY2F0ZWdvcnlfaW1nLmxpc3QgaW1nIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn0iLCIjY2F0ZWdvcnkgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbiNjYXRlZ29yeSAuaXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG59XG4jY2F0ZWdvcnkgLml0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI2NhdGVnb3J5IC5pdGVtIGgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4jY2F0ZWdvcnkgLmNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjI1cHg7XG59XG4jY2F0ZWdvcnkgLmNhdGVnb3J5X2ltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4jY2F0ZWdvcnkgLmNhdGVnb3J5X3RpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuI2NhdGVnb3J5IC5jYXRlZ29yaWVzX2J0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY2F0ZWdvcnkgLmNhdGVnb3JpZXNfYnRucy5hciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDE1JTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI2NhdGVnb3J5IC5jYXRlZ29yeV9pbWcubGlzdCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_ht_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ht/category.service */ "./src/app/services/ht/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(router, categoryService, storage) {
        this.router = router;
        this.categoryService = categoryService;
        this.storage = storage;
        this.categories = [];
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategories().then(function () {
            _this.categories.forEach(function (category, index) {
                _this.categoryService.getImageUrl(category.id).subscribe(function (data) {
                    _this.createImageFromBlob(data.body, index);
                });
            });
        });
    };
    CategoryComponent.prototype.getCategories = function () {
        var _this = this;
        /*this.storage.get('id_lang').then(id_lang => {
          this.id_lang = id_lang;
          this.categoryService.getCategories().subscribe(res =>{
            if(res.status === 200){
              let categoriesIDs = res.body['categories'];
              categoriesIDs.forEach(data => {
                this.categoryService.getCategory(data.id).subscribe(res => {
                  if(res.status === 200) {
                    let category = res.body['category'];
                    if(category['id_parent'] == 2 &&
                    category.hasOwnProperty('associations') && category.associations.hasOwnProperty('products') &&
                    category.associations.products.length > 0) {
                      let category_name = category.name.find(el => el.id == this.id_lang);
                      category.category_name = typeof category_name != 'undefined' ?  category_name : category.name.find(el => el.id == 1);
                      this.homeCategories.push(category)
                    }
                  }
                })
              })
            }
          })
        });*/
        return this.storage.get('id_lang').then(function (id_lang) {
            _this.id_lang = id_lang;
            return new Promise(function (resolve, reject) {
                _this.categoryService.getFirstLevel().subscribe(function (res) {
                    _this.categories = res.body['categories'];
                    _this.categories.sort(function (a, b) {
                        if (a.name[id_lang - 1].value < b.name[id_lang - 1].value) {
                            return -1;
                        }
                        if (a.name[id_lang - 1].value > b.name[id_lang - 1].value) {
                            return 1;
                        }
                        return 0;
                    });
                    resolve(_this.categories);
                }, function (error) { return reject(error); });
            });
        });
    };
    CategoryComponent.prototype.createImageFromBlob = function (image, index) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.categories[index].image = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    // One column view function
    CategoryComponent.prototype.showOneColumn = function () {
        this.oneColumn = true;
        this.grid = false;
        this.list = false;
    };
    // Grid view function
    CategoryComponent.prototype.showGrid = function () {
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    };
    // List view function
    CategoryComponent.prototype.showList = function () {
        this.list = true;
        this.grid = false;
        this.oneColumn = false;
    };
    CategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_ht_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category.component.scss */ "./src/app/pages/category/category.component.scss")).default]
        })
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.component */ "./src/app/pages/category/category.component.ts");







var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
                    }
                ])
            ],
            declarations: [_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]],
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=category-category-module.js.map