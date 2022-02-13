(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~deal-deal-module~home-home-module~notification-notification-module~products-products-module"],{

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.categories = [];
        this.imageCelb = [];
        this.imageCat = [];
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "categories?ws_key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ws_key, {
            observe: 'response'
        });
    };
    CategoryService.prototype.getCategory = function (id_category) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "categories/" + id_category + "?ws_key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ws_key, {
            observe: 'response'
        });
    };
    CategoryService.prototype.getCategoryProducts = function (id_product) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "products/" + id_product + "?ws_key=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ws_key, {
            observe: 'response'
        });
    };
    CategoryService.prototype.getMe = function () {
        var token = "Token d4801aefa979de9aff4a3699f112e4cabbe9cb66";
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "" + token);
        return this.http.get('https://mydocuments.tn/api/v1/users/me/', {
            headers: header, observe: 'response'
        });
    };
    CategoryService.prototype.getSubCategories = function () {
        return this.categories;
    };
    CategoryService.prototype.setSubCategories = function (categories) {
        this.categories = categories;
    };
    CategoryService.prototype.getAssociation = function () {
        return this.association;
    };
    CategoryService.prototype.setAssociation = function (association) {
        this.association = association;
    };
    CategoryService.prototype.imagesCelib = function () {
        this.imageCelb = [
            {
                id: "https://buqsha.linkeys.net/img/cms/celeb-icons_458.jpg"
            },
            {
                id: "https://buqsha.linkeys.net/img/cms/celeb-icons_400.jpg"
            },
            {
                id: "https://buqsha.linkeys.net/img/cms/layali-makeover-celeb-icons.jpg"
            },
            {
                id: "https://buqsha.linkeys.net/img/cms/celeb-icons_488.jpg"
            },
            {
                id: "https://buqsha.linkeys.net/img/cms/icon_170.jpg"
            }
        ];
        return this.imageCelb;
    };
    CategoryService.prototype.getCategoriHome = function () {
        this.categories = [
            {
                "id": 10,
                "id_parent": "2",
                "level_depth": "2",
                "nb_products_recursive": "3",
                "active": "1",
                "id_shop_default": "https://buqsha.linkeys.net/img/cms/men.jpg",
                "is_root_category": "0",
                "position": "0",
                "date_add": "2021-01-31 18:01:48",
                "date_upd": "2021-02-26 20:57:27",
                "name": [
                    {
                        "id": "1",
                        "value": "MEN"
                    },
                    {
                        "id": "2",
                        "value": "الرجل"
                    }
                ],
                "link_rewrite": [
                    {
                        "id": "1",
                        "value": "men"
                    },
                    {
                        "id": "2",
                        "value": "men"
                    }
                ],
                "description": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_title": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_description": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_keywords": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "associations": {
                    "categories": [
                        {
                            "id": "11"
                        },
                        {
                            "id": "12"
                        },
                        {
                            "id": "13"
                        }
                    ],
                    "products": [
                        {
                            "id": "21"
                        },
                        {
                            "id": "20"
                        },
                        {
                            "id": "44"
                        }
                    ]
                }
            },
            {
                "id": 14,
                "id_parent": "2",
                "level_depth": "2",
                "nb_products_recursive": "5",
                "active": "1",
                "id_shop_default": "https://buqsha.linkeys.net/img/cms/pexels-gabriela-guerino-1839904.jpg",
                "is_root_category": "0",
                "position": "1",
                "date_add": "2021-01-31 18:18:41",
                "date_upd": "2021-02-26 20:57:52",
                "name": [
                    {
                        "id": "1",
                        "value": "WOMEN"
                    },
                    {
                        "id": "2",
                        "value": "المرأة"
                    }
                ],
                "link_rewrite": [
                    {
                        "id": "1",
                        "value": "women"
                    },
                    {
                        "id": "2",
                        "value": "women"
                    }
                ],
                "description": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_title": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_description": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_keywords": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "associations": {
                    "categories": [
                        {
                            "id": "15"
                        },
                        {
                            "id": "16"
                        },
                        {
                            "id": "17"
                        }
                    ],
                    "products": [
                        {
                            "id": "21"
                        },
                        {
                            "id": "20"
                        },
                        {
                            "id": "44"
                        },
                        {
                            "id": "90"
                        },
                        {
                            "id": "120"
                        }
                    ]
                }
            },
            {
                "id": 18,
                "id_parent": "2",
                "level_depth": "2",
                "nb_products_recursive": "1",
                "active": "1",
                "id_shop_default": "https://buqsha.linkeys.net/img/cms/pexels-emma-bauso-2833394.jpg",
                "is_root_category": "0",
                "position": "2",
                "date_add": "2021-01-31 18:22:55",
                "date_upd": "2021-02-26 20:58:14",
                "name": [
                    {
                        "id": "1",
                        "value": "KIDS"
                    },
                    {
                        "id": "2",
                        "value": "الطفل"
                    }
                ],
                "link_rewrite": [
                    {
                        "id": "1",
                        "value": "kids"
                    },
                    {
                        "id": "2",
                        "value": "kids"
                    }
                ],
                "description": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_title": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_description": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "meta_keywords": [
                    {
                        "id": "1",
                        "value": ""
                    },
                    {
                        "id": "2",
                        "value": ""
                    }
                ],
                "associations": {
                    "categories": [
                        {
                            "id": "23"
                        },
                        {
                            "id": "24"
                        },
                        {
                            "id": "25"
                        }
                    ],
                    "products": [
                        {
                            "id": "44"
                        }
                    ]
                }
            }
        ];
        return this.categories;
    };
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoryService);
    return CategoryService;
}());



/***/ })

}]);
//# sourceMappingURL=default~deal-deal-module~home-home-module~notification-notification-module~products-products-module.js.map