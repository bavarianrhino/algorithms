//	Confirm the Ending //
//  Check if a string (first argument, str) ends with the given target string
//  (second argument, target).

function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target ? true : false;
}
confirmEnding('Bastian', 'n'); // should return true.
confirmEnding('Connor', 'n'); // should return false.
confirmEnding('Developing software from a specification is easy', 'specification');
// should return false.
confirmEnding('He has to give me a new name', 'name'); //should return true.
confirmEnding('He has to give me a new name', 'me'); // should return true.
confirmEnding('He has to give me a new name', 'na'); // should return false.
confirmEnding('If you want to save our world, you must hurry', 'mountain');
// should return false.
