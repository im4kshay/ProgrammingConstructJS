const prompt = require('prompt-sync')();
const digit = prompt('enter a digit(like--1,10,100...): ');
switch (parseInt(digit)) 
{
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Hundred Thousand");
        break;
    case 1000000:
        console.log("Million");
        break;
    case 10000000:
        console.log("Ten Million");
        break;
    case 100000000:
        console.log("Hundred Million");
        break;
    case 1000000000:
        console.log("Billion");
        break;
    case 10000000000:
        console.log("Ten Billion");
        break;
    case 100000000000:
        console.log("Hundred Billion");
        break;
    default:
        console.log("out of limit");
        break;
}