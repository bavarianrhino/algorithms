// Chunky Monkey //
// Write a function that splits an array (first argument) into groups the length of size (second argument),
// and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
	var output = [];
	var count = 0;
	while (count < arr.length) {
		// while our count is less than array length, take the sub array by slicing
		var slice = arr.slice(count, count + size);
		// add this sub array to the output array
		output.push(slice);
		// increment count by size
		count += size;
	}
	return output;
}
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
