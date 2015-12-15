'use strict';

const Interpreter = require('./interpreter');
const parse = require('../parseinput');

parse().then(function(input) {
    let i = new Interpreter();
    i.run(input);
    return i.get('a');
}).then(console.log);
