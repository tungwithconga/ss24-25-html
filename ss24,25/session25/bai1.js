let n = prompt("Hay nhap mot so nguyen duong bat ki");
let sum = 0;
for( let i=1;i<n;i++ ){
    console.log(i);
    sum += i;
}
if (sum % 2 === 0) {
    sum += 1;
    console.log("(Thêm 1 để tổng là số lẻ)");
}
console.log("Ket qua la:"+sum);