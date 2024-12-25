const array_number = [1, 2, 3, 4];

const sum = array_number.reduce((accumulator, currentValue) =>
{
    return accumulator + currentValue;
});

console.log(sum);