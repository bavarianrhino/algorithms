// Repeat String Num Times //
// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument).
// Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(str);
	}
	var newStr = arr.join('');
	return newStr;
}
repeatStringNumTimes('*', 3); // returns "***".
repeatStringNumTimes('abc', 3); // returns "abcabcabc".
repeatStringNumTimes('abc', 4); // returns "abcabcabcabc".
repeatStringNumTimes('abc', 1); // returns "abc".
repeatStringNumTimes('*', 8); // returns "********".
repeatStringNumTimes('abc', -2); // returns "".

//OR//

function repeatString2(string, num) {
	return string.repeat(num);
}
repeatString2('test', 3);
repeatString2('test this out ', 3);
repeatString2('Marsha ', 3);
