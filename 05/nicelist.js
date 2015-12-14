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

exports.check2 = function check2(input) {
    let twoLetterDuplicate = false;
    for (let i = 0; i < input.length - 2; i++) {
        let two = input.substring(i, i + 2);
        let lastIndex = input.lastIndexOf(two);
        if (lastIndex >= i + 2) {
            twoLetterDuplicate = true;
            break;
        }
    }

    let oneLetterDuplicate = false;
    for (let j = 0; j < input.length; j++) {
        if (input[j] == input[j+2]) {
            oneLetterDuplicate = true;
            break;
        }
    }

    return twoLetterDuplicate && oneLetterDuplicate;
}

exports.countLines2 = function countLines2(input) {
    let count = 0;
    for (let line of input.split('\n')) {
        if (exports.check2(line)) {
            count++;
        }
    }
    return count;
}
