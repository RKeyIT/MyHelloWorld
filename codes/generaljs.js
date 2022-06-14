//  !!! NEW !!!
//  SELECTORS   //
//          const someButton = document.getElementById('#spendButton');
//  for example... for what?

//  VARIABLES
let currentCoins = 0;   // general moneys in account
let depositeCoins = 0;  //    Coins for save "every month"

//
//  *   Another one strong code moment.
//  *   REPLACE THIS ALL OUT FROM HERE
    let payday  =  1;             //   Day of date of general money takes.
    function payDay() {     // EXPERIMENTAL DATE OF PAYDAY
        if (payday > 28) {
            document.getElementById('payday').innerHTML = 'Wrong date. Set day < 28';
        }
        if (payday <= 28) {
            payday = Number(document.getElementById('payday').value)
            document.getElementById('payday').value = '';
        }
    }
//  ******************************************************
///////////////////////////////////////////////////     **
//  EXPERIMENTAL CODE WITHOUT BASICS KNOWLENDGE  //     **
///////////////////////////////////////////////////     **
const inputOnlyNums = e => {                     //     **
    const value = e.value;                       //     **
    if (e.value <= 28) {
        e.value = value.replace(/\D/g, '');
    };
}                                                //     **
///////////////////////////////////////////////////     **
//  EXPERIMENTAL CODE WITHOUT BASICS KNOWLENDGE  //     **
///////////////////////////////////////////////////     **
//  ******************************************************

//  *   This is basic date.
//  *   Application must take this date installed by user 
//  *   For do all calculate operations based on this day.
//

//  ARRAYS
let addedMoneys = [];   //  green values
                        //  always green values - red values
let spendedMoneys = [];  //  red values

let depositeMoneys = [];//  blue values (array for save saved coins)

//  OBJECTS

let addedCoin = {};   //  positive coins
let spendedCoin = {};  //  negative coins

//  OPERATIONS
//  add new positive coins in array "addedCoin"
function addCoins() {
    addedCoin = {
        comment: document.getElementById('addedFrom').value,
        amount: Number(document.getElementById('add').value),
        color: 'green',
        date: new Date(),
    }
    if(addedCoin.amount === '' || addedCoin.amount === 0) {return 0}
    addedMoneys.push(addedCoin);
    calculateCurrent();
    spendPerDay();
    document.getElementById('add').value = '';
    document.getElementById('addedFrom').value = '';
};

//  add new negative coins in array "spendedCoin"
function spendCoins() {
    spendedCoin = {
        comment: document.getElementById('losedFor').value,
        amount: Number(document.getElementById("less").value),
        color: 'red',
        date: new Date(),
    }
    if(spendedCoin.amount === '' || spendedCoin.amount === 0) {return 0}
    spendeddMoneys.push(spendedCoin);
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
    if (depositeCoins === 0 || depositeCoins === '' ||
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
    for (i = 0; i < spendedMoneys.length; i++) {
        minusSum += spendedMoneys[i].amount;
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
    // EXPERIMENTAL spendResult
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);      //  ??? Math.round better ???
}












//                                  REWORK THIS |
//                                              |
//                                             \|/


//
//
//          1. Can't devide with 0  !!!
//          2. We can re-change from 0 by 1
//
//
//


function countOfDays() {
    //EXPERIMENTAL CONSOLE CODE
    dateOne = new Date();
    dateTwo = dateOne.setDate(dateOne.getDate() + 30);
    currentDate = new Date();
    resultBeforeDay = currentDate.getDate() + payday;
    resultAfterDay = Math.abs(currentDate.getDate() - payday);    
    //DO WITH THAT SOMETHING!
    if (payday >= currentDate.getDate()) {
        afterDate();
    } else {
        beforeDate();
    }
};

function beforeDate() {  // payday = 7 ; currentDate = 15
    if (dateOne.getDate() === currentDate.getDate()) {
        //	count of days in the current month = 30
        daysLeft = 30 - resultBeforeDay
        spendResult = result / daysLeft
        document.getElementById('leftToPayday').innerHTML = 30 - resultBeforeDay;
    }
    if (dateOne.getDate() - 2 === currentDate.getDate()) {
        //	count of days in the current month = 28
        spendResult = result / (28 - currentDate.getDate() + payday)
        document.getElementById('leftToPayday').innerHTML = 28 - resultBeforeDay;
    }
    if (dateOne.getDate() - 1 === currentDate.getDate()) {
        //	count of days in the current month = 29
        spendResult = result / (29 - currentDate.getDate() + payday)
        document.getElementById('leftToPayday').innerHTML = 29 - resultBeforeDay;
    }
    if (dateOne.getDate() > currentDate.getDate()) {
        //	count of days in the current month = 31
        spendResult = result / (31 - currentDate.getDate() + payday)
        document.getElementById('leftToPayday').innerHTML = 31 - resultBeforeDay;
    }
}

function afterDate() {  // payday = 20 ; currentDate = 10
    if (dateOne.getDate() === currentDate.getDate()) {
        //	count of days in the current month = 30
        spendResult = result / (30 - currentDate.getDate() - payday)
        document.getElementById('leftToPayday').innerHTML = resultAfterDay;
    }
    if (dateOne.getDate() - 2 === currentDate.getDate()) {
        //	count of days in the current month = 28
        spendResult = result / (28 - currentDate.getDate() - payday)
        document.getElementById('leftToPayday').innerHTML = resultAfterDay - 2;
    }
    if (dateOne.getDate() - 1 === currentDate.getDate()) {
        //	count of days in the current month = 29
        spendResult = result / (29 - currentDate.getDate() - payday)
        document.getElementById('leftToPayday').innerHTML = resultAfterDay - 1;
    }
    if (dateOne.getDate() > currentDate.getDate()) {
        //	count of days in the current month = 31
        spendResult = result / (31 - currentDate.getDate() - payday)
        document.getElementById('leftToPayday').innerHTML = 1 + resultAfterDay;
    }
}

















//  INCOMPREHENSIBLE CODE WITH DATES    //
//////////////////////////
//STRONG CODE BLOCK ENDS//
//////////////////////////

