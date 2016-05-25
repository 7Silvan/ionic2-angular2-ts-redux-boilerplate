var actionTypes_ts_1 = require('../actionTypes.ts');
var immutable_1 = require('immutable');
var posts = function (state, action) {
    if (state === void 0) { state = immutable_1.fromJS({}); }
    if (action === void 0) { action = {}; }
    switch (action && action.type) {
        case actionTypes_ts_1.default.POSTS_FETCH_INIT:
        case actionTypes_ts_1.default.POSTS_FETCH_SUCCESS:
        case actionTypes_ts_1.default.POSTS_FETCH_FAIL:
            return action.data;
        default:
            return state;
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = posts;
