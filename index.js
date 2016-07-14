/**
 * Created by chenlizan on 16-7-14.
 */

'use strict';

var _statusCodes = require('./statusCodes.js');

function middleware(req, res, next) {
    Object.keys(_statusCodes).forEach(function (status) {
        res.__proto__[status] = function () {
            this.setHeader("Content-Type", "application/json; charset=utf-8");
            this.statusCode = _statusCodes[status].code;
            this.end(JSON.stringify(_statusCodes[status].message));
            return;
        };
    });
    next();
}

module.exports = middleware;

module.exports.use = function use(statusCodes) {
    if (statusCodes) {
        _statusCodes = statusCodes;
        return middleware;
    }
    else {
        return middleware;
    }
}