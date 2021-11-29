(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/components.module": [
		"./src/app/content/pages/components/components.module.ts",
		"default~components-components-module~src-app-content-pages-pages-module"
	],
	"src/app/content/pages/pages.module": [
		"./src/app/content/pages/pages.module.ts",
		"default~components-components-module~src-app-content-pages-pages-module",
		"src-app-content-pages-pages-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- App loader -->\n<app-loader></app-loader>\n\n<!-- Router outlet to display routes -->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Sidebar Header -->\r\n<div class=\"sidebar-header d-flex align-items-center\">\r\n    <a routerLink=\"/home\" class=\"brand\">\r\n        <img [src]=\"brand.logo\" alt=\"{{brand.name}}\">\r\n    </a>\r\n\r\n    <!-- Back sidebar arrow -->\r\n    <button type=\"button\" class=\"btn p-0 ml-auto\" id=\"hideSidebar\" (click)=\"hideSidebar()\">\r\n        <i class=\"ion-md-arrow-back h3\"></i>\r\n    </button>\r\n\r\n    <!-- Sidebar hamburger -->\r\n    <button type=\"button\" class=\"btn toggle-menu\" (click)=\"toggleIconicSidebar()\">\r\n        <span *ngFor=\"let number of [0,1,2]\"></span>\r\n    </button>\r\n</div>\r\n<!-- End | Sidebar Header -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-left/aside-left.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-left/aside-left.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Sidebar [[ Find at scss/framework/base/sidebar/left/sidebar.scss ]] -->\r\n<aside id=\"sidebar\" [class]=\"sidebarClass\">\r\n    <app-aside-left-header></app-aside-left-header>\r\n\r\n    <!-- Begin | Navbar [[ Find at scss/framework/components/navbar/navbar.scss ]] -->\r\n    <nav class=\"navbar\">\r\n        <perfect-scrollbar class=\"navbar-nav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\" *ngFor=\"let item of menuItems\" [ngClass]=\"item.section ? 'nav-header' : ''\" (click)=\"hideSidebar()\">\r\n                    <!-- Menu section heading-->\r\n                    <ng-container *ngIf=\"item.section; else menuSection\">{{item.section}}</ng-container>\r\n\r\n                    <!-- Menu section-->\r\n                    <ng-template #menuSection>\r\n                        <app-menu-section [menuItem]=\"item\"></app-menu-section>\r\n                    </ng-template>\r\n                </li>\r\n            </ul>\r\n        </perfect-scrollbar>\r\n    </nav>\r\n    <!-- End | Navbar -->\r\n\r\n    <!-- Begin | Sidebar Footer -->\r\n    <!-- <div class=\"sidebar-footer\">\r\n        <button type=\"button\" routerLink=\"/add-music\" class=\"btn btn-block btn-danger btn-air btn-bold\"\r\n                (click)=\"hideSidebar()\">\r\n            <i [class]=\"asideFooterButton.icon\"></i>\r\n            <span>{{asideFooterButton.title}}</span>\r\n        </button>\r\n    </div> -->\r\n    <!-- End | Sidebar Footer -->\r\n</aside>\r\n<!-- End | Sidebar -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-right/aside-right.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-right/aside-right.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"right-sidebar-header\">{{playlist.name ? playlist.name : 'Playlist Name'}}</div>\r\n<perfect-scrollbar class=\"right-sidebar-body\">\r\n    <ul class=\"list-group list-group-flush song-list\" *ngIf=\"playlist.songs; else noDataFound\">\r\n        <!-- Begin | Custom List Item -->\r\n        <li class=\"custom-list--item list-group-item\" *ngFor=\"let song of playlist.songs; let i = index\">\r\n            <app-song-list-view [songNumber]=\"i+1\" [song]=\"song\" [icon]=\"'la-ellipsis-h'\" [playlist]=\"playlist\" [songIndex]=\"i\">\r\n            </app-song-list-view>\r\n        </li>\r\n        <!-- End | Custom List Item -->\r\n    </ul>\r\n    <ng-template #noDataFound></ng-template>\r\n</perfect-scrollbar>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/menu-section/menu-section.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/menu-section/menu-section.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"{{menuItem.page}}\">\n    <i [class]=\"menuItem.icon\"></i>\n    <span>{{menuItem.title}}</span>\n</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Footer [[ Find at scss/framework/base/footer/footer.scss ]] -->\n<footer id=\"footer\" class=\"bg-img\">\n    <div class=\"footer-content\">\n        <a class=\"email\">info@wazo.live</a>\n        <!-- <div class=\"platform-btn-inline\">\n            <button *ngFor=\"let button of footerButtons\" [class]=\"button.classes\">\n                <i [class]=\"button.icon\"></i>\n                <span class=\"platform-btn-info\">\n                    <span class=\"platform-desc\">Available on</span>\n                    <span class=\"platform-name\">{{button.subtitle}}</span>\n                </span>\n            </button>\n        </div> -->\n    </div>\n</footer>\n<!-- End | Footer -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Header [[ Find at scss/framework/base/header/header.scss ]] -->\r\n<header id=\"header\" class=\"d-flex align-items-center {{headerClasses}}\">\r\n    <div class=\"position-relative d-flex align-items-center flex-grow-1\">\r\n        <button type=\"button\" class=\"btn toggle-menu mr-3\" id=\"openSidebar\" (click)=\"openSidebar()\">\r\n            <span *ngFor=\"let number of [0,1,2]\"></span>\r\n        </button>\r\n\r\n        <div id=\"searchForm\">\r\n            <div class=\"position-relative\">\r\n                <button type=\"button\" class=\"btn ion-ios-search\"></button>\r\n                <input type=\"text\" placeholder=\"Search...\" id=\"searchInput\" class=\"form-control\" (focus)=\"showSearchResults()\">\r\n            </div>\r\n            <app-search></app-search>\r\n        </div>\r\n\r\n        <!-- Begin | Header Options -->\r\n        <ul class=\"header-options d-flex align-items-center\">\r\n            <!-- <li>\r\n                <a href=\"javascript:;\" class=\"language\" (click)=\"openLanguagesModal()\">\r\n                    <span>{{language.title}}</span>\r\n                    <img [src]=\"language.image\" alt=\"\">\r\n                </a>\r\n            </li> -->\r\n            <li>\r\n                <div class=\"switch switch-primary ml-auto\">\r\n                    <input type=\"checkbox\" id=\"theme\" [checked]=\"themeSkin.theme==='dark'\" (change)=\"setThemeSkin($event)\">\r\n                    <label for=\"theme\"></label>\r\n                </div>\r\n\r\n            </li>\r\n            <li>\r\n                <app-profile [user]=\"currentUser \"></app-profile>\r\n            </li>\r\n        </ul>\r\n        <!-- End | Header Options -->\r\n    </div>\r\n</header>\r\n<!-- End | Header -->\r\n\r\n<div class=\"backdrop header-backdrop \" (click)=\"hideSearchResults() \" #headerBackdrop></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/language/language.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/language/language.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-dialog theme-dialog\" role=\"document\">\n    <div class=\"modal-content lang-content\">\n        <div class=\"modal-header\">\n            <div class=\"pr-3\">\n                <h5 class=\"modal-title mb-1\">Language</h5>\n                <p class=\"text-muted\">Select a range of your language(s) to listen music.</p>\n            </div>\n            <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            <ul class=\"language-list\">\n                <li class=\"language-item\">\n                    <input type=\"checkbox\" id=\"l1\" checked>\n                    <label for=\"l1\">English</label>\n                </li>\n            </ul>\n        </div>\n        <div class=\"modal-footer text-center d-block pb-4\">\n            <button type=\"button\" class=\"btn btn-primary btn-pill\" (click)=\"close()\">Select</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/login/login.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/login/login.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-dialog theme-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header border-bottom-0 pb-0\">\n            <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n        </div>\n        <h6 class=\"modal-title text-center mb-3\">Login For Awesome Listing Experience</h6>\n        <div class=\"modal-body\">\n            <form action=\"#\" [formGroup]=\"login\" class=\"mx-4 pb-5\" (ngSubmit)=\"submitLogin()\">\n                <div class=\"social-login\">\n                    <a href=\"javascript:void(0);\" class=\"w-100 btn btn-social btn-facebook btn-default-air\">\n                        <span class=\"btn-content\">\n                            <i class=\"ion-logo-facebook\"></i>\n                            <span class=\"pl-2\">Login With Facebook</span>\n                        </span>\n                    </a>\n                    <a href=\"javascript:void(0);\" class=\"w-100 mt-3 btn btn-social btn-google btn-default-air\">\n                        <span class=\"btn-content\">\n                            <i class=\"ion-logo-google\"></i>\n                            <span class=\"pl-2\">Login With Google</span>\n                        </span>\n                    </a>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" formControlName=\"userName\" id=\"userName\" class=\"form-control\"\n                           placeholder=\"Email Id\" required>\n                    <div class=\"invalid-feedback\" *ngIf=\"(formSubmitted && userName.invalid) &&\n                    (userName.dirty || userName.touched)\" ngClass=\"d-block\">\n                        <span *ngIf=\"userName.errors.required\">Please fill this field</span>\n                        <span *ngIf=\"userName.errors.email\">Filled email id not valid</span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\"\n                           placeholder=\"Password\" minlength=\"4\" required>\n                    <div class=\"invalid-feedback\" *ngIf=\"(formSubmitted && password.invalid) &&\n                    (password.dirty || password.touched)\" ngClass=\"d-block\">\n                        <span *ngIf=\"password.errors.required\">Please fill this field</span>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-block btn-bold btn-air btn-info load-page\">Login</button>\n            </form>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/profile/profile.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/profile/profile.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown fade-in\">\n    <a class=\"d-flex align-items-center py-2 text-white\" role=\"button\" (click)=\"closeSearchResult()\" id=\"userMenu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" *ngIf=\"user?.name; else loginLink\">\n        <div class=\"avatar avatar-sm avatar-circle\"><img [src]=\"user.image\" alt=\"user\"></div>\n        <span class=\"pl-2\">{{user.name}}</span>\n    </a>\n    <ng-template #loginLink>\n        <a class=\"py-2 text-white\" (click)=\"openLoginModal()\">Sign In</a>\n    </ng-template>\n    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userMenu\">\n        <a class=\"dropdown-item\" *ngFor=\"let item of userMenu\" [routerLink]=\"item.page\">\n            <i [class]=\"item.icon\"></i>\n            <span>{{item.title}}</span>\n        </a>\n        <div class=\"dropdown-divider\"></div>\n        <div class=\"px-4 py-2\">\n            <button type=\"button\" (click)=\"logout()\" class=\"btn btn-sm btn-air btn-pill btn-danger\">Logout</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/search/search.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/search/search.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Search Card [[ Find at scss/framework/base/search/search.scss ]] -->\r\n<div class=\"search-card\">\r\n    <perfect-scrollbar>\r\n        <!-- Begin | Search Result List -->\r\n        <div class=\"search-item\">\r\n            <div class=\"search-item-header\">\r\n                <span class=\"search-item-title\">Artists</span>\r\n                <a class=\"search-item-link ml-auto\" (click)=\"goToPage('artists')\">View All</a>\r\n            </div>\r\n            <div class=\"search-item-body row\">\r\n                <div class=\"col-xl-2 col-md-4 col-6\" *ngFor=\"let artist of artistsList\">\r\n                    <app-image-card [item]=\"artist\" [imageBorderRadiusClass]=\"'card-img--radius-md'\"\r\n                                    [routeLink]=\"'/artist/' + artist.id + '/details'\"></app-image-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- End | Search Result List -->\r\n\r\n        <!-- Begin | Search Result List -->\r\n        <div class=\"search-item\">\r\n            <div class=\"search-item-header\">\r\n                <span class=\"search-item-title\">Track</span>\r\n                <a class=\"search-item-link ml-auto\" (click)=\"goToPage('songs')\">View All</a>\r\n            </div>\r\n            <div class=\"search-item-body row\">\r\n                <div class=\"col-xl-4 col-sm-6 col-12\" *ngFor=\"let song of songsList\">\r\n                    <app-song-horizontal [song]=\"song\" class=\"song-h song-h--sm\"></app-song-horizontal>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- End | Search Result List -->\r\n\r\n        <!-- Begin | Search Result List -->\r\n        <div class=\"search-item\">\r\n            <div class=\"search-item-header\">\r\n                <span class=\"search-item-title\">Albums</span>\r\n                <a class=\"search-item-link ml-auto\" (click)=\"goToPage('albums')\">View All</a>\r\n            </div>\r\n            <div class=\"search-item-body row\">\r\n                <div class=\"col-xl-4 col-sm-6 col-12\" *ngFor=\"let album of albumsList\">\r\n                    <app-song-horizontal [song]=\"album\" class=\"song-h song-h--sm\"\r\n                                         [routeLink]=\"'/album/' + album.id + '/details'\"></app-song-horizontal>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- End | Search Result List -->\r\n    </perfect-scrollbar>\r\n</div>\r\n<!-- End | Search Card -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/loader/loader.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/loader/loader.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Loading [[ Find at scss/framework/base/loader/loader.scss ]] -->\n<div id=\"loading\" *ngIf=\"loading\">\n    <div class=\"loader\">\n        <div class=\"eq\">\n            <span class=\"eq-bar eq-bar--1\"></span>\n            <span class=\"eq-bar eq-bar--2\"></span>\n            <span class=\"eq-bar eq-bar--3\"></span>\n            <span class=\"eq-bar eq-bar--4\"></span>\n            <span class=\"eq-bar eq-bar--5\"></span>\n            <span class=\"eq-bar eq-bar--6\"></span>\n        </div>\n        <span class=\"text\">Loading</span>\n    </div>\n</div>\n<!-- End | Loading -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/player/player.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/player/player.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Audio Player [[ Find at scss/framework/base/audio-player/audio-player.scss ]] -->\r\n<div id=\"audioPlayer\" [class]=\"playerClass\">\r\n\r\n    <!-- Begin | Audio Player Progress -->\r\n    <div id=\"progress-container\">\r\n        <input type=\"range\" class=\"amplitude-song-slider\">\r\n        <progress class=\"audio-progress audio-progress--played amplitude-song-played-progress\"></progress>\r\n        <progress class=\"audio-progress audio-progress--buffered amplitude-buffered-progress\" value=\"0\"></progress>\r\n    </div>\r\n    <!-- End | Audio Player Progress -->\r\n\r\n    <!-- Begin | Audio -->\r\n    <div class=\"audio\">\r\n        <div class=\"song-image\"><img data-amplitude-song-info=\"cover_art_url\" [src]=\"song?.cover_art_url\" alt=\"\"></div>\r\n        <div class=\"song-info pl-3\">\r\n            <span class=\"song-name d-inline-block text-truncate\" data-amplitude-song-info=\"name\"></span>\r\n            <span class=\"song-artists d-block text-muted\" data-amplitude-song-info=\"artist\"></span>\r\n        </div>\r\n    </div>\r\n    <!-- End | Audio -->\r\n\r\n    <!-- Begin | Audio Controls -->\r\n    <div class=\"audio-controls\">\r\n        <div class=\"audio-controls--left d-flex mr-auto\">\r\n            <button class=\"btn btn-icon-only amplitude-repeat\"><i class=\"ion-md-sync\"></i></button>\r\n        </div>\r\n        <div class=\"audio-controls--main d-flex\">\r\n            <button class=\"btn btn-icon-only amplitude-prev\"><i class=\"ion-md-skip-backward\"></i></button>\r\n            <button class=\"btn btn-air btn-pill btn-default btn-icon-only amplitude-play-pause\">\r\n                <i class=\"ion-md-play\"></i>\r\n                <i class=\"ion-md-pause\"></i>\r\n            </button>\r\n            <button class=\"btn btn-icon-only amplitude-next\"><i class=\"ion-md-skip-forward\"></i></button>\r\n        </div>\r\n        <div class=\"audio-controls--right d-flex ml-auto\">\r\n            <button class=\"btn btn-icon-only amplitude-shuffle amplitude-shuffle-off\"><i class=\"ion-md-shuffle\"></i></button>\r\n        </div>\r\n    </div>\r\n    <!-- End | Audio Controls -->\r\n\r\n    <!-- Begin | Audio Info -->\r\n    <div class=\"audio-info d-flex align-items-center pr-4\">\r\n        <span class=\"mr-4\">\r\n            <span class=\"amplitude-current-minutes\" ></span>:<span class=\"amplitude-current-seconds\"></span> /\r\n            <span class=\"amplitude-duration-minutes\"></span>:<span class=\"amplitude-duration-seconds\"></span>\r\n        </span>\r\n        <div class=\"audio-volume dropdown\">\r\n            <button class=\"btn btn-icon-only\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i [class]=\"volumeIcon\"></i>\r\n            </button>\r\n            <div class=\"dropdown-menu dropdown-menu-right volume-dropdown-menu\">\r\n                <input type=\"range\" class=\"amplitude-volume-slider\" value=\"100\" (change)=\"changeVolumeIcon($event)\">\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Song options -->\r\n        <app-song-options [icon]=\"'la-ellipsis-v'\" [song]=\"song\"></app-song-options>\r\n\r\n        <button class=\"btn btn-icon-only\" (click)=\"openPlaylist()\"><i class=\"ion-md-musical-note\"></i></button>\r\n    </div>\r\n    <!-- End | Audio Info -->\r\n\r\n</div>\r\n<!-- End | Audio Player -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/section/section.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/section/section.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Section [[ Find at scss/base/core.scss ]] -->\n<div class=\"section\">\n    <div class=\"heading\">\n        <div class=\"d-flex flex-wrap align-items-end\">\n            <div class=\"flex-grow-1\">\n                <h4>{{section?.title}}</h4>\n                <p>{{section?.subTitle}}</p>\n            </div>\n            <a class=\"btn btn-sm btn-pill btn-air btn-primary\" routerLink=\"{{section?.page}}\">View All</a>\n        </div>\n        <hr>\n    </div>\n\n    <ngx-slick-carousel [class]=\"classes\" [config]=\"sliderConfig\">\n        <div ngxSlickItem *ngFor=\"let item of section?.items\" class=\"slide\">\n            <app-image-card *ngIf=\"imageCard\" [item]=\"item\" [imageBorderRadiusClass]=\"imageBorderRadiusClass\" [routeLink]=\"artistRouteLink ? '/artist/' + item.id + '/details' : ''\"></app-image-card>\n\n            <app-primary-card *ngIf=\"primaryCard\" [song]=\"item\" [showOptions]=\"showImageOptions\" [imageBorderRadiusClass]=\"imageBorderRadiusClass\"></app-primary-card>\n\n            <app-secondary-card *ngIf=\"secondaryCard\" [item]=\"item\" [imageBorderRadiusClass]=\"imageBorderRadiusClass\">\n            </app-secondary-card>\n        </div>\n    </ngx-slick-carousel>\n</div>\n<!-- End | Section -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/comment/comment.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/comment/comment.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Section [[ Find at scss/base/core.scss ]] -->\n<div class=\"section\">\n    <div class=\"mb-4\">\n        <div class=\"d-flex mb-3\">\n            <span>Rate:</span>\n            <div class=\"text-warning stars pl-2\">\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n          </div>\n        </div>\n        <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"5\" class=\"form-control\"></textarea>\n        <div class=\"text-right mt-2\">\n            <button class=\"btn btn-info\">Comment</button>\n        </div>\n    </div>\n    <div class=\"d-flex mb-4\">\n        <div class=\"avatar avatar-sm avatar-circle\">\n            <img src=\"../assets/images/users/thumb.jpg\" alt=\"\">\n        </div>\n        <div class=\"pl-3 flex-grow-1 flex-basis-0\">\n            <span class=\"d-block font-weight-bold mb-1\">Lorem ipsum dolor sit amet, consectetur adipisicing</span>\n            <div class=\"text-warning stars mb-2 font-md\">\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star-half-empty\"></i>\n            </div>\n            <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>\n            <a href=\"#\" class=\"btn p-0\"><i class=\"la la-reply\"></i> Reply</a>\n        </div>\n    </div>\n    <div class=\"ml-5 mb-4\">\n        <div class=\"d-flex mb-4\">\n            <div class=\"avatar avatar-sm avatar-circle\">\n                <img src=\"../assets/images/users/thumb.jpg\" alt=\"\">\n            </div>\n            <div class=\"pl-3 flex-grow-1 flex-basis-0\">\n                <span class=\"d-block font-weight-bold mb-1\">Lorem ipsum dolor sit amet, consectetur adipisicing</span>\n                <div class=\"text-warning stars mb-2 font-md\">\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star\"></i>\n                    <i class=\"la la-star-half-empty\"></i>\n                </div>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"d-flex\">\n        <div class=\"avatar avatar-sm avatar-circle\">\n            <img src=\"../assets/images/users/thumb.jpg\" alt=\"\">\n        </div>\n        <div class=\"pl-3 flex-grow-1 flex-basis-0\">\n            <span class=\"d-block font-weight-bold mb-1\">Lorem ipsum dolor sit amet, consectetur adipisicing</span>\n            <div class=\"text-warning stars mb-2 font-md\">\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star\"></i>\n                <i class=\"la la-star-half-empty\"></i>\n            </div>\n            <p class=\"mb-2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda commodi debitis eaque iusto labore, officiis perspiciatis quisquam! Cumque delectus excepturi ipsum maiores numquam officia omnis porro quae quam sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate est et eveniet excepturi exercitationem, fugiat incidunt nesciunt odio placeat reprehenderit sed soluta tempore velit voluptatum. Adipisci delectus nesciunt tempore!</p>\n            <a href=\"#\" class=\"btn p-0\"><i class=\"la la-reply\"></i> Reply</a>\n        </div>\n    </div>\n</div>\n<!-- End | Section -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/countdown/countdown.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/countdown/countdown.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"countdown\">\n    <div *ngFor=\"let time of display; let i = index\" class=\"measurements {{time}}\">\n        <p class=\"measurements-number\">\n            {{(showZero && displayNumbers[i] < 10) ? '0' + displayNumbers[i].trim() : displayNumbers[i]}}\n        </p>\n        <span *ngIf=\"display[i+1]\" class=\"divider\"> {{divider}} </span>\n        <p class=\"measurements-text\">\n            {{time}}\n        </p>\n    </div>\n</div>\n<ng-content></ng-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-card/event-card.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-card/event-card.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"eventBorderRadiusClass\" [ngStyle]=\"{'background-image': 'url(' + musicEvent.image + ')'}\">\r\n    <div class=\"event-content p-4\">\r\n        <a [routerLink]=\"'/event/' + musicEvent.id + '/details'\"><h6>{{musicEvent.name}}</h6></a>\r\n        <div [innerHTML]=\"musicEvent.description | truncate\"></div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class]=\"eventBorderRadiusClass\" [ngStyle]=\"{'background-image': 'url(' + musicEvent.image + ')'}\">\n    <div class=\"event-content p-4\">\n        <a [routerLink]=\"'/event/' + musicEvent.id + '/details'\">\n            <h6>{{musicEvent.name}}</h6>\n        </a>\n        <!-- <div class=\"mb-3\">\n            <app-countdown [text]=\"countText\" [showZero]=\"'0'\" units=\"Days | Hours | Minutes | Seconds\" [end]=\"musicEvent.date\"></app-countdown>\n        </div> -->\n        <!-- <button type=\"button\" class=\"btn btn-bold btn-pill btn-air btn-warning btn-sm\">Buy Ticket</button> -->\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/image-card/image-card.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/image-card/image-card.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-card\" *ngIf=\"routeLink; else withoutLink\">\n    <a class=\"custom-card--link\" routerLink=\"{{routeLink}}\">\n        <div class=\"image\">\n            <img [src]=\"item.cover_url\" alt=\"{{item?.name}}\" [class]=\"imageBorderRadiusClass\">\n        </div>\n        <h6 class=\"mb-0 mt-2\">{{item?.name}}</h6>\n    </a>\n</div>\n\n<ng-template #withoutLink>\n    <div class=\"custom-card\">\n        <a class=\"custom-card--link\">\n            <div class=\"image\">\n                <img [src]=\"item.cover_url\" alt=\"{{item?.name}}\" [class]=\"imageBorderRadiusClass\">\n            </div>\n            <h6 class=\"mb-0 mt-2\">{{item?.name}}</h6>\n        </a>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/main-cards/primary-card/primary-card.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/main-cards/primary-card/primary-card.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Begin | Custom Card [[ Find at scss/framework/components/custom-card/custom-card.scss ]] -->\r\n<div class=\"custom-card\">\r\n    <div [class]=\"classes\">\r\n        <!-- Begin | Custom Card Info -->\r\n        <div class=\"custom-card--info\" *ngIf=\"showOptions\">\r\n            <ul class=\"custom-card--labels d-flex\" *ngIf=\"song?.premium || song?.favorite\">\r\n                <li *ngIf=\"song?.premium\"><span class=\"badge badge-pill badge-warning\"><i class=\"la la-star\"></i></span></li>\r\n                <li *ngIf=\"song?.favorite\"><span class=\"badge badge-pill badge-danger\"><i class=\"la la-heart\"></i></span></li>\r\n            </ul>\r\n            <!-- Custom Card Options Dropdown -->\r\n            <div class=\"dropdown dropdown-icon\">\r\n                <a href=\"javascript:;\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    <i class=\"ion-md-more\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                    <li class=\"dropdown-item\">\r\n                        <a href=\"javascript:;\" class=\"dropdown-link\" (click)=\"addFavorite()\">\r\n                            <i class=\"la la-heart-o\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"dropdown-item\">\r\n                        <a href=\"javascript:;\" class=\"dropdown-link\" (click)=\"addInQueue()\">\r\n                            <i class=\"la la-plus\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"dropdown-item\">\r\n                        <a [href]=\"song?.url\" class=\"dropdown-link\" download>\r\n                            <i class=\"la la-download\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"dropdown-item\">\r\n                        <a href=\"javascript:;\" class=\"dropdown-link\" (click)=\"shareSong()\">\r\n                            <i class=\"la la-share-alt\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <!-- End | Custom Card Info -->\r\n        <a (click)=\"addInPlayer()\">\r\n            <div class=\"image\">\r\n                <img [src]=\"song?.cover_url\" alt=\"{{song?.name}}\">\r\n            </div>\r\n        </a>\r\n    </div>\r\n\r\n    <!-- Custom Card Options Dropdown -->\r\n    <a class=\"custom-card--link mt-2\" [routerLink]=\"'/song/' + song.id + '/details'\">\r\n        <h6 class=\"text-truncate\" title=\"{{song?.name}}\">{{song?.name.slice(0, 25)}}</h6>\r\n        <p class=\"text-truncate\" title=\"{{song?.artist}}\" *ngIf=\"song?.artist\">{{song?.artist}}</p>\r\n    </a>\r\n</div>\r\n<!-- Begin | Custom Card [[ Find at scss/framework/components/custom-card/custom-card.scss ]] -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/main-cards/secondary-card/secondary-card.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/main-cards/secondary-card/secondary-card.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-card\">\n    <div class=\"custom-card--img\">\n        <a href=\"javascript:;\">\n            <div class=\"image\">\n                <img [src]=\"item?.cover_url\" alt=\"{{item?.name}}\" [class]=\"imageBorderRadiusClass\">\n            </div>\n            <span class=\"bg-blur\">{{item?.name}}</span>\n        </a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-horizontal/song-horizontal.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-horizontal/song-horizontal.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"song-h--img\">\n    <img [src]=\"song?.cover_url\" alt=\"{{song?.name}}\" [class]=\"imageBorderRadiusClass\">\n</div>\n<div class=\"song-h--desc\">\n    <span class=\"text-truncate song-h--name\" title=\"{{song?.name}}\">{{song?.name.slice(0, 25)}}</span>\n    <p class=\"text-truncate song-h--artist\" title=\"{{song?.artist}}\" *ngIf=\"song?.artist\">{{song?.artist}}</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-list-view/song-list-view.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-list-view/song-list-view.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"song-list--item-number\">\r\n    {{songNumber\r\n    < 10 ? '0' + songNumber : songNumber}} </div>\r\n\r\n        <app-song-horizontal [song]=\"song\" [imageBorderRadiusClass]=\"imageBorderRadiusClass\" [playlist]=\"playlist\" [songIndex]=\"songIndex\"></app-song-horizontal>\r\n\r\n        <ul class=\"custom-card--labels d-flex ml-auto\">\r\n            <li *ngIf=\"song?.favorite\"><span class=\"badge badge-pill badge-danger\"><i class=\"la la-heart\"></i></span></li>\r\n            <li *ngIf=\"song?.premium\"><span class=\"badge badge-pill badge-warning\"><i class=\"la la-star\"></i></span></li>\r\n            <li class=\"ml-4\">\r\n                <app-song-options [icon]=\"icon\" [song]=\"song\"></app-song-options>\r\n            </li>\r\n        </ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-options/song-options.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-options/song-options.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"btn btn-icon-only w-auto h-auto\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <i [class]=\"icon\"></i>\n</a>\n<ul class=\"dropdown-menu\">\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" (click)=\"addFavorite()\">\n            <i class=\"la la-heart-o\"></i>\n            <span>Favorite</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" (click)=\"addToPlayList()\">\n            <i class=\"la la-plus\"></i>\n            <span>Add to Playlist</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a [href]=\"song?.url\" class=\"dropdown-link\" download>\n            <i class=\"la la-download\"></i>\n            <span>Download</span>\n        </a>\n    </li>\n    <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" (click)=\"shareSong()\">\n            <i class=\"la la-share-alt\"></i>\n            <span>Share</span>\n        </a>\n    </li>\n    <!-- <li class=\"dropdown-item\">\n        <a class=\"dropdown-link\" [routerLink]=\"'/song/' + song.id + '/details'\">\n            <i class=\"la la-info-circle\"></i>\n            <span>Song Info</span>\n        </a>\n    </li> -->\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/theme-settings/theme-settings.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/theme-settings/theme-settings.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <button type=\"button\" class=\"btn btn-pill btn-air btn-brand btn-icon-only\" (click)=\"openSettings()\" id=\"customSettings\">\r\n    <i class=\"ion-md-settings\"></i>\r\n</button> -->\r\n\r\n<div id=\"settingsWrapper\" #settingsWrapper>\r\n    <header>\r\n        <span class=\"title-bold font-md text-uppercase\">Theme Settings</span>\r\n        <a class=\"ml-auto\" (click)=\"closeSettings()\"><i class=\"ion-md-close\"></i></a>\r\n    </header>\r\n    <div class=\"theme-settings-body\">\r\n        <ul class=\"custom-list\">\r\n            <li class=\"custom-list--item\">\r\n                <label for=\"to0\">Dark Theme</label>\r\n                <div class=\"custom-control custom-checkbox ml-auto\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"to0\" (change)=\"setThemeSkin($event)\" [checked]=\"themeSkin.theme === 'dark'\">\r\n                    <label class=\"custom-control-label\" for=\"to0\"></label>\r\n                </div>\r\n            </li>\r\n            <li class=\"custom-list-group--item-separator\"></li>\r\n            <li class=\"custom-list-group--item custom-list-group--item-header\">Header Colors</li>\r\n            <li class=\"custom-list--item\">\r\n                <a *ngFor=\"let color of themeClass; let i = index\" class=\"header-skin bg-{{color}}\" [ngClass]=\"i === config.config.themeSkin.header ? 'active' : ''\" (click)=\"setHeaderSkin(i)\"></a>\r\n            </li>\r\n            <li class=\"custom-list-group--item-separator\"></li>\r\n            <li class=\"custom-list-group--item custom-list-group--item-header\">Sidebar Colors</li>\r\n            <li class=\"custom-list--item\">\r\n                <a *ngFor=\"let color of themeClass; let i = index\" class=\"header-skin bg-{{color}}\" [ngClass]=\"i === config.config.themeSkin.sidebar ? 'active' : ''\" (click)=\"setSidebarSkin(i)\"></a>\r\n            </li>\r\n            <li class=\"custom-list-group--item-separator\"></li>\r\n            <li class=\"custom-list-group--item custom-list-group--item-header\">Player Colors</li>\r\n            <li class=\"custom-list--item\">\r\n                <a *ngFor=\"let color of themeClass; let i = index\" class=\"header-skin bg-{{color}}\" [ngClass]=\"i === config.config.themeSkin.player ? 'active' : ''\" (click)=\"setPlayerSkin(i)\"></a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: 'src/app/content/pages/pages.module#PagesModule'
    },
    {
        path: '**',
        redirectTo: '404',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/loading.service */ "./src/app/core/services/loading.service.ts");



