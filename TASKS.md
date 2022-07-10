# MyHelloWorld

**Quest 11**
    1. Create operation history.
    2. Add history into calendar.






**Quest 10**
    1.  --DONE-- Replace, save and repair applications in same before continue *Quest 8*
    2. Create concept design.






<!-- **Quest 9**

    1. Learn regular expressions. (this is already into code in index.html with ids = 'add', 'less' and other...).
    2. Enter some regular expression into code by myself -->






**Quest 8**

    1.  --DONE--    Create visual calendar model.
    2.  --DONE--    Add visual style for current day into calendar. Border for example.
    3.  Delete operations from list when picked other day.
    4.  --DONE--    Add function for chose next or prev day and style it.
    5.  Add functions to assign dates to operations.
    6.  Add first styles. For days with some operations.
    7.  Create list with operations in "day". This must show what was does in this date
    8.  --DONE--    Create shadow styles for days not from this month






<!-- **Quest 7**

    1) In MONEYS array must not be negative or 0 numbers.
    2) FIX NULL STRING.... ATANTION! (located into payday div)
    3) Inputs must accept only nums !again! -->





<!-- **Quest 6**

    Re-work coin system.
        1) Add class for coins.

            coin = {
                this.comment: comment,
                this.color: color,
                this.amount: amount,
                this.date: new Date(),
            }


        2) Add one array for save all of coins

            allCoins = [coin, coin, coin]
            console.log(allCoins[1])

        
        3) Some steps for clear code.

            coin and all of this in first place,
            dates in secons... -->





<!-- **Quest 5**

    1. HOT re-QUEST**
            This must accept only numbers in 1-28
            This can't accept any more than 2 symbols of date.

                ...subs...
            Payday can be installed only in 1-28 or installed on first day of each month.
            if (something) {install on 1-28 values} else {install 1}

    2.  Was finded bugs with payDay input. If into input place number like 28 and higher
        calculater will be wrong work. It's returns negative number of day lefts to payday.

        !!!
        may be do it like list and fix 1 and 2 quests by one?
        !!!         this think added to concepts

    3.  Input payDay must accept only numbers 1-28
        
        2.1     Develop new conception for days of PayDay
                How that can be correct?
                May be payDay input didn't need?
                We can use first day of each month for that.

        2.2     App must accept only correct days! -->


<!-- **Qest 4**

re-change incorrect names
(like loseMoneys => spendMoneys)

rework calculator. That's must calculate accepted spends based on current day
FOR EXAMPLE:

    1. payDay today. That means payDay moneys / 30
        3000 / 30 = 100 coins per day can be spend
    2. payDay was a week ago. 
        3000 / 23 = 130... coins per day can be spend
    AND OTHER EXAMPLES...

**Quest 4.1 ATTANTION FIX**

    something was wrong and now we have *ATTANTION*:

    null string is can't be argument for getElementById()
                                            index.html

    FIX IT:

        1) Trouble place was finded. That is payDay input. Something wrong with it.
        2) Trouble was with <label> tag. That must was placed before input. (Input cant be into label) -->



<!-- **Quest 3**
**GeneralSystem**
 -->

<!-- **createFunctionForCalculateFreeMoneysPerDay**

Function #1:    variable for count of moneys what user want to save.
    That means deposite in future by user. Like a keep moneys in the Bank.

Function #2:    calculate full added - full lessed - saved moneys.
    A little rework for general formula. -->

<!-- Function #3:    calculate result of Function #2 / days of current month.
    Calculate count of days in "that" month and calculate general formula with it.

**createSystemOfSortAmountsOfDaysInMonths**

february 28(29) days
september 31 days
and other... -->



<!-- **Quest 2**

**CreateFormForUser**

This form must return amount of money entered by user.
Positive amount must be writted for "addedMoneys" array
Negatuve for "lessedMoneys"

This will be calculate later for write in "currentCoins" variable.
Code this and return result in "currentCoins"
 -->




<!-- **Quest 1** 

**CreateVariables**

    Let's create variables for my programm.
    What a variables we need?

    -   currentCoins = current moneys in account.
    -   payDay = date of general money up.
    -   ??? changeCoins = for add/lose moneys on account for a some time.


**CreateArrays**

    this needs for app history
    -   addedMoneys[]
    -   lessedMoneys[]
    that will be save variable's (changeCoins) 
    and sort this on Added or Lessed group's
    for general calculate it later.


**CreateObjects**

    coins = {
        comment: 'for what',
        amount: number,
        color: green/red (+/-),
    } -->