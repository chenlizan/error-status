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

var express = require('express');
var errorStatus = require('error-status-helper');

var app = express();
app.use(errorStatus);

```
