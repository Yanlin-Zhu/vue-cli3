// 执行node server.js用于本地运行打包文件
let express = require('express')
const path = require('path')
let app = require('express')()
let server = require('http').createServer(app)

server.listen(8888)
app.use(express.static('./dist'))
app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '/index.html'))
})
