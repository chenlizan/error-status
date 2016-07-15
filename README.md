# error-status-helper
Extends express response middleware with status codes helper methods.


Installation
------------
``` bash
$ npm install error-status-helper
```


Example
-------

``` javascript

simple example

var express = require('express');
var errorStatus = require('error-status-helper');

var app = express();
app.use(errorStatus);


custom example

var _statusCodes = require('./statusCodes.js');
var errorStatus = require('error-status-hepler').use(_statusCodes);

statusCode.js format
module.exports = {
    BadRequest: {
        code: 400,
        message: {
            message: 'Bad Request'
        }
    }
}

```
