'use strict';

const assert = require('assert');
const expect = require('expect');
const santa = require('../../03/santa');

describe('03', function() {
    describe('santa.path', function() {
        it('should match the given inputs', function() {
            expect(santa.path('>')).toEqual(['0,0', '1,0']);
            expect(santa.path('^>v<')).toEqual(['0,0', '0,-1', '1,-1', '1,0', '0,0']);
            expect(santa.path('^v^v^v^v^v')).toEqual(['0,0', '0,-1', '0,0', '0,-1', '0,0', '0,-1', '0,0', '0,-1', '0,0', '0,-1', '0,0']);
        })
    });
    describe('santa.unique', function() {
        it('should match the given inputs', function() {
            expect(santa.unique('>')).toEqual(2);
            expect(santa.unique('^>v<')).toEqual(4);
            expect(santa.unique('^v^v^v^v^v')).toEqual(2);
        })
    });
});
