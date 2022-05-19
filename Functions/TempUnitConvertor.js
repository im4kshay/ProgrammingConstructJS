const prompt = require('prompt-sync')();
console.log("Choose your option...");

function tempUnitConvert(option)
{
    let temp = prompt('Enter temperature: ');
    switch(option)
    {
        case 1:
            let degF = (temp * 9/5) + 32;
            console.log(temp+" degC = "+degF+" degF");
            break;
        case 2:
            let degC = (temp - 32) * 5/9;
            console.log(temp+" degF = "+degC+" degC");
            break;
        default:
            console.log("Choose option Correctly")
            break;
    }
}
let option = parseInt(prompt('1.degC to degF \n2.degF to degC\n'));
tempUnitConvert(option);