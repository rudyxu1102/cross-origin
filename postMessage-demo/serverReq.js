var express = require('express');
var app = express();

var requestPort = 3004;  // 请求页面跑在3004端口

app.use(express.static(__dirname + '/staticReq')); //3004端口的静态文件，即index.html

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});
