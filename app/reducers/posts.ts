import actionTypes from '../actionTypes.ts';

export default function posts(state:any, action:any = {}) {
  switch (action && action.type) {
    case actionTypes.POSTS_FETCH_INIT:
    case actionTypes.POSTS_FETCH_SUCCESS:
    case actionTypes.POSTS_FETCH_FAIL:
      return action.data;
    default:
      return state;
  }
};
