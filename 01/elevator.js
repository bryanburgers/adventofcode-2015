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
