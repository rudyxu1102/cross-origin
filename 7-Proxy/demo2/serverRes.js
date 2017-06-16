var express = require('express');

var portNumber = 3001;
var app = express();

app.get("/", function (req, res) {
    res.send("I am here from 3001 ¬_¬");
})

app.listen(portNumber, function () {
    console.log("Responding server listening on port "+ portNumber);
});
