import {Page, Platform} from 'ionic-framework/ionic';
import {List} from 'immutable';
import {Inject} from 'angular2/core';

import {bindActionCreators} from 'redux';

import {postsActions} from '../../actions/postsActions';
import {dummyActions} from '../../actions/dummyActions';

console.log('MainPage.ts --> Po', postsActions);

@Page({
  providers: [],
  templateUrl: 'build/pages/MainPage/template.html',
})
export class MainPage {
  private status:string;
  private unsubscribe:any;
  private fetchPosts:any;
  private fetchDummy:any;

  constructor(@Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);

    this.fetchPosts();
    this.fetchDummy();
  }

  private ngOnDestroy():void {
    this.unsubscribe();
  }

  private mapStateToThis(state):any {
    return {
      posts: state.getIn(['posts', 'response']),
      status: state.getIn(['posts', 'status']),
    };
  }

  private mapDispatchToThis(dispatch):void {
    const actions = Object.assign({}, postsActions, dummyActions);
    return bindActionCreators(actions, dispatch);
  }

}
