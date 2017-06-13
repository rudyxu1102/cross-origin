var express = require('express');
var app = express();

var responsePort = 3001;  // 响应请求的页面跑在3001端口

app.get('/', (req, res) => {
    // 设置允许跨域的origin，允许3000端口访问3001端口
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.send({message: "This is data returned from the CORS server"})
});

app.listen(responsePort, function () {
    console.log('responser is listening on port '+ responsePort);
});
