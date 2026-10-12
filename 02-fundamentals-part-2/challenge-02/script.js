'use strict';

// const bill = 257 
// const tip = bill<= 300 && bill>=50 ? bill* 0.15 : bill* 0.2 ;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${tip+bill}`)

//create array bills have data test

//get bill as input and calculate tip based on above 

// const calcTip = bill=> bill<= 300 && bill>=50 ? bill* 0.15 : bill* 0.2 ;


const calcTip = function(bill){
   return bill<= 300 && bill>=50 ? bill* 0.15 : bill* 0.2 ;
}

const bills = [155,125,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; 
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
