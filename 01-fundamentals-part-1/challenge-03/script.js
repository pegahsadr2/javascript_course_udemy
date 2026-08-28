// const  dolphinscore = (96+108+89)/3 ;
// const koalasscore =  (88+91+110)/3 ;

// if (dolphinscore > koalasscore){
//     console.log("dolphins win")
// }
// else if(dolphinscore < koalasscore){
//     console.log("koalas win")

// }
// else if(dolphinscore === koalasscore){
//     console.log("they drew")
// }



//bonus 

const  dolphinscore = (97+112+101)/3 ;
const koalasscore =  (109+95+123)/3 ;

if (dolphinscore > koalasscore && dolphinscore >= 100){
    console.log("dolphins win")
}
else if(dolphinscore < koalasscore && koalasscore >= 100){
    console.log("koalas win")

}
else if(dolphinscore === koalasscore && dolphinscore >= 100  && koalasscore >= 100){
    console.log("they drew")
}
else{
    console.log("no one win")
}