/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/

let num = 0; //test num for fill test


const generalDate = new Date();   // this date will be used for building calendar from start page.
const dailyOperations = []  // this array needs for copying MONEYS array but only for chosen date
const MONEYS = []   // array with objects *coin*

let year    = generalDate.getFullYear();    // this variable will be used for setting new dates into calendar
let month = generalDate.getMonth();         // this variable will be used for setting new dates into calendar
let day = generalDate.getDate();            // this variable will be used for setting new dates into calendar

let currentTime = new Date(year, month, 1)  // sets short date for next works with calendar
let dayOfWeek       // this variable needs to build calendar from correct day of week
let daysInMonth     // this variable will save count of days into used month now
let idOfDay                     // this is the day of week. From this day will be create any month of calendar

let currentCoins = 0;   // general moneys in account
let payday  =  1;             //   Day of date of general money takes.
let spendResult = 0;    //  Installed by function   ...     after calculate dates

let coin;           // always new object from class Coin

/*******************/
let colorizeDays = '';
let greenCoins = 0;
let redCoins = 0;
let blueCoins = 0;
/*******************/


/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/
/***************************        VARIABLES       ***********************/



/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/


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
            document.getElementById('add').value === '' || 
            Number(document.getElementById('add').value) !== 
            Number(document.getElementById('add').value) || 
            document.getElementById('add').value <= 0
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
        if (
            document.getElementById('less').value === '' || 
            Number(document.getElementById('less').value) !== 
            Number(document.getElementById('less').value) || 
            document.getElementById('less').value <= 0
            ) {return}
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
        if (
            document.getElementById('save').value === '' || 
            Number(document.getElementById('save').value) !== 
            Number(document.getElementById('save').value) || 
            document.getElementById('save').value <= 0
            ) {return}
        else {
        coin = new Coin ()
        coin.save();
        calculateCurrentMoneys();
        spendPerDay();
        document.getElementById('save').value = '';
        document.getElementById('saveFor').value = '';
        }
    }


/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/
/***************************        CLASSES AND METHODS       ***********************/



/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/


function payDay() {     // SET DATE OF PAYDAY
    let writtenDay = Number(document.getElementById('payday').value);
    if (writtenDay <= 28 && writtenDay > 0) {
        payday = writtenDay;
    }
    else {
        alert('Wrong date. 1st day has been setted.');
        payday = 1;
    }
    document.getElementById('payday').value = '';   // clear input after accept
    document.getElementById('everyPayday').innerHTML = payday;
    calculateCurrentMoneys();
    spendPerDay();
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
    daysLeftToPayday();
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);
}
// END OF BLOCK WITH CLASS AND BOUNDED FUNCTIONS


// NEXT BLOCK OF CODE IS *DATES* AND BOUNDED FUNCTIONS
    // ***    BOUNDED FUNCTIONS    ***
function daysLeftToPayday(){            //  returns count of days before payday
    let paydayInThisMonth = payday - day;                  //count of days if payday > currentDayOfDate
    let paydayInNextMonth = daysInMonth - day + payday;    //count of days if payday < currentDayOfDate
    if (payday > day) {    //  for payday = 15; current = 12;
        spendResult = currentCoins / (paydayInThisMonth + 1);
        document.getElementById('leftToPayday').innerHTML = paydayInThisMonth;
    };
    if (payday < day) {    //  for payday = 12; current = 15;
        spendResult = currentCoins / (paydayInNextMonth + 1);
        document.getElementById('leftToPayday').innerHTML = paydayInNextMonth;
    };
    if (payday === day) {  //  for payday = 15; current = 15;
        spendResult = currentCoins;
        document.getElementById('leftToPayday').innerHTML = 0;
    };
}



/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/
/******************        GENERAL APP FUNCTIONS (CALCULATOR)       ******************/










/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/


let coler
function randomNum(max) {
    return Math.floor(Math.random() * max)
}

