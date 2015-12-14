'use strict';

const grid = require('./grid');
const command = require('./command');
const parse = require('../parseinput');

parse().then(function(input) {
    let g = grid(1000, 1000);
    for (let line of input.split('\n')) {
        command.parse(line).apply(g);
    }
    return g.countLit();
}).then(console.log);
