var express = require('express')
var app = express()

app.get('/cros', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8081') // 设置允许跨域的origin
    res.json({
        success: true,
        msg: '跨域访问成功'
    })
})

app.listen(3001);
