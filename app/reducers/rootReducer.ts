import {
  combineReducers
} from 'redux-immutable';

import posts from './posts';
import dummy from './dummy';

const rootReducer = combineReducers({
  posts,
  dummy,
});

export default rootReducer;
