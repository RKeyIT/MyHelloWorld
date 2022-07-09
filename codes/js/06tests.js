let coler
function randomNum(max) {
    return Math.floor(Math.random() * max)
}

testFill()
function testFill() {
for (i = 0; i < 100; i++) {
    coler = randomNum(3);
    if (coler == 0) {coler = 'green'};
    if (coler == 1) {coler = 'red'} ;
    if (coler == 2) {coler = 'blue'};

    let coina = new Coin();
        coina.amount = Math.floor(Math.random()*1000000);
        coina.date = new Date(Math.floor(Math.random()*2000000000000));
        coina.color = coler;
        coina.comment = 'test';
    
    MONEYS.push(coina);
}
}