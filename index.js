/**
 * Created by chenlizan on 16-7-14.
 */

'use strict';

var _statusCodes = require('./statusCodes.js');

function middleware(req, res, next) {
    Object.keys(_statusCodes).forEach(function (status) {
        res.__proto__[status] = function () {
            return this.status(_statusCodes[status].status).json(_statusCodes[status].message);
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