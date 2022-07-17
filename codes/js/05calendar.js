/*****************STARTS OF CALENDAR APP*******************/
/*****************STARTS OF CALENDAR APP*******************/
/*****************STARTS OF CALENDAR APP*******************/


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


function fillDay() {
for (j = 0; j < MONEYS.length; j++) {
    dailyOperations.length = 0;
    if (MONEYS[j].date.getDate() == num &&
        MONEYS[j].date.getMonth() == month) {
        dailyOperations.push(MONEYS[j])
    }
    for (k = 0; k < dailyOperations.length; k++) { 
        if (dailyOperations[k].color == 'green') {
            greenCoins += dailyOperations[k].amount
        }
        if (dailyOperations[k].color == 'red') {
            redCoins += dailyOperations[k].amount
        }
        if (dailyOperations[k].color == 'blue') {
            blueCoins += dailyOperations[k].amount
        }
    }
    colorizeDay()
    }
}

function colorizeDay() {
    // Cycle must to know what a day for it works.
    // 1. Date -> dailyOperations[]
    // 2. dailyOperations -> color
    // 3. Recycle
    if(greenCoins == 0 && redCoins == 0 && blueCoins == 0) {return}
    if(greenCoins > redCoins && greenCoins > blueCoins) {
        colorizeDays = 'cGreen'
    }
    if(redCoins > greenCoins && redCoins > blueCoins) {
        colorizeDays = 'cRed'
    }
    if(blueCoins > greenCoins && blueCoins > redCoins) {
        colorizeDays = 'cBlue'
    }


        // if(greenCoins > blueCoins + redCoins &&
        //     greenCoins > redCoins && greenCoins > blueCoins) {
        //         colorizeDays = 'cGreen'
        //     }

        // if(redCoins > greenCoins + blueCoins &&
        // redCoins > greenCoins && redCoins > blueCoins) {
        //     colorizeDays = 'cRed'
        // }
        // if(blueCoins > greenCoins + redCoins &&
        //     blueCoins > greenCoins && blueCoins > redCoins) {
        //         colorizeDays = 'cBlue'
        //     }

    if (colorizeDays == '') {colorizeDays = 'cRedBlue'}
    document.getElementById(idOfDay).classList.add(colorizeDays)
}
/****************TEST FUNCTIONS FOR COLORISING**************/






function buildCalendar() {
    //clear coloriseDays
    for(i = 1; i < 43; i++) {
        let dayId = 'd' + i;
    if(
        document.getElementById(dayId).classList.contains('cGreen') ||
        document.getElementById(dayId).classList.contains('cRed') ||
        document.getElementById(dayId).classList.contains('cBlue') ||
        document.getElementById(dayId).classList.contains('cRedBlue')
        ){
            document.getElementById(dayId).classList.remove('cGreen')
            document.getElementById(dayId).classList.remove('cRed')
            document.getElementById(dayId).classList.remove('cBlue')
            document.getElementById(dayId).classList.remove('cRedBlue')
        }
    }
    //clear coloriseDays



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
        num = i
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
