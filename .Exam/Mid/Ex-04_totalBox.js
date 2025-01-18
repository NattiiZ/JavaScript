function totalBox(B1=[0, 0, 0], B2=[0, 0, 0], B3=[0, 0, 0]) 
{
    let total = (B1[0] * B1[1] * B1[2]) + (B2[0] * B2[1] * B2[2]) + (B3[0] * B3[1] * B3[2]);

    return total
}


console.log(totalBox([2, 3, 2], [6, 6, 7], [1, 2, 1]));
console.log(totalBox([2, 2, 2], [2, 1, 1]));