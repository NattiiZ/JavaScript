function sumBudget(peoples)
{
    let total = 0;

    for (people of peoples)
        total += people.budget;

    return total;
}

const peoples = [
    {name: "John", age: 21, budget: 23000},
    {name: "Steve", age: 32, budget: 40000},
    {name: "Martin", age: 16, budget: 2700},
];

console.log(sumBudget(peoples));
