let a = prompt("Hay nhap so nguyen duong a");
let b = prompt("Hay nhap so nguyen duong b");

if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("Vui lòng nhập vào hai số nguyên dương hợp lệ.");
} else {
    let min = a < b ? a : b;
    let max = a > b ? a : b;

    let sumLe = 0;
    let sumChan = 0;

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sumChan += i;
        } else {
            sumLe += i;
        }
    }
    console.log(`Tổng các số lẻ từ ${min} đến ${max}: ${sumLe}`);
    console.log(`Tổng các số chẵn từ ${min} đến ${max}: ${sumChan}`);
}
