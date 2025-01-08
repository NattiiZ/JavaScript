const person = {
    name: 'Nattawut',
    weight: 50
};

function sayHello() 
{
    console.log("Hello world!");
}

function cube(x) 
{
    return (x ** 3);
}

const add = (a, b) => a + b;

const status = true;

module.exports = { person, sayHello, cube, add, status };