let minDate = new Date(2022, 0, 1).getTime();    //dates for test
let maxDate = new Date(2023, 0, 1).getTime();    //dates for test
testFill()
function testFill() {
for (i = 0; i < 1000; i++) {
    coler = randomNum(3);
    if (coler == 0) {coler = 'green'};
    if (coler == 1) {coler = 'red'} ;
    if (coler == 2) {coler = 'blue'};
    
    

    let coina = new Coin();
        if(coler == 'green'){
            coina.amount = Math.floor(Math.random()*300);
        } else {
            coina.amount = Math.floor(Math.random()*100);
        }
        coina.date = new Date(Math.floor(Math.random()*(maxDate - minDate) + minDate));
        coina.color = coler;
        coina.comment = 'test';
    
    MONEYS.push(coina);
}
for (i = 0; i < MONEYS.length; i++){
    if(MONEYS[i].date.getDate() == 13 &&
        MONEYS[i].date.getMonth() == 6) {
            console.log(MONEYS[i], i)
        }
    }
}




// cycle cycle cycle

    // function searchRepeatDays() {
    //     let j = 0;
    //     while(j < usedDates.length) {
    //         if(usedDates[j].date.getDate() == MONEYS[i].date.getDate() &&
    //         usedDates[j].date.getMonth() == MONEYS[i].date.getMonth() &&
    //         usedDates[j].date.getFullYear() == MONEYS[i].date.getFullYear()) {
                
    //         }

    //         j++
    //     }
    // }




/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/
/************************        AUTOTESTS AND FILLING       ************************/












/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/


/******************CALENDAR AUTOSTART*********************/
autoStart()
function autoStart(){
    showDate();
    countOfDays();
    fDayOfWeek();
    buildCalendar();
    showToday();
};
/******************CALENDAR AUTOSTART*********************/

// function showObjects() {
//     for(i = 0; i < MONEYS.length; i++){
//         if(MONEYS[i].date.setHours(0,0,0,0) === chosenDate.setHours(0,0,0,0)) {
//             document.getElementById('amount').innerHTML = MONEYS[i].amount
//         }
//     }
// }
let chosenDate
function dayHistoryFromStart() {
    let iD = document.getElementsByClassName('today');
    for (i = 0; i <= iD.length; i++){
        return iD = iD[i].id
    }
}
chosenDayHistory(dayHistoryFromStart())
function chosenDayHistory(id) {
    if(document.getElementById(id).classList.contains('shadowDay')){
        return;
    }
    let dd = document.getElementById(id).innerHTML;
    // ID sets
    chosenDate = new Date(year, month, dd);
    let formatedDate = '';
    if(chosenDate.getDate() < 10) {
        formatedDate = '0' + chosenDate.getDate()
    } else {
        formatedDate = chosenDate.getDate()
    }
    if(chosenDate.getMonth() < 9) {
        formatedDate += '.0' + (chosenDate.getMonth() + 1);
    } else {
        formatedDate += '.' + (chosenDate.getMonth() + 1);
    }
    formatedDate += '.' + chosenDate.getFullYear();
    document.getElementById('chosenDate').innerHTML = formatedDate
    for(i=1; i < 43; i++) {
        if(document.getElementById('d'+i).classList.contains('chosenDay') == true) {
        document.getElementById('d'+i).classList.remove('chosenDay')
        }
        if(document.getElementById('d'+i).innerHTML == dd &&
        !document.getElementById('d'+i).classList.contains('shadowDay')) {
            document.getElementById('d'+i).classList.add('chosenDay')
        }
    }
    // show objects Coin
    // showObjects()
}

