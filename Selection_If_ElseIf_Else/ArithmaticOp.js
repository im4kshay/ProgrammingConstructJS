const prompt = require('prompt-sync')();
function arithmaticOp(a,b,c)
{
    let operation1 = a + b * c;
    console.log("a + b * c = " +operation1);
    let operation2 = a + b / c;
    console.log("a + b / c = " +operation2);
    let operation3 = a % b + c;
    console.log("a % b + c = " +operation3);
    let operation4 = a * b + c;
    console.log("a * b + c = " +operation4);

    opArray = [operation1, operation2, operation3, operation4];
        min = opArray[0];
        max = opArray[0];
        for (array of opArray) 
        {
        if (array < min)   
            min = array;
        }
        for (array of opArray) 
        {
        if (array > max)  
            max = array;
        }
        console.log("maximum operation: " + max);
        console.log("minimum operation: " + min);
}
const firstNum = parseInt(prompt('enter a number: '));
const secondNum = parseInt(prompt('enter a number: '));
const thirdNum = parseInt(prompt('enter a number: '));
arithmaticOp(firstNum,secondNum,thirdNum);