'use strict';

const brightnessgrid = require('./brightnessgrid');
const command = require('./command');
const parse = require('../parseinput');

parse().then(function(input) {
    let g = brightnessgrid(1000, 1000);
    for (let line of input.split('\n')) {
        command.parse(line).apply(g);
    }
    return g.totalBrightness();
}).then(console.log);
