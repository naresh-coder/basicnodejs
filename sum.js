let sum = (a, b) => a + b;


console.log(sum(10, 30));



// assignmet for 


let bills = [77, 375, 110, 45];
let billTip = [];
let billTotal = [];
let billAverage = null;
let noOfBills = 0;



bills.map((bill,index) => {
    let tip
    if (bill > 300) {
         tip = bill * 25 / 100;
        console.log('tip',tip);
    }
    else if (bill > 100 && bill < 300) {
        let tip = bill * 20 / 100;
        console.log('tip',tip);

    }
    else if (bill < 100) {
         tip = bill * 10 / 100;
        console.log('tip',tip);
    }

    if(tip){
    billTip[index] = tip;
    billTotal[index] = tip + bill;
    billAverage = index+1;
   // console.log(billAverage);
    noOfBills++;
    }
})

console.log(billTip);
console.log(billTotal);

console.log(billAverage/noOfBills);

