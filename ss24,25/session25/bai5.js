let n = parseInt(prompt("Nhập số nguyên n:"));
    let countEvenDigits = 0;
    do {
        let digit = n % 10; 
        if (digit % 2 === 0) {
            countEvenDigits++;
        }
        n = (n - digit) / 10; 
    } while (n !== 0);
 console.log(`Trong số nguyên đã nhập, có ${countEvenDigits} chữ số chẵn.`);

