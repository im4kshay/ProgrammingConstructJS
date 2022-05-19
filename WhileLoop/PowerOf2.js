console.log("This program prints table of power of 2..")
const prompt = require('prompt-sync')();
let number = parseInt(prompt('Enter value of N=> '))
let num = 0;
let flag = 0;
let i = 0;
while(flag==0 && i<=number)
{
    num = Math.pow(2, i);
    i++;
    console.log(num);
    if(num>=256){
        flag = 1;
        console.log("256 is reached Can't go further");
    }
}