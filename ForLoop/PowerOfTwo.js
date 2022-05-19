console.log("This program gives you the table of power of 2 Upto N power..");
const prompt = require('prompt-sync')();
let term = parseInt(prompt('Enter the Value of N=> '));

for(let i=0;i<=term;i++)
{
    let power = Math.pow(2, i);
    console.log(power);
}