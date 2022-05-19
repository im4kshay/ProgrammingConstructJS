console.log("Enter any Year to check If it is a Leap year or not?");
const prompt = require('prompt-sync')();
const year = parseInt(prompt('Enter year:  '));
if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    console.log("It's a Leap Year..");
else
    console.log("It's not a Leap Year..");