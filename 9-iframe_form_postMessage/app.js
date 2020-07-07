const path = require("path");
const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(PORT, function () {
    console.log(`The server is running in http://localhost:${PORT}`);
});