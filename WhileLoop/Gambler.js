console.log("Gambling....");
let head = 0;
let tail = 0;
let maximum = 200;
let minimum = 0;
let money = 100;
while( money < maximum && money > minimum)
{
    let random = Math.floor(Math.random() * 10) % 2;
    // console.log("random "+random);
    if(random == 0){
        money++;
        head++;
        // console.log(" money after win "+money);
    }
    else{
        money--;
        tail++;
        // console.log("money after loss  "+money);
    }
}
console.log("Number of times win: "+head+"\nNumber of times loss: "+tail);