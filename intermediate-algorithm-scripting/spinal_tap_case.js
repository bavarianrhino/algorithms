//#############################################################################//
// Spinal Tap Case //
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
	str = str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/ /g,'-').replace(/_/g,'-').toLowerCase();
	return str;
}
spinalCase("This Is Spinal Tap"); //Returns "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); //Returns "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); //Returns "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); //Returns "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //Returns "all-the-small-things".