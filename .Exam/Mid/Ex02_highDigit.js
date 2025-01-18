function findtHigh(num) 
{
    let split = num.toString().split("");

    return Math.max(...split);
}


console.log(findtHigh(379));