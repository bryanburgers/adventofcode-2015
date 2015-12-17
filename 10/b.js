'use strict';

const looksay = require('./looksay');
const parse = require('../parseinput');

parse().then(function(input) {
    input = input.trim();
    for (var i = 0; i < 50; i++) {
        input = looksay(input);
    }
    return input.length;
}).then(console.log);