let AppComponent = class AppComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.title = 'listen';
        this.loadingService.startLoading();
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/layout/layout.module */ "./src/app/content/layout/layout.module.ts");
/* harmony import */ var _content_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/layout/loader/loader.component */ "./src/app/content/layout/loader/loader.component.ts");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/loading.service */ "./src/app/core/services/loading.service.ts");
/* harmony import */ var _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/menu-config.service */ "./src/app/core/services/menu-config.service.ts");
/* harmony import */ var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/songs-config.service */ "./src/app/core/services/songs-config.service.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _content_layout_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _content_layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"]
        ],
        providers: [
            _core_services_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"],
            _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_9__["MenuConfigService"],
            _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_10__["SongsConfigService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config/albums.ts":
/*!**********************************!*\
  !*** ./src/app/config/albums.ts ***!
  \**********************************/
/*! exports provided: AlbumsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsConfig", function() { return AlbumsConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AlbumsConfig {
    constructor(api) {
        this.api = api;
        this.config = {};
        this.albumCount = 0;
        this.config = {
            items: []
        };
        this.api.postWithAuth("home/third/list", {}).subscribe((res) => {
            if (res.success) {
                var datas = res.data;
                var albums = datas.albums.data;
                albums.forEach(element => {
                    this.config.items.push({
                        id: element.movie_album_id,
                        name: element.name,
                        ratings: 4.5,
                        cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                        cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                    });
                });
            }
            else {
                console.log(res.error);
            }
        }, () => {
            console.log("oops something went wrong");
        });
    }
}


/***/ }),

