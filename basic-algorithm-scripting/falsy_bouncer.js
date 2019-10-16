//#############################################################################//
// Falsy Bouncer //
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
	var truthyArr = [];
	for (var i = 0; i < arr.length; i++){
		if (arr[i]) {
			truthyArr.push(arr[i]);
		}
	}
	return truthyArr;
}

bouncer([7, "ate", "", false, 9]);// returns [7, "ate", 9].
bouncer(["a", "b", "c"]);// returns ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]);// returns [].
bouncer([1, null, NaN, 2, undefined]);// returns [1, 2].

/////OR/////

var bouncer = function(arr) {
	return arr.filter(function(b) {
		return Boolean(b)
	});
}
bouncer([7, "ate", "", false, 9]);// returns [7, "ate", 9].
bouncer(["a", "b", "c"]);// returns ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]);// returns [].
bouncer([1, null, NaN, 2, undefined]);// returns [1, 2].