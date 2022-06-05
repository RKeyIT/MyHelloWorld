//  VARIABLES
let currentCoins // general moneys in account
let payday //   Day in date of general money add.

//  ARRAYS
let addedMoneys = []    //  green values
let lessedMoneys = []   //  red values

//  OBJECTS

let coin = {}
let coinL = {}
//example//
// let coins = {
//     comment : '',   //user comment like 'buying bread'
//     amount : value, //positive number
//     color : green,  //green for positive, red for negative
//     date : 01.01.01 //date of operation
// }

//  OPERATIONS
function addCoins() {
    coin = {
        comment: document.getElementById('addedFrom').value,
        amount: document.getElementById("add").value,
        color: 'green',
        date: new Date(),
    }
    if(coin.amount === "" || coin.amount === "0") {return}
    addedMoneys.push(coin)
}

// FUNCTION IN BOTTOM DIDNT WORK IF WE HAVE "IF"
// BUT WE CAN USE THIS FUNCTIONЫ ON DIFFERENT PAGES
function lessCoins() {
    coinL = {
        comment: document.getElementById('losedFor').value,
        amount: document.getElementById("less").value,
        color: 'red',
        date: new Date(),
    }
    if(coinL.amount === "" || coinL.amount === "0") {return}
    lessedMoneys.push(coinL)
}


// RELAX TIME...
function calculateCurrent() {
    sumAdd
    for (i = 0 ; i < addedMoneys[-1] ; i++) {
        sumAdd += addedMoneys[-1]
    }
    sumLess =
}