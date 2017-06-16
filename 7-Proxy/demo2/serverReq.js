var express = require('express');
var http= require('http');

var portNumber = 3000;
var app = express();

app.use(express.static(__dirname)); //即index.html

app.get('/proxy', function(request, response){
    var url = request.query.url    // http://localhost:3001/

    // 向url发出请求
    http.get(url, function(responseFromOtherDomain) {
        // data事件会在数据接收过程中，每收到一段数据就触发一次，接收到的数据被传入回调函数。
        responseFromOtherDomain.on("data", function(data) {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(data);
        });
    });
});

app.listen(portNumber, function () {
    console.log('Requester with proxy is listening on port '+ portNumber);
});
