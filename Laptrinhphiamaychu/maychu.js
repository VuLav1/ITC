// var http = require('http')
// var now = require('./ngaythang')
// var url = require('url')
// function xuly(req, res) {
//     res.writeHead(200, {"Content-Type":"text/html"})
//     var q = url.parse(req.url,true).query
//     res.write(`${now.ngay}/${now.thang}/${now.nam}`)
//     res.end()
// }
// var myServer = http.createServer(xuly)
// myServer.listen(8080, thongbao)
// function thongbao() {
//     console.log('sever running');
// }
//rut gon
// require('http').createServer(((req, res) => {
//     res.writeHead(200, {"Content-Type":"text/plain"})
//     res.write('hello')
//     res.end()
// })).listen(8080)
var http = require('http')
function xuly(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.end(`<form>
        <h1>Thao tác trên tập tin</h1>
        <input type="text">
        <button id="mybutton">Tạo tập tin</button>
        <button>Đọc tập tin</button>
        <button>Xóa tập tin</button>
    </form>`)
}
var mamp = http.createServer(xuly)
function thongbao() {
    console.log('server running http://localhost:8080');
}
mamp.listen(8080, thongbao)
