//  !!! NEW !!!
//  SELECTORS   //
//          const someButton = document.getElementById('#spendButton');
//  for example... for what?

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
        amount: Number(document.getElementById('add').value),
        color: 'green',
        date: new Date(),
    }
    if(coin.amount === "" || coin.amount === "0") {return}
    addedMoneys.push(coin);
    calculateCurrent();
    document.getElementById('add').innerHTML = ''; // DIDNT WORK
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
    calculateCurrent()
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
    else {
        calculateCurrent()
        return depositeCoins
    }
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


function defaultCountOfForm() {
    document.getElementById().innerHTML = ''
}

//////////////////////////
//  STRONG CODE BLOCK   //
//////////////////////////
function spendPerDay() {
    calculateCurrent()
    function countOfDays() {
        currentDate = new Date()
        //EXPERIMENTAL CONSOLE CODE
        //
        //date = new Date();
        //firstDay = date.getDate() - (date.getDate() - 1)
        //month = date.getMonth();
        //year = date.getYear();
        //nextMonth = new Date(year, month, firstDay)
        //
        //DO WITH THAT SOMETHING!
        if (monthOfYear.getMonth() )
            
    }
    // EXPERIMENTAL spendResult
    spendResult = result / 30; // "30" count of days. That must take it from month by automaticly.
    // EXPERIMENTAL spendResult
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);      //  ??? Math.round better ???
}
//  INCOMPREHENSIBLE CODE WITH DATES    //
