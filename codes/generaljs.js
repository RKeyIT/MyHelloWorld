//  VARIABLES
let currentCoins = 0    // general moneys in account
let depositeCoins = 0   //    Coins for save "every month"
let payday              //   Day of date of general money add.

//  ARRAYS
let addedMoneys = []    //  green values
                        //  always green values - red values
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

//  deposite function CONCEPT
//  THINK ABOUT DO THIS LIKE AN OBJECT FOR GENERAL HISTORY
//  comment: 'save for future', amount: getElem..., color: blue, date: new Date(),
function saveCoins() {
    depositeCoins = Number(document.getElementById('save').value);
    if (depositeCoins === 0 || depositeCoins === "" ||
        depositeCoins === undefined || depositeCoins === null) {
            return 0;
        }
    else {return depositeCoins}
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
    result = sum - minusSum - depositeCoins;
    document.getElementById('yourCurrent').innerHTML = result;
}

//////////////////////////
//  STRONG CODE BLOCK   //
//////////////////////////
function spendPerDay() {
    spendResult = result / 30; // "30" count of days. That must take it from month by automaticly.
    document.getElementById('perDay').innerHTML = spendResult;
}