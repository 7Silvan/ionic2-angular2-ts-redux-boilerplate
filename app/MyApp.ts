import {MainPage} from './pages/MainPage/MainPage';
import {App} from 'ionic-framework/ionic';
import {Platform} from 'ionic-framework/ionic';

import rootReducer from './reducers/rootReducer';
import {Inject} from 'angular2/core';
import {fromJS} from 'immutable';
import {provider} from  'ng2-redux';
import store from './stores/store';


@App({
  config: {},
  providers: [provider(store)],
  template: '<ion-nav id="nav" [root]="root" #content></ion-nav>',
})
export class MyApp {
  constructor(platform:Platform, @Inject('ngRedux') ngRedux) {
    this.root = MainPage;

    platform.ready().then(() => {
      // Do any necessary cordova or native calls here now that
      // the platform is ready
    });

  }
}
