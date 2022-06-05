//  VARIABLES
let currentCoins // general moneys in account
let payday //   Day in date of general money add.

//  ARRAYS
let addedMoneys = []    //  green values
let lessedMoneys = []   //  red values

//  OBJECTS

//example//
// let coins = {
//     comment : '',   //user comment like 'buying bread'
//     amount : value, //positive number
//     color : green,  //green for positive, red for negative
// }

//  OPERATIONS
function calculateThis(){  
        let changeCoinsOn = document.getElementById("add").value;
        addedMoneys.push(changeCoinsOn);
    }
calculateThis();
console.log(addedMoneys);
console.log(lessedMoneys);