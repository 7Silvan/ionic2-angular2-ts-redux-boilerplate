import * as actionTypes from '../actionTypes.ts';
import jsonRequest from '../utils/jsonRequest';
import {PostState} from '../stores/initial_state';
import {Post} from '../post';

// Success.
const setSuccessState = (response) => {
  return {
    data: new PostState({
      items: Post.fromJSArray(response.data.children),
      status: 'success',
    }),
    type: actionTypes.POSTS_FETCH_SUCCESS,
  };
};

// Error.
const setErrorState = (error) => {
  return {
    data: new PostState({
      items: Post.fromJSArray([]),
      message: error,
      status: 'error',
    }),
    type: actionTypes.POSTS_FETCH_FAIL,
  };
};

const setLoadingState = () => {
  return {
    data: new PostState({
      items: Post.fromJSArray([]),
      status: 'loading',
    }),
    type: actionTypes.POSTS_FETCH_INIT,
  };
};

const fetchPosts = ():any => {
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

export const postsActions = {
  fetchPosts,
};
