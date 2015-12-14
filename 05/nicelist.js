'use strict';

exports.check = function check(input) {
    let vowelCount = 0;
    let lastLetter = null;
    let hasDuplicateLetter = false;

    for (let letter of input) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowelCount++;
                break;
            case 'b':
                if (lastLetter == 'a') {
                    return false;
                }
                break;
            case 'd':
                if (lastLetter == 'c') {
                    return false;
                }
                break;
            case 'q':
                if (lastLetter == 'p') {
                    return false;
                }
                break;
            case 'y':
                if (lastLetter == 'x') {
                    return false;
                }
                break;
        }
        if (lastLetter == letter) {
            hasDuplicateLetter = true;
        }
        lastLetter = letter;
    }

    return (vowelCount >= 3) && hasDuplicateLetter;
}

exports.countLines = function countLines(input) {
    let count = 0;
    for (let line of input.split('\n')) {
        if (exports.check(line)) {
            count++;
        }
    }
    return count;
}
