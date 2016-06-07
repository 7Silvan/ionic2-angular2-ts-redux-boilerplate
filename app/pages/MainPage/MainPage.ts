import {NavController} from 'ionic-angular';
import {PostPage} from '../PostPage/PostPage';
import {Component, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

import {postsActions} from '../../actions/postsActions';
import {dummyActions} from '../../actions/dummyActions';
import {NgRedux} from 'ng2-redux';

@Component({
  templateUrl: 'build/pages/MainPage/template.html',
  pipes: [AsyncPipe]
})
export class MainPage {
  postPage: any = PostPage;
  posts$: Observable<any>;
  status$: Observable<any>;

  constructor(private nav: NavController, private ngRedux: NgRedux<any>) {}

  ngOnInit() {
    this.status$ = this.ngRedux.select(state=> state.getIn(["posts", "status"]));
    this.posts$ = this.ngRedux.select(state=> state.getIn(["posts", 'items']).toArray());

    this.ngRedux.dispatch(<any>postsActions.fetchPosts())
    this.ngRedux.dispatch(<any>dummyActions.fetchDummy())
  }

  selectPost(post:any):void {
    this.nav.push(this.postPage, {post: post})
  }
}
