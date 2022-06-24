let pastTime = new Date(2022, 5, 1);   //  variable for write "first date"
let formatedDate
formateDate()

function formateDate() {
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
}

let daysInMonth;
let firstDayOfCurrentMonth;

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

function dayOfWeek() {
    let date1 = new Date().getFullYear();
    let date2 = new Date().getMonth();
    firstDayOfCurrentMonth = new Date(date1, date2, 1)
}

function buildCalendar () {
    let firstDayPoint = 'd'+firstDayOfCurrentMonth.getDay()
        /** THIS IS THE FIRST WAY  **/
        setCalendar()
        function setCalendar(firstDayPoint) {
        // build from firstDayPoint


        //experimental
        document.getElementById(`${firstDayPoint}`).innerHTML = 1;
    }

        /** THIS IS THE SECOND WAY **/
    /************   BUILD CALCULATOR FROM THIS IF's  ************/
    if(firstDayPoint = 1) {     //  Monday

    }
    if(firstDayPoint = 2) {     //  Tuesday
        
    }
    if(firstDayPoint = 3) {     //  Wednesday
        
    }
    if(firstDayPoint = 4) {     //  Thursday
        
    }
    if(firstDayPoint = 5) {     //  Friday
        
    }
    if(firstDayPoint = 6) {     //  Saturday
        
    }
    if(firstDayPoint = 0) {     //  Sunday
        
    }
}