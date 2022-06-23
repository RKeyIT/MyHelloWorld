let pastTime = new Date(2022, 5, 1);   //  variable for write "first date"
let formatedDate
formateDate()
setFirstDate()

function formateDate() {
    let dd = pastTime.getDate();
    let mm = pastTime.getMonth();
    let yyyy = pastTime.getFullYear();

    if(dd<10) {
        dd = '0'+dd;
    }

    mm = pastTime.toLocaleString('default', {month: 'long'}).toUpperCase();

    formatedDate = `${dd} ${mm} ${yyyy}`;
}

function setFirstDate() {
    document.getElementById('fullDate').innerHTML = formatedDate;
}