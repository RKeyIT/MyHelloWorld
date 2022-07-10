# MyHelloWorld
 1stPetProject

In first will be create SPA economics calculator.

Later re-create it like APP for smartphones.


[GENERAL]
[CONCEPT]

Application must calculate my moneys for 
do easilly money controls.

That needs for peoples whos can't save a lot
of theys moneys by themselfs for future.

[GENERAL]
[DESCRIPTION_LIST]

1. For easilly app control files was separated:
    1) 01vars.js: This file will be save any of global variable with description. [NotALocalVars]
    2) 02classes.js: Classes and unique menthods (& functions). 
    3) 03noautocallfuncs.js: This functions will be read in first and will used later into app
    4) 04autocallfuncs.js: This is constructor for app from page start.
   
   This files has numbers for create better queue of looadings.

2. FULL descriptions list for used names (vars, funcs and other)
    2.1 CONSTs / ARRs:
        1) generalDate - [UNCHANGEBLE/CONST] - current date. From this variable begins all date calculatings.
        2) MONEYS[] - [CONST/ARRAY/changeble] - array for create full history of coin operations. 
            That's be saved and sort by date.
        3) dailyOperations[] - [CONST/ARRAY/changeble] - abstractive massive withot uses now. [For create daily history.]

    2.2 VARIABLES:
       1) year, month, day - [changeble] - operative dates for dynamic calculatings with changes from a lot of funcs.
            That used into:
                1. daysLeftToPayday() - [day] - only
                2. chosenDayHistory()
                3. countOfDays()
                4. prevMonth()
                5. nextMonth()
                6. buildCalendar()
       2) currentTime - [?changeble] - like a general date. But needs for dynamic calendar buildigs. [IsThisReallyNeeds?]
            That used into:
                1. showDate()
                2. fDayOfWeek()
                3. prevMonth()
                4. nextMonth()
       3) dayOfWeek - [changeble] - save day (like a 'Monday') and return this for next calculator building process.
            That used into:
                1. fDayOfWeek() - [f] = find
                2. buildCalendar()
       4) daysInMonth - [changeble] - save count of days into current-work month.
            That used into:
                1. daysLeftToPayday()
                2. countOfDays()
                3. buildCalendar()
       5) idOfDay - [changeble] - creator for id of HTML element for acces something todo into this.
            That used into:
                1. showToday()
                2. buildCalendar()
       6)  currentCoins - [changeble] - this is save current moneys after all operations like "take/spend/save"
            That used into:
                1. calculateCurrentMoneys()
                2. daysLeftToPayday()
       7)  payday - [changeble] - this is save number of users payday and calculate some funcs basic on this. 
            That used into:
                1. payDay()
                2. daysLeftToPayday()
       8)  spendResult - [changeble] - [appBASE] - calculating acceptable sum of spends per day
            That used into:
                1. spendPerDay()
                2. daysLeftToPayday()

    2.3 CLASSES / OBJECTS / CUSTOM METHODS:
        1) Coin - [CLASS] - base with custom methods for future object 'coin'
        2) coin{} [OBJECT] - object with info like: 'amount', 'date', 'color', 'comment'
        3) take() [METHOD] - color: green. This is add coins into app.
        4) spend() [METHOD] - color: red. This is a spends.
        5) save() [METHOD] - color: blue. This is the saved moneys
        
    2.4 FUNCTIONS.
        1) payDay() - this changes date of payday or install this in first day of month
            this day can be setted by first day in month if user sets it wrong or didn't set.
        3) takeCoin() - [UsedByClassMethod] - used for *context*
        4) spendCoin() - [UsedByClassMethod] - used for *context*
        5) saveCoin() - [UsedByClassMethod] - used for *context*
        6) calculateCurrentMoneys() - this is create local variables and calculate current moneys
            this func is takes all of array parts and calculate this.
        8) spendPerDay() - this is calculate acceptable sum of spends per day.
            if 20 days remains to payday = full sum / 20
        10) daysLeftToPayday() - *context*
        11) autoStart() - [IMPORTANT] - [RunAPP] - this function calls all functions which dynamic creates calendar app
        12) chosenDayHistory() - [EXPERIMENTAL] - chose day from calendar style this and show history of this day.
        13) showOperations() - [EXPERIMENTAL] - show all operations of chosen day.
        14) showToday() - [EXPERIMENTAL] - style for chosen day and show formatedDate
        15) showDate() - Month and year into head of calendar
        16) countOfDays() - *context* in worked month
        17) fDayOfWeek() - Monday, tuesday & etc... This will use for creating calendar from right day of week
        18) prevMonth() - button switch on previous month
        19) nextMonth() - button switch on next month
        20) buildCalendar() - draw full calendar.