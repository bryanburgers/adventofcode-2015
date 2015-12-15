'use strict';

const Interpreter = require('./interpreter');
const parse = require('../parseinput');

parse().then(function(input) {
    let i = new Interpreter();
    i.run(input);
    let a = i.get('a');

    let i2 = new Interpreter();
    let input2 = input
        .split('\n')
        .map(line => line.replace(/^.*-> \bb\b/, `${a} -> b`))
        .join('\n');
    i2.run(input2);

    return i2.get('a');
}).then(console.log);
