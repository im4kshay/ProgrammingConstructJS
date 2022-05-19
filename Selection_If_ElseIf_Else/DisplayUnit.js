function displayUnit(digitplace)
{
    if( digitplace == 1) console.log("Unit");
    else if( digitplace == 10) console.log("Ten");
    else if( digitplace == 100) console.log("Hundred");
    else if( digitplace == 1000) console.log("Thousand");
    else if( digitplace == 10000) console.log("Ten Thousand");
    else if( digitplace == 100000) console.log("Hundred Thousand");
    else if( digitplace == 1000000) console.log("Million");
    else if( digitplace == 10000000) console.log("Ten Million");
    else if( digitplace == 100000000) console.log("Hundred Million");
    else if( digitplace == 1000000000) console.log("Billion");
        else console.log("Out of limit");
}
const prompt = require('prompt-sync')();
const digit = prompt('enter a digit(like--1,10,100...): ');
displayUnit((digit));