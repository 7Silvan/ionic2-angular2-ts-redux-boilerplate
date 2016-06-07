import {fromJS, List, Map} from 'immutable';
import {Post} from '../post';

export const getInitialState = ()=> {
  return Map<string, any>({
    posts: Map<string, any>(fromJS({status: "loading", items: []})),
    dummy: Map<string, any>(),
  })
}
