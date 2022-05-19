const prompt = require('prompt-sync')();
console.log("Select Date ");
const date = parseInt(prompt("Enter date in numbers: "));
const month = prompt("Enter month in words: ").toLowerCase();

if (month == "march" && date >= 20 && date < 31) console.log("True");
else if(month =="april" && date <= 30) console.log("True");
else if(month =="may" && date <= 31) console.log("True");
else if(month =="june" && date < 20) console.log("True");
else
{
    console.log("False");
}