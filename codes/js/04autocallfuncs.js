for (i = 0; i < MONEYS.length; i++) {
    if (MONEYS[i].date.getDate() == 11 &&
        MONEYS[i].date.getMonth() == 6) {
        dailyOperations.push(MONEYS[i])
    }
}

    var colorizeDays;
    var greenCoins = 0;
    var redCoins = 0;
    var blueCoins = 0;

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

function colorizeDay() {
    // colors
    // green = 'green' etc

    if (greenCoins > redCoins &&
        greenCoins > blueCoins &&
        greenCoins > redCoins + blueCoins) {
        return colorizeDays = 'green'
    }
    if (redCoins > greenCoins &&
        redCoins > blueCoins &&
        redCoins > greenCoins + blueCoins) {
        return colorizeDays = 'red'
    }
    if (blueCoins > greenCoins &&
        blueCoins > redCoins &&
        blueCoins > greenCoins + redCoins) {
        return colorizeDays = 'blue'
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





    if (greenCoins + blueCoins > redCoins) {
        colorizeDays = 'greenblue'
    }
    if (greenCoins + redCoins > blueCoins) {
        colorizeDays = 'redgreen'
    }
    if (redCoins + blueCoins > greenCoins) {
        colorizeDays = 'redblue'
    }
}