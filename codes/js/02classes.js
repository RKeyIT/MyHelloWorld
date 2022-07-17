
class Coin {        // Class and after this functions for this class
    constructor(){
        this.date = new Date();
    }
    take(){
        this.amount = Number(document.getElementById('add').value),
        this.comment = document.getElementById('addedFrom').value,
        this.color = 'green';
        MONEYS.push(coin)
    }
    spend(){
        this.amount = Number(document.getElementById("less").value),
        this.comment = document.getElementById('losedFor').value,
        this.color = 'red';
        MONEYS.push(coin)
    }
    save(){
        this.amount = Number(document.getElementById('save').value),
        this.comment = document.getElementById('saveFor').value,
        this.color = 'blue';
        MONEYS.push(coin)
    }
}
//Operative functions with this class
    function takeCoin() {
        if (
            document.getElementById('add').value === '' || 
            document.getElementById('add').value <= 0
            ) {
                return
            } else {
        coin = new Coin()
        coin.take();
        calculateCurrentMoneys();
        spendPerDay();
        document.getElementById('add').value = '';
        document.getElementById('addedFrom').value = '';
        }
    }
    function spendCoin() {
        if (
            document.getElementById('less').value === '' || 
            document.getElementById('less').value <= 0
            ) {return}
        else {
        coin = new Coin ()
        coin.spend();
        calculateCurrentMoneys();
        spendPerDay();
        document.getElementById('less').value = '';
        document.getElementById('losedFor').value = '';
        }
    }
    function saveCoin() {
        if (
            document.getElementById('save').value === '' || 
            document.getElementById('save').value <= 0
            ) {return}
        else {
        coin = new Coin ()
        coin.save();
        calculateCurrentMoneys();
        spendPerDay();
        document.getElementById('save').value = '';
        document.getElementById('saveFor').value = '';
        }
    }

// class Coin {        // Class and after this functions for this class
//     constructor(){
//         this.date = new Date();
//     }
//     take(){
//         this.amount = Number(document.getElementById('add').value),
//         this.comment = document.getElementById('addedFrom').value,
//         this.color = 'green';
//         MONEYS.push(coin)
//     }
//     spend(){
//         this.amount = Number(document.getElementById("less").value),
//         this.comment = document.getElementById('losedFor').value,
//         this.color = 'red';
//         MONEYS.push(coin)
//     }
//     save(){
//         this.amount = Number(document.getElementById('save').value),
//         this.comment = document.getElementById('saveFor').value,
//         this.color = 'blue';
//         MONEYS.push(coin)
//     }
// }
// //Operative functions with this class
//     function takeCoin() {
//         if (
//             document.getElementById('add').value === '' || 
//             Number(document.getElementById('add').value) !== 
//             Number(document.getElementById('add').value) || 
//             document.getElementById('add').value <= 0
//             ) {
//                 return
//             } else {
//         coin = new Coin()
//         coin.take();
//         calculateCurrentMoneys();
//         spendPerDay();
//         document.getElementById('add').value = '';
//         document.getElementById('addedFrom').value = '';
//         }
//     }
//     function spendCoin() {
//         if (
//             document.getElementById('less').value === '' || 
//             Number(document.getElementById('less').value) !== 
//             Number(document.getElementById('less').value) || 
//             document.getElementById('less').value <= 0
//             ) {return}
//         else {
//         coin = new Coin ()
//         coin.spend();
//         calculateCurrentMoneys();
//         spendPerDay();
//         document.getElementById('less').value = '';
//         document.getElementById('losedFor').value = '';
//         }
//     }
//     function saveCoin() {
//         if (
//             document.getElementById('save').value === '' || 
//             Number(document.getElementById('save').value) !== 
//             Number(document.getElementById('save').value) || 
//             document.getElementById('save').value <= 0
//             ) {return}
//         else {
//         coin = new Coin ()
//         coin.save();
//         calculateCurrentMoneys();
//         spendPerDay();
//         document.getElementById('save').value = '';
//         document.getElementById('saveFor').value = '';
//         }
//     }