//  ******************************************************
///////////////////////////////////////////////////     **
//  EXPERIMENTAL CODE WITHOUT BASICS KNOWLENDGE  //     **
//  THIS IS ACCEPT ONLY NUMS IN SOME INMPUTS    ///     **
const inputOnlyNums = e => {                     //     **
    const value = e.value;                       //     **
    if (e.value <= 28) {                         //     **
        e.value = value.replace(/\D/g, '');      //     **
    };                                           //     **
}                                                //     **
///////////////////////////////////////////////////     **
//  EXPERIMENTAL CODE WITHOUT BASICS KNOWLENDGE  //     **
///////////////////////////////////////////////////     **
//  ******************************************************

//  VARIABLES
let currentCoins = 0;   // general moneys in account
let depositeCoins = 0;  //    Coins for save

let payday  =  1;             //   Day of date of general money takes.

let spendResult = 0;    //  Installed by function   ...     after calculate dates
let daysInMonth = 0;    //  Installed by function "countOfDays()";
//  daysInMonth is variable for operations next.    For Example: spendPerDay = result / daysInMonth + 1
//  (+ 1 is for last day before payday)

function payDay() {     // SET DATE OF PAYDAY
    let writtenDay = Number(document.getElementById('payday').value);
    if (writtenDay <= 28 && writtenDay > 0) {
        payday = writtenDay;
        document.getElementById('payday').value = '';   // clear input after accept
    }
    else {
        alert('Wrong date. 1st day has been setted.');
        payday = 1;
        document.getElementById('payday').value = '';   //  alert and after - clear input
    }
    document.getElementById('everyPayday').innerHTML = payday;
}


// HERE PLACED CODE BLOCK FOR CLASS 'Coin' AND BOUNDED FUNCTIONS
const MONEYS = []   // array with objects *coin*
let coin;           // always new object from class Coin  
class Coin {        // Class and after this functions for this class
    constructor(){
        this.date = new Date();
    }
    take(){
        this.amount = Number(document.getElementById('add').value),
        this.comment = document.getElementById('addedFrom').value,
        this.color = 'green';
        MONEYS.push(coin)
    }
    spend(){
        this.amount = Number(document.getElementById("less").value),
        this.comment = document.getElementById('losedFor').value,
        this.color = 'red';
        MONEYS.push(coin)
    }
    save(){
        this.amount = Number(document.getElementById('save').value),
        this.comment = document.getElementById('saveFor').value,
        this.color = 'blue';
        MONEYS.push(coin)
    }
}
//Operative functions with this class
function takeCoin() {
    if (
        document.getElementById('add').value === ''
        || document.getElementById('add').value <= 0 
        || document.getElementById('add').value !== Number
        ) {return}
    else {
    coin = new Coin()
    coin.take();
    calculateCurrentMoneys();
    spendPerDay();
    document.getElementById('add').value = '';
    document.getElementById('addedFrom').value = '';
    }
}
function spendCoin() {
    if (document.getElementById('less').value === '' || 
        document.getElementById('less').value !== Number || 
        document.getElementById('less').value <= 0 ) {return}
    else {
    coin = new Coin ()
    coin.spend();
    calculateCurrentMoneys();
    spendPerDay();
    document.getElementById('less').value = '';
    document.getElementById('losedFor').value = '';
    }
}
function saveCoin() {
    if (document.getElementById('save').value === '' ||
        document.getElementById('save').value !== Number || 
        document.getElementById('save').value <= 0 ) {return}
    else {
    coin = new Coin ()
    coin.save();
    calculateCurrentMoneys();
    spendPerDay();
    document.getElementById('save').value = '';
    document.getElementById('saveFor').value = '';
    }
}
function calculateCurrentMoneys() {
    let sum = 0;
    let minusSum = 0;
    let depositeSum = 0;
    for (i = 0; i < MONEYS.length; i++) {
        if(MONEYS[i].color === 'green'){
            sum += MONEYS[i].amount;
        }
        if(MONEYS[i].color === 'red'){
            minusSum += MONEYS[i].amount;
        }
        if(MONEYS[i].color === 'blue'){
            depositeSum += MONEYS[i].amount;
        }
    }
    currentCoins = sum - minusSum - depositeSum;
    document.getElementById('yourCurrent').innerHTML = currentCoins;
}
function spendPerDay() {
    calculateCurrentMoneys();
    countOfDays();
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);
}
// END OF BLOCK WITH CLASS AND BOUNDED FUNCTIONS


// NEXT BLOCK OF CODE IS *DATES* AND BOUNDED FUNCTIONS
function countOfDays() {    //  returns count of days in current month
    let dateOne = new Date();
    let dateTwo = dateOne.setDate(dateOne.getDate() + 30); //   optional variable for save changed dateOne variable
        dateOne = dateOne.getDate();

        //  GLOBAL VARIABLE WILL BE HERE
        currentDayOfDate = new Date();  // GLOBAL VARIABLE WITH CYCLIC CALLS
        currentDayOfDate = currentDayOfDate.getDate();
        //  GLOBAL VARIABLE WAS HERE

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
        spendResult = currentCoins / (paydayInNextMonth + 1);
        document.getElementById('leftToPayday').innerHTML = paydayInNextMonth;
    };
    if (payday === currentDayOfDate) {  //  for payday = 15; current = 15;
        spendResult = currentCoins;
        document.getElementById('leftToPayday').innerHTML = 0;
    };
}
// END OF BLOCK WITH DATES AND BOUNDED FUNCTIONS


