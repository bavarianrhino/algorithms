// Boo Who //
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
	if (typeof bool === 'boolean') {
		return true;
	} else {
		return false;
	}
}
booWho(true); //Returns true.
booWho(false); //Returns true.
booWho([1, 2, 3]); //Returns false.
booWho([].slice); //Returns false.
booWho({ a: 1 }); //Returns false.
booWho(1); //Returns false.
booWho(NaN); //Returns false.
booWho('a'); //Returns false.
booWho('true'); //Returns false.
booWho('false'); //Returns false.
