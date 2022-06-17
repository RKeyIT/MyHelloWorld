class Coin {
    constructor(comment, amount) {
        this.comment = comment;
        this.amount = amount;
        this.color = '';
        this.date = new Date();
    }
    add() {
        this.color = 'green';
    }
    spend() {
        this.color = 'red';
    }
    save() {
        this.color = 'blue';
    }
}

var arr=[];


const coiN = new Coin(
document.getElementById('addedFrom').value,
Number(document.getElementById('add').value,)
).add();
arr.push(coiN);
