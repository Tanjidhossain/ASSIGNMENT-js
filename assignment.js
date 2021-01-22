Ans to the question no 1

function kilometerToMeter(kilometer){
    const meter = kilometer / 0.001 ;     // 1 meter = 0.001  kilometer
    return meter;
}
// var result = kilometerToMeter(1);
// console.log(result, "Meter");









Ans to the question no 2

function budgetCalculator(watch,phone,laptop) {
    const budgetForwatch = watch * 50;     //watch needs 50 taka for buy
    const budgetForphone = phone * 100;     //phone needs 100 taka for buy
    const budgetForlaptop = laptop * 500;  //laptop needs 500 taka for buy
    const totalbudget = budgetForwatch + budgetForphone + budgetForlaptop;
    return totalbudget;
}
// var output = budgetCalculator (50, 100, 500);
// console.log("You need total", output, "taka");




Ans to the question no 3
function hotelCost(day){
    var staying = 0;
    if(day<=10){
        var first10Days = day*100;
    }
    else if(day<=20){
        var first10Days = 10*100;
        var remainingDays = day - 10;
        var second10Days = remainingDays*80;
        var staying = first10Days + second10Days;
    }
    else{
        var first10Days = 10*100;
        var second10Days = 10*80;
        var remainingDays = day - 20;
        var otherDays = remainingDays*50;
        var staying = first10Days + second10Days + otherDays;
    }
    return staying;

}
// var count = hotelCost(14);
// console.log(count);








Ans to the question no 4

function megaFriend(friendName){
    let Longest = friendName[0];
    for (i = 0; i < friendName.length; i++){
        let nextName = friendName[i];
        if (nextName.length > Longest.length){
            Longest = nextName;
        }
    }
    return Longest;
}
// let output = megaFriend(["jhankar mahbub", "Ali", " Chowdury", ]);
// console.log("The Longest name of this list is:", output)

















