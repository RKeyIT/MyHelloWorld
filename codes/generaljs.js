//  !!! NEW !!!
//  SELECTORS   //
//          const someButton = document.getElementById('#spendButton');
//  for example... for what?

//  VARIABLES
let currentCoins = 0;   // general moneys in account
let depositeCoins = 0;  //    Coins for save "every month"

//
//  *   Another one strong code moment.
    let payday  =   0;             //   Day of date of general money takes.
    function payDay() {
        payday = Number(document.getElementById('payday').value);
        if (payday > 28) {
            return Error();
        }
        if (payday <= 28) {
            return payday;
        }
    }
//  *   This is basic date.
//  *   Application must take this date installed by user 
//  *   For do all calculate operations based on this day.
//

let nothing = '';       // For clearing forms after pushing button.

//  ARRAYS
let addedMoneys = [];   //  green values
                        //  always green values - red values
let lessedMoneys = [];  //  red values

let depositeMoneys = [];

//  OBJECTS

let coin = {};   //  positive coins
let coinL = {};  //  negative coins

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
    spendPerDay();
    document.getElementById('add').value = '';
    document.getElementById('addedFrom').value = '';
};

//  add new negative coins in array "coinL"
function lessCoins() {
    coinL = {
        comment: document.getElementById('losedFor').value,
        amount: Number(document.getElementById("less").value),
        color: 'red',
        date: new Date(),
    }
    if(coinL.amount === "" || coinL.amount === "0") {return}
    lessedMoneys.push(coinL);
    calculateCurrent();
    spendPerDay();
    document.getElementById('less').value = '';
    document.getElementById('losedFor').value = '';
};

//  deposite function CONCEPT
//  THINK ABOUT DO THIS LIKE AN OBJECT FOR GENERAL HISTORY
//  comment: 'save for future', amount: getElem..., color: blue, date: new Date(),
function saveCoins() {
    depositeCoins = Number(document.getElementById('save').value);
    if (depositeCoins === 0 || depositeCoins === "" ||
        depositeCoins === undefined || depositeCoins === null ||
        depositeCoins === NaN) {
            spendPerDay();
            document.getElementById('save').value = '';
        }
    else {
        depositeMoneys.push(depositeCoins);
        calculateCurrent();
        spendPerDay();
        document.getElementById('save').value = '';
        return depositeCoins;
    }
};

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
    calculateCurrent();
    countOfDays();
    function countOfDays() {
        //EXPERIMENTAL CONSOLE CODE
        dateOne = new Date();
        dateTwo = dateOne.setDate(dateOne.getDate() + 30);
        currentDate = new Date();
        if (dateOne.getDate() === currentDate.getDate()) {
            //	count of days in the current month = 30
            spendResult = result / 30
        }
        if (dateOne.getDate() - 2 === currentDate.getDate()) {
            //	count of days in the current month = 28
            spendResult = result / 28
        }
        if (dateOne.getDate() - 1 === currentDate.getDate()) {
            //	count of days in the current month = 29
            spendResult = result / 29
        }
        if (dateOne.getDate() > currentDate.getDate()) {
            //	count of days in the current month = 31
            spendResult = result / 31
        }
        //DO WITH THAT SOMETHING!
        
            
    };
    // EXPERIMENTAL spendResult
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);      //  ??? Math.round better ???
}
//  INCOMPREHENSIBLE CODE WITH DATES    //
//////////////////////////
//STRONG CODE BLOCK ENDS//
//////////////////////////