showOperations()            // CODE FOR REVIEW OR DELETE
function showOperations() {
    if (MONEYS.length = 0) {
        document.getElementById('note1').innerHTML = 'Has no money operations in this day'
    } else {
    do{
        let i = 0
        if(MONEYS.length > 0) {
            if(MONEYS[i].date.getDate() === generalDate.getDate() &&
                MONEYS[i].date.getMonth() === generalDate.getMonth() &&
                MONEYS[i].date.getFullYear() ===generalDate.getFullYear()) {
                if(MONEYS[i].color === 'green'){
                document.getElementById('symbol').innerHTML = '+'
                } else {
                    document.getElementById('symbol').innerHTML = '-'
                }
                    let hours = MONEYS[i].date.getHours();
                    let minutes = MONEYS[i].date.getMinutes();
                    if(hours < 10) {hours = '0' + hours};
                    if(minutes < 10) {minutes = '0' + minutes};
                document.getElementById('amount').innerHTML = MONEYS[i].amount
                document.getElementById('time').innerHTML = hours + ':' + minutes;
                document.getElementById('comment').innerHTML = MONEYS[i].comment
            }
            i++
        } else {
            document.getElementById('symbol').innerHTML = '';
            document.getElementById('amount').innerHTML = '';
            document.getElementById('time').innerHTML = '';
            document.getElementById('comment').innerHTML = '';

            document.getElementById('note1').innerHTML = 'Has no money operations in this day'
        }
    }
    while(i < MONEYS.length)
}
}               // END OF CODE UNDER QUESTION

showToday();
function showToday() {  //TAKE idOfDay NUMBER FROM buildCalendar() where is need this!!!
    for(i = 1; i < 43; i++) {
        idOfDay = 'd'+i;
        if(document.getElementById(idOfDay).classList.contains('today') == true){
            document.getElementById(idOfDay).classList.remove('today')
        }
        if(document.getElementById(idOfDay).innerHTML == generalDate.getDate() &&
        !document.getElementById(idOfDay).classList.contains('shadowDay') === true &&
        month == generalDate.getMonth()) {
            document.getElementById(idOfDay).classList.add('today')
        }
        
        // SHOW INFO ABOUT CURRENT DAY INTO operationsWindow

    //  SHOW OPERATIONS BY CURRENT DAY
    let formatedDate = '';
    if(generalDate.getDate() < 10) {
        formatedDate = '0' + generalDate.getDate()
    } else {
        formatedDate = generalDate.getDate()
    }
    if(generalDate.getMonth() < 10) {
        formatedDate += '.0' + (generalDate.getMonth() + 1);
    } else {
        formatedDate += '.' + (generalDate.getMonth() + 1);
    }
    formatedDate += '.' + generalDate.getFullYear();
    document.getElementById('chosenDate').innerHTML = formatedDate;
}
}

function showDate() {
    let mm = currentTime.toLocaleString('default', {month: 'long'}).charAt().toUpperCase() + 
        currentTime.toLocaleString('default', {month: 'long'}).slice(1);
    let yyyy = currentTime.getFullYear();
    let showingDate = mm + ' ' + yyyy;
    document.getElementById('fullDate').innerHTML = showingDate;
    }


function countOfDays() {    //  returns count of days in current month
    daysInMonth = new Date(year, month + 1, 0).getDate()
}

function fDayOfWeek() {
    dayOfWeek = currentTime.getDay()    // 0 1 2 3 4 5 6
}

function nextMonth(){
    currentTime = new Date(year, ++month, 1);
    autoStart();
}

function prevMonth(){
    currentTime = new Date(year, --month, 1)
    autoStart();
}

function nextDay(){
    let dada = document.getElementsByClassName('chosenDay')
        dada = dada[0].id
        dada = dada.match(/\d+/)
        dada = 'd' + (Number(dada[0]) + 1)

        if(dada == 'd43' || document.getElementById(dada).classList.contains('shadowDay')){
            nextMonth()
            for(i = 1; i <= 42; i++) {
                if(!document.getElementById('d' + i).classList.contains('shadowDay') == true) {
                    dada = 'd' + i;
                    break
                }
            }
            document.getElementById(dada).classList.add('chosenDay')
            
        }
        chosenDayHistory(dada)
}
function prevDay(){
    let dada = document.getElementsByClassName('chosenDay')
        dada = dada[0].id
        dada = dada.match(/\d+/)
        dada = 'd' + (Number(dada[0]) - 1)

        if(dada == 'd0' || document.getElementById(dada).classList.contains('shadowDay')){
            prevMonth()
            for(i = 42; i >= 1; i--) {
                if(!document.getElementById('d' + i).classList.contains('shadowDay') == true) {
                    dada = 'd' + i;
                    break
                }
            }
            document.getElementById(dada).classList.add('chosenDay')
        }
        chosenDayHistory(dada)
}

