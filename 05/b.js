'use strict';

const nicelist = require('./nicelist');
const parse = require('../parseinput');

parse().then(nicelist.countLines2).then(console.log);
