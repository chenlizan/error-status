/**
 * Created by chenlizan on 18-2-14.
 */

module.exports = function (express) {
    express.response['sendData'] = function (data) {
        return this.status(200).send({
            "statusCode": 0,
            "message": null,
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

module.exports.statusInfo = require('./statusInfo');
