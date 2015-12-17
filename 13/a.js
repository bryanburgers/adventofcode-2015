'use strict';

const Happiness = require('./happiness');
const permutations = require('../09/permutations');
const parse = require('../parseinput');

parse.lines(Happiness.parse).then(function(happinesses) {
    let people = Happiness.getPeople(happinesses);
    let perms = permutations(people);

    let max = 0;
    for (let perm of perms) {
        let total = Happiness.calculate(perm, happinesses);
        max = Math.max(total, max);
    }

    return max;
}).then(console.log);
