// Ryan's Algorithms 
// This is Ryan Riesenberger's massive algo collection //
// These algos are alphabetically sorted //
console.warn('Ryans algos is working from the beginning...');

// FCC Basic, Intermediate, & Advanced Algorithms
// reverseString
// factorialize
// palindrome
// findLongestWord
// titleCase
// largestOfFour
// confirmEnding
// repeatStringNumTimes
// truncateString
// chunkArrayInGroups
// slasher
// mutation
// bouncer
// destroyer
// getIndexToIns
// caesarsCipher
// sumAll
// diffArray
// convertToRoman
// whereAreThou
// myReplace
// translatePigLatin
// pairElement
// fearNotLetter
// booWho
// uniteUnique
// convertHTML
// spinalCase
// sumFibs
// sumPrimes
// smallestCommons
// findElement
// steamrollArray
// drop
// binaryAgent
// truthCheck
// telephoneCheck
// sym
// checkCashRegister
// assertEqual
// updateInventory
// permAlone
// permutations
// checkRepeatChar
// makeFriendlyDates
// obitalPeriod
// pairwise


//####################################################################################
//	Basic Algorithm Scripting
//####################################################################################

//###################################################################################
// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('')
};
// console.log(reverseString("hello")); //Returns a string.
// console.log(reverseString("hello")); //Returns "olleh".
// console.log(reverseString("Howdy")); //Returns "ydwoH".
// console.log(reverseString("Greetings from Earth")); //Returns "htraE morf sgniteerG".

//###################################################################################
//Factorialize a Number
function factorialize(num) {
    if (num === 0) {
        return 1
    } else {
        let multipliedNum = 1
        for(let i = num; i > 1; i--){
            multipliedNum = multipliedNum * i;
        }
        return multipliedNum
    }
}
// console.log(factorialize(0)); // should return 1.
// console.log(factorialize(5)); // should return 120.
// console.log(factorialize(10)); // should return 3628800.
// console.log(factorialize(20)); // should return 2432902008176640000.

//###################################################################################
// Check for Palindrome
function palindrome(str) {
    
}
// palindrome("eye"); // should return true.
// palindrome("race car"); // should return true.
// palindrome("not a palindrome"); // should return false.
// palindrome("A man, a plan, a canal. Panama"); // should return true.
// palindrome("never odd or even"); // should return true.
// palindrome("nope"); // should return false.
// palindrome("almostomla"); // should return false.
// palindrome("My age is 0, 0 si ega ym."); // should return true.
// palindrome("1 eye for of 1 eye."); // should return false.
// palindrome("0_0 (: /-\ :) 0-0"); // should return true.
// palindrome("five|\_/|four"); // should return false.

//###################################################################################
//	Find the longest word in a string
function findLongestWord(str) {
  	
}
// findLongestWord("The quick brown fox jumped over the lazy dog"); // returns 6.
// findLongestWord("May the force be with you"); // returns 5.
// findLongestWord("Google do a barrel roll"); // returns 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow"); // returns 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology"); // returns 19.

//###################################################################################
//	Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    
}
// titleCase("I'm a little tea pot"); // returns "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt"); // returns "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // returns "Here Is My Handle Here Is My Spout".

//###################################################################################
//	Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.
function largestOfFour(arr) {
	
}
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
    // should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
    // should return [9, 35, 97, 1000000].

//###################################################################################
//	Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
  
}
// confirmEnding("Bastian", "n"); // should return true.
// confirmEnding("Connor", "n"); // should return false.
// confirmEnding("Developing software from a specification is easy", "specification"); // should return false.
// confirmEnding("He has to give me a new name", "name"); //should return true.
// confirmEnding("He has to give me a new name", "me"); // should return true.
// confirmEnding("He has to give me a new name", "na"); // should return false.
// confirmEnding("If you want to save our world, you must hurry", "mountain"); // should return false.

