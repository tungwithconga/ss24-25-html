let a = +prompt("Hay nhap so nguyen a");
let b = prompt("Hay nhap so nguyen b");
let sum = 0;
let start, end;
if (a <= b) {
    start = a;
    end = b;
} else {
    start = b;
    end = a;
}
for (let i = start; i <= end; i++) {
    sum += i;
}
console.log(`Tổng các số nguyên trong khoảng từ ${start} đến ${end} là: ${sum}`);
