let n = prompt("Nhập số nguyên dương n:");
let fibN = fibonacci(n);
console.log(`Số Fibonacci thứ ${n} là: ${fibN}`);
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n];
    }
}
