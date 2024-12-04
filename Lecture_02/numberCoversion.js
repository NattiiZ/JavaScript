let num1 = '150';
let float1 = '1.50';

console.log("****** Converting strings to integers ******");

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

console.log("\n****** Coverting strings to float ******");

console.log(parseFloat('1.25abc'));
console.log(parseFloat(float1));
console.log(parseFloat('ABC'));