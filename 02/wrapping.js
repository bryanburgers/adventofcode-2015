'use strict';

exports.paperNeeded = function paperNeeded(input) {
	let results = input.match(/(\d+)x(\d+)x(\d+)/);
	if (!results) {
		return 0;
	}
	let sides = [parseInt(results[1]), parseInt(results[2]), parseInt(results[3])];
	sides.sort((a, b) => a - b);
	let result = 3 * sides[0] * sides[1] + 2 * sides[0] * sides[2] + 2 * sides[1] * sides[2];
	return result;
}

exports.total = function total(input) {
	const lines = input.split('\n').map(line => line.trim());
	let sum = 0;
	for (let line of lines) {
		sum += exports.paperNeeded(line);
	}
	return sum;
}
