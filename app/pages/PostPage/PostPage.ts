import {NavParams} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  templateUrl: 'build/pages/PostPage/template.html',
})
export class PostPage {
  post: any

  constructor(private navParams: NavParams) {
    this.post = navParams.get('post');
  }

  createdDate(post) {
    return post.created.toDateString();
  }

}
