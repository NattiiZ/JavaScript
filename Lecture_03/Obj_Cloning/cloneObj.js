const obj1 = {
    person : "Nattawut",
    weight : 50
}

const obj2 = {...obj1};
obj2.weight = 55;

console.log(obj1);
console.log(obj2);
