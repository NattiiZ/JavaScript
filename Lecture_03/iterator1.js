let str = "Hello";

let iteritor = str[Symbol.iterator]();

while (true) 
{
    let result = iteritor.next();

    if (result.done)
        break;

    console.log(result.value);
}