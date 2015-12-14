'use strict';

const santa = require('./santa');
const parse = require('../parseinput');

parse().then(santa.unique2).then(console.log);
