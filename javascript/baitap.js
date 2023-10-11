// const sq = (Number) => Number ** 2
// console.log(sq(3))
// const mang = [3, 5, 7, 10]
// const tong = (mang) => {
//     let sum = 0
//     for(num of mang){
//         sum += num
//     }
//     return sum
// }
// console.log(tong(mang));
let promise = new Promise(function(resolve, reject){
    resolve(1);
    setTimeout(() => resolve(2), 100)
        
})