/****************TEST FUNCTIONS FOR COLORISING**************/
// let colorizeDays = '';
// let greenCoins = 0;
// let redCoins = 0;
// let blueCoins = 0;


function fillDay() {
for (j = 0; j < MONEYS.length; j++) {
    console.log(num)
    if (MONEYS[j].date.getDate() == 16 &&
        MONEYS[j].date.getMonth() == ++month) {
        dailyOperations.push(MONEYS[j])
        console.log(j)
    }
    }
}
// for (i = 0; i < dailyOperations.length; i++) { 
//     if (dailyOperations[i].color == 'green') {
//         greenCoins += dailyOperations[i].amount
//     }
//     if (dailyOperations[i].color == 'red') {
//         redCoins += dailyOperations[i].amount
//     }
//     if (dailyOperations[i].color == 'blue') {
//         blueCoins += dailyOperations[i].amount
//     }
// }
// }

// function colorizeDay() {
//     // Cycle must to know what a day for it works.
//     // 1. Date -> dailyOperations[]
//     // 2. dailyOperations -> color
//     // 3. Recycle

//         if(greenCoins > blueCoins + redCoins &&
//             greenCoins > redCoins && greenCoins > blueCoins) {
//                 colorizeDays = 'cGreen'
//             }

//         if(redCoins > greenCoins + blueCoins &&
//         redCoins > greenCoins && redCoins > blueCoins) {
//             colorizeDays = 'cRed'
//         }
//         if(blueCoins > greenCoins + redCoins &&
//             blueCoins > greenCoins && blueCoins > redCoins) {
//                 colorizeDays = 'cBlue'
//             }

//     if (colorizeDays == '') {colorizeDays = 'cRedBlue'}
//     console.log(colorizeDays)
// }
/****************TEST FUNCTIONS FOR COLORISING**************/






function buildCalendar() {

/*****************PREV MONTH SHADOW**************************/
    daysInMonth = new Date(year, month, 0).getDate()
    dayOfWeek   = new Date(year, month, 0).getDay()
    for(i = daysInMonth; dayOfWeek > 0; i--) {
        idOfDay = 'd' + dayOfWeek--;
        document.getElementById(idOfDay).innerHTML = i;
        document.getElementById(idOfDay).classList.add('shadowDay')
    }
/*****************PREV MONTH SHADOW**************************/

/*****************CURRENT MONTH NORMAL**************************/
    daysInMonth = new Date(year, month + 1, 0).getDate()
    dayOfWeek   = new Date(year, month, 1).getDay()
    
    for(i = 1; i <= daysInMonth; i++) {
        num = i;
        if(dayOfWeek === 0) {
            dayOfWeek = 7
            idOfDay = 'd' + dayOfWeek;
        } else {
            idOfDay = 'd' + dayOfWeek;
        };
        dayOfWeek++
        document.getElementById(idOfDay).innerHTML = i;
        document.getElementById(idOfDay).classList.remove('shadowDay')
        fillDay()
        // colorizeDay()
        // document.getElementById(idOfDay).classList.add(colorizeDays)
    }
/*****************CURRENT MONTH NORMAL**************************/

/*****************NEXT MONTH SHADOW**************************/
    let nextMonthShadow = dayOfWeek;
    let shadowNumber = 1
    for(i = nextMonthShadow; i < 43; i++) {
        idOfDay = 'd' + nextMonthShadow++;
        document.getElementById(idOfDay).innerHTML = shadowNumber++;
        document.getElementById(idOfDay).classList.add('shadowDay')
    }
/*****************NEXT MONTH SHADOW**************************/
}


/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/
/**********************        MICROSERVICE CALENDAR APP       **********************/




