'use strict';

const expect = require('expect');
const Route = require('../../09/route');
const permutations = require('../../09/permutations');

describe('09', function() {
    describe('Route', function() {
        describe('parse', function() {
            it('should parse the example input correctly', function() {
                let route1 = Route.parse('London to Dublin = 464');
                expect(route1).toExist();
                expect(route1.stop1).toEqual('London');
                expect(route1.stop2).toEqual('Dublin');
                expect(route1.distance).toEqual(464);

                let route2 = Route.parse('London to Belfast = 518');
                expect(route2).toExist();
                expect(route2.stop1).toEqual('London');
                expect(route2.stop2).toEqual('Belfast');
                expect(route2.distance).toEqual(518);

                let route3 = Route.parse('Dublin to Belfast = 141');
                expect(route3).toExist();
                expect(route3.stop1).toEqual('Dublin');
                expect(route3.stop2).toEqual('Belfast');
                expect(route3.distance).toEqual(141);
            });
        });

        describe('getLocations', function() {
            it('get all locations', function() {
                let routes = [
                    new Route('London', 'Dublin', 464),
                    new Route('London', 'Belfast', 518),
                    new Route('Dublin', 'Belfast', 141),
                ]

                expect(Route.getLocations(routes))
                    .toInclude('London')
                    .toInclude('Belfast')
                    .toInclude('Dublin');
            });
        });

        describe('distance', function() {
            it('gets proper distances', function() {
                let routes = [
                    new Route('London', 'Dublin', 464),
                    new Route('London', 'Belfast', 518),
                    new Route('Dublin', 'Belfast', 141),
                ]

                expect(Route.distance(['Dublin', 'London', 'Belfast'], routes)).toEqual(982);
                expect(Route.distance(['London', 'Dublin', 'Belfast'], routes)).toEqual(605);
                expect(Route.distance(['London', 'Belfast', 'Dublin'], routes)).toEqual(659);
                expect(Route.distance(['Dublin', 'Belfast', 'London'], routes)).toEqual(659);
                expect(Route.distance(['Belfast', 'Dublin', 'London'], routes)).toEqual(605);
                expect(Route.distance(['Belfast', 'London', 'Dublin'], routes)).toEqual(982);
            });
        });
    });
    describe('permutations', function() {
        it('should return a single permutation for a single item', function() {
            expect(permutations([1])).toEqual([[1]]);
        });
        it('should two permutations for two items', function() {
            expect(permutations([1,2]))
                .toInclude([1,2])
                .toInclude([2,1]);
        });
        it('should six permutations for three items', function() {
            expect(permutations([1,2,3]))
                .toInclude([1,2,3])
                .toInclude([1,3,2])
                .toInclude([2,1,3])
                .toInclude([2,3,1])
                .toInclude([3,1,2])
                .toInclude([3,2,1]);
        });
    });
});
