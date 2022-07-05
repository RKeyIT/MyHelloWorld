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
        2) MONEYS[] - [CONST/ARRAY/changeble] - 
        3) dailyOperations[] - [CONST/ARRAY/changeble] - 

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
       3) dayOfWeek - [changeble] - save day (like a 'Monday') and return this for next calculator building process.
       4) daysInMonth - [changeble] - save count of days into operative month.
       5) idOfDay - [changeble]
       6) daysIndex - [changeble]
       7) currentCoins - [changeble]
       8) depositeCoins - [changeble]
       9)  index - [changeble] 
       10) payday - [changeble] 
       11) spendResult - [changeble]

    2.3 CLASSES / OBJECTS / CUSTOM METHODS:
        1) Coin [CLASS]
        2) coin{} [OBJECT]
        3) take() [METHOD]
        4) spend() [METHOD]
        5) save() [METHOD]