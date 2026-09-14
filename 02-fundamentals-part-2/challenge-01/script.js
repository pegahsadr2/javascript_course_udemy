'use strict';
//  const calcAverage = valueAverage =>  (score1 + score2 + score3 )/3 ;
//  const scoreAverage = calcAverage(44,23,71) 
//  console.log(scoreAverage)

//  function checkWinner(avgDolhins, avgKoalas) {
//     A >= 2 * B
//  }

const calcAverage = scoreAverage => scoreAverage/3
// test1
// const avgDolphins = calcAverage(44+23+71)  
// const avgKoalas = calcAverage(65+54+49) 

// test2
const avgDolphins = calcAverage(85+54+41)  
const avgKoalas = calcAverage(23+34+27) 

console.log (avgDolphins, avgKoalas)
 const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if( avgKoalas >= 2* avgDolphins){
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
       console.log('no team wins');
    }
}
checkWinner(avgDolphins, avgKoalas);
checkWinner(235, 548);

