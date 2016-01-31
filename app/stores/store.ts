import {createStore, applyMiddleware} from 'redux';
import * as thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {fromJS} from 'immutable';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, fromJS({}));

export default store;
