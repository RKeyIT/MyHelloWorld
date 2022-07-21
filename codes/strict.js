'use strict'

const generalDate = new Date();

let year    = generalDate.getFullYear();
let month   = generalDate.getMonth();
let day     = generalDate.getDate();
let daysInMonth = new Date(year, month + 1, 0).getDate();

let dayOfWeek = new Date(year, month, 1).getDay()  // this day used for build calendar. That from which day of week calendar begins

const idOfDays  =   ['NotAnID', 'd1', 'd2', 'd3', 'd4',
    'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12',
    'd13', 'd14', 'd15', 'd16', 'd17', 'd18', 'd19',
    'd20', 'd21', 'd22', 'd23', 'd24', 'd25', 'd26',
    'd27', 'd28', 'd29', 'd30', 'd31', 'd32', 'd33',
    'd34', 'd35', 'd36', 'd37', 'd38', 'd39', 'd40',
    'd41', 'd42'];

buildCalendar()
function buildCalendar() {
    function buildPrevMonthShadows() {
        let days = new Date(year, month, 0).getDate();
        let fromDay = new Date(year, month, 0).getDay();  // loop index

        while(fromDay > 0){
            document.getElementById(idOfDays[fromDay]).classList.add('shadowDay');
            document.getElementById(idOfDays[fromDay]).innerHTML = days;
            fromDay--;
            days--;
        }
    }
    let varForNextMonth = 0;
    function buildCurrentMonth() {
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let dayOfWeek = new Date(year, month, 1).getDay();  // loop index
        let loopIndex = 1;

        while(loopIndex <= daysInMonth){
            document.getElementById(idOfDays[dayOfWeek]).innerHTML = loopIndex;
            dayOfWeek++;
            loopIndex++;
        }
        varForNextMonth = dayOfWeek;
    }
    function buildNextMonthShadows(){
        let numOfDay = 1;
        while(varForNextMonth != 43) {
            document.getElementById(idOfDays[varForNextMonth]).classList.add('shadowDay');
            document.getElementById(idOfDays[varForNextMonth]).innerHTML = numOfDay++
            varForNextMonth++
        }
    }
    buildPrevMonthShadows();
    buildCurrentMonth();
    buildNextMonthShadows();
}



// NEW CONCEPTION OF CALENDAR BUILDINGS
class DataDate {
    constructor(name, date, id){
        this.name = name;   //  for example 1997, 02, 04 = '19970204' or 'd19970204'
        this.date = date;   //  from this date object create self name and that's need for equalling with Coin dates
        this.id = id;       //  'd' + ? must be automatic fillings like 'd3' for good works with HTML file
        this.operations = [];       //  this array will save Coins which equal with this.(options.)date
    }
}

const dates = []
function buildCalendarByObjectArray() {
    let dateZero = new Date(0)
        year = dateZero.getFullYear()
        month = dateZero.getMonth()
        day = dateZero.getDate()


    while(year != 2038) {
        let data = new Date(year, month, day)
        let id;
	    if(data.getFullYear() == new Date(year + 1, 0, 1).getFullYear()) {
            year++
            month = 0;
        } 
        if(data.getMonth() == new Date(year, month + 1, 1).getMonth()){
            month++
            day = 1;
        }
        let name = 'd' + data.getFullYear() + '' + 
                    data.getMonth() < 10 ? '0' + data.getMonth() : 
                    data.getMonth() + '' + data.getDate()
        if(id == undefined) {
            id = 'd' + data.getDay()
        } 
        let date = data
        let dayX = new DataDate(name, date, id)
        dates.push(dayX)
        day++
    }
dates
// NEW CONCEPTIONS OF CALENDAR BUILDINGS
}