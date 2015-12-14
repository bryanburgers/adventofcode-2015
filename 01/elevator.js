'use strict';

exports.count = function(input) {
	let floor = 0;
	for (let char of input) {
		if (char == '(') {
			floor++;
		}
		if (char == ')') {
			floor--;
		}
	}
	return floor;
}

exports.index = function(input) {
	let floor = 0;
	let index = 0;
	for (let char of input) {
		index++;
		if (char == '(') {
			floor++;
		}
		if (char == ')') {
			floor--;
		}
		if (floor < 0) {
			return index;
		}
	}
}