//###################################################################################
//	Repeat a string repeat a string
//Repeat a given string (first argument) num times (second argument). 
//Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    
}
// repeatStringNumTimes("*", 3); // returns "***".
// repeatStringNumTimes("abc", 3); // returns "abcabcabc".
// repeatStringNumTimes("abc", 4); // returns "abcabcabcabc".
// repeatStringNumTimes("abc", 1); // returns "abc".
// repeatStringNumTimes("*", 8); // returns "********".
// repeatStringNumTimes("abc", -2); // returns "".

//###################################################################################
//	Truncate a string
//Truncate a string (first argument) if it is longer than the given maximum string length 
//(second argument). Return the truncated string with a ... ending.
//Note that inserting the three dots to the end will add to the string length.
//However, if the given maximum string length num is less than or equal to 3, 
//then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
    
 }
// truncateString("A-tisket a-tasket A green and yellow basket", 11); // returns "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 14); // returns "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", 
            //    "A-tisket a-tasket A green and yellow basket".length); 
    // returns "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket",
            //    "A-tisket a-tasket A green and yellow basket".length + 2); 
    // returns "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1); // returns "A...".
// truncateString("Absolutely Longer", 2); // returns "Ab...".

//###################################################################################
//	Chucky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument),
//and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

}
// chunkArrayInGroups(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

//###################################################################################
//	Slasher Flick
function slasher(arr, howmany){
	//your code goes here
};
// console.log(slasher([1,2,3], 2));	//Return [3]

//###################################################################################
//	Mutations
//Return true if the string in the first element of the array contains all of the letters of the string 
//in the second element of the array.
//For example, ["hello", "Hello"], should return true because all of the letters in the second string 
//are present in the first, ignoring case.
//The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    
}
// mutation(["hello", "hey"]);// returns false.
// mutation(["hello", "Hello"]);// returns true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);// returns true.
// mutation(["Mary", "Army"]);// returns true.
// mutation(["Mary", "Aarmy"]);// returns true.
// mutation(["Alien", "line"]);// returns true.
// mutation(["floor", "for"]);// returns true.
// mutation(["hello", "neo"]);// returns false.
// mutation(["voodoo", "no"]);// returns false.

//###################################################################################
//	Falsy Bouncer
//Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
	
}

// bouncer([7, "ate", "", false, 9]);// returns [7, "ate", 9].
// bouncer(["a", "b", "c"]);// returns ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]);// returns [].
// bouncer([1, null, NaN, 2, undefined]);// returns [1, 2].

//###################################################################################
//	Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. 
//Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    
}
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);// returns [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);// returns [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5);// returns [1].
// destroyer([2, 3, 2, 3], 2, 3);// returns [].
// destroyer(["tree", "hamburger", 53], "tree", 53);// returns ["hamburger"].

//###################################################################################
// Where do I belong
//Return the lowest index at which a value (second argument) should be inserted into an 
//array (first argument) once it has been sorted.
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
//because it is greater than 1 (index 0), but less than 2 (index 1).
//Likewise, getIndexToIns([20,3,5], 19) should return 2 
//because once the array has been sorted it will look like [3,5,20], 
//and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
    
}
// getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
// getIndexToIns([40, 60], 50); // should return 1.
// getIndexToIns([3, 10, 5], 3); // should return 0.
// getIndexToIns([5, 3, 20, 3], 5); // should return 2.
// getIndexToIns([2, 20, 10], 19); // should return 2.
// getIndexToIns([2, 5, 10], 15); // should return 3.

//###################################################################################
//	Caesars Cipher
//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
//In a shift cipher the meanings of the letters are shifted by some set amount.
//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
//Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
//but do pass them on.

function caesarsCipher(str) {
	
}

// caesarsCipher("SERR PBQR PNZC"); // Returns "FREE CODE CAMP"
// caesarsCipher("SERR CVMMN!"); // Returns "FREE PIZZA!"
// caesarsCipher("SERR YBIR?"); // Returns "FREE LOVE?"
// caesarsCipher("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
  // Returns "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."


//####################################################################################
//	Intermediate Algorithm Scripting
//####################################################################################

//###################################################################################
// Sum All Number in a Range
//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.
//The lowest number will not always come first.
function sumAll(arr) {
    
}
// sumAll([1, 4]); //Returns a number.
// sumAll([1, 4]); //Returns 10.
// sumAll([4, 1]); //Returns 10.
// sumAll([5, 10]); //Returns 45.
// sumAll([10, 5]); //Returns 45.

