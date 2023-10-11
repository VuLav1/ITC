var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
function xuly(req, res) {
    if(req.method == 'GET') {
        var fileUrl;
        if(req.url == '/') fileUrl = 'home.html'
        else fileUrl = req.url
        var filePath = path.resolve('./public' + fileUrl)
        var fileExt = path.extname(filePath)
        if(fileExt == '.html'){
            fs.exists(filePath, (kq) => {
                if(!kq){
                    res.writeHead(404, {"content-Type": "text/html"})
                    res.end(`<html><bode><h1>Error 404: ` + fileUrl + ' not found</h1></bode></html>')
                    return
                }
                res.writeHead(200, {"Content-Type": "text/html"})
                fs.createReadStream(filePath).pipe
                (res)
            })
        }
        else {
            res.writeHead(404, {"Content-Type": "text/html"})
            res.end(`<html><bode><h1>Error 404: ` + fileUrl + ' not a HTML file</h1></bode></html>')
        }
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end(`<html><bode><h1>Error 404: ` + req.method + ' not supported</h1></bode></html>')
    }
    // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    // if(req.url=='/')
    //     fs.createReadStream(__dirname + '/index.html').pipe(res);
    // else if(req.url=='/about')
    //     fs.createReadStream(__dirname + '/lab2.2.html').pipe(res);
    // else if(req.url=='/contact')
    //     res.end('lien he')
}
var mamp = http.createServer(xuly)
function thongbao() {
    console.log('server running http://localhost:8080');
}
mamp.listen(8080, thongbao)