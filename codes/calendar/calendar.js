let generalDate = new Date()
let currentYear = generalDate.getFullYear(); 
let currentMonth = generalDate.getMonth();
let currentTime = new Date(currentYear, currentMonth, 1);   //  variable for write "first date" is when i begining this code


let formatedDate    // variable for show current formate of date
let currentDayOfDate = new Date().getDate();  // current date of date
let daysInMonth;                // count of days in current month
let firstDayOfCurrentMonth;     // monday or friday today?





formateDate()
countOfDays()                   //  count of days in current month

let dateArray = [0];

fillDateArray()
function fillDateArray() {
    let numberOfDay = 1;
    dateArray.length = 1;
    for(i = 1; i <= daysInMonth; i++){
        dateArray.push(numberOfDay);
        numberOfDay++;
    }
}

dayOfWeek()                     //  monday or friday today?
buildCalendar()                 //  calendar sets



function formateDate() {                //  func for formatedDate  
    // let dd = currentTime.getDate();
    let mm = currentTime.getMonth();
    let yyyy = currentTime.getFullYear();

    // if(dd<10) {
    //     dd = '0'+dd;
    // }

    mm = currentTime.toLocaleString('default', {month: 'long'}).charAt().toUpperCase() +
    currentTime.toLocaleString('default', {month: 'long'}).slice(1); 

    formatedDate = `${mm} ${yyyy}`;
    document.getElementById('fullDate').innerHTML = formatedDate;
};


function countOfDays() {    //  returns count of days in current month
    let dateOne = new Date();
    let dateTwo = dateOne.setDate(dateOne.getDate() + 30); //   optional variable for save changed dateOne variable
        dateOne = dateOne.getDate();

    if (currentTime === dateOne){
        daysInMonth = 30
    };
    if (currentTime === dateOne + 1){
        daysInMonth = 31
    };
    if (currentTime === dateOne - 2){
        daysInMonth = 28
    }; 
    if (currentTime === dateOne - 1){
        daysInMonth = 29
    };  
}
function dayOfWeek() {      // what is the day of week of current or new Month? Friday?
    let date1 = currentTime.getFullYear();
    let date2 = currentTime.getMonth();
    firstDayOfCurrentMonth = new Date(date1, date2, 1)
}

function buildCalendar() {
    eq = 1;
    for(i = 1; i < dateArray.length; i++){
        let numOfDay = 'd'+(firstDayOfCurrentMonth.getDay() - 1 + i)
        document.getElementById(numOfDay).innerHTML = i;
        eq++
    };

    let date0 = new Date();
    let date1 = new Date(date0.getFullYear(), date0.getMonth(), 0);
    let prevMonthShadow = date1.getDate();    
    for(i = firstDayOfCurrentMonth.getDay(); i > 1; i--) {
        let numOfDay = 'd'+(i - 1);
        document.getElementById(numOfDay).innerHTML = prevMonthShadow--;
        eq++
    }
    let nextMonthShadow = 1
    for(i = eq; i <= 35; i++) {
        document.getElementById('d'+i).innerHTML = nextMonthShadow++;
    }
    //build from firstDayPoint
}


function generatePrevMonth() {
    currentMonth--;
    currentTime = new Date(currentYear, currentMonth, 1)
    formateDate();
    countOfDays();
    dayOfWeek();
    fillDateArray();
    buildCalendar()
}
function generateNextMonth() {
    currentMonth++;
    currentTime = new Date(currentYear, currentMonth, 1)
    formateDate();
    countOfDays();
    dayOfWeek();
    fillDateArray();
    buildCalendar()
}

/*
FOR THIS CODE NEEDS:
    1) generalDate variable
    2) changeble variable with date for any fucns
    3) Each func can update changeble variable date


*/