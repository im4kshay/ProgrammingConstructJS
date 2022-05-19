console.log("This program gives the Factorial of given number..")
const prompt = require('prompt-sync')();
const number = parseInt(prompt('Enter any number: '));
let fact=1;

for(let i=number; i>=1; i--)
{
    fact = fact * i;
}
console.log(fact);