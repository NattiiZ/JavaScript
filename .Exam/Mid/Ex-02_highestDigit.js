function findHigh(num) 
{
    let split = num.toString().split("");

    return Math.max(...split);
}


console.log(findHigh(379));