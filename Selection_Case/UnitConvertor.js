const prompt = require('prompt-sync')();
console.log("Choose your option...");
let option = prompt('1.Feet to Inch \n2.Inch to Feet \n3.Meter to Feet \n4.Feet to Meter\n');
let number = prompt('Enter quantity: ');
switch(parseInt(option))
{
    case 1:
        let inch = number*12;
        console.log(number+" feet = "+inch+" inch(s)");
        break;
    case 2:
        let feet = number/12;
        console.log(number+" inch(s) = "+feet+" feet");
        break;
    case 3:
        let feet1 = number*3.28084;
        console.log(number+" meter = "+feet1+" feet");
        break;
    case 4:
        let meter = number/3.28084;
        console.log(number+" feet = "+meter+" meter");
        break;
    default:
        console.log("Choose option Correctly")
        break;
}