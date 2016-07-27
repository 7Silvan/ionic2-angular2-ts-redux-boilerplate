import * as Redux from 'redux';
const { combineReducers } = Redux;
import { IRootState } from '../stores/initial_state';
import posts from './posts';
import dummy from './dummy';

const rootReducer = combineReducers<IRootState>({
  posts,
  dummy
});

export default rootReducer;
