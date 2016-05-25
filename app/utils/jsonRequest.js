var request = require('xhr-request');
var jsonRequest = function (url, errorCallback, successCallback) {
    var options = {
        json: true,
    };
    request(url, options, function (error, response) {
        if (error) {
            errorCallback(error);
        }
        else {
            successCallback(response);
        }
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = jsonRequest;
