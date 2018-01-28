webpackJsonp([0],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		155
	],
	"../pages/goods-list2/goods-list2.module": [
		157
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CategoryPageModule = (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__category__["a" /* CategoryPage */]),
            ],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_menu_controller__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        menu.enable(true);
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\pages\category\category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>category</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div fxLayout="row wrap" style="height:100%">\n    <div class="material-shadow2 scroll-y" style="height:100%;width:28vw">\n      <ion-list>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n        <ion-item>\n          adsfdsf\n        </ion-item>\n      </ion-list>\n    </div>\n    <div fxFlex="auto">\n      <ion-row text-center>\n        <ion-col>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material-shadow2" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n        <ion-col text-center>\n          <span>\n            <button class="category-btn material" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_app_menu_controller__["a" /* MenuController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsList2PageModule", function() { return GoodsList2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goods_list2__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GoodsList2PageModule = (function () {
    function GoodsList2PageModule() {
    }
    GoodsList2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__goods_list2__["a" /* GoodsList2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__goods_list2__["a" /* GoodsList2Page */]),
            ],
        })
    ], GoodsList2PageModule);
    return GoodsList2PageModule;
}());

//# sourceMappingURL=goods-list2.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsList2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GoodsList2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GoodsList2Page = (function () {
    function GoodsList2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GoodsList2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoodsList2Page');
    };
    GoodsList2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goods-list2',template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\pages\goods-list2\goods-list2.html"*/'<!--\n  Generated template for the GoodsList2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>goods-list2</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div fxLayout="row wrap" style="height:100%">\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765105735182.jpg" alt="">\n    </div>\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765126302259.jpg" alt="">\n    </div>\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765379926158.jpg" alt="">\n    </div>\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765393776460.jpg" alt="">\n    </div>\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765408743028.jpg" alt="">\n    </div>\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765425385877.jpg" alt="">\n    </div>\n\n    <div fxFlex="50vw">\n      <img src="https://images.dmzj.com/resource/news/2018/01/24/1516765446628184.jpg" alt="">\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\pages\goods-list2\goods-list2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GoodsList2Page);
    return GoodsList2Page;
}());

