import * as actionTypes from '../actionTypes.ts';
import {IRootState, PostState} from '../stores/initial_state';
import {Post} from '../post';

export default function posts(state:PostState, action:any) {
  if (state == undefined) {
    state = new PostState({});
  }
  switch (action && action.type) {
    case actionTypes.POSTS_FETCH_INIT:
    case actionTypes.POSTS_FETCH_SUCCESS:
    case actionTypes.POSTS_FETCH_FAIL:
      return action.data;
    default:
      return state;
  }
};
