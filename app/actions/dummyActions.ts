import * as actionTypes from '../actionTypes.ts';
import jsonRequest from '../utils/jsonRequest';
import {DummyState} from '../stores/initial_state';
import {Post} from '../post';

// Success.
const setSuccessState = (response) => {
  return {
    data: new DummyState({
      items: Post.fromJSArray(response.data.children),
      status: 'success',
    }),
    type: actionTypes.DUMMY_FETCH_SUCCESS,
  };
};

// Error.
const setErrorState = (error) => {
  return {
    data: new DummyState({
      items: Post.fromJSArray([]),
      message: error,
      status: 'error',
    }),
    type: actionTypes.DUMMY_FETCH_FAIL,
  };
};

const setLoadingState = () => {
  return {
    data: new DummyState({
      items: Post.fromJSArray([]),
      status: 'loading',
    }),
    type: actionTypes.DUMMY_FETCH_INIT,
  };
};

const fetchDummy = ():any => {
  return dispatch => {
    const url = 'https://www.reddit.com/top/.json?limit=10';

    // Set loading state.
    dispatch(setLoadingState());

    // Do request.
    jsonRequest(
      url,
      (error) => dispatch(setErrorState(error)),
      (response) => dispatch(setSuccessState(response))
    );
  };
};

export const dummyActions = {
  fetchDummy,
};
