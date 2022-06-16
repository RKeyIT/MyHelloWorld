//  VARIABLES
let currentCoins = 0;   // general moneys in account
let depositeCoins = 0;  //    Coins for save "every month"
let GENERALDATE = new Date()    //  may be will needs later

let result = 0;         //  result of calculating by func's
//
//  *   Another one strong code moment.
//  *   REPLACE THIS ALL OUT FROM HERE
    let payday  =  1;             //   Day of date of general money takes.
    function payDay() {     // EXPERIMENTAL DATE OF PAYDAY
        writtenDay = Number(document.getElementById('payday').value)
        if (writtenDay <= 28 && writtenDay > 0) {
            payday = writtenDay;
            document.getElementById('payday').value = '';   // clear input after accept
        }
        else {
            document.getElementById('payday').value = 'Wrong date. Setting first day of month.';
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
    calculateCurrentMoneys();
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
    spendedMoneys.push(spendedCoin);
    calculateCurrentMoneys();
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
        calculateCurrentMoneys();
        spendPerDay();
        document.getElementById('save').value = '';
        return depositeCoins;
    }
};

function calculateCurrentMoneys() {
    //some code
    let sum = 0;
    let minusSum = 0;
    for (i = 0; i < addedMoneys.length; i++) {
        sum += addedMoneys[i].amount;
    }
    for (i = 0; i < spendedMoneys.length; i++) {
        minusSum += spendedMoneys[i].amount;
    }
    currentCoins = sum - minusSum - depositeCoins;
    document.getElementById('yourCurrent').innerHTML = currentCoins;
}

//////////////////////////
//  STRONG CODE BLOCK   //
//////////////////////////
function spendPerDay() {
    calculateCurrentMoneys();
    countOfDays();
    // EXPERIMENTAL spendResult
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);      //  ??? Math.round better ???
}




let spendResult = 0;    //  Installed by function   ...     after calculate dates
let daysInMonth = 0;    //  Installed by function "countOfDays()";
//  daysInMonth is variable for operations next.    For Example: spendPerDay = result / daysInMonth + 1
//  (+ 1 is for last day before payday)

function countOfDays() {    //  returns count of days in current month
    let dateOne = new Date();
    let dateTwo = dateOne.setDate(dateOne.getDate() + 30); //   optional variable for save changed dateOne variable
        dateOne = dateOne.getDate();

        //  GLOBAL VARIABLE WILL BE HERE
        currentDayOfDate = new Date();  // GLOBAL VARIABLE WITH CYCLIC CALLS
        currentDayOfDate = currentDayOfDate.getDate();
        //  GLOBAL VARIABLE WAS HERE
    /*  END OF VARIABLES    */
    if (currentDayOfDate === dateOne){
        daysInMonth = 30
    };
    if (currentDayOfDate === dateOne + 1){
        daysInMonth = 31
    };
    if (currentDayOfDate === dateOne - 2){
        daysInMonth = 28
    }; 
    if (currentDayOfDate === dateOne - 1){
        daysInMonth = 29
    };  
    daysLeftToPayday();
};
    // ***    BOUNDED FUNCTIONS    ***
function daysLeftToPayday(){            //  returns count of days before payday
    let paydayInThisMonth = payday - currentDayOfDate;                  //count of days if payday > currentDayOfDate
    let paydayInNextMonth = daysInMonth - currentDayOfDate + payday;    //count of days if payday < currentDayOfDate

    if (payday > currentDayOfDate) {    //  for payday = 15; current = 12;
        spendResult = currentCoins / (paydayInThisMonth + 1);
        document.getElementById('leftToPayday').innerHTML = paydayInThisMonth;
    };
    if (payday < currentDayOfDate) {    //  for payday = 12; current = 15;
        spendResult = currentCoins / (paydayInThisMonth + 1);
        document.getElementById('leftToPayday').innerHTML = paydayInNextMonth;
    };
    if (payday === currentDayOfDate) {  //  for payday = 15; current = 15;
        spendResult = currentCoins;
        document.getElementById('leftToPayday').innerHTML = 0;
    };
}

//      One of troubles: 
//          This code have wrong equal dates if months haves different count of days.
//
//      That's can be like that in this stage. Needs update later.
//      
//
//
//      List of answers for this functions:
//          1)  That's must calculate with monthes with same count of dates.
//          2)  That's must calculate with monthes with different count of dates.
//          3)  Good returns by function equalDates()
//          4)  








//  INCOMPREHENSIBLE CODE WITH DATES    //
//////////////////////////
//STRONG CODE BLOCK ENDS//
//////////////////////////

