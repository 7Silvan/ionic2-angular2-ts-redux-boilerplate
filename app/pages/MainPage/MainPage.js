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
var ionic_angular_1 = require('ionic-angular');
var core_1 = require('@angular/core');
var redux_1 = require('redux');
var postsActions_1 = require('../../actions/postsActions');
var dummyActions_1 = require('../../actions/dummyActions');
var MainPage = (function () {
    function MainPage(ngRedux) {
        this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);
        this.fetchPosts();
        this.fetchDummy();
    }
    MainPage.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    MainPage.prototype.mapStateToThis = function (state) {
        return {
            posts: state.getIn(['posts', 'response']),
            status: state.getIn(['posts', 'status']),
        };
    };
    MainPage.prototype.mapDispatchToThis = function (dispatch) {
        var actions = Object.assign({}, postsActions_1.postsActions, dummyActions_1.dummyActions);
        return redux_1.bindActionCreators(actions, dispatch);
    };
    MainPage = __decorate([
        ionic_angular_1.Page({
            providers: [],
            templateUrl: 'build/pages/MainPage/template.html',
        }),
        __param(0, core_1.Inject('ngRedux')), 
        __metadata('design:paramtypes', [Object])
    ], MainPage);
    return MainPage;
})();
exports.MainPage = MainPage;
