'use strict';

exports.path = function path(input) {
    let path = ['0,0'];
    let x = 0;
    let y = 0;
    for (let char of input) {
        switch (char) {
            case '^':
                y--;
                break;
            case 'v':
                y++;
                break;
            case '<':
                x--;
                break;
            case '>':
                x++;
                break;
            default:
                continue;
        }
        path.push(`${x},${y}`);
    }
    return path;
}

exports.unique = function unique(input) {
    let path = exports.path(input);
    path.sort();
    let unique = 0;
    let last = null;
    for (let item of path) {
        if (item == last) {
            continue;
        }

        last = item;
        unique++;
    }

    return unique;
}

exports.splitInput = function splitInput(input) {
    let santa = '';
    let robo = '';
    let isSanta = true;

    for (let char of input) {
        if (isSanta) {
            santa += char;
        }
        else {
            robo += char;
        }
        isSanta = !isSanta;
    }

    return [santa, robo];
}

exports.unique2 = function unique2(input) {
    let inputs = exports.splitInput(input);
    let pathSanta = exports.path(inputs[0]);
    let pathRobo = exports.path(inputs[1]);
    let houses = pathSanta.concat(pathRobo);
    houses.sort();
    let unique = 0;
    let last = null;
    for (let item of houses) {
        if (item == last) {
            continue;
        }

        last = item;
        unique++;
    }

    return unique;
}