/***/ "./src/app/config/artists.ts":
/*!***********************************!*\
  !*** ./src/app/config/artists.ts ***!
  \***********************************/
/*! exports provided: ArtistsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsConfig", function() { return ArtistsConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ArtistsConfig {
    constructor(api) {
        this.api = api;
        this.config = {};
        this.config = {
            items: [],
            details: {}
        };
        this.api.postWithAuth("home/second/list", {}).subscribe((res) => {
            console.log(res);
            if (res.success) {
                var datas = res.data;
                var artists = datas.artists.data;
                artists.forEach(element => {
                    this.config.items.push({
                        id: element.artist_id,
                        name: element.name,
                        dob: '',
                        ratings: 4.5,
                        cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                        bio: ''
                    });
                });
                // this.setState({
                //   first_section_items: response.data.data,
                //   isLoaded: true,
                //   banner_length: datas.banner.data.length,
                //   recent_activities_length: datas["recent activities"].data.length,
                //   trending_length: datas.trending.data.length
                // });
                // this.homePageSecondSection();
            }
            else {
                console.log(res.error);
            }
        }, () => {
            console.log("oops something went wrong");
        });
    }
    GetArtistSongsByArtistID(id, skip = 0) {
        this.api.postWithAuth("artist/songs", { artist_id: id, skip: skip }).subscribe((res) => {
            // console.log(res);
            if (res.success) {
                var songs = res.data;
                this.config.details = res.artist_detail;
                songs.forEach(element => {
                    this.config.items.push({
                        id: element.song_id,
                        premium: true,
                        favorite: false,
                        name: element.title,
                        artist: '',
                        album: '',
                        url: 'https://streamtunes-assets.s3.us-east-1.wasabisys.com/uploads/songs/' + element.web_audio_url,
                        cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                        cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                        ratings: 4.5,
                        composer: '',
                        lyricist: '',
                        director: '',
                        downloads: '',
                        lyrics: ''
                    });
                });
                return this.config;
            }
            else {
                console.log(res.error);
            }
        }, () => {
            console.log("oops something went wrong");
        });
    }
}


/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Config {
    constructor() {
        this.config = {};
        this.config = {
            // Brand config
            brand: {
                logo: './assets/images/logos/logo.svg',
                name: 'Listen App'
            },
            // Theme skin config
            themeSkin: {
                theme: 'light',
                header: 0,
                sidebar: 0,
                player: 0
            }
        };
    }
}
Config.CURRENT_USER = 'currentUser';
Config.STAR = 'la-star';
Config.HALF_STAR = 'la-star-half-empty';
Config.THEME_CLASSES = ['primary', 'danger', 'success', 'warning', 'info', 'brand', 'dark'];
Config.THEME_SKIN = 'themeSkin';
Config.classes = {
    show: 'show',
    openSearch: 'open-search',
    openSidebar: 'open-sidebar',
    iconicSidebar: 'iconic-sidebar'
};


/***/ }),

