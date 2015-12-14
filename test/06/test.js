'use strict';

const expect = require('expect');
const grid = require('../../06/grid');
const command = require('../../06/command');

describe('06', function() {
    describe('grid', function() {
        it('should be able to turn on a single light', function() {
            let g = grid(10, 10);
            g.turnOn([0, 0], [0, 0]);
            expect(g.isOn([0, 0])).toEqual(true);
            expect(g.isOn([0, 1])).toEqual(false);
        });
        it('should be able to turn on a range of lights', function() {
            let g = grid(10, 10);
            g.turnOn([0, 0], [2, 3]);
            for (let x = 0; x <= 2; x++) {
                for (let y = 0; y <= 3; y++) {
                    expect(g.isOn([x, y])).toEqual(true);
                }
            }
            expect(g.isOn([3, 0])).toEqual(false);
        });
        it('should be able to turn off a single light', function() {
            let g = grid(10, 10);
            g.turnOn([0, 0], [10, 10]);
            g.turnOff([0, 0], [0, 0]);
            expect(g.isOn([0, 0])).toEqual(false);
            expect(g.isOn([0, 1])).toEqual(true);
        });
        it('should be able to turn off a range of lights', function() {
            let g = grid(10, 10);
            g.turnOn([0, 0], [10, 10]);
            g.turnOff([0, 0], [2, 3]);
            for (let x = 0; x <= 2; x++) {
                for (let y = 0; y <= 3; y++) {
                    expect(g.isOn([x, y])).toEqual(false);
                }
            }
            expect(g.isOn([3, 0])).toEqual(true);
        });
        it('should be able to toggle a single light', function() {
            let g = grid(10, 10);
            g.toggle([0, 0], [0, 0]);
            expect(g.isOn([0, 0])).toEqual(true);
            g.toggle([0, 0], [0, 0]);
            expect(g.isOn([0, 0])).toEqual(false);
        });
        it('should be able to toggle a range of lights', function() {
            let g = grid(10, 10);
            g.toggle([0, 0], [2, 2]);
            for (let x = 0; x <= 2; x++) {
                for (let y = 0; y <= 2; y++) {
                    expect(g.isOn([x, y])).toEqual(true);
                }
            }
            g.toggle([0, 0], [2, 2]);
            for (let x = 0; x <= 2; x++) {
                for (let y = 0; y <= 2; y++) {
                    expect(g.isOn([x, y])).toEqual(false);
                }
            }
        });
        it('should be able to toggle lights independently', function() {
            let g = grid(10, 10);
            g.turnOn([0, 1], [0, 1]);
            expect(g.isOn([0, 0])).toEqual(false);
            expect(g.isOn([0, 1])).toEqual(true);
            g.toggle([0, 0], [0, 1]);
            expect(g.isOn([0, 0])).toEqual(true);
            expect(g.isOn([0, 1])).toEqual(false);
            g.toggle([0, 0], [0, 1]);
            expect(g.isOn([0, 0])).toEqual(false);
            expect(g.isOn([0, 1])).toEqual(true);
        });
        it('counts how many lights are lit', function() {
            let g = grid(10, 10);
            expect(g.countLit()).toEqual(0);
            g.turnOn([0, 0], [1, 1]);
            expect(g.countLit()).toEqual(4);
            g.turnOn([0, 0], [9, 9]);
            expect(g.countLit()).toEqual(100);
        });
    });
    describe('command', function() {
        describe('parse', function() {
            it('parses on correctly', function() {
                let c = command.parse('turn on 660,55 through 986,197');
                expect(c.action).toEqual('on');
                expect(c.topLeft).toEqual([660, 55]);
                expect(c.bottomRight).toEqual([986, 197]);
            });
            it('parses off correctly', function() {
                let c = command.parse('turn off 660,55 through 986,197');
                expect(c.action).toEqual('off');
                expect(c.topLeft).toEqual([660, 55]);
                expect(c.bottomRight).toEqual([986, 197]);
            });
            it('parses toggle', function() {
                let c = command.parse('toggle 660,55 through 986,197');
                expect(c.action).toEqual('toggle');
                expect(c.topLeft).toEqual([660, 55]);
                expect(c.bottomRight).toEqual([986, 197]);
            });
        });
        describe('apply', function() {
            it('applies on correctly', function() {
                let g = grid(10, 10);
                let c = command.parse('turn on 0,0 through 1,3');
                c.apply(g);
                expect(g.isOn([0, 0])).toEqual(true);
                expect(g.isOn([1, 3])).toEqual(true);
            });
            it('applies off correctly', function() {
                let g = grid(10, 10);
                g.turnOn([0, 0], [10, 10]);
                let c = command.parse('turn off 0,0 through 1,3');
                c.apply(g);
                expect(g.isOn([0, 0])).toEqual(false);
                expect(g.isOn([1, 3])).toEqual(false);
            });
            it('applies toggle', function() {
                let g = grid(10, 10);
                g.turnOn([1, 3], [1, 3]);
                let c = command.parse('toggle 0,0 through 1,3');
                c.apply(g);
                expect(g.isOn([0, 0])).toEqual(true);
                expect(g.isOn([1, 3])).toEqual(false);
            });
        });
    });
});
