let n = prompt("Nhập vào một số nguyên dương:");
let sum = 0;
    let i = 2;

    while (sum + i ** 2 < n) {
        sum += i ** 2;
        console.log(`${i} ^ 2 = ${i ** 2}`);
        i += 2;
    }
