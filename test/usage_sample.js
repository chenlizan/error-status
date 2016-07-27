var express = require('express');
var _statusCodes = require('../statusCodes.js');
//var errorStatus = require('error-status-helper').use(_statusCodes);
var errorStatus = require('../index.js').use(_statusCodes);

var app = express();

app.use(errorStatus);

app.use("/badRequest", function (req, res, next) {
    res.Bad_Request();
})

app.use("/forbidden", function (req, res, next) {
    var errMsg = {statusCode: -1, message: 'you can not use this interface'};
    res.Forbidden(errMsg);
})


app.listen(3001);