//###################################################################################
// Diff Two Array
//Compare two arrays and return a new array with any items only found in one of the two given arrays, 
//but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  	
}

// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
//           ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 
//           //Returns ["pink wool"].

// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
//           ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 
//           //Returns["diorite", "pink wool"].

// diffArray(["andesite", "grass", "dirt", "dead shrub"], 
//           ["andesite", "grass", "dirt", "dead shrub"]); 
//           //Returns [].

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //Returns [4].
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); 
//           //Returns ["piglet", 4].
// diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); 
//           //Returns ["snuffleupagus", "cookie monster", "elmo"].
// diffArray([1, "calf", 3, "piglet"], [7, "filly"]); 
          //Returns [1, "calf", 3, "piglet", 7, "filly"].

//###################################################################################
// Roman Numeral Converter
//Convert the given number into a roman numeral.
//All roman numerals answers should be provided in upper-case.
function convertToRoman(num) {
	
}
// convertToRoman(2);// should return "II".
// convertToRoman(3);// should return "III".
// convertToRoman(4);// should return "IV".
// convertToRoman(5);// should return "V".
// convertToRoman(9);// should return "IX".
// convertToRoman(12);// should return "XII".
// convertToRoman(16);// should return "XVI".
// convertToRoman(29);// should return "XXIX".
// convertToRoman(44);// should return "XLIV".
// convertToRoman(45);// should return "XLV"
// convertToRoman(68);// should return "LXVIII"
// convertToRoman(83);// should return "LXXXIII"
// convertToRoman(97);// should return "XCVII"
// convertToRoman(99);// should return "XCIX"
// convertToRoman(500);// should return "D"
// convertToRoman(501);// should return "DI"
// convertToRoman(649);// should return "DCXLIX"
// convertToRoman(798);// should return "DCCXCVIII"
// convertToRoman(891);// should return "DCCCXCI"
// convertToRoman(1000);// should return "M"
// convertToRoman(1004);// should return "MIV"
// convertToRoman(1006);// should return "MVI"
// convertToRoman(1023);// should return "MXXIII"
// convertToRoman(2014);// should return "MMXIV"
// convertToRoman(3999);// should return "MMMCMXCIX"

//###################################################################################
//	Where Are Thou
function whereAreThou(arr, source){
	//your code goes here
};
// console.log(whereAreThou([{first:'Romeo', last:'Montague'}, {first:'Mercuto', last:null}, 
//\{first:'Tybalt', last:'Capulet'}], {last:'Capulet'}));
//Return [{first:'Tybalt', 'last':'Capulet'}]

//###################################################################################
//	Search and Replace
//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
//NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word, 
//"Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
	
}
// myReplace("Let us go to the store", "store", "mall"); 
        //Returns "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); 
        //Returns "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling"); 
        //Returns "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john"); 
        //Returns "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms"); 
        //Returns "Let us get back to more Algorithms".


//###################################################################################
//	Pig Latin
//Translate the provided string to pig latin.
//Pig Latin takes the first consonant (or consonant cluster) of an English word, 
//moves it to the end of the word and suffixes an "ay".
//If a word begins with a vowel you just add "way" to the end.

function translatePigLatin(str){
	
}
// translatePigLatin("california"); //Returns "aliforniacay".
// translatePigLatin("paragraphs"); //Returns "aragraphspay".
// translatePigLatin("glove"); //Returns "oveglay".
// translatePigLatin("algorithm"); //Returns "algorithmway".
// translatePigLatin("eight"); //Returns "eightway".

//###################################################################################
//	DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, 
//and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
	
}
// pairElement("ATCGA"); //Returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG"); //Returns [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA"); //Returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

//###################################################################################
//	Missing Letter
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	
}
// fearNotLetter("abce");// should return "d".
// fearNotLetter("abcdefghjklmno");// should return "i".
// fearNotLetter("bcd");// should return undefined.
// fearNotLetter("yz");// should return undefined.

