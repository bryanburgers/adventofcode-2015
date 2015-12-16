'use strict';

const Route = require('./route');
const permutations = require('./permutations');
const parse = require('../parseinput');

parse.lines(Route.parse).then(function(routes) {
    let locations = Route.getLocations(routes);
    let perms = permutations(locations);

    let max = 0;
    for (let perm of perms) {
        let distance = Route.distance(perm, routes);
        max = Math.max(distance, max);
    }

    return max;
}).then(console.log);
