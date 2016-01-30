import actionTypes from '../actionTypes.ts';
import {fromJS} from 'immutable';
import * as request from 'xhr-request';

// Success.
const setSuccessState = (response) => {
  return {
    data: fromJS({
      response: response.data.children,
      status: 'success',
    }),
    type: actionTypes.DUMMY_FETCH_SUCCESS,
  };
};

// Error.
const setErrorState = (error) => {
  return {
    data: fromJS({
      response: error,
      status: 'error',
    }),
    type: actionTypes.DUMMY_FETCH_FAIL,
  };
};

const setLoadingState = () => {
  return {
    data: fromJS({
      status: 'loading'
    }),
    type: actionTypes.DUMMY_FETCH_INIT,
  }
};

export const fetchDummy = () => {
  return dispatch => {
    // Set loading state.
    dispatch(setLoadingState());

    // Do request.
    request('https://www.reddit.com/top/.json?limit=10', {
      json: true
    }, function (err, response) {
      if (err) {
        dispatch(setErrorState(err));
      }
      dispatch(setSuccessState(response))
    });
  };
};
