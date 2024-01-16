let n = parseInt(prompt("Nhập số nguyên dương n:"));
    let result = 0;
    let currentTerm = 0;

    for (let i = 1; i <= n; i++) {
        currentTerm = currentTerm * 10 + 1;
        result += currentTerm;
    }
    console.log(`Giá trị của biểu thức S là: ${result}`);