/***/ "./src/app/config/menu.ts":
/*!********************************!*\
  !*** ./src/app/config/menu.ts ***!
  \********************************/
/*! exports provided: MenuConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfig", function() { return MenuConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MenuConfig {
    constructor() {
        this.config = {};
        this.config = {
            aside: {
                items: [
                    // { section: 'Menu' },
                    {
                        title: 'Home',
                        icon: 'la la-home',
                        page: '/home'
                    },
                    {
                        title: 'Trending',
                        icon: 'la la-fire',
                        page: '/trending'
                    },
                    {
                        title: 'Podcasts',
                        icon: 'la la-microphone',
                        page: '/podcasts'
                    },
                    {
                        title: 'People',
                        icon: 'la la-users',
                        page: '/artists'
                    },
                    {
                        title: 'Categories',
                        icon: 'la la-files-o',
                        page: '/categories'
                    },
                ]
            },
            userMenu: {
                items: [
                    {
                        title: 'Profile',
                        icon: 'ion-md-contact',
                        page: '/profile'
                    },
                    {
                        title: 'Your Plan',
                        icon: 'ion-md-radio-button-off',
                        page: '/plan'
                    },
                    {
                        title: 'Settings',
                        icon: 'ion-md-settings',
                        page: '/settings'
                    }
                ]
            }
        };
    }
}


/***/ }),

/***/ "./src/app/config/playlist.ts":
/*!************************************!*\
  !*** ./src/app/config/playlist.ts ***!
  \************************************/
/*! exports provided: PlaylistConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistConfig", function() { return PlaylistConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PlaylistConfig {
    constructor() {
        this.config = {};
        this.config = {
            items: [
                {
                    id: 1,
                    name: 'DJ Remix',
                    cover_url: './assets/images/background/horizontal/1.jpg'
                },
                {
                    id: 2,
                    name: 'Rock Band',
                    cover_url: './assets/images/background/horizontal/2.jpg'
                },
                {
                    id: 3,
                    name: 'Solo Special',
                    cover_url: './assets/images/background/horizontal/3.jpg'
                },
                {
                    id: 4,
                    name: 'Romantic',
                    cover_url: './assets/images/background/horizontal/4.jpg'
                },
                {
                    id: 5,
                    name: 'GYM',
                    cover_url: './assets/images/background/horizontal/5.jpg'
                },
                {
                    id: 6,
                    name: 'Retro Special',
                    cover_url: './assets/images/background/horizontal/6.jpg'
                }
            ]
        };
    }
}


/***/ }),

/***/ "./src/app/config/songs.ts":
/*!*********************************!*\
  !*** ./src/app/config/songs.ts ***!
  \*********************************/
/*! exports provided: SongsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsConfig", function() { return SongsConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SongsConfig {
    constructor(api) {
        this.api = api;
        this.config = {};
        this.config = {
            items: []
        };
        this.api.postWithAuth("home/first/list", {}).subscribe((res) => {
            console.log(res);
            if (res.success) {
                var datas = res.data;
                var trending = datas.trending.data;
                trending.forEach(element => {
                    this.config.items.push({
                        id: element.song_id,
                        premium: true,
                        favorite: false,
                        name: element.title,
                        artist: '',
                        album: '',
                        url: 'https://streamtunes-assets.s3.us-east-1.wasabisys.com/uploads/songs/' + element.web_audio_url,
                        cover_art_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                        cover_url: element.picture === 'other-placeholder.jpg' ? './assets/images/cover/large/3.jpg' : element.picture,
                        ratings: 4.5,
                        composer: '',
                        lyricist: '',
                        director: '',
                        downloads: '',
                        lyrics: ''
                    });
                });
                this.config.count = trending.length;
                // this.setState({
                //   first_section_items: response.data.data,
                //   isLoaded: true,
                //   banner_length: datas.banner.data.length,
                //   recent_activities_length: datas["recent activities"].data.length,
                //   trending_length: datas.trending.data.length
                // });
                // this.homePageSecondSection();
            }
            else {
                console.log(res.error);
            }
        }, () => {
            console.log("oops something went wrong");
        });
    }
}


/***/ }),

/***/ "./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AsideLeftHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideLeftHeaderComponent", function() { return AsideLeftHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AsideLeftHeaderComponent = class AsideLeftHeaderComponent {
    constructor(document) {
        this.document = document;
        this.brand = {};
        this.config = new _config_config__WEBPACK_IMPORTED_MODULE_2__["Config"]();
        this.brand = this.config.config.brand;
    }
    ngOnInit() {
    }
    toggleIconicSidebar() {
        if (this.document.body.classList.contains(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.iconicSidebar)) {
            this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.iconicSidebar);
        }
        else {
            this.document.body.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.iconicSidebar);
        }
    }
    hideSidebar() {
        this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].classes.openSidebar);
    }
};
AsideLeftHeaderComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
AsideLeftHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside-left-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aside-left-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], AsideLeftHeaderComponent);



/***/ }),

/***/ "./src/app/content/layout/aside/aside-left/aside-left.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/layout/aside/aside-left/aside-left.component.ts ***!
  \*************************************************************************/
/*! exports provided: AsideLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideLeftComponent", function() { return AsideLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/menu-config.service */ "./src/app/core/services/menu-config.service.ts");
/* harmony import */ var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/skin.service */ "./src/app/core/services/skin.service.ts");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let AsideLeftComponent = class AsideLeftComponent {
    constructor(document, menuConfigService, localStorageService, skinService) {
        this.document = document;
        this.menuConfigService = menuConfigService;
        this.localStorageService = localStorageService;
        this.skinService = skinService;
        this.menuItems = [];
        this.asideFooterButton = {};
        this.sidebarClass = 'sidebar-primary';
        this.menuItems = this.menuConfigService.menuItems;
        this.asideFooterButton = {
            icon: 'ion-md-musical-note',
            title: 'Add Music'
        };
    }
    ngOnInit() {
        const themeSkin = this.localStorageService.getThemeSkin();
        if (themeSkin) {
            this.sidebarClass = 'sidebar-' + _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].THEME_CLASSES[themeSkin.sidebar];
        }
        this.skinSubscription = this.skinService.themeSkin.subscribe((skin) => {
            if (skin) {
                this.sidebarClass = 'sidebar-' + _config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].THEME_CLASSES[skin.sidebar];
            }
        });
    }
    hideSidebar() {
        this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_5__["Config"].classes.openSidebar);
    }
    ngOnDestroy() {
        if (this.skinSubscription) {
            this.skinSubscription.unsubscribe();
        }
    }
};
AsideLeftComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] },
    { type: _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfigService"] },
    { type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__["SkinService"] }
];
AsideLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside-left',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aside-left.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-left/aside-left.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]))
], AsideLeftComponent);



/***/ }),

/***/ "./src/app/content/layout/aside/aside-right/aside-right.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/layout/aside/aside-right/aside-right.component.ts ***!
  \***************************************************************************/
/*! exports provided: AsideRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideRightComponent", function() { return AsideRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_playlist_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/playlist-config.service */ "./src/app/core/services/playlist-config.service.ts");
/* harmony import */ var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/songs-config.service */ "./src/app/core/services/songs-config.service.ts");




let AsideRightComponent = class AsideRightComponent {
    constructor(playlistConfigService, songsConfigService) {
        this.playlistConfigService = playlistConfigService;
        this.songsConfigService = songsConfigService;
        this.id = 'rightSidebar';
        this.playlist = {};
    }
    ngOnInit() {
        this.setDefaultPlaylist();
        this.playlistSubscription = this.playlistConfigService.currentPlaylist.subscribe((playlist) => {
            this.playlist = playlist;
        });
    }
    setDefaultPlaylist() {
        this.playlist = {
            id: 1,
            name: 'Listen Special',
            cover_url: './assets/images/background/horizontal/1.jpg',
            songs: this.songsConfigService.songsList
        };
    }
    ngOnDestroy() {
        if (this.playlistSubscription) {
            this.playlistSubscription.unsubscribe();
        }
    }
};
AsideRightComponent.ctorParameters = () => [
    { type: _core_services_playlist_config_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistConfigService"] },
    { type: _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__["SongsConfigService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('id')
], AsideRightComponent.prototype, "id", void 0);
AsideRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside-right',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aside-right.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/aside-right/aside-right.component.html")).default
    })
], AsideRightComponent);



