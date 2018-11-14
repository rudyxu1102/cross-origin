const path = require("path");
const express = require("express");
const app = express();

const PORT = 3002;

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../views/index.html"));
});

app.get("/user", function (req, res) {
    let data = [
        { name: "tom" },
        { name: "tom" },
    ];
    // 返回值需要处理成postmessge的格式
    res.send(`
        <script>
            top.postMessage(${JSON.stringify(data)},"${req.headers.referer}")
        </script>
    `);
});

app.post("/user", function (req, res) {
    let data = {
        success: true,
    };
    // 返回值需要处理成postmessge的格式
    res.send(`
        <script>
            top.postMessage(${JSON.stringify(data)},"${req.headers.referer}")
        </script>
    `);
});

app.listen(PORT, function () {
    console.log(`The server is running in http://localhost:${PORT}`);
});