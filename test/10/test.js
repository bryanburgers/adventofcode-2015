'use strict';

const expect = require('expect');
const looksay = require('../../10/looksay');

describe('10', function() {
    describe('looksay', function() {
        it('should parse the example input correctly', function() {
            expect(looksay('1')).toEqual('11', '1 -> 11');
            expect(looksay('11')).toEqual('21', '11 -> 21');
            expect(looksay('21')).toEqual('1211', '21 -> 1211');
            expect(looksay('1211')).toEqual('111221', '1211 -> 111221');
            expect(looksay('111221')).toEqual('312211', '111221 -> 312211');
        });
    });
});
