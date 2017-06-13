var express = require('express');
var app = express();

var responsePort = 3005;  // 请求页面跑在3004端口

app.use(express.static(__dirname + '/staticRes')); //3005端口的静态文件，即index.html

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
