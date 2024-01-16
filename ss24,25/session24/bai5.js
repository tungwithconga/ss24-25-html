function main() {
    let n = parseInt(prompt("Nhập vào một số nguyên dương n:"));
    let result = calculateExpression(n);

    console.log(`Kết quả biểu thức S với n=${n}: ${result.toFixed(5)}`);
}

function calculateExpression(n) {
    let sum = 1;

    for (let i = 2; i <= n; i++) {
        sum += 1 / Math.pow(i, 3);
    }

    return sum;
}
main();
