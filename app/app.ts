import {MainPage} from './pages/MainPage/MainPage';
import {App, Platform} from 'ionic-angular';
import {Inject} from '@angular/core';
import {provider} from  'ng2-redux';
import store from './stores/store';

@App({
    config: {},
    providers: [provider(store)],
    template: '<ion-nav id="nav" [root]="root" #content></ion-nav>',
})
export class App {
    constructor(platform:Platform, @Inject('ngRedux') ngRedux) {
        this.root = MainPage;
        platform.ready().then(() => {
            // Do any necessary cordova or native calls here now that
            // the platform is ready
        });

    }
}
