'use strict';

const expect = require('expect');
const adventcoin = require('../../04/adventcoin');

describe('03', function() {
    describe('adventcoin.hash', function() {
        it('should match the given inputs', function() {
            expect(adventcoin.hash('abcdef', 609043).substring(0, 11)).toEqual('000001dbbfa');
            expect(adventcoin.hash('pqrstuv', 1048970).substring(0, 11)).toEqual('000006136ef');
        })
    });
    describe('adventcoin.mine', function() {
        this.timeout(0);
        it('should match the given input 1', function() {
            expect(adventcoin.mine('abcdef', '00000')).toEqual(609043);
        });
        it('should match the given input 2', function() {
            expect(adventcoin.mine('pqrstuv', '00000')).toEqual(1048970);
        })
    });
});
