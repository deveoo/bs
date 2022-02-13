(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Cart Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <!-- Back to previous page -->\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"color1\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n            </ion-back-button>\n        </ion-buttons>\n\n        <!-- Page title -->\n        <ion-title>Cart</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"cart\" fullscreen>\n\n    <!-- When Cart is Empty -->\n    <ion-grid class=\"ion-padding\" id=\"empty\" *ngIf=\"cartProducts.length == 0\" style=\"height: 100%\">\n        <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n            <div class=\"ion-text-center ion-padding\">\n                <ion-icon name=\"cart\" style=\"zoom:5.0;\" color=\"medium\"></ion-icon>\n                <h4>Your Cart is Empty</h4>\n                <p>Looks like you haven't added anything to your cart yet</p>\n            </div>\n        </ion-row>\n    </ion-grid>\n\n    <!-- Cart Contents -->\n    <div *ngIf=\"cartProducts.length != 0\">\n        <!-- Cart Product List -->\n        <ion-card *ngFor=\"let item of cartProducts; let i = index\">\n            <ion-list lines=\"none\">\n                <ion-item class=\"ion-no-padding\">\n\n                    <!-- Product Image -->\n                    <ion-thumbnail slot=\"start\">\n                        <img style=\"vertical-align: middle;\" [src]=\"item.img\">\n                    </ion-thumbnail>\n\n                    <ion-label class=\"ion-text-wrap\">\n\n                        <!-- Product Name -->\n                        <ion-text color=\"dark\">\n                            <h2> {{ item.name }}</h2>\n                        </ion-text>\n\n                        <!-- Product Price -->\n                        <ion-text color=\"color1\">\n                            <p>QAR {{item.price | slice:0:6}}</p>\n                        </ion-text>\n\n                        <!-- Quantity -->\n                        <ion-row>\n                            <!-- Add More Product Quantity -->\n                            <ion-col (click)=\"addQuantity(item, i)\">\n                                <ion-icon style=\"zoom:2.0;\" name=\"add-circle-outline\" color=\"medium\"></ion-icon>\n                            </ion-col>\n\n                            <!-- Total Quantity -->\n                            <ion-col class=\"ion-text-center\">{{item.quantity}}</ion-col>\n\n                            <!-- Minus Product Quantity -->\n                            <ion-col (click)=\"minusQuantity(item, i)\">\n                                <ion-icon style=\"zoom:2.0;\" name=\"remove-circle-outline\" color=\"medium\"></ion-icon>\n                            </ion-col>\n                        </ion-row>\n                    </ion-label>\n\n                    <!-- Remove Product From Cart -->\n                    <ion-icon name=\"close-circle\" slot=\"end\" color=\"medium\" (click)=\"removeProduct(item, i)\"></ion-icon>\n                </ion-item>\n            </ion-list>\n        </ion-card>\n\n\n        <!-- summary Of Products Price -->\n        <ion-list lines=\"none\">\n            <ion-item>\n                <ion-label>Sub Total</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">QAR {{total}}</ion-note>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Shipping</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">QAR 25</ion-note>\n            </ion-item>\n\n            <ion-item-divider></ion-item-divider>\n\n            <ion-item>\n                <ion-label>Total</ion-label>\n                <ion-note slot=\"end\" color=\"dark\">QAR {{total + 25}}</ion-note>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n\n<!-- Footer -->\n<ion-footer class=\"ion-no-border\">\n    <ion-toolbar class=\"ion-padding\" transparent>\n        <!-- Checkout Button Option -->\n        <ion-button color=\"color1\" expand=\"block\" (click)=\"goToCheckout()\" *ngIf=\"cartProducts.length != 0\">PROCEED TO\n            CHECKOUT\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#cart .item ion-thumbnail {\n  width: 140px;\n  height: 90px;\n}\n#cart .item ion-thumbnail img {\n  width: 140px;\n  height: 90px;\n  border-radius: 5px;\n}\n#cart .item ion-note {\n  font-size: 1.3rem;\n  font-weight: 600;\n}\n#cart #empty h4 {\n  color: #888888;\n  font-weight: bolder;\n}\n#cart #empty p {\n  color: #888888;\n}\nion-footer ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\nion-footer ion-button {\n  --box-shadow: -1px 1px 17px -3px var(--ion-color-color1);\n}\nion-item-divider {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9DOlxcVXNlcnNcXGxlbm92b1xcRG93bmxvYWRzXFxidXFzaGFBcHAtbWFpbiAoMykvc3JjXFxhcHBcXHBhZ2VzXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0RaO0FER1k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRGhCO0FET1E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDTFo7QURXUTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQ1RaO0FEWVE7RUFDSSxjQUFBO0FDVlo7QURnQkk7RUFDSSwrQkFBQTtFQUNBLHdDQUFBO0FDYlI7QURnQkk7RUFDSSx3REFBQTtBQ2RSO0FEaUJBO0VBQ0ksYUFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcnQge1xuICAgIC5pdGVtIHtcbiAgICAgICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgaW9uLW5vdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2VtcHR5IHtcblxuICAgICAgICBoNCB7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZm9vdGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogLTFweCAxcHggMTdweCAtM3B4IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgIH1cbn1cbmlvbi1pdGVtLWRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59IiwiI2NhcnQgLml0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuI2NhcnQgLml0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTQwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI2NhcnQgLml0ZW0gaW9uLW5vdGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNjYXJ0ICNlbXB0eSBoNCB7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuI2NhcnQgI2VtcHR5IHAge1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IC0xcHggMXB4IDE3cHggLTNweCB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbn1cblxuaW9uLWl0ZW0tZGl2aWRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_ht_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ht/cart.service */ "./src/app/services/ht/cart.service.ts");




var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, router, route) {
        var _this = this;
        this.cartService = cartService;
        this.router = router;
        this.cartProducts = [];
        this.total = 0;
        route.params.subscribe(function (val) {
            _this.total = 0;
            _this.getProducts();
        });
    }
    CartComponent.prototype.ngOnInit = function () {
        //this.cartService.removeValue('cart')
        //this.getProducts();
    };
    CartComponent.prototype.getProducts = function () {
        var _this = this;
        this.cartService.getValue('cart').then(function (data) {
            if (data !== null && data.length > 0) {
                console.log(data);
                _this.cartProducts = data;
                _this.cartProducts.map(function (product) {
                    _this.total += parseFloat(product.price) * parseInt(product.quantity);
                });
            }
        });
    };
    CartComponent.prototype.addQuantity = function (item, index) {
        this.cartProducts[index].quantity++;
        this.cartService.handleItem(this.cartProducts[index], 'add');
        this.updateTotal();
        //this.total += parseInt(this.cartProducts[index].quantity) * parseInt(this.cartProducts[index].price)
    };
    CartComponent.prototype.updateTotal = function () {
        var _this = this;
        this.total = 0;
        this.cartProducts.forEach(function (element) {
            _this.total += parseInt(element.quantity) * parseInt(element.price);
        });
    };
    CartComponent.prototype.minusQuantity = function (item, index) {
        if (this.cartProducts[index].quantity > 1) {
            this.cartProducts[index].quantity--;
            this.cartService.handleItem(this.cartProducts[index], 'minus');
            this.total = this.total - this.cartProducts[index].price;
        }
    };
    CartComponent.prototype.removeProduct = function (item, index) {
        var _this = this;
        this.cartService.removeProduct(this.cartProducts[index]).then(function () {
            _this.getProducts();
            _this.updateTotal();
        });
    };
    CartComponent.prototype.dismiss = function () {
        this.router.navigate(['/tabs/tab1']);
    };
    CartComponent.prototype.goToCheckout = function () {
        this.router.navigate(['/checkout']);
    };
    CartComponent.ctorParameters = function () { return [
        { type: _services_ht_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")).default]
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.component */ "./src/app/pages/cart/cart.component.ts");







var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]
                    }
                ])
            ],
            declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cart-cart-module.js.map