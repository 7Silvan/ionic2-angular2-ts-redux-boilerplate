import {Record} from 'immutable';

export const PostRecord = Record({
  id: "",
  title: "",
  url: "",
  ups: 0,
  downs: 0,
  created: new Date()
});

export class Post extends PostRecord {
  id: string;
  title: string;
  url: string;
  ups: number;
  downs: number;
  created: Date;

  constructor(props) {
    super(props);
  }

  public static fromJS(data:any) {
    return new Post({
      id: data.id,
      title: data.title,
      url: data.url,
      ups: data.ups,
      downs: data.downs,
      created: new Date(data.created * 1000)
    })
  }
}
