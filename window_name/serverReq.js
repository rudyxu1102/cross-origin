var express = require('express');
var app = express();

var requestPort = 3000;

app.use(express.static(__dirname + '/staticReq'));


app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});