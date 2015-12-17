'use strict';

const Happiness = require('./happiness');
const permutations = require('../09/permutations');
const parse = require('../parseinput');

parse.lines(Happiness.parse).then(function(happinesses) {
    let people = Happiness.getPeople(happinesses);

    let me = 'me';
    for (let person of people) {
        happinesses.push(new Happiness(me, person, 0));
        happinesses.push(new Happiness(person, me, 0));
    }
    people.push(me);

    let perms = permutations(people);

    let max = 0;
    for (let perm of perms) {
        let total = Happiness.calculate(perm, happinesses);
        max = Math.max(total, max);
    }

    return max;
}).then(console.log);
