# error-status-helper
Extends express response middleware with status codes helper methods.


Installation
------------
``` bash
$ npm install error-status-helper
```


Example
-------

javascript

* simple example

``` 
var express = require('express');
var errorStatus = require('error-status-helper');

var app = express();
app.use(errorStatus);

```

* custom example

```
var express = require('express');
var _statusCodes = require('./statusCodes.js');
var errorStatus = require('error-status-hepler').use(_statusCodes);

var app = express();
app.use(errorStatus);
```

statusCode.js format

the default code is using the http code, you can define you own business code in statusCode property.

```
module.exports = {
   Bad_Request: {
        code: 400,
        statusCode:401001,
        message: {
            en: "Bad Request"
        }
    },
}
```

You using in you code only available in express
```
app.use("/badRequest", function (req, res, next) {
    res.Bad_Request();
})

app.use("/forbidden", function (req, res, next) {
    var errMsg = {statusCode: -1, message: 'you can not use this interface'};
    res.Forbidden(errMsg);
})
```
