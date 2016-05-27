import {App, Platform, Page, NavController} from 'ionic-angular';
import {PostPage} from '../PostPage/PostPage';
import {Inject} from '@angular/core';

import {bindActionCreators} from 'redux';

import {postsActions} from '../../actions/postsActions';
import {dummyActions} from '../../actions/dummyActions';

@Page({
  providers: [],
  templateUrl: 'build/pages/MainPage/template.html',
})
export class MainPage {
  private status:string;
  private unsubscribe:any;
  private fetchPosts:any;
  private fetchDummy:any;
  postPage: any = PostPage;

  constructor(private nav: NavController, @Inject('ngRedux') ngRedux) {
    this.unsubscribe = ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this);

    this.fetchPosts();
    this.fetchDummy();
  }

  selectPost(post:any):void {
    this.nav.push(this.postPage, {post: post})
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
