(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-board></app-board>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/drawing-board/drawing-board-component/drawing-board-component.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/drawing-board/drawing-board-component/drawing-board-component.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"boardContainer\">\n    <h4>Drawing Board</h4>\n    <svg id=\"svgBoard\">\n\n    </svg>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/board/board.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/board/board.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"components\">\n    <div class=\"boardComponent\">\n        <app-drawing-board-component [strokColor]=\"_commanService.globalColor\"></app-drawing-board-component>\n    </div>\n    <div class=\"toolComponent\">\n        <app-tool-bar-component></app-tool-bar-component>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tool-bar/tool-bar-component/tool-bar-component.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tool-bar/tool-bar-component/tool-bar-component.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbarComponent\">\n    <h4>Toolbar</h4>\n    <div class=\"tools\">\n        <canvas class=\"pen\" (click)=\"getPen('#000')\"></canvas>\n        <canvas class=\"blue\" (click)=\"getColor('#00F')\"></canvas>\n        <canvas class=\"green\" (click)=\"getColor('#0F0')\"></canvas>\n        <canvas class=\"orange\" (click)=\"getColor('#FFA500')\"></canvas>\n        <canvas class=\"eraser\" (click)=\"getEraser('#FFF')\"></canvas>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'drawing-board';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/drawing-board/drawing-board-component/drawing-board-component.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/drawing-board/drawing-board-component/drawing-board-component.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boardContainer {\n  padding-right: 50px;\n  height: 500px;\n}\n\n.boardCanvas {\n  border: 2px solid #333;\n  background-color: #e7e7e7;\n}\n\n#svgBoard, .svgBoard {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #e7e7e7;\n  border: 2px solid #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJhd2luZy1ib2FyZC9kcmF3aW5nLWJvYXJkLWNvbXBvbmVudC9DOlxcVXNlcnNcXEFkbWluXFxEZXNrdG9wXFxSb2hpdFxcZHJhd2luZy1ib2FyZC9zcmNcXGFwcFxcZHJhd2luZy1ib2FyZFxcZHJhd2luZy1ib2FyZC1jb21wb25lbnRcXGRyYXdpbmctYm9hcmQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kcmF3aW5nLWJvYXJkL2RyYXdpbmctYm9hcmQtY29tcG9uZW50L2RyYXdpbmctYm9hcmQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kcmF3aW5nLWJvYXJkL2RyYXdpbmctYm9hcmQtY29tcG9uZW50L2RyYXdpbmctYm9hcmQtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uYm9hcmRDYW52YXMge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XHJcbn1cclxuXHJcbiNzdmdCb2FyZCwgLnN2Z0JvYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxufSIsIi5ib2FyZENvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi5ib2FyZENhbnZhcyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG59XG5cbiNzdmdCb2FyZCwgLnN2Z0JvYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/drawing-board/drawing-board-component/drawing-board-component.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/drawing-board/drawing-board-component/drawing-board-component.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DrawingBoardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingBoardComponentComponent", function() { return DrawingBoardComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_comman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comman.service */ "./src/app/services/comman.service.ts");



var DrawingBoardComponentComponent = /** @class */ (function () {
    function DrawingBoardComponentComponent(_commanService) {
        this._commanService = _commanService;
        this.drawType = 'path';
        this.svgPath = 'http://www.w3.org/2000/svg';
        this.undoPath = [];
    }
    DrawingBoardComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var svgBoard = document.getElementById('svgBoard');
        this.undoPath = [];
        //get co-ordinates of lines
        var svgPoint = function (elem, x, y) {
            var p = svgBoard.createSVGPoint();
            p.x = x;
            p.y = y;
            return p.matrixTransform(elem.getScreenCTM().inverse());
        };
        //check mouse over the pallet
        svgBoard.addEventListener('mouseover', function (event) {
            if (_this._commanService.penStatus) {
                svgBoard.style.cursor = 'crosshair';
            }
            else {
                svgBoard.style.cursor = 'default';
            }
        });
        //call event when mouse down on pallet
        svgBoard.addEventListener('mousedown', function (event) {
            var path = document.createElementNS(_this.svgPath, _this.drawType);
            var points = [];
            //function to draw lines
            var drawLine = function (e) {
                var color = _this._commanService.globalColor;
                var p = svgPoint(svgBoard, e.clientX, e.clientY);
                points.push(p.x.toString());
                points.push(p.y.toString());
                path.setAttributeNS(null, 'd', 'M' + points.toString());
                path.setAttributeNS(null, "stroke", color);
                path.setAttributeNS(null, 'stroke-width', '2');
                path.setAttributeNS(null, 'fill', 'none');
                svgBoard.appendChild(path);
            };
            //function call when mouse up
            var endDraw = function (e) {
                svgBoard.removeEventListener('mousemove', drawLine);
                svgBoard.removeEventListener('mouseup', endDraw);
            };
            //check pen is seleted or not
            if (_this._commanService.penStatus) {
                svgBoard.addEventListener('mousemove', drawLine);
                svgBoard.addEventListener('mouseup', endDraw);
            }
        });
    };
    DrawingBoardComponentComponent.prototype.ngDoCheck = function () {
        var _this = this;
        //check user click on eraser
        if (this._commanService.eraserStatus) {
            var svgBoard = document.getElementById('svgBoard');
            svgBoard.querySelectorAll(this.drawType).forEach(function (e) {
                e.parentNode.removeChild(e);
                _this.undoPath.push(e);
            });
        }
    };
    DrawingBoardComponentComponent.ctorParameters = function () { return [
        { type: src_app_services_comman_service__WEBPACK_IMPORTED_MODULE_2__["CommanService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('strokColor')
    ], DrawingBoardComponentComponent.prototype, "globalColor", void 0);
    DrawingBoardComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drawing-board-component',
            template: __webpack_require__(/*! raw-loader!./drawing-board-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/drawing-board/drawing-board-component/drawing-board-component.component.html"),
            styles: [__webpack_require__(/*! ./drawing-board-component.component.scss */ "./src/app/drawing-board/drawing-board-component/drawing-board-component.component.scss")]
        })
    ], DrawingBoardComponentComponent);
    return DrawingBoardComponentComponent;
}());



