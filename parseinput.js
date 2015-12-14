'use strict';

module.exports = function() {
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
