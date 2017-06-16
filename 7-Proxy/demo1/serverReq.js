var express = require('express');
var proxy = require('http-proxy-middleware');

var requestPort = 3000;  // 请求页面跑在3000端口
var app = express();

app.use(express.static(__dirname));

app.use('/api', proxy({target: 'http://localhost:3001/', changeOrigin: true}));
// changeOrigin设置为true，本地会虚拟一个服务端接收你的请求并代你发送该请求
// http://localhost:3000/api   -->   http://localhost:3001/api

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});

