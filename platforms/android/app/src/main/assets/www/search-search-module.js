(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Search Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Back to previous page option button -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <!-- Page Title -->\n    <ion-title>Search</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"search\" fullscreen>\n <div class=\"backstyle\">\n  <!-- Search bar -->\n  <ion-searchbar placeholder=\"Search your product\" debounce=\"500\" (ionInput)=\"getProducts($event)\"></ion-searchbar>\n</div>\n  <!-- When search result is empty -->\n  <!-- No products Found -->\n <ion-grid class=\"ion-padding\" id=\"empty\" *ngIf=\"products.length == 0\" style=\"height: 100%\">\n    <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n      <div class=\"ion-text-center ion-padding\">\n        <ion-icon name=\"search\" style=\"zoom:5.0;\" color=\"medium\"></ion-icon>\n        <h4>No Search Found</h4>\n        <p>Looks like there are no products available at this moment</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Search Result Content -->\n  <ion-grid class=\"ion-padding\">\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n        <ion-card class=\"ion-no-margin\" (click)=\"goToProductDetails(item)\">\n\n          <!-- Product Image -->\n          <div class=\"card-img\" [style.background-image]=\"'url(' + item.id_default_image + ')'\"></div>\n\n          <!-- Wish Button or Product Like/Dislike Button Option -->\n          <ion-fab vertical=\"top\" horizontal=\"end\">\n            <ion-fab-button>\n              <ion-icon color=\"color1\" name=\"heart-outline\" *ngIf=\"!item.isWishlist\"></ion-icon>\n              <ion-icon color=\"color1\" name=\"heart\" *ngIf=\"item.isWishlist\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n\n          <!-- Product Contents -->\n          <ion-card-content>\n            <ion-row>\n              <ion-text color=\"color1\">QAR{{item.price| slice:0:6}} &nbsp;</ion-text>\n            </ion-row>\n            <ion-row>\n              <h4 class=\"product-name\">{{item.name[0].value | slice:0:20}}</h4>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#search ion-searchbar {\n  --background: var(--ion-color-white);\n  --border-radius: 25px !important;\n}\n#search .backstyle {\n  background: var(--ion-color-color1);\n  --border-bottom-right-radius: 15px;\n  --border-bottom-left-radius: 15px;\n}\n#search .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#search .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#search .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#search ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL0M6XFxVc2Vyc1xcbGVub3ZvXFxEb3dubG9hZHNcXGJ1cXNoYUFwcC1tYWluICgzKS9zcmNcXGFwcFxccGFnZXNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0NBQUE7RUFDQSxnQ0FBQTtBQ0FSO0FERUk7RUFDSSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUNBUjtBREVJO0VBQ0ksc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FDRFI7QURJSTtFQUNJLDZCQUFBO0VBQ0EsaUJBQUE7QUNGUjtBREtJO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaCB7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5iYWNrc3R5bGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICAgICAgLS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgLS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgMTVweDtcbiAgICB9XG4gICAgLmNhcmQtaW1nIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xuICAgIH1cblxuICAgIC5wcmV2aW91cy1wcmljZSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG5cbiAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufSIsIiNzZWFyY2ggaW9uLXNlYXJjaGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG4jc2VhcmNoIC5iYWNrc3R5bGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgLS1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgLS1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xufVxuI3NlYXJjaCAuY2FyZC1pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuI3NlYXJjaCAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xufVxuI3NlYXJjaCAucHJldmlvdXMtcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4jc2VhcmNoIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/**
 * Search Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */







var SearchComponent = /** @class */ (function () {
    function SearchComponent(productsService, modalController, route, router, loadingController) {
        this.productsService = productsService;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        // List of Products
        this.products = [];
        // Check is product available or not
        this.isProductAvailable = false;
    }
    SearchComponent.prototype.presentLoading = function () {
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
    SearchComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    // Get List of Products
    SearchComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.presentLoading().then(function () {
            _this.productsService.getAllProduct().subscribe(function (res) {
                var e_1, _a;
                _this.loadingController.dismiss();
                if (res.status === 200) {
                    console.log(res.body);
                    var cat = res.body;
                    _this.products = cat['products'];
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
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    _this.productListBackup = _this.products;
                }
                else {
                    console.log(res.body);
                }
            });
        });
        return this.products;
    };
    // Go to product details page
    SearchComponent.prototype.goToProductDetails = function (p) {
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
    // Get Search Result
    SearchComponent.prototype.getProducts = function (ev) {
        // set val to the value of the searchbar
        this.products = this.productListBackup;
        var val = ev.srcElement.value;
        console.log(val);
        if (!val) {
            return;
        }
        this.products = this.products.filter(function (currentProd) {
            if (currentProd.name[0].value && val) {
                return (currentProd.name[0].value.toLowerCase().indexOf(val.toLowerCase()) > -1);
            }
        });
    };
    // Go to cart page function
    SearchComponent.prototype.gotoCartPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.router.navigate(['/cart']);
                return [2 /*return*/];
            });
        });
    };
    // Back to previous page function
    SearchComponent.prototype.dismiss = function () {
        this.router.navigate(['/tabs/tab1']);
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")).default]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/search/search.module.ts ***!
  \***********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.component */ "./src/app/pages/search/search.component.ts");







var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
                    }
                ])
            ],
            declarations: [_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map