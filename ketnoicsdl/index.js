var mongo = require('mongodb-legacy')

const MongoClient = require('mongodb-legacy').MongoClient

const client = new MongoClient("mongodb://127.0.0.1:27017")

const csdl = client.db("quanlytien")

// console.log(csdl);
// tao collection
// csdl.createCollection("hoadon")
//     .then(ketqua => {
//         console.log('da tao xong', ketqua.namespace);
//     })
//     .catch(err => {
//         console.log('ko tao dc collection');
//     })
//     .finally(() => client.close())
//tao document
// csdl.collection('MATHANG')
//     .insertOne({ 'tenmh': 'banh', 'soluong': 5 })
//     .then(kq => { console.log('da chen xong', kq); })
//     .catch(err => { console.log('ko chen du lieu'); })
//     .finally(() => client.close)
// csdl.collection('MATHANG')
//     .find()
//     .toArray()
//     .then(kq => {
//         for (dl of kq)
//             console.log('tenmh: ', dl.tenmh, 'soluong: ', dl.soluong);
//     })
//     .catch(err => { console.log('ko chen du lieu'); })
//     .finally(() => client.close)
var dulieu
csdl.collection('MATHANG')
    .find()
    .toArray()
    .then(kq => dulieu = kq)
    .catch(err => console.log('ko xem dc'))
    .finally(() => client.close)
///////////////////////////
var http = require('http')
var url = require('url')
function xuly(req, res) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    var chuoi = '<table border=1><tr><th>Ma so</th><th>Ten mh</th></tr>'
    for (dl of dulieu)
        chuoi += '<tr><td>' + dl._id + '</td><td>' + dl.tenmh + '</td><td>' + dl.soluong + '</td></tr>'
    chuoi += `</table>`
    res.end(chuoi)}
var xampp = http.createServer(xuly)
function thongbao() {
    console.log('server running http://localhost:8080');
}
xampp.listen(8080, thongbao)