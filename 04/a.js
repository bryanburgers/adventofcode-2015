'use strict';

const adventcoin = require('./adventcoin');
const parse = require('../parseinput');

parse().then(adventcoin.mine).then(console.log);