/***/ }),

/***/ "./src/app/drawing-board/drawing-board.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/drawing-board/drawing-board.module.ts ***!
  \*******************************************************/
/*! exports provided: DrawingBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingBoardModule", function() { return DrawingBoardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _drawing_board_component_drawing_board_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing-board-component/drawing-board-component.component */ "./src/app/drawing-board/drawing-board-component/drawing-board-component.component.ts");




var DrawingBoardModule = /** @class */ (function () {
    function DrawingBoardModule() {
    }
    DrawingBoardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_drawing_board_component_drawing_board_component_component__WEBPACK_IMPORTED_MODULE_3__["DrawingBoardComponentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_drawing_board_component_drawing_board_component_component__WEBPACK_IMPORTED_MODULE_3__["DrawingBoardComponentComponent"]]
        })
    ], DrawingBoardModule);
    return DrawingBoardModule;
}());



/***/ }),

/***/ "./src/app/layout/board/board.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/board/board.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boardComponent {\n  width: 80%;\n  float: left;\n}\n\n.toolComponent {\n  width: 20%;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JvYXJkL0M6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXFJvaGl0XFxkcmF3aW5nLWJvYXJkL3NyY1xcYXBwXFxsYXlvdXRcXGJvYXJkXFxib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5ib2FyZENvbXBvbmVudCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50b29sQ29tcG9uZW50IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iLCIuYm9hcmRDb21wb25lbnQge1xuICB3aWR0aDogODAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRvb2xDb21wb25lbnQge1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/board/board.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/board/board.component.ts ***!
  \*************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_comman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comman.service */ "./src/app/services/comman.service.ts");



var BoardComponent = /** @class */ (function () {
    function BoardComponent(_commanService) {
        this._commanService = _commanService;
    }
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent.ctorParameters = function () { return [
        { type: src_app_services_comman_service__WEBPACK_IMPORTED_MODULE_2__["CommanService"] }
    ]; };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/layout/board/board.component.scss")]
        })
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/layout/board/board.component.ts");
/* harmony import */ var _drawing_board_drawing_board_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawing-board/drawing-board.module */ "./src/app/drawing-board/drawing-board.module.ts");
/* harmony import */ var _tool_bar_tool_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tool-bar/tool-bar.module */ "./src/app/tool-bar/tool-bar.module.ts");






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _drawing_board_drawing_board_module__WEBPACK_IMPORTED_MODULE_4__["DrawingBoardModule"],
                _tool_bar_tool_bar_module__WEBPACK_IMPORTED_MODULE_5__["ToolBarModule"]
            ],
            exports: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/services/comman.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/comman.service.ts ***!
  \********************************************/
/*! exports provided: CommanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanService", function() { return CommanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommanService = /** @class */ (function () {
    function CommanService() {
        this.globalColor = '#000';
        this.penStatus = false;
        this.eraserStatus = false;
    }
    CommanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommanService);
    return CommanService;
}());



/***/ }),

