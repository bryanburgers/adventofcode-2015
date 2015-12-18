'use strict';

const expect = require('expect');
const Reindeer = require('../../14/reindeer');

describe('14', function() {
    describe('Reindeer', function() {
        describe('parse', function() {
            it('should parse the example input correctly', function() {
                let r1 = Reindeer.parse('Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.');
                expect(r1.name).toEqual('Comet');
                expect(r1.speed).toEqual(14);
                expect(r1.stamina).toEqual(10);
                expect(r1.recovery).toEqual(127);
                let r2 = Reindeer.parse('Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.');
                expect(r2.name).toEqual('Dancer');
                expect(r2.speed).toEqual(16);
                expect(r2.stamina).toEqual(11);
                expect(r2.recovery).toEqual(162);
            });
            it('should calculate the example input correctly', function() {
                let comet = new Reindeer('Comet', 14, 10, 127);
                let dancer = new Reindeer('Dancer', 16, 11, 162);
                expect(comet.distanceAfterSeconds(2)).toEqual(28);
                expect(comet.distanceAfterSeconds(10)).toEqual(140);
                expect(comet.distanceAfterSeconds(100)).toEqual(140);
                expect(comet.distanceAfterSeconds(1000)).toEqual(1120);
                expect(dancer.distanceAfterSeconds(1000)).toEqual(1056);
            })
        });
    });
});
