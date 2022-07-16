const generalDate = new Date();   // this date will be used for building calendar from start page.
const dailyOperations = []  // this array needs for copying MONEYS array but only for chosen date
const MONEYS = []   // array with objects *coin*

let year    = generalDate.getFullYear();    // this variable will be used for setting new dates into calendar
let month = generalDate.getMonth();         // this variable will be used for setting new dates into calendar
let day = generalDate.getDate();            // this variable will be used for setting new dates into calendar

let currentTime = new Date(year, month, 1)  // sets short date for next works with calendar
let dayOfWeek       // this variable needs to build calendar from correct day of week
let daysInMonth     // this variable will save count of days into used month now
let idOfDay                     // this is the day of week. From this day will be create any month of calendar

let currentCoins = 0;   // general moneys in account
let payday  =  1;             //   Day of date of general money takes.
let spendResult = 0;    //  Installed by function   ...     after calculate dates

let coin;           // always new object from class Coin

/*******************/
let colorizeDays = '';
let greenCoins = 0;
let redCoins = 0;
let blueCoins = 0;
/*******************/

let num = 0; //test var for autofill tests