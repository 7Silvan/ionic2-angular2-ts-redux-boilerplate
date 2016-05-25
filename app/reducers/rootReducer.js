var redux_immutable_1 = require('redux-immutable');
var posts_1 = require('./posts');
var dummy_1 = require('./dummy');
var rootReducer = redux_immutable_1.combineReducers({
    posts: posts_1.default,
    dummy: dummy_1.default,
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = rootReducer;
