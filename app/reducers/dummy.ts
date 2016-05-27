import actionTypes from '../actionTypes.ts';
import {fromJS} from 'immutable';

const dummy = (state = fromJS({}), action:any = {}) => {
  switch (action && action.type) {
    case actionTypes.DUMMY_FETCH_INIT:
    case actionTypes.DUMMY_FETCH_SUCCESS:
    case actionTypes.DUMMY_FETCH_FAIL:
      return action.data;
    default:
      return state;
  }
};

export default dummy;
