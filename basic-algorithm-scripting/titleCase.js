//#############################################################################//
// Title Case a Sentence //
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    var arr = str.split(' ');
    var newArr = arr.map(function(word) {
  	    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
    });
    strNew = newArr.join(' ');
    return strNew;
}
titleCase("I'm a little tea pot"); // returns "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // returns "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // returns "Here Is My Handle Here Is My Spout".