'use strict'

module.exports = function looksay(input) {
    if (input.length == 0) {
        return 0;
    }

    let lastDigit = input[0];
    let count = 1;
    let str = '';

    for (let i = 1; i < input.length; i++) {
        let digit = input[i];
        if (digit == lastDigit) {
            count++;
        }
        else {
            str += count.toString() + lastDigit;
            count = 1;
            lastDigit = digit;
        }
    }

    str += count.toString() + lastDigit;

    return str;
}