/***/ }),

/***/ "./src/app/content/layout/aside/menu-section/menu-section.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/layout/aside/menu-section/menu-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MenuSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSectionComponent", function() { return MenuSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuSectionComponent = class MenuSectionComponent {
    constructor() {
        this.menuItem = {};
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MenuSectionComponent.prototype, "menuItem", void 0);
MenuSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/aside/menu-section/menu-section.component.html")).default
    })
], MenuSectionComponent);



/***/ }),

/***/ "./src/app/content/layout/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/layout/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.footerButtons = [
            {
                classes: 'btn btn-dark btn-air platform-btn',
                icon: 'ion-logo-android',
                subtitle: 'Android'
            },
            {
                classes: 'btn btn-danger btn-air platform-btn',
                icon: 'ion-logo-apple',
                subtitle: 'App Store'
            }
        ];
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/footer/footer.component.html")).default
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/content/layout/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/layout/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./language/language.component */ "./src/app/content/layout/header/language/language.component.ts");
/* harmony import */ var _core_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/search.service */ "./src/app/core/services/search.service.ts");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/skin.service */ "./src/app/core/services/skin.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../config/config */ "./src/app/config/config.ts");









let HeaderComponent = class HeaderComponent {
    constructor(document, searchService, simpleModalService, localStorageService, skinService) {
        this.document = document;
        this.searchService = searchService;
        this.simpleModalService = simpleModalService;
        this.localStorageService = localStorageService;
        this.skinService = skinService;
        this.headerClasses = 'bg-primary';
        this.language = {};
        this.currentUser = {};
        this.themeSkin = this.localStorageService.getThemeSkin();
        this.language = {
            title: 'Language',
            image: './assets/images/svg/translate.svg'
        };
    }
    ngOnInit() {
        this.currentUser = this.localStorageService.getCurrentUser();
        if (this.themeSkin) {
            this.headerClasses = 'bg-' + _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].THEME_CLASSES[this.themeSkin.header];
        }
        this.searchSubscription = this.searchService.searchStatus.subscribe((value) => {
            if (value) {
                this.hideSearchResults();
            }
        });
        this.skinSubscription = this.skinService.themeSkin.subscribe((skin) => {
            if (skin) {
                this.headerClasses = 'bg-' + _config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].THEME_CLASSES[skin.header];
            }
        });
    }
    showSearchResults() {
        this.document.body.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.openSearch);
        this.backdrop.nativeElement.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.show);
    }
    hideSearchResults() {
        this.document.body.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.openSearch);
        this.backdrop.nativeElement.classList.remove(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.show);
    }
    openLanguagesModal() {
        this.hideSearchResults();
        const modal = this.simpleModalService.addModal(_language_language_component__WEBPACK_IMPORTED_MODULE_4__["LanguageComponent"], {})
            .subscribe((isConfirmed) => {
            if (isConfirmed) {
            }
            else {
            }
        });
    }
    openSidebar() {
        this.document.body.classList.add(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].classes.openSidebar);
    }
    ngOnDestroy() {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
        if (this.skinSubscription) {
            this.skinSubscription.unsubscribe();
        }
    }
    setThemeSkin(event) {
        if (event.target.checked) {
            this.themeSkin.theme = 'dark';
        }
        else if (!event.target.checked) {
            this.themeSkin.theme = 'light';
        }
        this.skinService.skin = this.themeSkin;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
    { type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__["SimpleModalService"] },
    { type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] },
    { type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_7__["SkinService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerBackdrop', { static: false })
], HeaderComponent.prototype, "backdrop", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/header.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], HeaderComponent);



/***/ }),

/***/ "./src/app/content/layout/header/language/language.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/content/layout/header/language/language.component.ts ***!
  \**********************************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");



let LanguageComponent = class LanguageComponent extends ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"] {
    constructor() {
        super();
    }
    ngOnInit() {
    }
};
LanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-language',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/language/language.component.html")).default
    })
], LanguageComponent);



/***/ }),

/***/ "./src/app/content/layout/header/login/login.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/layout/header/login/login.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../config/config */ "./src/app/config/config.ts");







let LoginComponent = class LoginComponent extends ngx_simple_modal__WEBPACK_IMPORTED_MODULE_3__["SimpleModalComponent"] {
    constructor(localStorageService, router) {
        super();
        this.localStorageService = localStorageService;
        this.router = router;
        this.formSubmitted = false;
    }
    ngOnInit() {
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('listen_app@kri8thm.com', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123456789', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
        });
    }
    get userName() {
        return this.login.get('userName');
    }
    get password() {
        return this.login.get('password');
    }
    submitLogin() {
        this.formSubmitted = true;
        if (this.login.invalid) {
            return false;
        }
        // You can replace this object with your user object
        const user = {
            id: 1,
            role: 'ADMIN',
            userName: this.login.controls.userName.value,
            image: './assets/images/users/thumb.jpg',
            name: 'Halo Admin'
        };
        this.localStorageService.setLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].CURRENT_USER, user);
        this.close();
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/login/login.component.html")).default
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/content/layout/header/profile/profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/content/layout/header/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/menu-config.service */ "./src/app/core/services/menu-config.service.ts");
/* harmony import */ var _core_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/search.service */ "./src/app/core/services/search.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/content/layout/header/login/login.component.ts");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../config/config */ "./src/app/config/config.ts");









let ProfileComponent = class ProfileComponent {
    constructor(searchService, localStorageService, menuConfigService, router, simpleModalService) {
        this.searchService = searchService;
        this.localStorageService = localStorageService;
        this.menuConfigService = menuConfigService;
        this.router = router;
        this.simpleModalService = simpleModalService;
        this.user = {};
        this.userMenu = [];
        this.userMenu = this.menuConfigService.userMenuItems;
    }
    ngOnInit() {
    }
    closeSearchResult() {
        this.searchService.hideSearchResult();
    }
    openLoginModal() {
        this.closeSearchResult();
        const modal = this.simpleModalService.addModal(_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], {})
            .subscribe((isConfirmed) => {
            if (isConfirmed) {
            }
            else {
            }
        });
    }
    logout() {
        this.localStorageService.clearLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_8__["Config"].CURRENT_USER);
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] },
    { type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _core_services_menu_config_service__WEBPACK_IMPORTED_MODULE_4__["MenuConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProfileComponent.prototype, "user", void 0);
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/profile/profile.component.html")).default
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/content/layout/header/search/search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/content/layout/header/search/search.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/songs-config.service */ "./src/app/core/services/songs-config.service.ts");
/* harmony import */ var _core_services_albums_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/albums-config.service */ "./src/app/core/services/albums-config.service.ts");
/* harmony import */ var _core_services_artists_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/artists-config.service */ "./src/app/core/services/artists-config.service.ts");
/* harmony import */ var _core_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/services/search.service */ "./src/app/core/services/search.service.ts");







let SearchComponent = class SearchComponent {
    constructor(router, songsConfigService, albumsConfigService, artistsConfigService, searchService) {
        this.router = router;
        this.songsConfigService = songsConfigService;
        this.albumsConfigService = albumsConfigService;
        this.artistsConfigService = artistsConfigService;
        this.searchService = searchService;
        this.songsList = [];
        this.albumsList = [];
        this.artistsList = [];
    }
    ngOnInit() {
        this.songsList = this.songsConfigService.songsList;
        this.songsList = this.songsList.slice(0, 3);
        this.albumsList = this.albumsConfigService.albumsList;
        this.albumsList = this.albumsList.slice(2, 5);
        this.artistsList = this.artistsConfigService.artistsList;
        this.artistsList = this.artistsList.slice(0, 6);
    }
    goToPage(page) {
        page = '/' + page;
        this.searchService.hideSearchResult();
        this.router.navigate([page]);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__["SongsConfigService"] },
    { type: _core_services_albums_config_service__WEBPACK_IMPORTED_MODULE_4__["AlbumsConfigService"] },
    { type: _core_services_artists_config_service__WEBPACK_IMPORTED_MODULE_5__["ArtistsConfigService"] },
    { type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/header/search/search.component.html")).default
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/content/layout/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/content/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
/* harmony import */ var _aside_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./aside/aside-left/aside-left.component */ "./src/app/content/layout/aside/aside-left/aside-left.component.ts");
/* harmony import */ var _aside_aside_left_aside_left_header_aside_left_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aside/aside-left/aside-left-header/aside-left-header.component */ "./src/app/content/layout/aside/aside-left/aside-left-header/aside-left-header.component.ts");
/* harmony import */ var _aside_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aside/menu-section/menu-section.component */ "./src/app/content/layout/aside/menu-section/menu-section.component.ts");
/* harmony import */ var _aside_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aside/aside-right/aside-right.component */ "./src/app/content/layout/aside/aside-right/aside-right.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/content/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/content/layout/footer/footer.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./player/player.component */ "./src/app/content/layout/player/player.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./section/section.component */ "./src/app/content/layout/section/section.component.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../partials/partials.module */ "./src/app/content/partials/partials.module.ts");
/* harmony import */ var _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/profile/profile.component */ "./src/app/content/layout/header/profile/profile.component.ts");
/* harmony import */ var _header_language_language_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/language/language.component */ "./src/app/content/layout/header/language/language.component.ts");
/* harmony import */ var _header_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/search/search.component */ "./src/app/content/layout/header/search/search.component.ts");
/* harmony import */ var _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/login/login.component */ "./src/app/content/layout/header/login/login.component.ts");
























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _aside_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__["AsideLeftComponent"],
            _aside_aside_left_aside_left_header_aside_left_header_component__WEBPACK_IMPORTED_MODULE_9__["AsideLeftHeaderComponent"],
            _aside_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_11__["AsideRightComponent"],
            _aside_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__["MenuSectionComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_14__["PlayerComponent"],
            _section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"],
            _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
            _header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"],
            _header_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
            _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
        ],
        exports: [
            _aside_aside_left_aside_left_component__WEBPACK_IMPORTED_MODULE_8__["AsideLeftComponent"],
            _aside_aside_left_aside_left_header_aside_left_header_component__WEBPACK_IMPORTED_MODULE_9__["AsideLeftHeaderComponent"],
            _aside_aside_right_aside_right_component__WEBPACK_IMPORTED_MODULE_11__["AsideRightComponent"],
            _aside_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_10__["MenuSectionComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_14__["PlayerComponent"],
            _section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"],
            _header_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
            _header_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
            _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"],
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_16__["PartialsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalModule"].forRoot({ container: document.body })
        ],
        entryComponents: [
            _header_language_language_component__WEBPACK_IMPORTED_MODULE_18__["LanguageComponent"],
            _header_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            {
                provide: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["DefaultSimpleModalOptionConfig"],
                useValue: Object.assign({}, ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["defaultSimpleModalOptions"], {
                    wrapperDefaultClasses: 'simple-modal modal fade',
                    wrapperClass: 'show',
                    closeOnEscape: true,
                    closeOnClickOutside: true,
                    animationDuration: 1000,
                })
            }
        ]
    })
], LayoutModule);



