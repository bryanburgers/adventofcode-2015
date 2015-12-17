'use strict';

const expect = require('expect');
const jsonreduce = require('../../12/jsonreduce');

describe('12', function() {
    describe('jsonreduce', function() {
        describe('jsonsum', function() {
            let jsonsum = jsonreduce((a, b) => a + b, 0);
            it('should parse the example input correctly', function() {
                expect(jsonsum([1,2,3])).toEqual(6);
                expect(jsonsum({a:2, b:4})).toEqual(6);
                expect(jsonsum([[[3]]])).toEqual(3);
                expect(jsonsum({"a":{"b":4},"c":-1})).toEqual(3);
                expect(jsonsum({"a":[-1,1]})).toEqual(0);
                expect(jsonsum([-1,{"a":1}])).toEqual(0);
                expect(jsonsum([])).toEqual(0);
                expect(jsonsum({})).toEqual(0);
            });
        });
    });
    describe('jsonreduce.withoutRed', function() {
        describe('jsonsum', function() {
            let jsonsum = jsonreduce.withoutRed((a, b) => a + b, 0);
            it('should parse the example input correctly', function() {
                expect(jsonsum([1,2,3])).toEqual(6, 'One');
                expect(jsonsum([1,{"c":"red","b":2},3])).toEqual(4, 'Two');
                expect(jsonsum({"d":"red","e":[1,2,3,4],"f":5})).toEqual(0, 'Three');
                expect(jsonsum([1,"red",5])).toEqual(6, 'Four');
            });
        });
    });
});
