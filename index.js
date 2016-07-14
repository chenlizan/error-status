/**
 * Created by chenlizan on 16-7-14.
 */


//(function (module) {
//    'use strict';
//
//    var express,
//        responsePrototype,
//        statusCodes = require('./statusCodes.js');
//    try {
//        express = require('express');
//        responsePrototype = express.response;
//    } catch (e) {
//        throw new Error('express-status required express: please npm install express. ' + e.message);
//    }
//
//    Object.keys(statusCodes).forEach(function (status) {
//        Object.defineProperty(module.exports, status, {
//            value: statusCodes[status].code
//        });
//
//        responsePrototype[status] = function () {
//            return this.status(statusCodes[status].code);
//        };
//
//    });
//
//}(module));

var statusCodes = require('./statusCodes.js');

module.exports = function (req, res, next) {
    //Object.keys(statusCodes).forEach(function (status) {
    //    res.__proto__[status] = function () {
    //        return this.status(statusCodes[status].status).json(statusCodes[status].message);
    //    };
    //});
    statusCodes.call(res);
    next();
}