/***/ }),

/***/ "./src/app/content/layout/loader/loader.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/layout/loader/loader.component.ts ***!
  \***********************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/loading.service */ "./src/app/core/services/loading.service.ts");



let LoaderComponent = class LoaderComponent {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.loading = false;
    }
    ngOnInit() {
        this.loadingSubscription = this.loadingService.loadingStatus.subscribe((value) => {
            this.loading = value;
        });
    }
    ngOnDestroy() {
        if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }
    }
};
LoaderComponent.ctorParameters = () => [
    { type: _core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] }
];
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/loader/loader.component.html")).default
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/content/layout/player/player.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/layout/player/player.component.ts ***!
  \***********************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/songs-config.service */ "./src/app/core/services/songs-config.service.ts");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/skin.service */ "./src/app/core/services/skin.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/config */ "./src/app/config/config.ts");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! amplitudejs */ "./node_modules/amplitudejs/dist/amplitude.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(amplitudejs__WEBPACK_IMPORTED_MODULE_7__);








let PlayerComponent = class PlayerComponent {
    constructor(document, localStorageService, songsConfigService, skinService) {
        this.document = document;
        this.localStorageService = localStorageService;
        this.songsConfigService = songsConfigService;
        this.skinService = skinService;
        this.song = {};
        this.volumeIcon = 'ion-md-volume-low';
        this.showPlaylist = 'open-right-sidebar';
        this.playerClass = 'player-primary';
    }
    ngOnInit() {
        this.song = this.songsConfigService.defaultSong;
        amplitudejs__WEBPACK_IMPORTED_MODULE_7__["init"]({
            songs: [this.song]
        });
        const themeSkin = this.localStorageService.getThemeSkin();
        if (themeSkin) {
            this.playerClass = 'player-' + _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].THEME_CLASSES[themeSkin.player];
        }
        this.skinSubscription = this.skinService.themeSkin.subscribe((skin) => {
            if (skin) {
                this.playerClass = 'player-' + _config_config__WEBPACK_IMPORTED_MODULE_6__["Config"].THEME_CLASSES[skin.player];
            }
        });
    }
    changeVolumeIcon(event) {
        const value = event.target.value;
        if (value < 1) {
            this.volumeIcon = 'ion-md-volume-mute';
        }
        else if (value > 0 && value < 70) {
            this.volumeIcon = 'ion-md-volume-low';
        }
        else if (value > 70) {
            this.volumeIcon = 'ion-md-volume-high';
        }
    }
    openPlaylist() {
        if (this.document.body.classList.contains(this.showPlaylist)) {
            this.document.body.classList.remove(this.showPlaylist);
        }
        else {
            this.document.body.classList.add(this.showPlaylist);
        }
    }
    ngOnDestroy() {
        if (this.skinSubscription) {
            this.skinSubscription.unsubscribe();
        }
    }
};
PlayerComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] },
    { type: _core_services_songs_config_service__WEBPACK_IMPORTED_MODULE_3__["SongsConfigService"] },
    { type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_5__["SkinService"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/player/player.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], PlayerComponent);



/***/ }),

/***/ "./src/app/content/layout/section/section.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/content/layout/section/section.component.ts ***!
  \*************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionComponent = class SectionComponent {
    constructor() {
        this.classes = 'carousel';
        this.section = {};
        this.imageCard = false;
        this.primaryCard = false;
        this.secondaryCard = false;
        this.showImageOptions = false;
        this.imageBorderRadiusClass = 'card-img--radius-lg';
        this.fourSlideCarousel = false;
        this.artistRouteLink = false;
        this.sliderConfig = {};
    }
    ngOnInit() {
        const prev = '<button class="btn-prev btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-left"></i></button>';
        const next = '<button class="btn-next btn btn-pill btn-air btn-default btn-icon-only"><i class="la la-angle-right"></i></button>';
        this.sliderConfig = {
            arrows: true,
            dots: false,
            infinite: false,
            slidesToShow: this.fourSlideCarousel ? 4 : 6,
            slidesToScroll: 2,
            speed: 1000,
            prevArrow: prev,
            nextArrow: next,
            autoplay: true,
            // Breakpoints
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: this.fourSlideCarousel ? 4 : 5
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: this.fourSlideCarousel ? 2 : 3
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: true
                    }
                }
            ]
        };
        this.classes = this.classes + ' ' + this.carouselButtonPositionClass;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "section", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "imageCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "primaryCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "secondaryCard", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "showImageOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "imageBorderRadiusClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "carouselButtonPositionClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "fourSlideCarousel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "artistRouteLink", void 0);
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/layout/section/section.component.html")).default
    })
], SectionComponent);



/***/ }),

/***/ "./src/app/content/partials/comment/comment.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/content/partials/comment/comment.component.ts ***!
  \***************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommentComponent = class CommentComponent {
    constructor() { }
    ngOnInit() {
    }
};
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/comment/comment.component.html")).default
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/content/partials/countdown/countdown.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/content/partials/countdown/countdown.component.ts ***!
  \*******************************************************************/
/*! exports provided: CountdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownComponent", function() { return CountdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountdownComponent = class CountdownComponent {
    constructor() {
        this.displayString = '';
        this.showZero = false;
        this.reached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.display = [];
        this.displayNumbers = [];
        this.wasReached = false;
        setInterval(() => this.countdown(), 100);
    }
    ngOnInit() {
    }
    countdown() {
        if (this.wasReached) {
            return false;
        }
        if (typeof this.units === 'string') {
            this.units = this.units.split('|');
        }
        const givenDate = new Date(this.end);
        const now = new Date();
        const dateDifference = givenDate - now;
        if ((dateDifference < 100 && dateDifference > 0) || dateDifference < 0 && !this.wasReached) {
            this.wasReached = true;
            this.reached.next(now);
        }
        const lastUnit = this.units[this.units.length - 1];
        const unitConstantForMilliSecs = {
            year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
            month: ((1000 * 60 * 60 * 24 * 7) * 4),
            weeks: (1000 * 60 * 60 * 24 * 7),
            days: (1000 * 60 * 60 * 24),
            hours: (1000 * 60 * 60),
            minutes: (1000 * 60),
            seconds: 1000
        };
        const unitsLeft = {};
        let returnText = '';
        let returnNumbers = '';
        let totalMilliSecsLeft = dateDifference;
        let i;
        let unit;
        for (i in this.units) {
            if (this.units.hasOwnProperty(i)) {
                unit = this.units[i].trim();
                if (unitConstantForMilliSecs[unit.toLowerCase()] === false) {
                    throw new Error('Cannot repeat unit: ' + unit);
                }
                if (unitConstantForMilliSecs.hasOwnProperty(unit.toLowerCase()) === false) {
                    throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, ' +
                        'days, hours, minutes, seconds, milliseconds');
                }
                // If it was reached, everything is zero
                unitsLeft[unit] = (this.wasReached) ? 0 : totalMilliSecsLeft / unitConstantForMilliSecs[unit.toLowerCase()];
                if (lastUnit === unit) {
                    unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                }
                else {
                    unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                }
                totalMilliSecsLeft -= unitsLeft[unit] * unitConstantForMilliSecs[unit.toLowerCase()];
                unitConstantForMilliSecs[unit.toLowerCase()] = false;
                // If it's less than 0, round to 0
                unitsLeft[unit] = (unitsLeft[unit] > 0) ? unitsLeft[unit] : 0;
                returnNumbers += ' ' + unitsLeft[unit] + ' | ';
                returnText += ' ' + unit;
            }
        }
        if (this.text === null || !this.text) {
            this.text = {
                Year: 'Year',
                Month: 'Month',
                Weeks: 'Weeks',
                Days: 'Days',
                Hours: 'Hours',
                Minutes: 'Minutes',
                Seconds: 'Seconds',
                MilliSeconds: 'Milliseconds'
            };
        }
        this.displayString = returnText
            .replace('Year', this.text.Year + ' | ')
            .replace('Month', this.text.Month + ' | ')
            .replace('Weeks', this.text.Weeks + ' | ')
            .replace('Days', this.text.Days + ' | ')
            .replace('Hours', this.text.Hours + ' | ')
            .replace('Minutes', this.text.Minutes + ' | ')
            .replace('Seconds', this.text.Seconds);
        this.displayNumbers = returnNumbers.split('|');
        this.display = this.displayString.split('|');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownComponent.prototype, "units", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownComponent.prototype, "end", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownComponent.prototype, "displayString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownComponent.prototype, "divider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CountdownComponent.prototype, "showZero", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CountdownComponent.prototype, "reached", void 0);
CountdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countdown',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./countdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/countdown/countdown.component.html")).default
    })
], CountdownComponent);



/***/ }),

/***/ "./src/app/content/partials/event-cards/event-card/event-card.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/content/partials/event-cards/event-card/event-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EventCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardComponent", function() { return EventCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventCardComponent = class EventCardComponent {
    constructor() {
        this.musicEvent = {};
        this.eventBorderRadiusClass = 'bg-img-radius-lg';
    }
    ngOnInit() {
        this.eventBorderRadiusClass = this.eventBorderRadiusClass + ' h-100 event event-h bg-img';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EventCardComponent.prototype, "musicEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EventCardComponent.prototype, "eventBorderRadiusClass", void 0);
EventCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-card/event-card.component.html")).default
    })
], EventCardComponent);



/***/ }),

/***/ "./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EventCountdownCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCountdownCardComponent", function() { return EventCountdownCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventCountdownCardComponent = class EventCountdownCardComponent {
    constructor() {
        this.musicEvent = {};
        this.eventBorderRadiusClass = 'bg-img-radius-lg';
        this.countText = {};
    }
    ngOnInit() {
        this.eventBorderRadiusClass = this.eventBorderRadiusClass + ' h-100 event event-v bg-img';
        this.countText = {
            Year: '',
            Month: '',
            Weeks: '',
            Days: '',
            Hours: '',
            Minutes: '',
            Seconds: '',
            MilliSeconds: ''
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EventCountdownCardComponent.prototype, "musicEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EventCountdownCardComponent.prototype, "eventBorderRadiusClass", void 0);
EventCountdownCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event-countdown-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-countdown-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.html")).default
    })
], EventCountdownCardComponent);



/***/ }),

/***/ "./src/app/content/partials/image-card/image-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/content/partials/image-card/image-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardComponent", function() { return ImageCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/search.service */ "./src/app/core/services/search.service.ts");



let ImageCardComponent = class ImageCardComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.imageBorderRadiusClass = 'card-img--radius-lg';
    }
    onClick() {
        this.searchService.hideSearchResult();
    }
    ngOnInit() {
    }
};
ImageCardComponent.ctorParameters = () => [
    { type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageCardComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageCardComponent.prototype, "routeLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ImageCardComponent.prototype, "imageBorderRadiusClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], ImageCardComponent.prototype, "onClick", null);
ImageCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/image-card/image-card.component.html")).default
    })
], ImageCardComponent);



/***/ }),

/***/ "./src/app/content/partials/main-cards/primary-card/primary-card.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/content/partials/main-cards/primary-card/primary-card.component.ts ***!
  \************************************************************************************/
/*! exports provided: PrimaryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryCardComponent", function() { return PrimaryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/audio-player.service */ "./src/app/core/services/audio-player.service.ts");



