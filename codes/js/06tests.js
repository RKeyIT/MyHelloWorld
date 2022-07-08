let colr

for (i = 0; i < 100; i++) {
    colr = Math.random(1,3)
    if (colr == 1) {colr = 'green'}
    if (colr == 2) {colr = 'red'} 
    if (colr == 3) {colr = 'blue'}

    var coina = new Coin(
        this.amount = Math.random(1, 10000),
        this.date = new Date(year / Math.random(), month / Math.random(), day / Math.random()),
        this.color = colr,
        this.comment = 'test'
    )

    MONEYS.push(coina);
}

// var min = 0;
// var max = 2030
// var dat = new Date(
//  	Math.floor(Math.random() * (max - min + 1) + min), 
// 	Math.floor(Math.random() * (max - min + 1) + min),
//   Math.floor(Math.random() * (max - min + 1) + min),
//   Math.floor(Math.random() * (max - min + 1) + min),
//   Math.floor(Math.random() * (max - min + 1) + min),
//   Math.floor(Math.random() * (max - min + 1) + min),
//   Math.floor(Math.random() * (max - min + 1) + min),