// Sử dụng generator function để tạo một dãy số Fibonacci có giới hạn.
let fibonacci = function * (n=5) {
    let previous = 0;
    if(n>0)
        yield current = 1;
    for(i=1; i<n; i++) {
        [previous, current] = [current, current+previous];
        yield current;
    }
}
console.log([...fibonacci(10)])