function equation(expression) {
    const operators = /[+\-*/]/;
    const parts = expression.split(operators).map(Number);
    const operator = expression.match(operators)[0];

    switch (operator) {
        case '+': 
            return parts[0] + parts[1];
        case '-': 
            return parts[0] - parts[1];
        case '*': 
            return parts[0] * parts[1];
        case '/': 
            return parts[0] / parts[1];
        default: 
            return NaN;
    }
}

console.log(equation("1+1"));  
console.log(equation("7*4")); 
console.log(equation("10-5"));  
console.log(equation("20/4")); 
