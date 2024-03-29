// Truncate a string //
// Truncate a string (first argument) if it is longer than the given maximum string length
// (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3,
// then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
	if (num >= str.length) {
		return str;
	}
	if (num <= 3) {
		var newStr = str.slice(0, num) + '...';
		return newStr;
	} else {
		var sliceNum = num - 3;
		var newStr2 = str.slice(0, sliceNum) + '...';
		return newStr2;
	}
}
truncateString('A-tisket a-tasket A green and yellow basket', 11); // returns "A-tisket...".
truncateString('Peter Piper picked a peck of pickled peppers', 14); // returns "Peter Piper...".
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);
// returns "A-tisket a-tasket A green and yellow basket".
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2);
// returns "A-tisket a-tasket A green and yellow basket".
truncateString('A-', 1); // returns "A...".
truncateString('Absolutely Longer', 2); // returns "Ab...".
