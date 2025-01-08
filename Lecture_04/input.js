// BMI Calculator
// BMI = weight (kg) / (height (m) ** 2)

const rl = require('redline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their name, weight, and height
rl.question('Enter your name: ', (name) => 
{
    rl.question('Enter your weight (kg): ', (weight) => 
    {
        rl.question('Enter your height (m): ', (height) => 
        {
            // Calculate the BMI
            let bmi = weight / (height ** 2);

            // Output the BMI
            console.log(`${name}, your BMI is ${bmi}`);
            
            rl.close();
        });
    });
});