import * as actionTypes from '../actionTypes.ts';

export default function dummy(state:any, action:any = {}) {
  switch (action && action.type) {
    case actionTypes.DUMMY_FETCH_INIT:
    case actionTypes.DUMMY_FETCH_SUCCESS:
    case actionTypes.DUMMY_FETCH_FAIL:
      return action.data;
    default:
      return state;
  }
};
