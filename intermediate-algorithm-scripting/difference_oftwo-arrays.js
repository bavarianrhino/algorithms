//#############################################################################//
// Difference //
// Compare two arrays and return a new array with any items only 
// found in one of the two given arrays, but not both. 
// In other words find the symmetric difference of the two arrays. 

//Return the Difference of Two Arrays:
var difference = function(arr1, arr2) {
	var newArr = [];
		arr1.forEach(function (elm) {
			if(arr2.indexOf(elm) === -1) {
				newArr.push(elm);
			}
		});
		arr2.forEach(function(elm) {
			if(arr1.indexOf(elm) === -1) {
				newArr.push(elm);
			}
		});
		return newArr;
};
"The difference is: ", difference([1,2,3,5], [1,2,3,4,5]); //returns [4]
"The difference is: ", difference([4,2,5,2], [1,2,3,4,5]); //returns [1, 3]
"The difference is: ", difference(['harash','ryan','zach','jeremy'], ['harash','zach','jeremy']);