'use strict';

const Reindeer = require('./reindeer');
const parse = require('../parseinput');

parse.lines(Reindeer.parse).then(function(reindeers) {
    let maxDistance = 0;
    for (let reindeer of reindeers) {
        maxDistance = Math.max(maxDistance, reindeer.distanceAfterSeconds(2503));
    }
    return maxDistance;
}).then(console.log);
