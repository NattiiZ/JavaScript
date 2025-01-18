function totalBox(...boxes) 
{
    let total = 0;

    for (i=0; i<boxes.length; i++) 
    {
        let result = boxes[i][0]; 
        
        for (let k=1; k<boxes[i].length; k++) 
        {
            result *= boxes[i][k];
        }
        
        total += result;
    }
    
    return total
}


console.log(totalBox([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalBox([2, 2, 2], [2, 1, 1]));
console.log(totalBox([1, 1, 1]));