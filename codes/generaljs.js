//  VARIABLES
let currentCoins // general moneys in account
let payday //   Day in date of general money add.

//  ARRAYS
let addedMoneys = []    //  green values
let lessedMoneys = []   //  red values

//  OBJECTS

let coin = {}   //  positive coins
let coinL = {}  //  negative coins

//  OPERATIONS
//  add new positive coins in array "coin"
function addCoins() {
    coin = {
        comment: document.getElementById('addedFrom').value,
        amount: Number(document.getElementById("add").value),
        color: 'green',
        date: new Date(),
    }
    if(coin.amount === "" || coin.amount === "0") {return}
    addedMoneys.push(coin)
}

//  add new negative coins in array "coinL"
function lessCoins() {
    coinL = {
        comment: document.getElementById('losedFor').value,
        amount: Number(document.getElementById("less").value),
        color: 'red',
        date: new Date(),
    }
    if(coinL.amount === "" || coinL.amount === "0") {return}
    lessedMoneys.push(coinL)
}


function calculateCurrent() {
    //some code
    sum = 0;
    minusSum = 0;
    result = 0;
    for (i = 0; i < addedMoneys.length; i++) {
        sum += addedMoneys[i].amount;
    }
    for (i = 0; i < lessedMoneys.length; i++) {
        minusSum += lessedMoneys[i].amount;
    }
    result = sum - minusSum;
    document.getElementById('yourCurrent').innerHTML = result;
}