//###################################################################################
//	Boo Who
//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
    
}
// booWho(true); //Returns true.
// booWho(false); //Returns true.
// booWho([1, 2, 3]); //Returns false.
// booWho([].slice); //Returns false.
// booWho({ "a": 1 }); //Returns false.
// booWho(1); //Returns false.
// booWho(NaN); //Returns false.
// booWho("a"); //Returns false.
// booWho("true"); //Returns false.
// booWho("false"); //Returns false.

//###################################################################################
//	Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique 
//values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, 
//but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, 
//but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
	
}
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
          // should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
          // should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]);
          // should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
          // should return [1, 2, 3, 5, 4, 6, 7, 8].

//###################################################################################
//	Convert HTML Entities
//Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
//in a string to their corresponding HTML entities.

function convertHTML(str) {

}
// convertHTML("Dolce & Gabbana"); //Returns Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos"); //Returns Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve"); //Returns Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"'); //Returns Stuff in &quot;quotation marks&quot;.
// convertHTML("Shindler's List"); //Returns Shindler&apos;s List.
// convertHTML("<>"); //Returns &lt;&gt;.
// convertHTML("abc"); //Returns abc.

//###################################################################################
//	Spinal Tap Case
//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {

}
// spinalCase("This Is Spinal Tap"); //Returns "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap"); //Returns "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show"); //Returns "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh"); //Returns "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things"); //Returns "all-the-small-things".

//###################################################################################
//	Sum All Odd Fibonacci Number
//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and 
//each subsequent number is the sum of the previous two numbers.
//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {
    
}
// sumFibs(1); //Returns a number.
// sumFibs(4); //Returns 5.
// sumFibs(1000); //Returns 1785.
// sumFibs(4000000); //Returns 4613732.
// sumFibs(75024); //Returns 60696.
// sumFibs(75025); //Returns 135721.

//###################################################################################
//	Summ All Primes
//Sum all the prime numbers up to and including the provided number.
//A prime number is defined as having only two divisors, 1 and itself. For example, 
//2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, 
//because it's only divisible by itself.
//The provided number may not be a prime.

function sumPrimes(num) {
	
}
// sumPrimes(10); //Returns a number.
// sumPrimes(10); //Returns 17.
// sumPrimes(977); //Returns 73156.


//###################################################################################
//	Smallest Common Multiple
//Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
//as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.
//e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is 
//evenly divisible by all numbers between 1 and 3.

function smallestCommons(arr) {
	
}
// smallestCommons([1, 5]); //Returns a number.
// smallestCommons([1, 5]); //Returns 60.
// smallestCommons([5, 1]); //Returns 60.
// smallestCommons([1, 13]); //Returns 360360.

//###################################################################################
//	Finder Keeper
//Create a function that looks through an array (first argument) and returns the first element 
//in the array that passes a truth test (second argument).

function findElement(arr, func) {
    
}
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); //Returns 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); //Returns undefined.


//###################################################################################
//	Steam Roller
//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) { 
	
}
// steamrollArray([[["a"]], [["b"]]]); // Returns ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]); // Returns [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]); // Returns [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]); // Returns [1, {}, 3, 4].

//###################################################################################
//	Drop It
function drop(arr, func){
	//your code goes here
};
// console.log(drop([0,9,7,1,2,3], function(n){ return n < 3; }));	//Return [0, 1, 2]
// console.log(drop([5,6,7,2], function(n){ return n < 3; }));	//Return [2]

//###################################################################################
//	Binary Agents
//Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
	
}

//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 
	//01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 
	//00100001 00111111");
//Return "Aren't bonfires fun!?"
            
//binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 
	//01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 
	//00100001");
//Return "I love FreeCodeCamp!"


//###################################################################################
//Everything Be True 
//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {

}
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
            // {"user": "Dipsy", "sex": "male"}, 
            // {"user": "Laa-Laa", "sex": "female"}, 
            // {"user": "Po", "sex": "female"}], "sex"); //Returns true.

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, 
//             {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, 
//             {"user": "Po", "sex": "female"}], "sex"); //Returns false.

// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, 
//             {"user": "Dipsy", "sex": "male", "age": 3}, 
//             {"user": "Laa-Laa", "sex": "female", "age": 5}, 
//             {"user": "Po", "sex": "female", "age": 4}], "age"); //Returns false.

// truthCheck([{"name": "Pete", "onBoat": true}, 
//             {"name": "Repeat", "onBoat": true}, 
//             {"name": "FastFoward", "onBoat": null}], "onBoat"); //Returns false

// truthCheck([{"name": "Pete", "onBoat": true}, 
//             {"name": "Repeat", "onBoat": true, "alias": "Repete"}, 
//             {"name": "FastFoward", "onBoat": true}], "onBoat");//Returns true

// truthCheck([{"single": "yes"}], "single"); //Returns true
// truthCheck([{"single": ""}, {"single": "double"}], "single"); //Returns false
// truthCheck([{"single": "double"}, {"single": undefined}], "single"); //Returns false
// truthCheck([{"single": "double"}, {"single": NaN}], "single"); //Returns false



//####################################################################################
//	advance Algorithm Scripting
//####################################################################################

//###################################################################################
//	Validate US Telephone Numbers
function telephoneCheck(str){
	//your code goes here
};

// console.log(telephoneCheck('555-555-5555'));		//Return true
// console.log(telephoneCheck('1-555-555-5555'));	//Return true
// console.log(telephoneCheck('(555)555-5555'));	//Return true
// console.log(telephoneCheck('1 555 555 5555'));	//Return true
// console.log(telephoneCheck('5555555555'));			//Return true
// console.log(telephoneCheck('5555555'));				//Return true



//###################################################################################
//	Symmetric Difference
function sym(args){
	//your code goes here
};
// console.log(sym([1,2,3], [5,2,1,4]));	//Return [3,5,4]

//###################################################################################
//	Exact Change
function checkCashRegister(price, cash, cid){
	//your code goes here
};
// console.log(checkCashRegister(19.50, 20.00));	//Return {Quarters: 2}
// console.log(checkCashRegister(19.50, 50.00));	//Return {twenty: 1, ten: 1, quarter: 2}
// console.log(checkCashRegister(19.50, 19.00));	//Return 'You're short of: $0.50'
// console.log(checkCashRegister(19.50, 19.50));	//Return 'No change is needed'
// console.log(checkCashRegister(100.50, 700));		//Return 'Insufficient Fund'

//Test Drive Develpment function
function assertEqual(expr1, expr2) {
	//your code goes here
};
// assertEqual(checkCashRegister(19.50, 20.00).quarter, 2);	//Return 'OK'


//###################################################################################
//	Inventory Update
// var curInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [3, 'Microphone']];
// var newInv = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

function updateInventory(arr1, arr2){
	//your code goes here
};
// console.log(updateInventory(curInv, newInv));

//Return
// Bowling Ball: 67
// Dirty Sock: 2
// Hair Pin: 2
// Half-Eaten Apple: 3
// Microphone: 3
// Toothpaste: 7

//###################################################################################
//	No Repeat Please
function permAlone(str){
	//your code goes here
};
// console.log(permAlone('aab'));	

//Return 
// Parameter pass in: aab
// permutations of parameters: aab,aba,aab,aba,baa,baa
// 2: [aba,aba]

function permutations(str){
	//your code goes here
}

function checkRepeatChar(str){
	//your code goes here
}

//###################################################################################
//	Friendly Date Rangers
function makeFriendlyDates(arr){
	//your code goes here

};
// console.log(makeFriendlyDates(['2016-07-01', '2018-07-04', '2016-11-25']));		

//Return ["July 1st, 2016", "July 4th, 2018", "November 25, 2016"]; 


//###################################################################################
//	Map the Debris
function obitalPeriod(arr){
	//your code goes here	
};
// console.log(obitalPeriod([{name: 'sputnik', avgAlt: 35873.5553}]));

//###################################################################################
//	Pairwise
function pairwise(arr, arg){
	//your code goes here
};
// console.log(pairwise([1, 4, 2, 3, 0, 5], 7));	

//Return
// Valid pairs: [4,3,2,5] Sum: 14
// Indices Array: [1,3,2,5] Sum: 11

