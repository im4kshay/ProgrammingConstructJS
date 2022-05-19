//1.random func to get single digit
console.log(Math.floor(Math.random()*10));

//2.Use Random to get Dice Number between 1 to 6
console.log(1+Math.floor(Math.random()*10)%6);

//3.Add two Random Dice Number and Print the Result
let dice1 = 1 + Math.floor(Math.random()*10)%6;
let dice2 = 1 + Math.floor(Math.random()*10)%6;
console.log("we got in first dice " + dice1 + " and in second dice " + dice2);
let result = dice1 + dice2;
console.log("Result " + result);

//4. Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
const arr = new Array(5);
sum =0;
for(let i = 0; i< arr.length; i++){
    arr[i] = Math.floor(Math.random() * 90) + 10;
    console.log("Number"+(i+1)+" is "+arr[i]);
    sum += arr[i];
}
let avg = sum/arr.length;
console.log("Total sum: "+sum);
console.log("Total average: "+avg);