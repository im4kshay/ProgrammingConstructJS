console.log("This program gives you the Nth harmonic number..");
const prompt = require('prompt-sync')();
let term = parseInt(prompt('Enter the Value of N=> '));
let harmonic = 0;
for(let i=1;i<=term;i++)
{
    harmonic += (1/i);
}
console.log(harmonic);