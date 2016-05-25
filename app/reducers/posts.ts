import actionTypes from '../actionTypes.ts';
import {fromJS} from 'immutable';

const posts = (state = fromJS({}), action = {}) => {
  switch (action && action.type) {
    case actionTypes.POSTS_FETCH_INIT:
    case actionTypes.POSTS_FETCH_SUCCESS:
    case actionTypes.POSTS_FETCH_FAIL:
      return action.data;
    default:
      return state;
  }
};

export default posts;

