'use strict';

const wrapping = require('./wrapping');
const parse = require('../parseinput');

parse().then(wrapping.totalRibbon).then(console.log);
