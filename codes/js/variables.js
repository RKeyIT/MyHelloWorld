//  Calendar programm

let generalDate = new Date();   // this date will be used for building calendar from start page.

let year    = generalDate.getFullYear();    // this variable will be used for setting new dates into calendar
let month = generalDate.getMonth();         // this variable will be used for setting new dates into calendar
let day = generalDate.getDate();            // this variable will be used for setting new dates into calendar

let currentTime = new Date(year, month, 1)  // sets short date for next works with calendar

let showedDate      // this date will be show Month and Year used now
let dayOfWeek       // this variable needs to build calendar from correct day of week
let daysInMonth     // this variable will save count of days into used month now

let idOfDay                     // this is the day of week. From this day will be create any month of calendar
let daysIndex = 0;              // needs for some calculatings

//  VARIABLES
let currentCoins = 0;   // general moneys in account
let depositeCoins = 0;  //    Coins for save

let payday  =  1;             //   Day of date of general money takes.

let spendResult = 0;    //  Installed by function   ...     after calculate dates
//let daysInMonth = 0;    //  Installed by function "countOfDays()";

const MONEYS = []   // array with objects *coin*

let coin;           // always new object from class Coin  
//  daysInMonth is variable for operations next.    For Example: spendPerDay = result / daysInMonth + 1
//  (+ 1 is for last day before payday)

const someDate = []    // this array will save count of days and create days into calendar
const dailyOperations = []  // this array needs for copying MONEYS array but only for chosen date