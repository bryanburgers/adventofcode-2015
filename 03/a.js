'use strict';

const santa = require('./santa');
const parse = require('../parseinput');

parse().then(santa.unique).then(console.log);
