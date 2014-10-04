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
4. var i = 0 is position
5. it is best to use strict equality operator "===" as opposed to equality operator"==". The latter is more strict and will help in not having false data.
6. the instanceof operator compares the constructors of its two operands. It is only useful when comparing custom made objects
7. adding the word new in fron of a type such as number changes the behavior of the type. If we add a new number to an object of number it will act like a convertor. If we simply add a number word to a number object it will be viewed as a new number object. Same applies with string type. Casting works best.
8. 3 ways to cast to object types such as Boolen, String and number. Casting a Boolean
9.  To cast a boolean use the "!!" not operator twice to convert to a boolen. (!!'foo';// true)(!!'';// false)
10. To cast to a number use the urinary plus operator (+'10' === 10; // true)
11. To cast to a string it will help prepending an empty string. ('' + 10 === '10'; // true)
12. JS needs a ; in order to understand the code. If ; are nt insrted the JS parsor will automatically insert. This is not good.
13. If you have leadging parenthesis, the parsor will not insert semi-colons. IT may then be transformed into a line. 
14. If transformed into a line, the log may not take it and than propmt an error such as type error or function undefined.
15. NEVER OMIT SEMI-COLONS!!
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

        return num1

    } else {

        return num2;
    }
}
console.log(max(num1, num2));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree() {
    "use strict";
}
Math.max(num1, num2, num3); //since the variable was already defined above, I simply ran a console log of num3 and ran the function of Math.max to give me the highest number out of the 3.

console.log(maxOfThree(10,15,5))
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
var findVowel = function(letter) {
    return "aeiou".indexOf(letter) != -1;
};

console.log(findVowel("b"))

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
/*
function rovarspraket(phrase) {
    "use strict";
    var vowels = "a,e,i,o,u";
    phrase.split("").map(function)
    */
/** "use strict";
function rovarspraket(phrase) {
   
    return phrase.split("").map(function(letter){
        
         * letter in each iteration is a character,
         * we test this character whether it is a consonant,
         * if so, return letter+'o'+letter
         * else, just return letter
         * @type {String}
         */
/*   return "aeiouAEIOU \"'/\\".indexOf(letter) >= 0 ? letter : letter + "o" + letter;

      
}).join("");
}
*/

function rovarspraket2(phrase) {
    var resultArray = "";
    for (var i = 0; i < phrase.length; i++) {
        resultArray += "aeiouAEIOU \"'/\\".indexOf(phrase[i]) >= 0 ? phrase[i] : phrase[i] + "o" + phrase[i];
    }

    return resultArray;
}


console.log(rovarspraket2("how are you doing"))

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

console.log(sum(5)(9)(6));



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

function reverse(string) {
    var rev = new Array(string.length);
    for (var i = string.length - 1; i >= 0; i--) {
        rev[i] = string[string.length - i - 1];
    }
    return rev.join('');
}

console.log(reverse("ninja turtles"))
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

console.log(findLongestWord("usa","canada","uk"))
    // ---------------------
    // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
    // ---------------------

var filterLongWords = function(array, int){
  var a = array.length;
  var longestWords = {};
  for (var i = 2; i < a; i++) {
    if (array.length [i]> int) {
      longestWords[a[i]] = (longestwords [a[i]] === undefined) ? 1:longestwords[a[i]] + 1;
    }
  }
  return longestWords;
}
console.log(filterLongWords("hi","hola","howdy"))
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function testFreq(string) {
    var characters = {};

    for (var i = 0; i < string.length; i++) {

        characters[string[i]] = (characters[string[i]] === undefined) ? 1 : characters[string[i]] + 1;
    }
    return characters;
}

console.log(testFreq("how are you doing"))

// the object characters is empty

// we pass in a string called "hhllo"

// let's set this object characters equal to 

// Does the characters object have a property that is equal to the value of hello at index equal to 0 which is h?

// There is no property h in our characters object so let's define it and set it equal to a value of 1

// loop again with i equal to 1

// Does the characters object have a property that is equal to the value of hello at index equal to 1 which is h?

// Yes, this proprety is defined and has a value equal to 1, so set the value of the characters object whose property is the same
// as the value of the string at index=1 (which is also h) and let's increment it by 1. So now this property (which is h) is equal
// to 2.
