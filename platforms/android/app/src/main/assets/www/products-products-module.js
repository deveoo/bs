(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Product Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar color=\"color1\">\n\n        <!-- Side Menu Option -->\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <!-- Title of page -->\n        <ion-title>{{namesubcat}}</ion-title>\n\n        <!-- Product Filter Option -->\n        <ion-buttons slot=\"end\">\n            <ion-button color=\"white\" (click)=\"openFilterPage()\">\n                <ion-icon name=\"funnel\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<!-- Contents -->\n<ion-content id=\"products\">\n\n    <!-- Product View Options -->\n    <div class=\"ion-text-end\">\n\n        <!-- One Column Option -->\n        <ion-button fill=\"clear\" [color]=\"oneColumn ? 'color1' : 'color2'\" class=\"ion-no-padding\"\n            (click)=\"showOneColumn()\">\n            <ion-icon slot=\"icon-only\" name=\"square\"></ion-icon>\n        </ion-button>\n\n        <!-- Grid Option -->\n        <ion-button fill=\"clear\" [color]=\"grid ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showGrid()\">\n            <ion-icon slot=\"icon-only\" name=\"grid\"></ion-icon>\n        </ion-button>\n\n        <!-- List View Option -->\n        <ion-button fill=\"clear\" [color]=\"list ? 'color1' : 'color2'\" class=\"ion-no-padding\" (click)=\"showList()\">\n            <ion-icon slot=\"icon-only\" name=\"list\"></ion-icon>\n        </ion-button>\n    </div>\n    <!-- End Product View Options -->\n\n\n    <!-- Grid View Contents -->\n    <ion-grid id=\"grid\" *ngIf=\"grid\">\n        <ion-row>\n            <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n                <ion-card class=\"ion-no-margin\">\n\n                    <!-- Product Image -->\n                    <div class=\"card-img\" [style.background-image]=\"'url(' + item.id_default_image+ ')'\"\n                        (click)=\"goToProductDetails(item)\"></div>\n\n                    <!-- Wish Button or Product Like/Dislike Button Option -->\n                    <ion-fab vertical=\"top\" horizontal=\"end\">\n                        <ion-fab-button>\n                            <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                            <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                        </ion-fab-button>\n                    </ion-fab>\n\n                    <!-- Product Contents -->\n                    <ion-card-content (click)=\"goToProductDetails(item)\">\n                        <ion-row>\n                            <h4 class=\"product-name\">{{item.name[0].value | slice:0:20}}</h4>\n                        </ion-row>\n                        <ion-row>\n                            <ion-text color=\"color1\">QAR{{item.price| slice:0:6}} &nbsp;</ion-text>\n                        </ion-row>     \n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!-- One Column View Contents -->\n    <ion-grid id=\"oneColumn\" *ngIf=\"oneColumn\">\n        <ion-row>\n            <ion-col size=\"12\" *ngFor=\"let item of products\">\n                <ion-card class=\"ion-no-margin\">\n\n                    <!-- Product Image -->\n                    <div class=\"card-img\" [style.background-image]=\"'url(' + item.images[0] + ')'\"\n                        (click)=\"goToProductDetails(item)\"></div>\n\n                    <!-- Wish Button or Product Like/Dislike Button Option -->\n                    <ion-fab vertical=\"top\" horizontal=\"end\">\n                        <ion-fab-button>\n                            <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                            <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                        </ion-fab-button>\n                    </ion-fab>\n\n                    <!-- Product Contents -->\n                    <ion-card-content (click)=\"goToProductDetails(item)\">\n                        <ion-row>\n                            <ion-text color=\"color1\">QAR{{item.price | slice:0:6}} &nbsp;</ion-text>\n                        </ion-row>\n                        <ion-row>\n                            <h4 class=\"product-name\">{{item.name[0].value| slice:0:20}}</h4>\n                        </ion-row>\n                    </ion-card-content>\n                </ion-card>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <!-- List View Contents -->\n    <div id=\"list\" *ngIf=\"list\">\n        <ion-card *ngFor=\"let item of products\">\n            <ion-list lines=\"none\" (click)=\"goToProductDetails(item)\">\n                <ion-item class=\"ion-no-padding\">\n\n                    <!-- Product Image -->\n                    <ion-thumbnail slot=\"start\">\n                        <img style=\"vertical-align: middle;\" [src]=\"item.images[0]\">\n                    </ion-thumbnail>\n\n                    <!-- Wish Button or Product Like/Dislike Button Option -->\n                    <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                        <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n                        <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n                    </ion-fab>\n\n                    <!-- Product Contents -->\n                    <ion-label class=\"ion-text-wrap\">\n                        <ion-row>\n                            <h4 class=\"product-name\">{{item.name[0].value | slice:0:20}}</h4>\n                        </ion-row>\n                        <ion-row>\n                            <ion-text color=\"color1\">QAR{{item.price | slice:0:6}} &nbsp;</ion-text>\n                        </ion-row>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/products/products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#products .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n#products #grid .card-img {\n  height: 150px;\n}\n#products #oneColumn .card-img {\n  height: 200px;\n}\n#products .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#products .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#products #list .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#products #list .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#products #list .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n#products ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0FDRFI7QURJSTtFQUNJLGFBQUE7QUNGUjtBREtJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0hSO0FETUk7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDSlI7QURTWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDUGhCO0FEU2dCO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BwQjtBRFdZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1RoQjtBRGNJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDWlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcm9kdWN0cyB7XG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICB9XG5cbiAgICAjZ3JpZCAuY2FyZC1pbWcge1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cblxuICAgICNvbmVDb2x1bW4gLmNhcmQtaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1wcmljZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAjbGlzdCB7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLW5vdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufSIsIiNwcm9kdWN0cyAuY2FyZC1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuI3Byb2R1Y3RzICNncmlkIC5jYXJkLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG59XG4jcHJvZHVjdHMgI29uZUNvbHVtbiAuY2FyZC1pbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuI3Byb2R1Y3RzIC5wcm9kdWN0LW5hbWUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHJnYmEoOCwgOCwgOCwgMC41OCk7XG59XG4jcHJvZHVjdHMgLnByZXZpb3VzLXByaWNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuI3Byb2R1Y3RzICNsaXN0IC5pdGVtIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cbiNwcm9kdWN0cyAjbGlzdCAuaXRlbSBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jcHJvZHVjdHMgI2xpc3QgLml0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNwcm9kdWN0cyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter/filter.component */ "./src/app/pages/filter/filter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/**
 * Product Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */









var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, modalController, route, categoryservices, router, loadingController) {
        var _this = this;
        this.productsService = productsService;
        this.modalController = modalController;
        this.route = route;
        this.categoryservices = categoryservices;
        this.router = router;
        this.loadingController = loadingController;
        this.prodId = [];
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
        this.par = "";
        this.route.params.subscribe(function (params) {
            _this.namesubcat = params['name'];
        });
        this.associations = this.categoryservices.getAssociation();
    }
    ProductsComponent.prototype.presentLoading = function () {
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
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    // Get List of Products
    ProductsComponent.prototype.getProductList = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.associations.products), _c = _b.next(); !_c.done; _c = _b.next()) {
                var product = _c.value;
                this.prodId.push(product.id.toString());
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log(this.prodId);
        if (this.prodId.length != 1) {
            for (var i = 0; i < this.prodId.length - 1; i++) {
                this.prodId[i] = this.prodId[i].concat("|");
            }
            console.log(this.prodId);
            for (var i = 0; i < this.prodId.length; i++) {
                this.par = this.par.concat(this.prodId[i]);
            }
        }
        else {
            this.par = this.prodId[0];
        }
        console.log(this.par);
        this.getProduc(this.par);
        this.products = this.productsService.productList();
    };
    ProductsComponent.prototype.getProduc = function (par) {
        var _this = this;
        this.presentLoading().then(function () {
            _this.productsService.getProductsById(par).subscribe(function (res) {
                var e_2, _a;
                _this.loadingController.dismiss();
                if (res.status === 200) {
                    console.log(res.body);
                    var cat = res.body;
                    _this.products = cat["products"];
                    var base_url = "https://buqsha.linkeys.net/api/images/products/";
                    var key_url = "?ws_key=HL6S599display=fullLPTE2KSZTW4XJQSYA1HSZL8GT&output_format=JSON";
                    console.log(_this.products);
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.products), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var product = _c.value;
                            var img = base_url.concat(product.id.toString()) + "/".concat(product.id_default_image.toString()).concat(key_url);
                            console.log(img);
                            product.id_default_image = img;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                else {
                    console.log(res.body);
                }
            });
        });
    };
    // Go to product details page
    ProductsComponent.prototype.goToProductDetails = function (p) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productsService.setProduct(p);
                        return [4 /*yield*/, this.modalController.create({
                                component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
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
    ProductsComponent.prototype.openFilterPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"]
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
    ProductsComponent.prototype.showOneColumn = function () {
        this.oneColumn = true;
        this.grid = false;
        this.list = false;
    };
    // Grid view function
    ProductsComponent.prototype.showGrid = function () {
        this.grid = true;
        this.oneColumn = false;
        this.list = false;
    };
    // List view function
    ProductsComponent.prototype.showList = function () {
        this.list = true;
        this.grid = false;
        this.oneColumn = false;
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
    ]; };
    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.component.scss */ "./src/app/pages/products/products.component.scss")).default]
        })
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter/filter.component */ "./src/app/pages/filter/filter.component.ts");








var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
                    }
                ])
            ],
            declarations: [_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]],
            entryComponents: [_filter_filter_component__WEBPACK_IMPORTED_MODULE_7__["FilterComponent"]],
            providers: []
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map