'use strict';

const crypto = require('crypto');

exports.hash = function hash(key, number) {
    var h = crypto.createHash('md5');
    h.update(key);
    h.update(number.toString());
    return h.digest('hex');
}

exports.mine = function mine(key, prefix) {

    let i = 1;

    while (true) {
        let h = exports.hash(key, i);
        if (h.substring(0, prefix.length) == prefix) {
            return i;
        }

        i++;

        // Just in case the code is wrong.
        if (i > 9999999) {
            return;
        }
    }
}
