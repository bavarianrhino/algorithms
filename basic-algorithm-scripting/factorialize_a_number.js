//Factorialize a Number
function factorialize(num) {
	if (num === 0) {
		return 1;
	} else {
		let multipliedNum = 1;
		for (let i = num; i > 1; i--) {
			multipliedNum = multipliedNum * i;
		}
		return multipliedNum;
	}
}
// console.log(factorialize(0)); // should return 1.
// console.log(factorialize(5)); // should return 120.
// console.log(factorialize(10)); // should return 3628800.
// console.log(factorialize(20)); // should return 2432902008176640000.
