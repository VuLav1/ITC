function * fibonacci(n) {
    let a = 5;
    let b = 10;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }

}

const n = 10;
const fibonacci1 = fibonacci(n);
const fibonacciArray = [...fibonacci1];
console.log(fibonacciArray);
