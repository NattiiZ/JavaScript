function sumSmallest(arr) 
{
    const number1 = Math.min(...arr)

    for (i=0; i<arr.length; i++)
    {
        if (arr[i] === number1)
            arr.splice(i, 1);
    }

    const number2 = Math.min(...arr);

    console.log(number1 + number2);
}

sumSmallest([19, 5, 42, 2, 77])