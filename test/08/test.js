'use strict';

const expect = require('expect');
const Str = require('../../08/str');

describe('08', function() {
    describe('Str', function() {
        describe('parse', function() {
            it('should throw an error if the first character is not a quote', function() {
                expect(() => Str.parse('')).toThrow();
            });
            it('should throw an error if there is no second quote', function() {
                expect(() => Str.parse('"asdf')).toThrow();
            });
            it('should throw an error if there are characters after the second quote', function() {
                expect(() => Str.parse('"asdf"asdf')).toThrow();
            });
            it('should parse empty string', function() {
                expect(Str.parse('""')).toEqual('');
            });
            it('should parse normal characters', function() {
                expect(Str.parse('"abc"')).toEqual('abc');
            });
            it('should parse escaped double quote', function() {
                expect(Str.parse('"aaa\\"aaa"')).toEqual('aaa"aaa');
            });
            it('should parse escaped single quote', function() {
                expect(Str.parse('"aaa\\\'aaa"')).toEqual('aaa\'aaa');
            });
            it('should parse escaped escape', function() {
                expect(Str.parse('"aaa\\\\aaa"')).toEqual('aaa\\aaa');
            });
            it('should parse hex', function() {
                expect(Str.parse('"\\x27"')).toEqual('\'', 'apostrophe');
                expect(Str.parse('"\\x62"')).toEqual('b', 'b');
            });
            it('should throw on invalid hex', function() {
                expect(() => Str.parse('"\\xg9"')).toThrow();
                expect(() => Str.parse('"\\x0g"')).toThrow();
            });
            it('should throw an error on an invalid escape', function() {
                expect(() => Str.parse('\\a')).toThrow();
            });
        });
    });
});
