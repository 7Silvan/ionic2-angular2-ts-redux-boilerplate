import {MainPage} from './pages/MainPage/MainPage';
import {ionicBootstrap, Platform} from 'ionic-angular';
import {Component, Inject} from '@angular/core';
import {provider, NgRedux} from  'ng2-redux';
import store from './stores/store';

@Component({
    template: '<ion-nav id="nav" [root]="root" #content></ion-nav>',
})
export class MyApp {
    root: any = MainPage

    constructor(platform:Platform, private ngRedux: NgRedux<any>) {
        platform.ready().then(() => {
            // Do any necessary cordova or native calls here now that
            // the platform is ready
        });

    }
}

ionicBootstrap(MyApp, [provider(store)], {});
