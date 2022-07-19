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
        let daysInMonth = new Date(year, month, 0).getDate();
        let dayOfWeek = new Date(year, month, 1).getDay();  // loop index

        while(dayOfWeek != 1){
            document.getElementById(idOfDays[dayOfWeek - 1]).classList.add('shadowDay');
            document.getElementById(idOfDays[dayOfWeek - 1]).innerHTML = daysInMonth;
            dayOfWeek--;
            daysInMonth--;
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