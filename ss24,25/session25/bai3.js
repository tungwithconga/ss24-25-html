let n = prompt("Nhập số nguyên dương n:");
    let sum = 0;
    let m = 0;
    while (sum + m + 1 <= n) {
        m++;
        sum += m;
    }
    console.log(`Số nguyên dương m lớn nhất sao cho tổng 1+2+3+...+m < ${n} là: ${m}`);

