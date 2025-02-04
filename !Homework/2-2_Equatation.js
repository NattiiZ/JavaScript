function equation(expression) 
{
    try {
        return new Function('return ' + expression)();
    } 
    catch (e) {
        return NaN;
    }
}

console.log(equation("1+1")); 
console.log(equation("7*4-2")); 
console.log(equation("1+1+1+1+1"));  
