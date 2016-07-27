var express = require('express');
var _statusCodes = require('../statusCodes.js');
var errorStatus = require('error-status-helper').use(_statusCodes);

var app = express();

app.use(errorStatus);

app.use("/badRequest", function (req, res, next) {
    res.Bad_Request();
})

app.listen(3001);