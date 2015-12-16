'use strict';

const Route = require('./route');
const permutations = require('./permutations');
const parse = require('../parseinput');

parse.lines(Route.parse).then(function(routes) {
    let locations = Route.getLocations(routes);
    let perms = permutations(locations);

    let min = Infinity;
    for (let perm of perms) {
        let distance = Route.distance(perm, routes);
        min = Math.min(distance, min);
    }

    return min;
}).then(console.log);
