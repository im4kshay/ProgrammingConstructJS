const arr = new Array(5);
maxValue = 0;
minValue = 1000;
for(let i = 1; i<= arr.length; i++)
{
    num = Math.floor(Math.random()*999);
    if(num >= 100)
    {
        console.log("Number"+i+ " is "+num)
        if(num>maxValue)
            maxValue = num;
        if(num<minValue)
            minValue = num;
    }
}
console.log("Minimum: "+minValue);
console.log("Maximum: "+maxValue);