//# sourceMappingURL=goods-list2.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.recommends = [];
        for (var i = 0; i <= 12; i++) {
            this.recommends.push({});
        }
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <!-- <div fxLayout="column wrap" style="height:100%">\n    <div>\n      <ion-slides pager>\n        <ion-slide>\n          <div class="title">\n            Nine Inch Nails Live\n          </div>\n          <ion-card class="material-shadow2 mag26">\n            <img src="https://images.dmzj.com/resource/news/2018/01/08/1515381349638519.jpg" />\n            <ion-card-content>\n              <p>\n                The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n          <div class="title">\n            Nine Inch Nails Live\n          </div>\n          <ion-card class="material-shadow2 mag26">\n            <img src="https://images.dmzj.com/resource/news/2018/01/08/1515381349638519.jpg" />\n            <ion-card-content>\n              <p>\n                The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n          <div class="title">\n            Nine Inch Nails Live\n          </div>\n          <ion-card class="material-shadow2 mag26">\n            <img src="https://images.dmzj.com/resource/news/2018/01/08/1515381349638519.jpg" />\n            <ion-card-content>\n              <p>\n                The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div fxFlex="auto" fxLayout="column wrap" fxLayoutAlign="center stretch">\n      <button ion-button round class="material-shadow2" style="margin:0 auto">Primary Round</button>\n    </div>\n  </div> -->\n  <goods-list></goods-list>\n</ion-content>'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="material user-panel">\n    <div style=" position:relative;">\n      <div>\n        <img class="user-bg" src="https://images.dmzj.com/resource/news/2018/01/25/1516849977299876.jpg" alt="">\n      </div>\n      <img class="user-face material" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3082255111,2866534260&fm=27&gp=0.jpg"\n        alt="">\n    </div>\n\n    <ion-row class="info">\n      <ion-col>\n        <p>120</p>\n        <p>我的积分</p>\n      </ion-col>\n\n      <ion-col>\n        <p>1400</p>\n        <p>关注店铺</p>\n      </ion-col>\n\n      <ion-col>\n        <p>1400</p>\n        <p>收藏夹</p>\n      </ion-col>\n\n      <ion-col>\n        <p>12</p>\n        <p>足迹</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="order-panel material">\n\n    <p class="order-title">\n      我的订单 <i class="fa fa-angle-right o-tilte"></i>\n    </p>\n\n    <ion-row >\n      <ion-col>\n        <p class="m-icon"><i class="fa fa-credit-card-alt"></i> </p>\n        <p class="m-icon-tilte">代付款</p>\n      </ion-col>\n\n      <ion-col>\n        <p class="m-icon"><i class="fa fa-archive"></i></p>\n        <p class="m-icon-tilte">待收货</p>\n      </ion-col>\n\n      <ion-col>\n        <p class="m-icon"><i class="fa fa-truck"></i></p>\n        <p class="m-icon-tilte">代发货</p>\n      </ion-col>\n\n      <ion-col>\n        <p class="m-icon"><i class="fa fa-signing "></i></p>\n        <p class="m-icon-tilte">待评价</p>\n      </ion-col>\n\n      <ion-col>\n        <p class="m-icon"><i class="fa fa-signing "></i></p>\n        <p class="m-icon-tilte">后/退款</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-card>\n    <ion-card-header>\n      Explore Nearby\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="cart" item-start></ion-icon>\n        Shopping\n      </button>\n\n      <button ion-item>\n        <ion-icon name="medical" item-start></ion-icon>\n        Hospital\n      </button>\n\n      <button ion-item>\n        <ion-icon name="cafe" item-start></ion-icon>\n        Cafe\n      </button>\n\n      <button ion-item>\n        <ion-icon name="paw" item-start></ion-icon>\n        Dog Park\n      </button>\n\n      <button ion-item>\n        <ion-icon name="beer" item-start></ion-icon>\n        Pub\n      </button>\n\n      <button ion-item>\n        <ion-icon name="planet" item-start></ion-icon>\n        Space\n      </button>\n\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goods_list2_goods_list2__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.iconBtn = [];
        this.recommends = [];
        this.list = [];
        for (var i = 0; i <= 3; i++) {
            this.iconBtn.push({});
        }
        for (var i = 0; i <= 12; i++) {
            this.recommends.push({});
        }
        for (var i = 0; i <= 13; i++) {
            this.list.push({});
        }
    }
    HomePage.prototype.openGoodsList2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__goods_list2_goods_list2__["a" /* GoodsList2Page */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager>\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="material" margin-top>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3 text-center *ngFor="let item of iconBtn">\n          <span>\n            <button (click)="openGoodsList2()" class="icon-btn" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n\n        <ion-col col-3 text-center *ngFor="let item of iconBtn">\n          <span>\n            <button class="icon-btn" ion-button round>Round Button</button>\n            <br> asdfasf\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  <div class="material" margin-top>\n    <div style="display: flex;flex-wrap: nowrap;flex-direction: row;" class="scroll-y">\n      <div style="width:36vw" *ngFor="let item of recommends">\n        <ion-card class="m6">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="img/marty-avatar.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>November 5, 1955</p>\n          </ion-item>\n\n          <img src="img/advance-card-bttf.png">\n\n          <ion-card-content>\n            <p>Wait a minuteilt a ti</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n    <div style="display: flex;flex-wrap: nowrap;flex-direction: row;" class="scroll-y">\n      <div style="width:36vw" *ngFor="let item of recommends">\n        <ion-card class="m6">\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="img/marty-avatar.png">\n            </ion-avatar>\n            <h2>Marty McFly</h2>\n            <p>November 5, 1955</p>\n          </ion-item>\n\n          <img src="img/advance-card-bttf.png">\n\n          <ion-card-content>\n            <p>Wait a minuteilt a ti</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n\n  <div class="material" margin-top>\n    <div style="height:18vh" fxLayout="row wrap">\n      <div>\n        asdfsdffsadf\n      </div>\n      <div fxFlex="auto" style="margin-left:2px">\n        a\n      </div>\n    </div>\n    <div fxLayout="row wrap">\n      <div fxFlex="50vw" fxLayout="row wrap" *ngFor="let item of list">\n        <div fxFlex="auto" class="shadow">\n          <div fxFlex="50%" fxLayout="column wrap">\n            <div>1</div>\n            <div fxFlex="auto">阿萨德发多少发发呆啊士大夫大师傅</div>\n          </div>\n          <div fxFlex="50%" fxLayout="column wrap">\n            <div>2</div>\n            <div fxFlex="auto">阿萨德发多少发发呆啊士大夫大师傅阿萨德发多少发发呆啊士大夫大师傅阿萨德发多少发发呆啊士大夫大师傅</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_goods_list2_goods_list2_module__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_goods_list2_goods_list2_module__["GoodsList2PageModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goods-list2/goods-list2.module#GoodsList2PageModule', name: 'GoodsList2Page', segment: 'goods-list2', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goods_list_goods_list__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_category_category_module__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__goods_list_goods_list__["a" /* GoodsListComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_3__pages_category_category_module__["CategoryPageModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__goods_list_goods_list__["a" /* GoodsListComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_category_category__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GoodsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var GoodsListComponent = (function () {
    function GoodsListComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello GoodsListComponent Component');
        this.text = 'Hello World';
    }
    GoodsListComponent.prototype.opentCategory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_category_category__["a" /* CategoryPage */]);
    };
    GoodsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'goods-list',template:/*ion-inline-start:"D:\ionic-project\wzb_v1.0\src\components\goods-list\goods-list.html"*/'<!-- Generated template for the GoodsListComponent component -->\n<div>\n  <ion-card class="material-shadow2" (click)="opentCategory()">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="material-shadow2">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="material-shadow2">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="material-shadow2">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="material-shadow2">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="material-shadow2">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n  <ion-card class="material-shadow2">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n</div>'/*ion-inline-end:"D:\ionic-project\wzb_v1.0\src\components\goods-list\goods-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_navigation_nav_controller__["a" /* NavController */]])
    ], GoodsListComponent);
    return GoodsListComponent;
}());

//# sourceMappingURL=goods-list.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map