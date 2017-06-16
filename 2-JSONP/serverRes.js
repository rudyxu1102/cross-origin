var express = require('express');
var app = express();

var responsePort = 3001;

app.get('/', function (req, res) {
    var callbackName = req.query.callback;   // myFunction
    res.send(callbackName+"({'message': 'hello world from JSONP!🙃'});");
    // myFunction({'message': 'hello world from JSONP!'})
    // 一个带参数的执行函数
})

app.listen(responsePort, function () {
    console.log("jsonp_responser server listening on port " + responsePort);
});
