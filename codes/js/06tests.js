let coler
function randomNum(max) {
    return Math.floor(Math.random() * max)
}

let minDate = new Date(2022, 0, 1).getTime();    //dates for test
let maxDate = new Date(2023, 0, 1).getTime();    //dates for test

testFill()
function testFill() {
for (i = 0; i < 1000; i++) {
    coler = randomNum(3);
    if (coler == 0) {coler = 'green'};
    if (coler == 1) {coler = 'red'} ;
    if (coler == 2) {coler = 'blue'};
    
    

    let coina = new Coin();
        if(coler == 'green'){
            coina.amount = Math.floor(Math.random()*1000);
        } else {
            coina.amount = Math.floor(Math.random()*1000);
        }
        coina.date = new Date(Math.floor(Math.random()*(maxDate - minDate) + minDate));
        coina.color = coler;
        coina.comment = 'test';
    
    MONEYS.push(coina);
}
for (i = 0; i < MONEYS.length; i++){
    if(MONEYS[i].date.getDate() == 17 &&
        MONEYS[i].date.getMonth() == 6) {
            console.log(MONEYS[i], i)
        }
    }
}




// cycle cycle cycle

    // function searchRepeatDays() {
    //     let j = 0;
    //     while(j < usedDates.length) {
    //         if(usedDates[j].date.getDate() == MONEYS[i].date.getDate() &&
    //         usedDates[j].date.getMonth() == MONEYS[i].date.getMonth() &&
    //         usedDates[j].date.getFullYear() == MONEYS[i].date.getFullYear()) {
                
    //         }

    //         j++
    //     }
    // }

