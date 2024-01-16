function main() {
    let n = prompt("Nhập vào một số nguyên dương:");
    let reversedNumber = reverseNumber(n);
    console.log(`Số đảo ngược của ${n} là: ${reversedNumber}`);
}

function reverseNumber(number) {
    let reversedString = String(number).split("").reverse().join("");
    

    return parseInt(reversedString);
}

main();
