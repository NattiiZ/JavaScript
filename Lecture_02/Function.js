function printHello(name) 
{
    console.log("Hello " +  name);
    
    return (name + " hello!");
}

console.log(printHello.name);

let result = printHello("Nattawut");
console.log(result);
