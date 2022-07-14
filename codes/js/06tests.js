let coler
function randomNum(max) {
    return Math.floor(Math.random() * max)
}

let minDate = 1641000000000;    //dates for test
let maxDate = 1672500000000;    //dates for test
testFill()
function testFill() {
for (i = 0; i < 1000; i++) {
    coler = randomNum(3);
    if (coler == 0) {coler = 'green'};
    if (coler == 1) {coler = 'red'} ;
    if (coler == 2) {coler = 'blue'};
    
    

    let coina = new Coin();
        if(coler == 'green'){
            coina.amount = Math.floor(Math.random()*300);
        } else {
            coina.amount = Math.floor(Math.random()*100);
        }
        coina.date = new Date(Math.floor(Math.random()*(maxDate - minDate) + minDate));
        coina.color = coler;
        coina.comment = 'test';
    
    MONEYS.push(coina);
}
for (i = 0; i < MONEYS.length; i++){
    if(MONEYS[i].date.getDate() == 13 &&
        MONEYS[i].date.getMonth() == 6) {
            console.log(MONEYS[i])
        }
    }
}








let colorizeDays = '';
let greenCoins = 0;
let redCoins = 0;
let blueCoins = 0;


fillDay()
function fillDay() {
for (i = 0; i < MONEYS.length; i++) {
    if (MONEYS[i].date.getDate() == 13 &&
        MONEYS[i].date.getMonth() == 6) {
        dailyOperations.push(MONEYS[i])
    }
}
for (i = 0; i < dailyOperations.length; i++) { 
    if (dailyOperations[i].color == 'green') {
        greenCoins += dailyOperations[i].amount
    }
    if (dailyOperations[i].color == 'red') {
        redCoins += dailyOperations[i].amount
    }
    if (dailyOperations[i].color == 'blue') {
        blueCoins += dailyOperations[i].amount
    }
}
}

colorizeDay()
function colorizeDay() {
    // colors
    // green = 'green' etc

    // Cycle must to know what a day for it works.
    // 1. Date -> dailyOperations[]
    // 2. dailyOperations -> color
    // 3. Recycle

    if (greenCoins > redCoins &&
        greenCoins > blueCoins &&
        greenCoins > redCoins + blueCoins) {
        colorizeDays = 'cGreen'
    }
    if (redCoins > greenCoins &&
        redCoins > blueCoins &&
        redCoins > greenCoins + blueCoins) {
        colorizeDays = 'cRed'
    }
    if (blueCoins > greenCoins &&
        blueCoins > redCoins &&
        blueCoins > greenCoins + redCoins) {
        colorizeDays = 'cBlue'
    }

    if(greenCoins + blueCoins > redCoins &&
        greenCoins > blueCoins + redCoins &&
        blueCoins > greenCoins + redCoins
        ) {
        colorizeDays = 'cGreenBlue'
        }
    if(greenCoins + blueCoins < redCoins &&
        greenCoins > blueCoins + redCoins &&
        greenCoins + redCoins > blueCoins
        ) {
        colorizeDays = 'cGreenRed'
        }
    if (greenCoins + redCoins < blueCoins &&
        greenCoins < blueCoins + redCoins &&
        redCoins > greenCoins + blueCoins
        ) {
        colorizeDays = 'cRedBlue'
        }

    document.getElementById('d25').classList.add('cRed') // need to shose id of day 

    for(i = 0; i < MONEYS.length; i++) {
        let dayEqual = MONEYS[i].date.getDate()
        let monthEqual = MONEYS[i].date.getMonth()
        let yearEqual = MONEYS[i].date.getFullYear()

        dailyOperations.push(MONEYS[i])
        let usedDates = []
        usedDates.push(MONEYS[i])

    }
}


// cycle cycle cycle

    function searchRepeatDays() {
        let j = 0;
        while(j < usedDates.length) {
            if(usedDates[j].date.getDate() == MONEYS[i].date.getDate() &&
            usedDates[j].date.getMonth() == MONEYS[i].date.getMonth() &&
            usedDates[j].date.getFullYear() == MONEYS[i].date.getFullYear()) {
                
            }

            j++
        }
    }

