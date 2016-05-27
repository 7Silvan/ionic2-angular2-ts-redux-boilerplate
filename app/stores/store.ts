import {createStore, applyMiddleware, compose} from 'redux';
const thunk = require('redux-thunk').default;
import rootReducer from '../reducers/rootReducer';
import {fromJS} from 'immutable';

const enhancers = [];

if ((<any>window).devToolsExtension) {
  enhancers.push((<any>window).devToolsExtension());
}

const store = createStore(rootReducer, fromJS({}), compose(
  applyMiddleware(thunk),
  ...enhancers
));
export default store;