let PrimaryCardComponent = class PrimaryCardComponent {
    constructor(audioPlayerService) {
        this.audioPlayerService = audioPlayerService;
        this.song = {};
        this.showOptions = false;
        this.imageBorderRadiusClass = 'card-img--radius-lg';
        this.classes = '';
    }
    ngOnInit() {
        this.classes = 'custom-card--img ' + this.imageBorderRadiusClass;
    }
    addFavorite() {
        this.song.favorite = true;
    }
    addInQueue() {
    }
    shareSong() {
    }
    addInPlayer() {
        this.audioPlayerService.playSong(this.song);
    }
};
PrimaryCardComponent.ctorParameters = () => [
    { type: _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_2__["AudioPlayerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrimaryCardComponent.prototype, "song", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrimaryCardComponent.prototype, "showOptions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PrimaryCardComponent.prototype, "imageBorderRadiusClass", void 0);
PrimaryCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-primary-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./primary-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/main-cards/primary-card/primary-card.component.html")).default
    })
], PrimaryCardComponent);



/***/ }),

/***/ "./src/app/content/partials/main-cards/secondary-card/secondary-card.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/content/partials/main-cards/secondary-card/secondary-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SecondaryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryCardComponent", function() { return SecondaryCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SecondaryCardComponent = class SecondaryCardComponent {
    constructor() {
        this.item = {};
        this.imageBorderRadiusClass = 'card-img--radius-md';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryCardComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SecondaryCardComponent.prototype, "imageBorderRadiusClass", void 0);
SecondaryCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-secondary-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./secondary-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/main-cards/secondary-card/secondary-card.component.html")).default
    })
], SecondaryCardComponent);



/***/ }),

/***/ "./src/app/content/partials/partials.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/content/partials/partials.module.ts ***!
  \*****************************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_cards_primary_card_primary_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-cards/primary-card/primary-card.component */ "./src/app/content/partials/main-cards/primary-card/primary-card.component.ts");
/* harmony import */ var _main_cards_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-cards/secondary-card/secondary-card.component */ "./src/app/content/partials/main-cards/secondary-card/secondary-card.component.ts");
/* harmony import */ var _event_cards_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-cards/event-card/event-card.component */ "./src/app/content/partials/event-cards/event-card/event-card.component.ts");
/* harmony import */ var _event_cards_event_countdown_card_event_countdown_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-cards/event-countdown-card/event-countdown-card.component */ "./src/app/content/partials/event-cards/event-countdown-card/event-countdown-card.component.ts");
/* harmony import */ var _core_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/pipes/truncate.pipe */ "./src/app/core/pipes/truncate.pipe.ts");
/* harmony import */ var _song_list_view_song_list_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./song-list-view/song-list-view.component */ "./src/app/content/partials/song-list-view/song-list-view.component.ts");
/* harmony import */ var _song_options_song_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./song-options/song-options.component */ "./src/app/content/partials/song-options/song-options.component.ts");
/* harmony import */ var _song_horizontal_song_horizontal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./song-horizontal/song-horizontal.component */ "./src/app/content/partials/song-horizontal/song-horizontal.component.ts");
/* harmony import */ var _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image-card/image-card.component */ "./src/app/content/partials/image-card/image-card.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/content/partials/comment/comment.component.ts");
/* harmony import */ var _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme-settings/theme-settings.component */ "./src/app/content/partials/theme-settings/theme-settings.component.ts");
/* harmony import */ var _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./countdown/countdown.component */ "./src/app/content/partials/countdown/countdown.component.ts");
















let PartialsModule = class PartialsModule {
};
PartialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _main_cards_primary_card_primary_card_component__WEBPACK_IMPORTED_MODULE_4__["PrimaryCardComponent"],
            _main_cards_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryCardComponent"],
            _event_cards_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_6__["EventCardComponent"],
            _event_cards_event_countdown_card_event_countdown_card_component__WEBPACK_IMPORTED_MODULE_7__["EventCountdownCardComponent"],
            _core_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncatePipe"],
            _song_list_view_song_list_view_component__WEBPACK_IMPORTED_MODULE_9__["SongListViewComponent"],
            _song_options_song_options_component__WEBPACK_IMPORTED_MODULE_10__["SongOptionsComponent"],
            _song_horizontal_song_horizontal_component__WEBPACK_IMPORTED_MODULE_11__["SongHorizontalComponent"],
            _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_12__["ImageCardComponent"],
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
            _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_14__["ThemeSettingsComponent"],
            _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_15__["CountdownComponent"]
        ],
        exports: [
            _main_cards_primary_card_primary_card_component__WEBPACK_IMPORTED_MODULE_4__["PrimaryCardComponent"],
            _main_cards_secondary_card_secondary_card_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryCardComponent"],
            _event_cards_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_6__["EventCardComponent"],
            _event_cards_event_countdown_card_event_countdown_card_component__WEBPACK_IMPORTED_MODULE_7__["EventCountdownCardComponent"],
            _song_list_view_song_list_view_component__WEBPACK_IMPORTED_MODULE_9__["SongListViewComponent"],
            _song_options_song_options_component__WEBPACK_IMPORTED_MODULE_10__["SongOptionsComponent"],
            _song_horizontal_song_horizontal_component__WEBPACK_IMPORTED_MODULE_11__["SongHorizontalComponent"],
            _image_card_image_card_component__WEBPACK_IMPORTED_MODULE_12__["ImageCardComponent"],
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
            _theme_settings_theme_settings_component__WEBPACK_IMPORTED_MODULE_14__["ThemeSettingsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], PartialsModule);



/***/ }),

/***/ "./src/app/content/partials/song-horizontal/song-horizontal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/partials/song-horizontal/song-horizontal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SongHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongHorizontalComponent", function() { return SongHorizontalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/search.service */ "./src/app/core/services/search.service.ts");
/* harmony import */ var _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/audio-player.service */ "./src/app/core/services/audio-player.service.ts");





let SongHorizontalComponent = class SongHorizontalComponent {
    constructor(router, searchService, audioPlayerService) {
        this.router = router;
        this.searchService = searchService;
        this.audioPlayerService = audioPlayerService;
        this.classes = 'song-h';
        this.song = {};
        this.largeImage = false;
        this.imageBorderRadiusClass = 'card-img--radius-sm';
        this.routeLink = '';
    }
    onClick() {
        this.searchService.hideSearchResult();
        if (this.playlist) {
            // Add playlist in audio play and play selected song
            this.audioPlayerService.playNowPlaylist(this.playlist, this.songIndex);
        }
        else if (this.routeLink) {
            this.router.navigate([this.routeLink]);
        }
        else {
            // Play selected song
            this.audioPlayerService.playSong(this.song);
        }
    }
    ngOnInit() {
        if (this.largeImage) {
            this.classes += ' song-h--lg';
        }
        else {
            this.classes += ' song-h--sm';
        }
    }
};
SongHorizontalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] },
    { type: _core_services_audio_player_service__WEBPACK_IMPORTED_MODULE_4__["AudioPlayerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SongHorizontalComponent.prototype, "classes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongHorizontalComponent.prototype, "song", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongHorizontalComponent.prototype, "largeImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongHorizontalComponent.prototype, "imageBorderRadiusClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongHorizontalComponent.prototype, "playlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongHorizontalComponent.prototype, "routeLink", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongHorizontalComponent.prototype, "songIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], SongHorizontalComponent.prototype, "onClick", null);
SongHorizontalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song-horizontal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-horizontal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-horizontal/song-horizontal.component.html")).default
    })
], SongHorizontalComponent);



/***/ }),

/***/ "./src/app/content/partials/song-list-view/song-list-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/partials/song-list-view/song-list-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SongListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListViewComponent", function() { return SongListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SongListViewComponent = class SongListViewComponent {
    constructor() {
        this.classes = 'song-list--item';
        this.song = {};
        this.imageBorderRadiusClass = 'card-img--radius-sm';
        this.icon = 'la-ellipsis-v';
    }
    ngOnInit() {
        if (this.playlist) {
            this.classes += ' amplitude-song-container amplitude-play-pause';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SongListViewComponent.prototype, "classes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListViewComponent.prototype, "song", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListViewComponent.prototype, "songNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListViewComponent.prototype, "imageBorderRadiusClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListViewComponent.prototype, "icon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListViewComponent.prototype, "playlist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListViewComponent.prototype, "songIndex", void 0);
SongListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song-list-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-list-view/song-list-view.component.html")).default
    })
], SongListViewComponent);



/***/ }),

/***/ "./src/app/content/partials/song-options/song-options.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/content/partials/song-options/song-options.component.ts ***!
  \*************************************************************************/
/*! exports provided: SongOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongOptionsComponent", function() { return SongOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SongOptionsComponent = class SongOptionsComponent {
    constructor() {
        this.class = 'dropleft';
        this.icon = '';
    }
    ngOnInit() {
        this.icon = 'la ' + this.icon;
    }
    addFavorite() {
        this.song.favorite = true;
    }
    addToPlayList() {
    }
    shareSong() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class')
], SongOptionsComponent.prototype, "class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongOptionsComponent.prototype, "song", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongOptionsComponent.prototype, "icon", void 0);
SongOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/song-options/song-options.component.html")).default
    })
], SongOptionsComponent);



/***/ }),

/***/ "./src/app/content/partials/theme-settings/theme-settings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/content/partials/theme-settings/theme-settings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ThemeSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingsComponent", function() { return ThemeSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/skin.service */ "./src/app/core/services/skin.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/config */ "./src/app/config/config.ts");





let ThemeSettingsComponent = class ThemeSettingsComponent {
    constructor(localStorageService, skinService) {
        this.localStorageService = localStorageService;
        this.skinService = skinService;
        this.config = new _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"]();
        this.themeClass = _config_config__WEBPACK_IMPORTED_MODULE_4__["Config"].THEME_CLASSES;
        this.settingOpen = 'open-settings';
        this.themeSkin = this.localStorageService.getThemeSkin();
        if (!this.themeSkin) {
            this.themeSkin = this.config.config.themeSkin;
        }
        else {
            this.config.config.themeSkin = this.themeSkin;
        }
    }
    ngOnInit() {
    }
    openSettings() {
        if (this.settingsWrapper.nativeElement.classList.contains(this.settingOpen)) {
            this.settingsWrapper.nativeElement.classList.remove(this.settingOpen);
        }
        else {
            this.settingsWrapper.nativeElement.classList.add(this.settingOpen);
        }
    }
    closeSettings() {
        this.settingsWrapper.nativeElement.classList.remove(this.settingOpen);
    }
    setThemeSkin(event) {
        if (event.target.checked) {
            this.themeSkin.theme = 'dark';
        }
        else if (!event.target.checked) {
            this.themeSkin.theme = 'light';
        }
        this.skinService.skin = this.themeSkin;
    }
    setHeaderSkin(index) {
        this.themeSkin.header = index;
        this.skinService.skin = this.themeSkin;
    }
    setSidebarSkin(index) {
        this.themeSkin.sidebar = index;
        this.skinService.skin = this.themeSkin;
    }
    setPlayerSkin(index) {
        this.themeSkin.player = index;
        this.skinService.skin = this.themeSkin;
    }
};
ThemeSettingsComponent.ctorParameters = () => [
    { type: _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _core_services_skin_service__WEBPACK_IMPORTED_MODULE_3__["SkinService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settingsWrapper', { static: false })
], ThemeSettingsComponent.prototype, "settingsWrapper", void 0);
ThemeSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-theme-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./theme-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/partials/theme-settings/theme-settings.component.html")).default
    })
], ThemeSettingsComponent);



