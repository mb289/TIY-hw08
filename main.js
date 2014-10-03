/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/*
Things learned about JS:
1. Variable identifiers(var name (<--Identifier) = text ) can only start with must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9)
2. Everything in javascript acts as anobject. The exception is "null" and "undefined"
3. An array is a special variable, which can hold more than one value at a time.(EX: var names ["mark","matt","walter"])
4. 
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
var vowels = ("a,e,i,o,u")
var leng = .length

function isVowel(char) {
    "use strict";


}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
    "use strict";
    var vowels = "a,e,i,o,u";
    phrase.split("").map(function)
    /* <---------------------correct
function rovarspraket(phrase){
    "use strict";
    return phrase.split("").map(function(letter){
        /**
         * letter in each iteration is a character,
         * we test this character whether it is a consonant,
         * if so, return letter+'o'+letter
         * else, just return letter
         * @type {String}
         */
         return "aeiouAEIOU \"'/\\".indexOf(letter) >= 0 ? letter : letter + "o" + letter;

      
}).join("");
}

function rovarspraket2(phrase) {  
    var resultArray = "";

      
    for (var i = 0; i < phrase.length; i++) {    
        resultArray +=       "aeiouAEIOU \"'/\\".indexOf(phrase[i]) >= 0 ? phrase[i] : phrase[i] + "o" + phrase[i];  
    }

      
    return resultArray;
}

* /

/ / ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


"use strict";

function sum(n) {
    var s = function(x) {
        return sum(n + x);
    };

    s.valueOf = s.toString = function() {
        return n;
    };

    return s;
}

console.log(+sum(5)(9)(6));

------------------------------------

function multiply(n) {
    "use strict";
    var s = function(x) {
        return multiply(n * x);
    };
    s.valueOf = s.toString = function() {
        return n;
    };

    return s;
}

console.log(multiply(5)(9)(6))


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse()
"use strict";

var color = ["red", "Black"];
color.reverse();





// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";

    var countries = ["usa", "canada", "uk"];
    countries.sort(function(a, b) {

        return a.length - b.length;
    })
}

console.log(findLongestWord(countries))
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    var filterLongWords = ("water", "slider", "ordinary", i = 1)
    filterLongWords.sort(function) {
        return a.name.length > b.name.length, i ? 1 : -1;
    })

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
        return dictionary
    }
