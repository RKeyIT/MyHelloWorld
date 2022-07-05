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