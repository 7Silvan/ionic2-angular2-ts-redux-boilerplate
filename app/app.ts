import {MainPage} from './pages/MainPage/MainPage';
import {App, Platform} from 'ionic-angular';
import {provider, NgRedux} from  'ng2-redux';
import store from './stores/store';

@App({
    config: {},
    providers: [provider(store)],
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
