'use strict';

const assert = require('assert');
const elevator = require('../../01/elevator');

describe('01a', function() {
    describe('elevatorCount', function() {
        it('should match the given inputs', function() {
            assert.equal(0, elevator.count('(())'));
            assert.equal(0, elevator.count('()()'));
            assert.equal(3, elevator.count('((('));
            assert.equal(3, elevator.count('(()(()('));
            assert.equal(3, elevator.count('))((((('));
            assert.equal(-1, elevator.count('())'));
            assert.equal(-1 , elevator.count('))('));
            assert.equal(-3, elevator.count(')))'));
            assert.equal(-3, elevator.count(')())())'));
        })
    });
    describe('elevatorIndex', function() {
        it('should match the given inputs', function() {
            assert.equal(1, elevator.index(')'));
            assert.equal(5, elevator.index('()())'));
        })
    });
});
