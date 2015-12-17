'use strict';

const jsonreduce = require('./jsonreduce');
const parse = require('../parseinput');

parse().then(function(input) {
    let jsonsum = jsonreduce.withoutRed((a, b) => a + b, 0);
    let json = JSON.parse(input);
    return jsonsum(json);
}).then(console.log);
