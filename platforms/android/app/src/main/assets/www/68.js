(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-tab_2.entry.js ***!
  \******************************************************************/
/*! exports provided: ion_tab, ion_tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tabs", function() { return Tabs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-e23c3ffd.js */ "./node_modules/@ionic/core/dist/esm-es5/index-e23c3ffd.js");
/* harmony import */ var _framework_delegate_d1eb6504_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework-delegate-d1eb6504.js */ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-d1eb6504.js");



var tabCss = ":host(.tab-hidden){display:none !important}";
var Tab = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */
        this.active = false;
    }
    class_1.prototype.componentWillLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.active) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setActive()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /** Set the active component for the tab */
    class_1.prototype.setActive = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prepareLazyLoaded()];
                    case 1:
                        _a.sent();
                        this.active = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.changeActive = function (isActive) {
        if (isActive) {
            this.prepareLazyLoaded();
        }
    };
    class_1.prototype.prepareLazyLoaded = function () {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            try {
                return Object(_framework_delegate_d1eb6504_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    };
    class_1.prototype.render = function () {
        var _a = this, tab = _a.tab, active = _a.active, component = _a.component;
        return (Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": "tab-button-" + tab, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active
            } }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "active": ["changeActive"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
Tab.style = tabCss;
var tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
var Tabs = /** @class */ (function () {
    function class_2(hostRef) {
        var _this = this;
        Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.transitioning = false;
        /** @internal */
        this.useRouter = false;
        this.onTabClicked = function (ev) {
            var _a = ev.detail, href = _a.href, tab = _a.tab;
            if (_this.useRouter && href !== undefined) {
                var router = document.querySelector('ion-router');
                if (router) {
                    router.push(href);
                }
            }
            else {
                _this.select(tab);
            }
        };
        this.ionNavWillLoad = Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionTabsDidChange", 3);
    }
    class_2.prototype.componentWillLoad = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tabs;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.useRouter) {
                            this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
                        }
                        if (!!this.useRouter) return [3 /*break*/, 2];
                        tabs = this.tabs;
                        if (!(tabs.length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.select(tabs[0])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.ionNavWillLoad.emit();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentWillRender = function () {
        var tabBar = this.el.querySelector('ion-tab-bar');
        if (tabBar) {
            var tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
        }
    };
    /**
     * Select a tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    class_2.prototype.select = function (tab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var selectedTab;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTab = getTab(this.tabs, tab);
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.notifyRouter()];
                    case 2:
                        _a.sent();
                        this.tabSwitch();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Get a specific tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */
    class_2.prototype.getTab = function (tab) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, getTab(this.tabs, tab)];
            });
        });
    };
    /**
     * Get the currently selected tab.
     */
    class_2.prototype.getSelected = function () {
        return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
    };
    /** @internal */
    class_2.prototype.setRouteId = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var selectedTab;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectedTab = getTab(this.tabs, id);
                        if (!this.shouldSwitch(selectedTab)) {
                            return [2 /*return*/, { changed: false, element: this.selectedTab }];
                        }
                        return [4 /*yield*/, this.setActive(selectedTab)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                changed: true,
                                element: this.selectedTab,
                                markVisible: function () { return _this.tabSwitch(); },
                            }];
                }
            });
        });
    };
    /** @internal */
    class_2.prototype.getRouteId = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var tabId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                tabId = this.selectedTab && this.selectedTab.tab;
                return [2 /*return*/, tabId !== undefined ? { id: tabId, element: this.selectedTab } : undefined];
            });
        });
    };
    class_2.prototype.setActive = function (selectedTab) {
        if (this.transitioning) {
            return Promise.reject('transitioning already happening');
        }
        this.transitioning = true;
        this.leavingTab = this.selectedTab;
        this.selectedTab = selectedTab;
        this.ionTabsWillChange.emit({ tab: selectedTab.tab });
        selectedTab.active = true;
        return Promise.resolve();
    };
    class_2.prototype.tabSwitch = function () {
        var selectedTab = this.selectedTab;
        var leavingTab = this.leavingTab;
        this.leavingTab = undefined;
        this.transitioning = false;
        if (!selectedTab) {
            return;
        }
        if (leavingTab !== selectedTab) {
            if (leavingTab) {
                leavingTab.active = false;
            }
            this.ionTabsDidChange.emit({ tab: selectedTab.tab });
        }
    };
    class_2.prototype.notifyRouter = function () {
        if (this.useRouter) {
            var router = document.querySelector('ion-router');
            if (router) {
                return router.navChanged('forward');
            }
        }
        return Promise.resolve(false);
    };
    class_2.prototype.shouldSwitch = function (selectedTab) {
        var leavingTab = this.selectedTab;
        return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    };
    Object.defineProperty(class_2.prototype, "tabs", {
        get: function () {
            return Array.from(this.el.querySelectorAll('ion-tab'));
        },
        enumerable: true,
        configurable: true
    });
    class_2.prototype.render = function () {
        return (Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["H"], { onIonTabButtonClick: this.onTabClicked }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "top" }), Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "tabs-inner" }, Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", null)), Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["h"])("slot", { name: "bottom" })));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_index_e23c3ffd_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var getTab = function (tabs, tab) {
    var tabEl = (typeof tab === 'string')
        ? tabs.find(function (t) { return t.tab === tab; })
        : tab;
    if (!tabEl) {
        console.error("tab with id: \"" + tabEl + "\" does not exist");
    }
    return tabEl;
};
Tabs.style = tabsCss;



/***/ })

}]);
//# sourceMappingURL=68.js.map