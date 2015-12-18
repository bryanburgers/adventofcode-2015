'use strict';

const Reindeer = require('./reindeer');
const pointrace = require('./pointrace');
const parse = require('../parseinput');

parse.lines(Reindeer.parse).then(function(reindeers) {
    let result = pointrace(2503, reindeers);
    let maxPoints = 0;
    for (let key in result) {
        maxPoints = Math.max(maxPoints, result[key]);
    }
    return maxPoints;
}).then(console.log);