/***/ "./src/app/tool-bar/tool-bar-component/tool-bar-component.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/tool-bar/tool-bar-component/tool-bar-component.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tools {\n  width: 42px;\n  padding: 10px 15px 10px 15px;\n  border: 1px solid #c9c9c9;\n}\n\n.tools canvas:hover {\n  cursor: pointer;\n}\n\n.pen, .blue, .green, .orange, .eraser {\n  width: 40px;\n  height: 40px;\n  border: 2px solid #333;\n}\n\n.pen {\n  background: url('pencil.svg') no-repeat;\n  background-size: cover;\n}\n\n.blue {\n  background-color: blue;\n}\n\n.green {\n  background-color: green;\n}\n\n.orange {\n  background-color: orange;\n}\n\n.eraser {\n  background: url('eraser.svg') no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbC1iYXIvdG9vbC1iYXItY29tcG9uZW50L0M6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXFJvaGl0XFxkcmF3aW5nLWJvYXJkL3NyY1xcYXBwXFx0b29sLWJhclxcdG9vbC1iYXItY29tcG9uZW50XFx0b29sLWJhci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rvb2wtYmFyL3Rvb2wtYmFyLWNvbXBvbmVudC90b29sLWJhci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdG9vbC1iYXIvdG9vbC1iYXItY29tcG9uZW50L3Rvb2wtYmFyLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29scyB7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzljOWM5O1xyXG59XHJcblxyXG4udG9vbHMgY2FudmFzOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBlbiwgLmJsdWUsIC5ncmVlbiwgLm9yYW5nZSwgLmVyYXNlciB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi5wZW4ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvcGVuY2lsLnN2ZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5lcmFzZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvZXJhc2VyLnN2ZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iLCIudG9vbHMge1xuICB3aWR0aDogNDJweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M5YzljOTtcbn1cblxuLnRvb2xzIGNhbnZhczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBlbiwgLmJsdWUsIC5ncmVlbiwgLm9yYW5nZSwgLmVyYXNlciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG59XG5cbi5wZW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvcGVuY2lsLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbi5lcmFzZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZXJhc2VyLnN2Z1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/tool-bar/tool-bar-component/tool-bar-component.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/tool-bar/tool-bar-component/tool-bar-component.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolBarComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponentComponent", function() { return ToolBarComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_comman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/comman.service */ "./src/app/services/comman.service.ts");



var ToolBarComponentComponent = /** @class */ (function () {
    function ToolBarComponentComponent(_commanService) {
        this._commanService = _commanService;
    }
    ToolBarComponentComponent.prototype.ngAfterViewInit = function () {
    };
    ToolBarComponentComponent.prototype.getColor = function (color) {
        this.resetAll();
        this._commanService.globalColor = color;
        this._commanService.penStatus = true;
    };
    ToolBarComponentComponent.prototype.getPen = function (color) {
        this.resetAll();
        this._commanService.globalColor = color;
        this._commanService.penStatus = true;
    };
    ToolBarComponentComponent.prototype.getEraser = function (color) {
        this.resetAll();
        this._commanService.globalColor = color;
        this._commanService.eraserStatus = true;
    };
    ToolBarComponentComponent.prototype.resetAll = function () {
        this._commanService.penStatus = false;
        this._commanService.eraserStatus = false;
    };
    ToolBarComponentComponent.ctorParameters = function () { return [
        { type: src_app_services_comman_service__WEBPACK_IMPORTED_MODULE_2__["CommanService"] }
    ]; };
    ToolBarComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tool-bar-component',
            template: __webpack_require__(/*! raw-loader!./tool-bar-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/tool-bar/tool-bar-component/tool-bar-component.component.html"),
            styles: [__webpack_require__(/*! ./tool-bar-component.component.scss */ "./src/app/tool-bar/tool-bar-component/tool-bar-component.component.scss")]
        })
    ], ToolBarComponentComponent);
    return ToolBarComponentComponent;
}());



/***/ }),

/***/ "./src/app/tool-bar/tool-bar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tool-bar/tool-bar.module.ts ***!
  \*********************************************/
/*! exports provided: ToolBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarModule", function() { return ToolBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tool_bar_component_tool_bar_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool-bar-component/tool-bar-component.component */ "./src/app/tool-bar/tool-bar-component/tool-bar-component.component.ts");




var ToolBarModule = /** @class */ (function () {
    function ToolBarModule() {
    }
    ToolBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_tool_bar_component_tool_bar_component_component__WEBPACK_IMPORTED_MODULE_3__["ToolBarComponentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_tool_bar_component_tool_bar_component_component__WEBPACK_IMPORTED_MODULE_3__["ToolBarComponentComponent"]]
        })
    ], ToolBarModule);
    return ToolBarModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\Rohit\drawing-board\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map