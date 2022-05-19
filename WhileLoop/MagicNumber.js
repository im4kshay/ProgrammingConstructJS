console.log("This program guess number of you think..")
const prompt = require('prompt-sync')();

let start = 1;
let end = 100;
while (start != end)
{
    let mid = Math.round((start + end) / 2);
    console.log("1.Number is greater than  : "+ mid);
    console.log("2.Number is less than equal to : "+ mid);
    let choice = parseInt(prompt('enter your choice'))
    switch (choice)
    {
        case 1:
            start = mid + 1;
            break;
        case 2:
            end = mid;
            break;
        default:
            console.log("Enter Valid Option!");
            break;
    }
}
if (start == end)
{
    console.log("Your number is "+start);
}