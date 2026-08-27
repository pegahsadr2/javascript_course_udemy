const markHeight = 1.69 ;
const markMass = 78 ;
const johnHeight = 1.95 ;
const johnMass = 95 ;



markBMI = markMass/(markHeight ** 2) ;
johnBMI = johnMass/(johnHeight ** 2) ;
const markHigherBMI = markBMI > johnBMI ;

console.log(markBMI) ;
console.log(johnBMI) ;
console.log(markHigherBMI) ;
// (markBMI> johnBMI) returns true ;

// if (markBMI> johnBMI) {
//     console.log(true) ;
// }
// else {
//    console.log(false) ; 
// }

