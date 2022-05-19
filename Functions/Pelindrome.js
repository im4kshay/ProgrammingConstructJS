const prompt = require('prompt-sync')();
console.log("Check whether number is pelindrome or not..");

function pelindrome(number)
{
    let rev = 0;
    let rem = 0;
    const temp = number;
    while(Math.floor(number) > 0)
    {
        rem = number%10;
        rev = rev*10 + rem;
        number -= rem;
        number /= 10;
    }
    if(rev==temp)
        console.log("Number is pelindrome");
    else
        console.log("Number is not pelindrome");
}
let number = parseInt(prompt('Enter number: '));
pelindrome(number);