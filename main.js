/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/*
Things learned about JS:
1. 
2.
3.
4..
5.
6.
7.
8.
9.
10.
11.
12.
13
14.
15.
16.
17.
18.
19.
20.
 */









/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

var num1 = 10
var num2 = 15
var num3 = 5


function max() {
    "use strict";

    if (num1 > num2) {

        console.log(num1)

    } else {

        console.log(num2);
    }
}
max(num1, num2);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree() {
    "use strict";
    console.log(num3)
}
Math.max(num1, num2, num3); //since the variable was already defined above, I simply ran a console log of num3 and ran the function of Math.max to give me the highest number out of the 3.

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";
    //...
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket() {
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum() {
    "use strict";
    //...
}

function multiply() {
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse() {
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";

    var charFreq = function(string) {
        var dictionary = {};
        for (var i = 0, length = string.length; i < length; i++) {
            var currentChar = string.charAt(i);
            if (currentChar in dictionary) {
                dictionary[currentChar] += 1;
            } else {
                dictionary[currentChar] = 1;
            }
        }
        return dictionary;
    }
}
