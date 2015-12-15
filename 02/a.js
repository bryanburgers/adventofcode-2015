'use strict';

const wrapping = require('./wrapping');
const parse = require('../parseinput');

parse().then(wrapping.total).then(console.log);
