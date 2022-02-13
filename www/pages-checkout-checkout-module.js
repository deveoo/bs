(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - Checkout Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Header -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Back to previous page option button -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"white\" default-href=\"\" (click)=\"dismiss()\" text=\"\" icon=\"arrow-back\">\n      </ion-back-button>\n    </ion-buttons>\n\n    <!-- Page title -->\n    <ion-title>Checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"checkout\">\n\n  <!-- Steps of Checkout, steps are - (Billing, Payment, Confirm) -->\n  <ion-grid class=\"ion-padding\">\n    <ion-row class=\"ion-text-center\">\n      <ion-col *ngFor=\"let item of steps\" [ngClass]=\"{selected: item.isSelected}\">\n        <ion-icon name=\"radio-button-on\" style=\"zoom:1.5;\" [hidden]=\"!item.isSelected\"></ion-icon>\n        <ion-icon name=\"radio-button-off\" style=\"zoom:1.5;\" [hidden]=\"item.isSelected\"></ion-icon>\n        <br />\n        <ion-text>{{item.step}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Content of Checkout Steps -->\n\n  <!-- Billing Section -->\n  <div id=\"billing\" *ngIf=\"steps[0].isSelected\">\n\n    <form class=\"ion-padding\" id=\"checkout\">\n      <!-- Full Name -->\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"First Name\" name=\"firstname\" [(ngModel)]=\"firstname\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Last Name\" name=\"lastname\" [(ngModel)]=\"lastname\"></ion-input>\n      </ion-item>\n\n      <!-- Address 1 -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-input type=\"text\" placeholder=\"Address 1\" name=\"address1\" [(ngModel)]=\"address1\"></ion-input>\n      </ion-item>\n\n      <!-- Address 2 -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-input type=\"text\" placeholder=\"Address 2\" name=\"address2\" [(ngModel)]=\"address2\"></ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <!-- City -->\n          <ion-item class=\"ion-padding-top\">\n            <ion-input type=\"text\" placeholder=\"City\" name=\"city\" [(ngModel)]=\"city\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <!-- State -->\n          <ion-item class=\"ion-padding-top\">\n            <ion-input type=\"text\" placeholder=\"state\" name=\"state\" [(ngModel)]=\"state\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Zip Code -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-input type=\"text\" placeholder=\"Zip Code\" name=\"zipcode\" [(ngModel)]=\"postcode\"></ion-input>\n      </ion-item>\n    </form>\n  </div>\n  <!-- End billing section -->\n\n  <!-- Payment Section -->\n  <div id=\"payment\" *ngIf=\"steps[1].isSelected\">\n\n    <p class=\"title\">Select Payment</p>\n\n    <!-- Payment Card Options -->\n    <ion-radio-group>\n      <ion-row>\n        <ion-col *ngFor=\"let item of cards\">\n          <ion-item lines=\"none\">\n            <ion-radio color=\"color1\" mode=\"ios\" [value]=\"item\"></ion-radio>\n            <img [src]=\"item\">\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <!-- Card Information Form -->\n    <form class=\"ion-padding\">\n      <!-- Cardholder Name -->\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Cardholder Name\" name=\"name\"></ion-input>\n      </ion-item>\n\n      <!-- Card Number -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-input type=\"text\" placeholder=\"Card Number\" name=\"cardnumber\"></ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <!-- MM -->\n          <ion-item class=\"ion-padding-top\">\n            <ion-input type=\"text\" placeholder=\"MM\" name=\"mm\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <!-- YY -->\n          <ion-item class=\"ion-padding-top\">\n            <ion-input type=\"text\" placeholder=\"YY\" name=\"yy\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- CVV -->\n      <ion-item class=\"ion-padding-top\">\n        <ion-input type=\"text\" placeholder=\"CVV\" name=\"cvv\"></ion-input>\n      </ion-item>\n    </form>\n  </div>\n\n  <!-- Payment Complete Section -->\n  <!-- Confirm Screen -->\n  <div id=\"complete-section\" *ngIf=\"steps[2].isSelected\" style=\"height: 70%\">\n    <ion-grid class=\"ion-padding\" style=\"height: 100%\">\n      <ion-row class=\"ion-align-items-center ion-justify-content-center\" style=\"height: 100%; flex-direction: column\">\n        <div class=\"ion-text-center ion-padding\">\n          <ion-icon name=\"checkmark-outline\" style=\"zoom:10.0;\" color=\"medium\"></ion-icon>\n          <h2>Order Success</h2>\n          <p>Your order has been placed successfully</p>\n        </div>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<!-- Footer -->\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-padding\" transparent>\n\n    <!-- Go To Next Section Button Option  -->\n    <!-- This button only visible Step 1 & 2 -->\n    <ion-button *ngIf=\"!steps[2].isSelected\" color=\"color1\" expand=\"block\" (click)=\"next()\">Next\n    </ion-button>\n\n    <!-- Go To Order Page Button Option  -->\n    <!-- This Option will be visible on Step 3 -->\n    <ion-button *ngIf=\"steps[2].isSelected\" color=\"color1\" fill=\"outline\" expand=\"block\" (click)=\"gotoOrderPage()\">My\n      Orders\n    </ion-button>\n\n    <!-- Go To Products Page Button Option  -->\n    <!-- This Option will be visible on Step 3 -->\n    <ion-button *ngIf=\"steps[2].isSelected\" color=\"color1\" expand=\"block\" (click)=\"gotoProductsPage()\">Continue Shopping\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#checkout .selected {\n  border: 3px dotted var(--ion-color-color1);\n  border-radius: 10px;\n}\n#checkout .selected ion-icon {\n  color: var(--ion-color-color1);\n}\n#checkout .selected ion-text {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n#checkout .border-style {\n  border: 4px solid;\n  width: 60px;\n  border-radius: 15%;\n}\n#checkout #payment img {\n  width: 60px;\n}\n#checkout #payment .title {\n  font-size: 1.4rem;\n  font-weight: 600;\n  padding-left: 30px;\n  font-family: serif;\n}\n#checkout #complete-section h2 {\n  font-weight: bold;\n}\nion-footer ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvQzpcXFVzZXJzXFxsZW5vdm9cXERvd25sb2Fkc1xcYnVxc2hhQXBwLW1haW4gKDMpL3NyY1xcYXBwXFxwYWdlc1xcY2hlY2tvdXRcXGNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVRO0VBQ0ksOEJBQUE7QUNBWjtBREdRO0VBQ0ksOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRFo7QURLSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSFI7QURPUTtFQUNJLFdBQUE7QUNMWjtBRFFRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNOWjtBRFdRO0VBQ0ksaUJBQUE7QUNUWjtBRGdCSTtFQUNJLCtCQUFBO0VBQ0Esd0NBQUE7QUNiUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoZWNrb3V0IHtcbiAgICAuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3JkZXItc3R5bGUge1xuICAgICAgICBib3JkZXI6IDRweCBzb2xpZDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1JTtcbiAgICB9XG5cbiAgICAjcGF5bWVudCB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2VyaWY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY29tcGxldGUtc2VjdGlvbiB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG59IiwiI2NoZWNrb3V0IC5zZWxlY3RlZCB7XG4gIGJvcmRlcjogM3B4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiNjaGVja291dCAuc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG59XG4jY2hlY2tvdXQgLnNlbGVjdGVkIGlvbi10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4jY2hlY2tvdXQgLmJvcmRlci1zdHlsZSB7XG4gIGJvcmRlcjogNHB4IHNvbGlkO1xuICB3aWR0aDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xufVxuI2NoZWNrb3V0ICNwYXltZW50IGltZyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuI2NoZWNrb3V0ICNwYXltZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbn1cbiNjaGVja291dCAjY29tcGxldGUtc2VjdGlvbiBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ "./node_modules/@ionic/storage-angular/__ivy_ngcc__/fesm5/ionic-storage-angular.js");
/* harmony import */ var _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/login.service */ "./src/app/services/auth/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/**
 * Checkout Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */








var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(modalController, router, storage, loginService, alertController, http) {
        this.modalController = modalController;
        this.router = router;
        this.storage = storage;
        this.loginService = loginService;
        this.alertController = alertController;
        this.http = http;
        this.steps = [];
        this.cards = [];
        this.address1 = "";
        this.address2 = "";
        this.city = "";
        this.firstname = "";
        this.lastname = "";
        this.phone = "";
        this.postcode = "";
        this.state = "";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.storage.get('id_lang').then(id_lang => {
          this.id_lang = id_lang;
          
        })*/
        this.storage.get('cart').then(function (cart) {
            var total = cart.forEach(function (item) {
                total += parseInt(item.quantity) * parseFloat(item.price);
            });
            _this.total = total;
        });
        this.storage.get('user').then(function (user) {
            _this.user = user[0];
            _this.loginService.getAddresses().subscribe(function (adresses) {
                _this.userAddress = adresses['addresses'].filter(function (addr) { var _a; return addr.id_customer == ((_a = _this.user) === null || _a === void 0 ? void 0 : _a.id); })[0];
                _this.address1 = _this.userAddress.address1;
                _this.address2 = _this.userAddress.address2;
                _this.firstname = _this.userAddress.firstname;
                _this.lastname = _this.userAddress.lastname;
                _this.phone = _this.userAddress.phone;
                _this.postcode = _this.userAddress.postcode;
                _this.state = _this.userAddress.state;
                _this.city = _this.userAddress.city;
            });
        });
        // Checkout steps
        this.steps = [
            {
                step: "Billing",
                isSelected: true
            },
            {
                step: "Payment",
                isSelected: false
            },
            {
                step: "Confirm",
                isSelected: false
            }
        ];
        // Payment cards images
        this.cards = ["assets/images/cards/visa.png",
            "assets/images/cards/mastercard.png",
            "assets/images/cards/paypal.png"];
    };
    // Go to xext section function
    CheckoutComponent.prototype.next = function () {
        // If current section is billing then next payment section will be visible
        if (this.steps[0].isSelected) {
            this.steps[0].isSelected = false;
            this.steps[1].isSelected = true;
        }
        // If current section is Billing then next section confirm will be visible 
        else if (this.steps[1].isSelected) {
            this.steps[0].isSelected = false;
            this.steps[1].isSelected = false;
            this.steps[2].isSelected = true;
            //this.user,this.userAddress);
            this.http.get("https://www.bs.version-recette.com/ws/order.php?email=" + this.user.email + "&address1=" + this.address1 + "\n     &address2=" + this.address2 + "&postcode=" + this.postcode + "&city=" + this.city + "&total=" + this.total, { observe: 'response',
                responseType: 'text'
            }).subscribe(function (data) {
                console.log(data);
            });
        }
    };
    // Go to order page function
    CheckoutComponent.prototype.gotoOrderPage = function () {
        this.router.navigate(['/tabs/orders']);
    };
    // Go to product page
    CheckoutComponent.prototype.gotoProductsPage = function () {
        this.router.navigate(['/tabs/products']);
    };
    // Back to previous screen
    CheckoutComponent.prototype.dismiss = function () {
        this.router.navigate(['/tabs/tab1']);
    };
    CheckoutComponent.prototype.presentAlert = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Error',
                            message: msg,
                            buttons: ['Close']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CheckoutComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _services_auth_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    CheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./checkout.component.scss */ "./src/app/pages/checkout/checkout.component.scss")).default]
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout/checkout.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.component */ "./src/app/pages/checkout/checkout.component.ts");







var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]
                    }
                ])
            ],
            entryComponents: [_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]],
            declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module.js.map