// Finder Keeper //
// Create a function that looks through an array (first argument) and 
// returns the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {
    var num = 0;
    var filteredArr = arr.filter(function(num){
        return func(num);
    });
    if(filteredArr[0] === undefined){
        return undefined;
    }else{
        return filteredArr[0];
    }
}
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); //Returns 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); //Returns undefined.