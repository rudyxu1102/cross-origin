var express = require('express');
var app = express();

var responsePort = 3001;  // 响应请求的页面跑在3001端口

app.use(express.static(__dirname + '/staticRes'));


app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
