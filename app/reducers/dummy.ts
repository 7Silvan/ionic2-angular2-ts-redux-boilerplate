import * as actionTypes from '../actionTypes.ts';
import {IRootState, DummyState} from '../stores/initial_state';
import {Post} from '../post';

export default function dummy(state:DummyState, action:any) {
  if (state == undefined) {
    state = new DummyState({});
  }
  switch (action && action.type) {
    case actionTypes.DUMMY_FETCH_INIT:
    case actionTypes.DUMMY_FETCH_SUCCESS:
    case actionTypes.DUMMY_FETCH_FAIL:
      return action.data;
    default:
      return state;
  }
};
