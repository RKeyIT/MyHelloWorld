
/*****************STARTS OF CALENDAR APP*******************/
/*****************STARTS OF CALENDAR APP*******************/
/*****************STARTS OF CALENDAR APP*******************/

// DEBUGGING COIN OBJECT START
// coin = {}
// coin.date = new Date();
// coin.amount = '100';
// coin.color = 'green';
// coin.comment = 'checker'
// MONEYS.push(coin)
// DEBUGGING COIN OBJECT END


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

function showObjects() {
    for(i = 0; i < MONEYS.length; i++){
        if(MONEYS[i].date.setHours(0,0,0,0) === chosenDate.setHours(0,0,0,0)) {
            document.getElementById('amount').innerHTML = MONEYS[i].amount
        }
    }
}
let chosenDate
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
    if(chosenDate.getMonth() < 10) {
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
    showObjects()
}

showToday();
function showToday() {  //TAKE idOfDay NUMBER FROM buildCalendar() where is need this!!!
    for(i = 1; i < 43; i++) {
        index = 'd'+i;
        if(document.getElementById(index).classList.contains('today') == true){
            document.getElementById(index).classList.remove('today')
        }
        if(document.getElementById(index).innerHTML == generalDate.getDate() &&
        !document.getElementById(index).classList.contains('shadowDay') === true &&
        month == generalDate.getMonth()) {
            document.getElementById(index).classList.add('today')
        }
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

    // CYCLE FOR SHOW ALL OPERATIONS
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
                document.getElementById('amount').innerHTML = MONEYS[i].amount
                let hours = MONEYS[i].date.getHours();
                if(hours < 10) {hours = '0' + hours};
                let minutes = MONEYS[i].date.getMinutes();
                if(minutes < 10) {minutes = '0' + minutes};
                document.getElementById('time').innerHTML = '' + 
                                                            hours + ':' +
                                                            minutes;
                document.getElementById('comment').innerHTML = MONEYS[i].comment
            }
            i++
        } else {
            document.getElementById('note1').innerHTML = 'Has no money operations in this day'
        }
    }
    while(i < MONEYS.length)
    
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
        if(dayOfWeek === 0) {
            dayOfWeek = 7
            idOfDay = 'd' + dayOfWeek;
        } else {
            idOfDay = 'd' + dayOfWeek;
        };
        dayOfWeek++
        document.getElementById(idOfDay).innerHTML = i;
        document.getElementById(idOfDay).classList.remove('shadowDay')
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
/****************END OF CALENDAR APP*************************/
/****************END OF CALENDAR APP*************************/
/****************END OF CALENDAR APP*************************/

/*****************STARTS OF GENERAL JS***********************/
/*****************STARTS OF GENERAL JS***********************/
/*****************STARTS OF GENERAL JS***********************/
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
    calculateCurrentMoneys();
    spendPerDay();
}


// HERE PLACED CODE BLOCK FOR CLASS 'Coin' AND BOUNDED FUNCTIONS
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
    if (document.getElementById('less').value === '' || 
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
    daysLeftToPayday();
    document.getElementById('perDay').innerHTML = Math.floor(spendResult);
}
// END OF BLOCK WITH CLASS AND BOUNDED FUNCTIONS


// NEXT BLOCK OF CODE IS *DATES* AND BOUNDED FUNCTIONS
/*function countOfDays() {    //  returns count of days in current month
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
};*/
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
/*****************ENDS OF GENERAL JS****************/
/*****************ENDS OF GENERAL JS****************/
/*****************ENDS OF GENERAL JS****************/



