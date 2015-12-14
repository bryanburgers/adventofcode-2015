'use strict';

const adventcoin = require('./adventcoin');
const parse = require('../parseinput');

parse().then(function(input) { return adventcoin.mine(input, '00000'); }).then(console.log);
