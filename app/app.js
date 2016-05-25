var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MainPage_1 = require('./pages/MainPage/MainPage');
var ionic_angular_1 = require('ionic-angular');
var core_1 = require('@angular/core');
var ng2_redux_1 = require('ng2-redux');
var store_1 = require('./stores/store');
var App = (function () {
    function App(platform, ngRedux) {
        this.root = MainPage_1.MainPage;
        platform.ready().then(function () {
            // Do any necessary cordova or native calls here now that
            // the platform is ready
        });
    }
    App = __decorate([
        ionic_angular_1.App({
            config: {},
            providers: [ng2_redux_1.provider(store_1.default)],
            template: '<ion-nav id="nav" [root]="root" #content></ion-nav>',
        }),
        __param(1, core_1.Inject('ngRedux')), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, Object])
    ], App);
    return App;
})();
exports.App = App;
