let pastTime = new Date(2022, 5, 1);   //  variable for write "first date" is when i begining this code
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
    for(i = 1; i <= daysInMonth; i++){
        dateArray.push(numberOfDay);
        numberOfDay++;
    }
}

dayOfWeek()                     //  monday or friday today?
buildCalendar()                 //  calendar sets



function formateDate() {                //  func for formatedDate  
    let dd = pastTime.getDate();
    let mm = pastTime.getMonth();
    let yyyy = pastTime.getFullYear();

    if(dd<10) {
        dd = '0'+dd;
    }

    mm = pastTime.toLocaleString('default', {month: 'long'}).charAt().toUpperCase() +
    pastTime.toLocaleString('default', {month: 'long'}).slice(1); 

    formatedDate = `${dd} ${mm} ${yyyy}`;
    document.getElementById('fullDate').innerHTML = formatedDate;
};


function countOfDays() {    //  returns count of days in current month
    let dateOne = new Date();
    let dateTwo = dateOne.setDate(dateOne.getDate() + 30); //   optional variable for save changed dateOne variable
        dateOne = dateOne.getDate();

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
}
function dayOfWeek() {      // what is the day of week of current or new Month? Friday?
    let date1 = new Date().getFullYear();
    let date2 = new Date().getMonth();
    firstDayOfCurrentMonth = new Date(date1, date2, 1)
}

function buildCalendar () {
    eq = 1;
    for(i = 1; i < dateArray.length; i++){
        let numOfDay = 'd'+(firstDayOfCurrentMonth.getDay() - 1 + i)
        document.getElementById(numOfDay).innerHTML = i;
        eq++
    };

    let date0 = new Date();
    let date1 = new Date(date0.getFullYear(), date0.getMonth(), 0);
    let x = date1.getDate();    
    for(i = firstDayOfCurrentMonth.getDay(); i > 1; i--) {
        let numOfDay = 'd'+(i - 1);
        document.getElementById(numOfDay).innerHTML = x--;
        eq++
    }
    let f = 1
    for(i = eq; i <= 35; i++) {
        document.getElementById('d'+i).innerHTML = f++;
    }
    //build from firstDayPoint
}
