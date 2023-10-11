var http = require('http')
var fs = require('fs')
var url = require('url')
function xuly(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    fs.createReadStream(__dirname + '/form.html').pipe(res);
    var kq = url.parse(req.url, true).query
    var myInput = kq.myInput
    var xuly = kq.xuly
    if(myInput!=undefined && xuly!=undefined){
        switch (xuly) {
            case 'tao': fs.writeFileSync(myInput,'xin chao');
                break;
            case 'doc': console.log(fs.readFileSync(myInput,'utf-8'));
                break;
            case 'xoa': fs.unlinkSync(myInput);
                break;
        }
    }
    // res.end(`<form>
    //     <h1>Thao tác trên tập tin</h1>
    //     <input name="myInput" value="thotinh.txt" type="text">
    //     <button name="xuly" value="tao">Tạo tập tin</button>
    //     <button name="xuly" value="doc">Đọc tập tin</button>
    //     <button name="xuly" value="xoa">Xóa tập tin</button>
    // </form>`)
}
var mamp = http.createServer(xuly)
function thongbao() {
    console.log('server running http://localhost:8080');
}
mamp.listen(8080, thongbao)