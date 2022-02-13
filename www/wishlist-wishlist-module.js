(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - WishList Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Menu Option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Title -->\n    <ion-title>Wish List</ion-title>\n\n    <!-- Cart Button Option -->\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"white\" (click)=\"gotoCartPage()\">\n        <ion-icon name=\"cart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"wishlist\" fullscreen>\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\" *ngFor=\"let item of products\">\n        <ion-card class=\"ion-no-margin\">\n\n          <!-- Product Image -->\n          <div class=\"card-img\" [style.background-image]=\"'url(' + item.id_default_image + ')'\"\n            (click)=\"goToProductDetails(item)\"></div>\n\n          <!-- Wish Button or Product Like/Dislike Button Option -->\n          <ion-fab vertical=\"top\" horizontal=\"end\">\n            <ion-fab-button>\n              <ion-icon color=\"color1\" name=\"heart\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n\n          <!-- Product Contents -->\n          <ion-card-content (click)=\"goToProductDetails(item)\">\n            <ion-row>\n              <ion-text color=\"color1\">QAR{{item.price | slice:0:6}} &nbsp;</ion-text>\n            </ion-row>\n            <ion-row>\n              <h4 class=\"product-name\">{{item.name[0].value | slice:0:20}}</h4>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wishlist .card-img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  height: 150px;\n}\n#wishlist .product-name {\n  font-size: 1.2rem;\n  color: rgba(8, 8, 8, 0.58);\n}\n#wishlist .previous-price {\n  text-decoration: line-through;\n  font-size: 0.8rem;\n}\n#wishlist ion-fab-button {\n  --background: transparent;\n  --background-focused: transparent;\n  --background-activated: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lzaGxpc3QvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcd2lzaGxpc3RcXHdpc2hsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNBUjtBREdJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0RSO0FESUk7RUFDSSw2QkFBQTtFQUNBLGlCQUFBO0FDRlI7QURLSTtFQUNJLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2lzaGxpc3Qge1xuICAgIC5jYXJkLWltZyB7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBjb2xvcjogcmdiYSg4LCA4LCA4LCAwLjU4KTtcbiAgICB9XG5cbiAgICAucHJldmlvdXMtcHJpY2Uge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuXG4gICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn0iLCIjd2lzaGxpc3QgLmNhcmQtaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbiN3aXNobGlzdCAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiByZ2JhKDgsIDgsIDgsIDAuNTgpO1xufVxuI3dpc2hsaXN0IC5wcmV2aW91cy1wcmljZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbiN3aXNobGlzdCBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.ts ***!
  \******************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/pages/product-details/product-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/**
 * Wishlist Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */






var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(productsService, modalController, router) {
        this.productsService = productsService;
        this.modalController = modalController;
        this.router = router;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    // Get Products
    WishlistComponent.prototype.getProductList = function () {
        this.products = this.productsService.productList();
    };
    // Go to product details page
    WishlistComponent.prototype.goToProductDetails = function (product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.productsService.setProduct(product);
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
    // Go to cart page
    WishlistComponent.prototype.gotoCartPage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.router.navigate(['/cart']);
                return [2 /*return*/];
            });
        });
    };
    WishlistComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    WishlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wishlist/wishlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/pages/wishlist/wishlist.component.scss")).default]
        })
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/pages/wishlist/wishlist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/*! exports provided: WishlistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistModule", function() { return WishlistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.component */ "./src/app/pages/wishlist/wishlist.component.ts");







var WishlistModule = /** @class */ (function () {
    function WishlistModule() {
    }
    WishlistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"]
                    }
                ])
            ],
            declarations: [_wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"]]
        })
    ], WishlistModule);
    return WishlistModule;
}());



/***/ })

}]);
//# sourceMappingURL=wishlist-wishlist-module.js.map