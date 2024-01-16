let n = prompt("Hay nhap vao mot so nguyen");
console.log(`Bình phương các số nguyên dương chẵn từ 1 đến ${n} là:`);
    for (let i = 2; i <= n; i += 2) {
        const square = i ** 2;
        console.log(`${i} ^ 2 = ${square}`);
    }
