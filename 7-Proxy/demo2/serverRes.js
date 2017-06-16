var express = require('express');

var portNumber = 3001;
var app = express();

app.get("/", function (req, res) {
    res.send("hello world from 3001. ?");
})

app.listen(portNumber, function () {
    console.log("Responding server listening on port "+ portNumber);
});
