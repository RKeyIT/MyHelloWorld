//  Calendar programm

let generalDate = new Date();   // this date will be used for building calendar from start page.

let year    = generalDate.getFullYear();    // this variable will be used for setting new dates into calendar
let month = generalDate.getMonth();         // this variable will be used for setting new dates into calendar
let day = generalDate.getDate();            // this variable will be used for setting new dates into calendar

let currentTime = new Date(year, month, 1)  // sets short date for next works with calendar

let showedDate      // this date will be show Month and Year used now
let dayOfWeek       // this variable needs to build calendar from correct day of week
let daysInMonth     // this variable will save count of days into used month now

const dateArray = []    // this array will save count of days and create days into calendar

/******************CALENDAR AUTOSTART*********************/
autoStart()
function autoStart(){
    showDate();
    countOfDays();
    fDayOfWeek();
    buildCalendar();
};
/******************CALENDAR AUTOSTART*********************/

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
    currentTime = new Date(year, ++month, 1)
    autoStart()
}

function prevMonth(){
    currentTime = new Date(year, --month, 1)
    autoStart()
}




function buildCalendar() {
    let idOfDay                     // this is the day of week. From this day will be create any month of calendar

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
/****************END OF CALENDAR APP***************************/