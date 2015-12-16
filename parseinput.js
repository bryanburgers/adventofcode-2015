'use strict';

function parseInput() {
	return new Promise(function(resolve, reject) {
		let string = '';
		process.stdin.on('data', function(data) {
			if (data) {
				string += data;
			}
		});
		process.stdin.on('end', function(data) {
			if (data) {
				string += data;
			}

			let result = string.trim();
			resolve(result);
		});
	});
}

parseInput.lines = function(fn) {
	return parseInput()
		.then(function(input) {
			return input
				.split('\n')
				.map(line => line.trim())
				.map(fn);
		});
}

module.exports = parseInput;
