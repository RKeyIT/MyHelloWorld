class Coin {
    constructor(options) {
        this.comment = options.comment;
        this.amount = options.amount;
        this.date = new Date();
    }
    take() {
        this.color = 'green';
    }
    spend() {
        this.color = 'red';
    }
    save() {
        this.color = 'blue';
    }
}


var coin3 = new Coin({
    comment: 'dfsadfasdf',
    amount: 343,
    })
    
coin3.save();
    
somArray.push(coin3);
    
console.log(coin3, somArray);


// class Coin {
//     constructor(options) {
//       this.comment = options.comment;
//       this.amount = options.amount;
//       this.date = new Date();
//     }
//   add() {
//     this.color = 'green'
//   }
//   spend() {
//     this.color = 'red'
//   }
//   save() {
//     this.color = 'blue'
//   }
// }

// let someArray = [];

// function addCoin() {
//   const coin = new Coin ({
//   comment: 'bread',
//   amount: 43,
// })
//   console.log(coin);
//   someArray.push(coin.add())
//   someArray.push(coin.add())
// }

// addCoin()
// console.log(someArray[1])




