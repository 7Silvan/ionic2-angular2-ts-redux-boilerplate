import {Page, NavParams} from 'ionic-angular';


@Page({
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
