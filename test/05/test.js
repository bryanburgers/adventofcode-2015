'use strict';

const expect = require('expect');
const nicelist = require('../../05/nicelist');

describe('03', function() {
    describe('nicelist.check', function() {
        it('should match the given inputs', function() {
            expect(nicelist.check('ugknbfddgicrmopn')).toEqual(true);
            expect(nicelist.check('aaa')).toEqual(true);
            expect(nicelist.check('jchzalrnumimnmhp')).toEqual(false);
            expect(nicelist.check('haegwjzuvuyypxyu')).toEqual(false);
            expect(nicelist.check('dvszwmarrgswjxmb')).toEqual(false);
        });
        it('other sanity checks', function() {
            expect(nicelist.check('aaab')).toEqual(false);
            expect(nicelist.check('aaacd')).toEqual(false);
            expect(nicelist.check('aaapq')).toEqual(false);
            expect(nicelist.check('aaaxy')).toEqual(false);
        });
    });
});
