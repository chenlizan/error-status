/**
 * Created by chenlizan on 18-2-14.
 */

const statusInfo = require('./statusInfo');

module.exports = function (express) {
    express.response['sendData'] = function (data, message = null, statusCode = 0) {
        return this.status(200).send({
            "statusCode": statusCode,
            "message": message,
            "result": data
        });
    };
};

module.exports.errorMiddleware = function (err, req, res, next) {
    res.status(err.code || 500).send({
        "statusCode": err.statusCode,
        "message": err.message,
        "result": null
    });
};

module.exports.notFoundMiddleware = function (req, res, next) {
    const error = require('./statusInfo').Not_Found;
    next(error);
};

module.exports.statusInfo = statusInfo;

module.exports.extendStatus = function (name, {code, statusCode, message}) {
    statusInfo[name] = {code: code, statusCode: statusCode, message: message};
};
