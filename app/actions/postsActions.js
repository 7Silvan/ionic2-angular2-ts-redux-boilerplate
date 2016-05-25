var actionTypes_ts_1 = require('../actionTypes.ts');
var immutable_1 = require('immutable');
var jsonRequest_1 = require('../utils/jsonRequest');
// Success.
var setSuccessState = function (response) {
    return {
        data: immutable_1.fromJS({
            response: response.data.children,
            status: 'success',
        }),
        type: actionTypes_ts_1.default.POSTS_FETCH_SUCCESS,
    };
};
// Error.
var setErrorState = function (error) {
    return {
        data: immutable_1.fromJS({
            response: error,
            status: 'error',
        }),
        type: actionTypes_ts_1.default.POSTS_FETCH_FAIL,
    };
};
var setLoadingState = function () {
    return {
        data: immutable_1.fromJS({
            status: 'loading',
        }),
        type: actionTypes_ts_1.default.POSTS_FETCH_INIT,
    };
};
var fetchPosts = function () {
    return function (dispatch) {
        var url = 'https://www.reddit.com/top/.json?limit=10';
        // Set loading state.
        dispatch(setLoadingState());
        // Do request.
        jsonRequest_1.default(url, function (error) { return dispatch(setErrorState(error)); }, function (response) { return dispatch(setSuccessState(response)); });
    };
};
exports.postsActions = {
    fetchPosts: fetchPosts,
};
