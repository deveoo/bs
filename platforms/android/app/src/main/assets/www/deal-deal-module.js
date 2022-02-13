(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deal-deal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Deal Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n      <!-- Side Menu Option -->\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n      <!-- Title of page -->\n      <ion-title>Products</ion-title>\n\n      <!-- Product Filter Option -->\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- Contents -->\n<ion-content id=\"products\">\n    <!-- Product View Options -->\n  <div class=\"ion-text-end\">\n\n      <!-- One Column Option -->\n      <ion-button fill=\"clear\" [color]=\"oneColumn ? 'color1' : 'color2'\" class=\"ion-no-padding\"\n          (click)=\"showOneColumn()\">\n          <ion-icon slot=\"icon-only\" name=\"square\"></ion-icon>\n      </ion-button>\n\n      <!-- Grid Option -->\n      <ion-button fill=\"clear\" [color]=\"grid ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n          <ion-icon slot=\"icon-only\" name=\"grid\"></ion-icon>\n      </ion-button>\n\n      <!-- List View Option -->\n      <ion-button fill=\"clear\" [color]=\"list ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showList()\">\n          <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n      </ion-button>\n  </div>\n  <!-- End Product View Options -->\n\n\n  <!-- Grid View Contents -->\n  <ion-grid id=\"grid\" *ngIf=\"grid\">\n      <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n              <ion-card class=\"ion-no-margin\">\n\n                  <!-- Product Image -->\n                  <div class=\"card-img\" [style.background-image]=\"'url(' + item.id_default_image+ ')'\"\n                      (click)=\"goToProductDetails(item)\"></div>\n\n                  <!-- Wish Button or Product Like/Dislike Button Option -->\n                  <ion-fab vertical=\"top\" horizontal=\"end\">\n                      <ion-fab-button>\n                          <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                          <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                      </ion-fab-button>\n                  </ion-fab>\n\n                  <!-- Product Contents -->\n                  <ion-card-content (click)=\"goToProductDetails(item)\">\n                      <ion-row>\n                          <h4 class=\"product-name\">{{item.products[0].name}}</h4>\n                      </ion-row>\n                      <ion-row>\n                          <ion-text color=\"color1\">QAR{{item.price| slice:0:6}} &nbsp;</ion-text>\n                      </ion-row>     \n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <!-- One Column View Contents -->\n  <ion-grid id=\"oneColumn\" *ngIf=\"oneColumn\">\n      <ion-row>\n          <ion-col size=\"12\" *ngFor=\"let item of products\">\n              <ion-card class=\"ion-no-margin\">\n\n                  <!-- Product Image -->\n                  <div class=\"card-img\" [style.background-image]=\"'url(' + item.id_default_image + ')'\"\n                      (click)=\"goToProductDetails(item)\"></div>\n\n                  <!-- Wish Button or Product Like/Dislike Button Option -->\n                  <ion-fab vertical=\"top\" horizontal=\"end\">\n                      <ion-fab-button>\n                          <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                          <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                      </ion-fab-button>\n                  </ion-fab>\n\n                  <!-- Product Contents -->\n                  <ion-card-content (click)=\"goToProductDetails(item)\">\n                      <ion-row>\n                          <ion-text color=\"color1\">QAR{{item.name[0].value | slice:0:20}} &nbsp;</ion-text>\n                      </ion-row>\n                      <ion-row>\n                          <h4 class=\"product-name\">{{item.products[0].name}}</h4>\n                      </ion-row>\n                  </ion-card-content>\n              </ion-card>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n  <!-- List View Contents -->\n  <div id=\"list\" *ngIf=\"list\">\n      <ion-card *ngFor=\"let item of products\">\n          <ion-list lines=\"none\" (click)=\"goToProductDetails(item)\">\n              <ion-item class=\"ion-no-padding\">\n\n                  <!-- Product Image -->\n                  <ion-thumbnail slot=\"start\">\n                      <img style=\"vertical-align: middle;\" [src]=\"item.id_default_image\">\n                  </ion-thumbnail>\n\n                  <!-- Wish Button or Product Like/Dislike Button Option -->\n                  <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                      <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                      <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                  </ion-fab>\n\n                  <!-- Product Contents -->\n                  <ion-label class=\"ion-text-wrap\">\n                      <ion-row>\n                          <h4 class=\"product-name\">{{item.products[0].name}}</h4>\n                      </ion-row>\n                      <ion-row>\n                          <ion-text color=\"color1\">QAR{{item.price}} &nbsp;</ion-text>\n                      </ion-row>\n                  </ion-label>\n              </ion-item>\n          </ion-list>\n      </ion-card>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/deal/deal.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/deal/deal.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#products .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n#products #grid .card-img {\n  height: 150px;\n}\n#products #oneColumn .card-img {\n  height: 200px;\n}\n#products .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#products .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#products #list .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#products #list .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#products #list .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n#products ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVhbC9DOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxidXFzaGFBcHAtbWFpbiAoMykvc3JjXFxhcHBcXHBhZ2VzXFxkZWFsXFxkZWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWFsL2RlYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtBQ0RSO0FESUk7RUFDSSxhQUFBO0FDRlI7QURLSTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QUNIUjtBRE1JO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0pSO0FEU1k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ1BoQjtBRFNnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNQcEI7QURXWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUaEI7QURjSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ1pSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhbC9kZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3RzIHtcbiAgICAuY2FyZC1pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIH1cblxuICAgICNncmlkIC5jYXJkLWltZyB7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuXG4gICAgI29uZUNvbHVtbiAuY2FyZC1pbWcge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoOCwgOCwgOCwgMC41OCk7XG4gICAgfVxuXG4gICAgLnByZXZpb3VzLXByaWNlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgICNsaXN0IHtcbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICB9XG59IiwiI3Byb2R1Y3RzIC5jYXJkLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4jcHJvZHVjdHMgI2dyaWQgLmNhcmQtaW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiNwcm9kdWN0cyAjb25lQ29sdW1uIC5jYXJkLWltZyB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4jcHJvZHVjdHMgLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiYSg4LCA4LCA4LCAwLjU4KTtcbn1cbiNwcm9kdWN0cyAucHJldmlvdXMtcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jcHJvZHVjdHMgI2xpc3QgLml0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuI3Byb2R1Y3RzICNsaXN0IC5pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNwcm9kdWN0cyAjbGlzdCAuaXRlbSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI3Byb2R1Y3RzIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/deal/deal.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/deal/deal.component.ts ***!
  \**********************************************/
/*! exports provided: DealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealComponent", function() { return DealComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter/filter.component */ "./src/app/pages/filter/filter.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/**
 * Deal Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */









var DealComponent = /** @class */ (function () {
    function DealComponent(modalController, route, router, loadingController, categoryService, productsService) {
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        this.categoryService = categoryService;
        this.productsService = productsService;
        this.prodId = [];
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
        this.par = "";
        this.products_list = [];
    }
    DealComponent.prototype.presentLoading = function () {
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
    DealComponent.prototype.ngOnInit = function () {
        this.id_category = parseInt(this.route.snapshot.paramMap.get("id_category"));
        //this.getAllProducts();
        this.getProducts();
    };
    DealComponent.prototype.getProducts = function () {
        var _this = this;
        var products = [];
        this.categoryService.getCategory(this.id_category).subscribe(function (res) {
            var category = res.body['category'];
            category.associations.products.forEach(function (data) {
                _this.productsService.getProductById(data.id).subscribe(function (res) {
                    _this.products_list.push(res.body);
                });
            });
        });
    };
    // Get List of Products
    DealComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.presentLoading().then(function () {
            _this.productsService.getAllProduct().subscribe(function (res) {
                var e_1, _a;
                _this.loadingController.dismiss();
                if (res.status === 200) {
                    //console.log(res.body);
                    var cat = res.body;
                    _this.products = cat["products"];
                    var base_url = "https://buqsha.linkeys.net/api/images/products/";
                    var key_url = "?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON";
                    try {
                        //console.log(this.products);
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.products), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var product = _c.value;
                            var img = base_url.concat(product.id.toString()) + "/".concat(product.id_default_image.toString()).concat(key_url);
                            //console.log(img);
                            product.id_default_image = img;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    //console.log(res.body);
                }
            });
        });
    };
    // Go to product details page
    DealComponent.prototype.goToProductDetails = function (p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productsService.setProduct(p);
                        return [4 /*yield*/, this.modalController.create({
                                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"],
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Open Filter page
    DealComponent.prototype.openFilterPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // One column view function
    DealComponent.prototype.showOneColumn = function () {
        this.oneColumn = true;
        this.grid = false;
        this.list = false;
    };
    // Grid view function
    DealComponent.prototype.showGrid = function () {
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    };
    // List view function
    DealComponent.prototype.showList = function () {
        this.list = true;
        this.grid = false;
        this.oneColumn = false;
    };
    DealComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }
    ]; };
    DealComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./deal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deal/deal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./deal.component.scss */ "./src/app/pages/deal/deal.component.scss")).default]
        })
    ], DealComponent);
    return DealComponent;
}());



/***/ }),

/***/ "./src/app/pages/deal/deal.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/deal/deal.module.ts ***!
  \*******************************************/
/*! exports provided: DealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealModule", function() { return DealModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _deal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deal.component */ "./src/app/pages/deal/deal.component.ts");







var DealModule = /** @class */ (function () {
    function DealModule() {
    }
    DealModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _deal_component__WEBPACK_IMPORTED_MODULE_6__["DealComponent"]
                    }
                ])
            ],
            declarations: [_deal_component__WEBPACK_IMPORTED_MODULE_6__["DealComponent"]]
        })
    ], DealModule);
    return DealModule;
}());



/***/ })

}]);
//# sourceMappingURL=deal-deal-module.js.map