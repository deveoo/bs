(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  - My Orders Screen\n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2020\n  - @license   ThemesBuckets\n-->\n\n<!-- Headder -->\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"color1\">\n\n    <!-- Side menu option -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <!-- Page Title -->\n    <ion-title>My Orders</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Contents -->\n<ion-content id=\"orders\" fullscreen>\n\n  <!-- Orders Options -->\n  <!-- Options are - Delivered, Processing, Cancelled  -->\n  <div class=\"ion-padding ion-text-center\">\n    <ion-chip *ngFor=\"let item of options; let i = index\" [ngClass]=\"{ionChip: item.isSelected}\"\n      (click)=\"changeOption(item, i)\">\n      <ion-label>{{item.title}}</ion-label>\n    </ion-chip>\n  </div>\n\n  <!-- List of orders -->\n  <ion-card *ngFor=\"let item of orders\">\n    <ion-card-header>\n      <ion-row>\n\n        <!-- Order Id -->\n        <ion-col>\n          <ion-card-title>Order {{item.orderId}}</ion-card-title>\n        </ion-col>\n\n        <!-- Order Date -->\n        <ion-col class=\"col-right\">\n          <ion-text>{{item.date}}</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <!-- Order Tracking Number -->\n      <ion-row>\n        <ion-col>Tracking Number: {{item.trackingNumber}}</ion-col>\n      </ion-row>\n\n      <!-- Order Quantity & Price -->\n      <ion-row>\n        <ion-col>Quantity: {{item.quantity}}</ion-col>\n        <ion-col>Total Price: ${{item.totalPrice}}</ion-col>\n      </ion-row>\n\n      <ion-button color=\"color1\" size=\"small\">Details</ion-button>\n    </ion-card-header>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/orders/orders.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/orders/orders.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#orders .ionChip {\n  --background: var(--ion-color-color1);\n  --color: var(--ion-color-white);\n}\n#orders ion-card-title {\n  font-size: medium;\n}\n#orders .col-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL0M6XFxVc2Vyc1xcbGVub3ZvXFxEb3dubG9hZHNcXGJ1cXNoYUFwcC1tYWluICgzKS9zcmNcXGFwcFxccGFnZXNcXG9yZGVyc1xcb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUNBQUE7RUFDQSwrQkFBQTtBQ0FSO0FER0k7RUFDSSxpQkFBQTtBQ0RSO0FESUk7RUFDSSxpQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvcmRlcnMge1xuICAgIC5pb25DaGlwIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICB9XG5cbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIH1cblxuICAgIC5jb2wtcmlnaHQge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59IiwiI29yZGVycyAuaW9uQ2hpcCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG59XG4jb3JkZXJzIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG4jb3JkZXJzIC5jb2wtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/orders/orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/**
 * Order Screen
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   ThemesBuckets
 */


var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
        // Slider Options
        this.slideOpts = {
            initialSlide: 0,
            autoplay: true,
        };
        // Order Options
        this.options = [{
                title: 'Delivered',
                isSelected: true
            }, {
                title: 'Processing',
                isSelected: false
            }, {
                title: 'Cancelled',
                isSelected: false
            }];
        // Orders Sample Data
        this.orders = [{
                orderId: '#NPOK8T',
                date: '15/11/2020',
                trackingNumber: 'AQWNQWEIC',
                quantity: 2,
                totalPrice: 100
            }, {
                orderId: '#NPORK8T',
                date: '20/11/2020',
                trackingNumber: 'WNQWEIC',
                quantity: 2,
                totalPrice: 500
            }, {
                orderId: '#NPOKYY8T',
                date: '05/11/2020',
                trackingNumber: 'MWNQWEIC',
                quantity: 4,
                totalPrice: 300
            }];
    }
    OrdersComponent.prototype.ngOnInit = function () { };
    // Change Order Option Function
    OrdersComponent.prototype.changeOption = function (option, index) {
        for (var i = 0; i < this.options.length; i++) {
            this.options[i].isSelected = false;
        }
        this.options[index].isSelected = true;
    };
    OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orders.component.scss */ "./src/app/pages/orders/orders.component.scss")).default]
        })
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.component */ "./src/app/pages/orders/orders.component.ts");







var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]
                    }
                ])
            ],
            declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_6__["OrdersComponent"]]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=orders-orders-module.js.map