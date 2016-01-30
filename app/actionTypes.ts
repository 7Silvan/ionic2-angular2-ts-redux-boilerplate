import * as keyMirror from 'keymirror';

const actionTypes = keyMirror({
  DUMMY_FETCH_FAIL: undefined,
  DUMMY_FETCH_INIT: undefined,
  DUMMY_FETCH_SUCCESS: undefined,

  POSTS_FETCH_FAIL: undefined,
  POSTS_FETCH_INIT: undefined,
  POSTS_FETCH_SUCCESS: undefined,
});

export default actionTypes;
