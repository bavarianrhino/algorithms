
function largestOfFour(arr) {
	var finalArr = [];
	var final;
	for (var i = 0; i < arr.length; i++) {
		arr[i].sort(function(a, b) {
			return b - a;
		});
	}
	for (var j = 0; j < arr.length; j++) {
		final = arr[j][0];
		finalArr.push(final);
	}
	return finalArr;
}


console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])) //  returns [27, 5, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]))  // returns [9, 35, 97, 1000000]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))  // returns [25, 48, 21, -3]
