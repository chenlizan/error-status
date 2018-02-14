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
errorStatus(express);

var app = express();

```

You using in you code only available in express
```
    register: (req, res, next) => {
        const body = req.body;
        return new promise((resolve, reject) => {
            if (body.user && body.password && body.phone) {
                return resolve(body);
            }
            else {
                return reject(errorStatus.Parameter_Error);
            }
        }).then(data => {
            return userInfoModule.register(body);
        }).then(data => {
            res.`sendData(data)`;
        }).catch(err => {
            next(err, req, res);
        });
    }
```
