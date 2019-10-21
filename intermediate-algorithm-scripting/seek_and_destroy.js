//#############################################################################//
// Destroyer // Seek and Destroy //
// You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    var temp = [];
    for (var i = 1; i < arguments.length; i++) {
        temp.push(arguments[i]);
        arr = arguments[0].filter(function(value) {
            return (value !== temp[i - 1]) ;
        });
    }
    return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);// returns [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);// returns [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5);// returns [1].
destroyer([2, 3, 2, 3], 2, 3);// returns [].
destroyer(["tree", "hamburger", 53], "tree", 53);// returns ["hamburger"].

/////OR/////

var destroyer2 = function(arr) {
	var arg1 = arguments[0];
	var arg2 = Array.prototype.slice.call(arguments, 1);
	for (var i = 0; i < arg2.length; i++) {
		var check = arg2[i];
		arg1 = arg1.filter(function(x) {
			return x !== check; 
		});
	};
	return arg1;
};
destroyer2([1, 2, 3, 1, 2, 3], 2, 3);  // [1, 1]
destroyer2([1, 2, 3, 1, 2, 3], 2, 3);// returns [1, 1].
destroyer2([1, 2, 3, 5, 1, 2, 3], 2, 3);// returns [1, 5, 1].
destroyer2([3, 5, 1, 2, 2], 2, 3, 5);// returns [1].
destroyer2([2, 3, 2, 3], 2, 3);// returns [].
destroyer2(["tree", "hamburger", 53], "tree", 53);// returns ["hamburger"].
 
/////OR/////

 var destroyer3 = function (arr){
 	var arr = arguments[0];
 	var args = Array.prototype.slice.call(arguments, 1);
 	for (var i = 0; i < args.length; i++) {
 		for (var j = 0; j < arr.length; j++) {
 			if(arr[j] === args[i]) {
 				arr.splice(j, 1);
 			}
 		}
 	}
 	return arr;
 };
destroyer3([1, 2, 3, 1, 2, 3], 2, 3);  // [1, 1]
destroyer3([1, 2, 3, 1, 2, 3], 2, 3);// returns [1, 1].
destroyer3([1, 2, 3, 5, 1, 2, 3], 2, 3);// returns [1, 5, 1].
destroyer3([3, 5, 1, 2, 2], 2, 3, 5);// returns [1].
destroyer3([2, 3, 2, 3], 2, 3);// returns [].
destroyer3(["tree", "hamburger", 53], "tree", 53);// returns ["hamburger"].