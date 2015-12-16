'use strict';

class Route {
    constructor(stop1, stop2, distance) {
        this.stop1 = stop1;
        this.stop2 = stop2;
        this.distance = distance;
    }

    static parse(input) {
        let matches = input.match(/^(\w+) to (\w+) = (\d+)$/);
        if (!matches) {
            return null;
        }

        return new Route(matches[1], matches[2], parseInt(matches[3]));
    }

    static getLocations(routes) {
        let seen = {};
        let locations = [];
        for (let route of routes) {
            if (!seen[route.stop1]) {
                locations.push(route.stop1);
                seen[route.stop1] = true;
            }
            if (!seen[route.stop2]) {
                locations.push(route.stop2);
                seen[route.stop2] = true;
            }
        }
        return locations;
    }

    static distance(stops, routes) {
        function findRoute(stop1, stop2) {
            return routes.filter(route => (route.stop1 == stop1 && route.stop2 == stop2) || (route.stop1 == stop2 && route.stop2 == stop1))[0];
        }

        let total = 0;

        for (let i = 0; i < stops.length - 1; i++) {
            let stop1 = stops[i];
            let stop2 = stops[i+1];
            let route = findRoute(stop1, stop2);
            total += route.distance;
        }

        return total;
    }
}

module.exports = Route;
