'use strict';

const elevator = require('./elevator');
const parse = require('../parseinput');

parse().then(elevator.count).then(console.log);
