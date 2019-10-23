//#############################################################################//
// Sum All Number in a Range //
// We'll pass you an array of two numbers. 
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
    var sumArr = [];
    var sum = 0;
    var sortedArr = arr.sort(function(a, b){
        return b - a;
    });
    for(var i = sortedArr[0]; i >= sortedArr[1]; i--){
        sumArr.push(i);
    }
    sum = sumArr.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum;
}
sumAll([1, 4]); //Returns a number.
sumAll([1, 4]); //Returns 10.
sumAll([4, 1]); //Returns 10.
sumAll([5, 10]); //Returns 45.
sumAll([10, 5]); //Returns 45.