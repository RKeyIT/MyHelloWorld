# MyHelloWorld

Regular expressions is system of searching and equalization of expressions like search numbers from 0 to 9
and delete this from text (for example)

Regular expressions, special symbols:

.   = any symbol
[]  = any symbol from this
^   = start of string (new string) 
    BUT this symbol into [^] = symbol '!' into javascript.
    This means need search NOT this symbol. For example: [^n] This is will be search any symbols exclusive 'n'
?   = 0 or 1
$   = end of string$. Last symbol of any string.
*   = from 0 to Infinity.
+   = from 1 to Infinity. Example:  e+ will find examples like e, ee, eee and other
\   = shielding. Searching symbol . for example (\.)
    examples: 
        1) \. - is point, 
        2) \n - is replace of string (new string)
        3) \d - any single number \b\b\b === [0-9][0-9][0-9] this will be search any 3 numbers like a one result.
        4) \D - any symbol exclusive numbers (NOT NUMBERS). Example: \d\D\d will search something like this '3p4'
        5) \s - is a 'space's. Not end of strings only space buttons.
        6) \w - any letter
        7) \W - any exclusive letters.
        8) \b - separations of word. Example: 'word' will be finded by \b\w\w\w\w\b (without 'space's)
        9) \B - places into words (expressions). Like: e|x|a|m|p|l|e places without spaces and separators
        10) 

(number) = quantification. Count of repeats for any special symbol.
    Examples: \b\w(3)\b s(5)    OR      N(3,7) will find NNN, NNNN, NNNNN, NNNNNN, NNNNNNN  OR  N(1) will find only N




interesting examples and combinations:

[0-9].[0-9] returns examples: 3.4, 3d3, 9`2 and other

Into VS Code in search we can use RegExp for replace (for example) null symbols on " or something else.
Example: needs to create arrays with country names. We are copying list of countries from Internet
First symbol into list we're place '[' and into end ']'. Open search function and write '$'
This is will be null result after any string (if countries placed like a list) and we can replace this on ',
after this write into search ^ (string begin) and replace null on '
Result  =   'Country',
            'Country2',
Now we have array elements