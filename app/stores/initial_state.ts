import {fromJS, List, Map, Record} from 'immutable';
import {Action} from 'redux';
import {Post} from '../post';

export const PostStateRecord = Record({
  status: "loading",
  message: null,
  items: List<Post>()
});

export class PostState extends PostStateRecord {
  status: string;
  message: string;
  items: List<Post>;

  constructor(props) {
    super(props);
  }
}

export const DummyStateRecord = Record({
  status: "loading",
  message: null,
  items: List<Post>()
});

export class DummyState extends DummyStateRecord {
  status: string;
  message: string;
  items: List<Post>;

  constructor(props) {
    super(props);
  }
}


export interface IRootState {
  posts: PostState,
  dummy: DummyState
}

export const getInitialState = ()=> {
  return {
    posts: new PostState({}),
    dummy: new DummyState({}),
  }
}
