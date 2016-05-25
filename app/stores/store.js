var redux_1 = require('redux');
var redux_thunk_1 = require('redux-thunk');
var rootReducer_1 = require('../reducers/rootReducer');
var immutable_1 = require('immutable');
var store = redux_1.createStore(rootReducer_1.default, immutable_1.fromJS({}), redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default), window.devToolsExtension ? window.devToolsExtension() : function (f) { return f; }));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
