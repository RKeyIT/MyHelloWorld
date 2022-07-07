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
