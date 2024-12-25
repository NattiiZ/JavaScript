let arr1 = ['A', true, 2];

// Push and Pop
console.log("\n********* Push and Pop *********\n");
console.log(arr1.push("New value"));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

// Shif and Unshift
console.log("\n********* Shift and Unshift *********\n");
console.log(arr1.unshift("New value"));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);

// Concat
console.log("\n********* Concat *********\n");
let arr2 = ['B', false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr);
console.log(newArr2);