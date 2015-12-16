'use strict';

function permutations(arr) {
    let accumulator = [];

    if (arr.length == 0) {
        return [];
    }
    if (arr.length == 1) {
        return [[arr[0]]];
    }

    for (let item of arr) {
        let copyWithoutItem = arr.filter(i => i != item);
        let perms = permutations(copyWithoutItem);
        for (let perm of perms) {
            perm.unshift(item);
            accumulator.push(perm);
        }
    }

    return accumulator;
}

module.exports = permutations;
