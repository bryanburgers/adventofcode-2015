'use strict';

const expect = require('expect');
const Happiness = require('../../13/happiness');

describe('13', function() {
    describe('Happiness', function() {
        describe('parse', function() {
            it('should parse the example input correctly', function() {
                let h1 = Happiness.parse('Alice would gain 54 happiness units by sitting next to Bob.');
                expect(h1.person).toEqual('Alice');
                expect(h1.relation).toEqual('Bob');
                expect(h1.value).toEqual(54);
                let h2 = Happiness.parse('Alice would lose 79 happiness units by sitting next to Carol.');
                expect(h2.person).toEqual('Alice');
                expect(h2.relation).toEqual('Carol');
                expect(h2.value).toEqual(-79);
            });
        });
        describe('getPeople', function() {
            it('should handle the example input correctly', function() {
                let happinesses = [
                    new Happiness('Alice', 'Bob', 54),
                    new Happiness('Alice', 'Carol', -79),
                    new Happiness('Alice', 'David', -2),
                    new Happiness('Bob', 'Alice', 83),
                    new Happiness('Bob', 'Carol', -7),
                    new Happiness('Bob', 'David', -63),
                    new Happiness('Carol', 'Alice', -62),
                    new Happiness('Carol', 'Bob', 60),
                    new Happiness('Carol', 'David', 55),
                    new Happiness('David', 'Alice', 46),
                    new Happiness('David', 'Bob', -7),
                    new Happiness('David', 'Carol', 41)
                ];
                let people = Happiness.getPeople(happinesses);
                expect(people).toInclude('Alice');
                expect(people).toInclude('Bob');
                expect(people).toInclude('Carol');
                expect(people).toInclude('David');
            });
        });
        describe('calculate', function() {
            it('should calculate the example input correctly', function() {
                let order = ['David', 'Alice', 'Bob', 'Carol'];
                let happinesses = [
                    new Happiness('Alice', 'Bob', 54),
                    new Happiness('Alice', 'Carol', -79),
                    new Happiness('Alice', 'David', -2),
                    new Happiness('Bob', 'Alice', 83),
                    new Happiness('Bob', 'Carol', -7),
                    new Happiness('Bob', 'David', -63),
                    new Happiness('Carol', 'Alice', -62),
                    new Happiness('Carol', 'Bob', 60),
                    new Happiness('Carol', 'David', 55),
                    new Happiness('David', 'Alice', 46),
                    new Happiness('David', 'Bob', -7),
                    new Happiness('David', 'Carol', 41)
                ];
                expect(Happiness.calculate(order, happinesses)).toEqual(330);
            });
        });
    });
});
