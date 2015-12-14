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
