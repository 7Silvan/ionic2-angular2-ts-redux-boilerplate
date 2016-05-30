import actionTypes from '../actionTypes.ts';
import {fromJS} from 'immutable';
import jsonRequest from '../utils/jsonRequest';
import {Post} from '../post';

// Success.
const setSuccessState = (response) => {
  return {
    data: fromJS({
      items: response.data.children.map((p)=> Post.fromJS(p.data)),
      status: 'success',
    }),
    type: actionTypes.DUMMY_FETCH_SUCCESS,
  };
};

// Error.
const setErrorState = (error) => {
  return {
    data: fromJS({
      items: [],
      message: error,
      status: 'error',
    }),
    type: actionTypes.DUMMY_FETCH_FAIL,
  };
};

const setLoadingState = () => {
  return {
    data: fromJS({
      items: [],
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
