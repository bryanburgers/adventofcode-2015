'use strict';

const assert = require('assert');
const wrapping = require('../../02/wrapping');

describe('02', function() {
    describe('wrapping.paperNeeded', function() {
        it('should match the given inputs', function() {
            assert.equal(wrapping.paperNeeded('2x3x4'), 58);
            assert.equal(wrapping.paperNeeded('4x3x2'), 58);
            assert.equal(wrapping.paperNeeded('1x1x10'), 43);
        });
        it('should match some other checked inputs', function() {
            assert.equal(wrapping.paperNeeded(''), 0);
            assert.equal(wrapping.paperNeeded('29x26x12'), 3140);
            assert.equal(wrapping.paperNeeded('10x2x2'), 3*2*2 + 2*2*10 + 2*2*10);
        });
    });
    describe('wrapping.total', function() {
        it('should work for some arbitrary inputs', function() {
            assert.equal(wrapping.total('2x3x4\n1x1x10'), 101);
            assert.equal(wrapping.total('2x3x4\r\n1x1x10'), 101);
            assert.equal(wrapping.total('2x3x4\n1x1x10\n'), 101);
            assert.equal(wrapping.total('2x3x4\r\n1x1x10\r\n'), 101);
        });
    });
});
