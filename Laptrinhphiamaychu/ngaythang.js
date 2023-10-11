var ngaythang = new Date()
module.exports = {
    ngay: ngaythang.getDate(),
    thang: ngaythang.getMonth() + 1,
    nam: ngaythang.getFullYear()
}