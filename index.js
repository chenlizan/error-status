/**
 * Created by chenlizan on 16-7-14.
 */

'use strict';

var _statusCodes = require('./statusCodes.js');
var _extend = false;

function middleware(req, res, next) {
    if (!_extend) {
        Object.keys(_statusCodes).forEach(function (status) {
            res.__proto__[status] = function (msg) {
                if (msg) {
                    return this.status(_statusCodes[status].code).json(msg);
                }
                else {
                    return this.status(_statusCodes[status].code).json(_statusCodes[status].message);
                }
            };
        });
    }
    _extend = true;
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