/***/ }),

/***/ "./src/app/core/pipes/truncate.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/core/pipes/truncate.pipe.ts ***!
  \*********************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TruncatePipe = class TruncatePipe {
    transform(value, limit = 100, completeWords = false, ellipsis = '...') {
        const htmlTag = /<\/?[^>]*>/;
        const result = value || '';
        if (htmlTag.test(result)) {
            return this.truncateHtml(result, limit, ellipsis);
        }
        else {
            if (completeWords) {
                limit = result.substr(0, limit).lastIndexOf(' ');
            }
            return `${result.substr(0, limit)}${ellipsis}`;
        }
    }
    truncateHtml(html, limit, ellipsis) {
        if (limit >= html.length) {
            return html;
        }
        let str = ''; // final content
        let i = 0; // position in source
        let tag = ''; // current tag contents (used during content reading)
        let c = ''; // current char (used during content reading)
        let end = 0; // ending position of tag (used during content reading)
        let cnt = 0; // content size
        let tagTree = []; // open tags
        const len = html.length; // length of the source
        /**
         * Strips parameters and <> from tag
         * @param {content} content full tag content (ex.: <span a="b">)
         * @returns {content} tag name (ex.: span)
         */
        const tagStrip = (content) => {
            const index = tag.indexOf(' '); // check for space (ex.: <span a="b">)
            if (index === -1) { // no space (ex.: <span>)
                return content.slice(1, -1);
            }
            return content.slice(1, index);
        };
        // Go trough the content until we read enough of it
        while (cnt < limit && i < len) {
            c = html.charAt(i); // Read next char
            if (c === '<') {
                // Tag found
                end = html.slice(i).indexOf('>');
                if (end === -1) { // Check for incomplete tag
                    return str;
                }
                end += i + 1;
                tag = html.slice(i, end); // Read tag contents
                str += tag; // Append the tag to final content
                if (tag.charAt(1) === '/') {
                    // Closing tag
                    tagTree = tagTree.slice(0, -1);
                }
                else {
                    // New tag
                    tagTree.push(tagStrip(tag));
                }
                i = end; // Move the position to end of the tag
            }
            else {
                // Append content character and move the position
                str += c;
                i++;
                cnt++;
            }
        }
        return str + ellipsis;
    }
};
TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);



/***/ }),

/***/ "./src/app/core/services/albums-config.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/albums-config.service.ts ***!
  \********************************************************/
/*! exports provided: AlbumsConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsConfigService", function() { return AlbumsConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _config_albums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/albums */ "./src/app/config/albums.ts");




let AlbumsConfigService = class AlbumsConfigService {
    constructor(api) {
        this.api = api;
        this.albumsConfig = new _config_albums__WEBPACK_IMPORTED_MODULE_3__["AlbumsConfig"](this.api);
    }
    get albumsList() {
        return this.albumsConfig.config.items;
    }
    get albumCount() {
        return this.albumsConfig.albumCount;
    }
    getAlbumByIb(id) {
        return this.albumsList.find(album => album.id === id);
    }
};
AlbumsConfigService.ctorParameters = () => [
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AlbumsConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlbumsConfigService);



/***/ }),

/***/ "./src/app/core/services/artists-config.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/artists-config.service.ts ***!
  \*********************************************************/
/*! exports provided: ArtistsConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsConfigService", function() { return ArtistsConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _config_artists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/artists */ "./src/app/config/artists.ts");




let ArtistsConfigService = class ArtistsConfigService {
    constructor(api) {
        this.api = api;
        this.artistsConfig = new _config_artists__WEBPACK_IMPORTED_MODULE_3__["ArtistsConfig"](this.api);
    }
    get artistsList() {
        return this.artistsConfig.config.items;
    }
    getArtistByID(id) {
        return this.artistsList.find(artist => artist.id === id);
    }
};
ArtistsConfigService.ctorParameters = () => [
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ArtistsConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArtistsConfigService);



/***/ }),

/***/ "./src/app/core/services/audio-player.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/audio-player.service.ts ***!
  \*******************************************************/
/*! exports provided: AudioPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerService", function() { return AudioPlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amplitudejs */ "./node_modules/amplitudejs/dist/amplitude.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amplitudejs__WEBPACK_IMPORTED_MODULE_2__);



let AudioPlayerService = class AudioPlayerService {
    constructor() { }
    playSong(song) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["removeSong"](0);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playNow"](song);
    }
    playlistKayName(playlistName) {
        return playlistName.toLowerCase().replace(' ', '_');
    }
    playNowPlaylist(playlist, songIndex = 0) {
        const listName = this.playlistKayName(playlist.name);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["removeSong"](0);
        if (!amplitudejs__WEBPACK_IMPORTED_MODULE_2__["getActivePlaylist"]()) {
            amplitudejs__WEBPACK_IMPORTED_MODULE_2__["addPlaylist"](listName, { name: listName }, playlist.songs);
        }
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playPlaylistSongAtIndex"](songIndex, listName);
        const song = playlist.songs[songIndex];
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playNow"](song);
    }
};
AudioPlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AudioPlayerService);



/***/ }),

/***/ "./src/app/core/services/loading.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/loading.service.ts ***!
  \**************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingService = class LoadingService {
    constructor() {
        this.loader = false;
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.loader);
    }
    get loading() {
        return this.loader;
    }
    set loading(value) {
        this.loader = value;
        this.loadingStatus.next(value);
    }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.loading = false;
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/core/services/local-storage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");



let LocalStorageService = class LocalStorageService {
    constructor() { }
    setLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        }
        catch (e) {
            console.error('Error saving to local storage', e);
            return null;
        }
    }
    getLocalStorage(key) {
        try {
            return JSON.parse(localStorage.getItem(key));
        }
        catch (e) {
            console.error('Error getting data from local storage', e);
            return null;
        }
    }
    clearLocalStorage(key) {
        try {
            localStorage.removeItem(key);
        }
        catch (e) {
            console.error('Error saving to local storage', e);
            return null;
        }
    }
    getCurrentUser() {
        return this.getLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].CURRENT_USER);
    }
    getThemeSkin() {
        return this.getLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].THEME_SKIN);
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/core/services/menu-config.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/menu-config.service.ts ***!
  \******************************************************/
/*! exports provided: MenuConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfigService", function() { return MenuConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/menu */ "./src/app/config/menu.ts");



let MenuConfigService = class MenuConfigService {
    constructor() {
        this.menuConfig = new _config_menu__WEBPACK_IMPORTED_MODULE_2__["MenuConfig"]();
    }
    get menuItems() {
        return this.menuConfig.config.aside.items;
    }
    get userMenuItems() {
        return this.menuConfig.config.userMenu.items;
    }
};
MenuConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuConfigService);



/***/ }),

/***/ "./src/app/core/services/playlist-config.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/playlist-config.service.ts ***!
  \**********************************************************/
/*! exports provided: PlaylistConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistConfigService", function() { return PlaylistConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/playlist */ "./src/app/config/playlist.ts");



let PlaylistConfigService = class PlaylistConfigService {
    constructor() {
        this.songsQueue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playlistConfig = new _config_playlist__WEBPACK_IMPORTED_MODULE_2__["PlaylistConfig"]();
    }
    get playlist() {
        return this.playlistConfig.config.items;
    }
    set currentPlaylist(playlist) {
        this.songsQueue.emit(playlist);
    }
    get currentPlaylist() {
        return this.songsQueue;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlaylistConfigService.prototype, "songsQueue", void 0);
PlaylistConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlaylistConfigService);



/***/ }),

/***/ "./src/app/core/services/search.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/search.service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SearchService = class SearchService {
    constructor() {
        this.search = false;
        this.searchStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.search);
    }
    get searchResult() {
        return this.search;
    }
    set searchResult(value) {
        this.search = value;
        this.searchStatus.next(value);
    }
    hideSearchResult() {
        this.searchResult = true;
    }
};
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SearchService);



/***/ }),

/***/ "./src/app/core/services/skin.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/skin.service.ts ***!
  \***********************************************/
/*! exports provided: SkinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkinService", function() { return SkinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./src/app/config/config.ts");




let SkinService = class SkinService {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
        this.themeSkin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get skin() {
        return this.themeSkin;
    }
    set skin(value) {
        this.themeSkin.emit(value);
        this.localStorageService.setLocalStorage(_config_config__WEBPACK_IMPORTED_MODULE_3__["Config"].THEME_SKIN, value);
    }
};
SkinService.ctorParameters = () => [
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }
];
SkinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SkinService);



/***/ }),

/***/ "./src/app/core/services/songs-config.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/songs-config.service.ts ***!
  \*******************************************************/
/*! exports provided: SongsConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsConfigService", function() { return SongsConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _config_songs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/songs */ "./src/app/config/songs.ts");




let SongsConfigService = class SongsConfigService {
    constructor(api) {
        this.api = api;
        this.songsConfig = new _config_songs__WEBPACK_IMPORTED_MODULE_3__["SongsConfig"](this.api);
    }
    get songsList() {
        return this.songsConfig.config.items;
    }
    get defaultSong() {
        return this.songsConfig.config.items[0];
    }
    getSongByID(id) {
        return this.songsList.find(song => song.id === id);
    }
};
SongsConfigService.ctorParameters = () => [
    { type: src_app_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SongsConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SongsConfigService);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseurl;
        this.APIGlobeSetting = {};
    }
    postWithOutAuth(endPoint, data) {
        return this.http.post(`${this.baseURL}${endPoint}`, data);
    }
    getWithOutAuth(endPoint) {
        return this.http.get(`${this.baseURL}${endPoint}`);
    }
    postWithAuth(endPoint, object) {
        let userId = (localStorage.getItem('userId') !== '' && localStorage.getItem('userId') !== null && localStorage.getItem('userId') !== undefined) ? localStorage.getItem('userId') : '';
        let accessToken = (localStorage.getItem('accessToken') !== '' && localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) ? localStorage.getItem('accessToken') : '';
        const url = this.baseURL + endPoint;
        let formData = new FormData();
        // By Default Id and token
        formData.append('id', userId);
        formData.append('token', accessToken);
        var socialLoginUser = 0;
        // append your data
        for (var key in object) {
            formData.append(key, object[key]);
            if (key === 'social_unique_id') {
                socialLoginUser = 1;
            }
        }
        // By Default added device type and login type in future use
        if (!socialLoginUser) {
            formData.append('login_by', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].LOGIN_BY);
        }
        formData.append('device_type', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEVICE_TYPE);
        formData.append('device_token', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].DEVICE_TOKEN);
        return this.http.post(`${url}`, formData);
    }
    getWithAuth(endPoint) {
        const tok = 'Bearer ' + localStorage.getItem('token');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Authorization', tok);
        headers = headers.set('Accept', 'application/json');
        return this.http.get(`${this.baseURL}${endPoint}`, { headers });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    baseurl: 'https://admin.wazo.live/api/',
    production: false,
    LOGIN_BY: 'manual',
    DEVICE_TYPE: 'web',
    DEVICE_TOKEN: '123456'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PROJECTS\wazo\wazo-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map