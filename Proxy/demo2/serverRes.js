var express = require('express');

var portNumber = 3009;
var app = express();

app.get("/", function (req, res) {
    res.send("hello world from 3009");
})

app.listen(portNumber, function () {
    console.log("Responding server listening on port "+ portNumber);
});
