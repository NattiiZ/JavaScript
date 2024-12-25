function perimeter(width, height) 
{
    let txt = `Perimeter (${width}, ${height}) => `;
    let value = 2 * (width + height);

    return (txt + value);
}

console.log(perimeter(6, 7));
console.log(perimeter(20, 10));
console.log(perimeter(2, 9));