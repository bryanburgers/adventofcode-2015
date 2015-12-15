'use strict';

const Str = require('./str');
const parse = require('../parseinput');

parse().then(function(input) {
    let lines = input.split('\n').map(line => line.trim());
    let diff = 0;
    for (let literal of lines) {
        let memory = Str.parse(literal);
        diff += literal.length - memory.length;
    }
    return diff;
}).then(console.log);
