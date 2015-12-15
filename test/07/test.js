'use strict';

const expect = require('expect');
const Command = require('../../07/command');
const Interpreter = require('../../07/interpreter');

describe('07', function() {
    describe('command', function() {
        describe('parse', function() {
            it('should parse literal assignment', function() {
                let c1 = Command.parse('123 -> x');
                expect(c1.type).toEqual('assignment');
                expect(c1.input1).toEqual(123);
                expect(c1.output).toEqual('x');

                let c2 = Command.parse('0 -> xyz');
                expect(c2.type).toEqual('assignment');
                expect(c2.input1).toEqual(0);
                expect(c2.output).toEqual('xyz');
            });
            it('should parse variable assignment', function() {
                let c1 = Command.parse('y -> x');
                expect(c1.type).toEqual('assignment');
                expect(c1.input1).toEqual('y');
                expect(c1.output).toEqual('x');

                let c2 = Command.parse('abc -> xyz');
                expect(c2.type).toEqual('assignment');
                expect(c2.input1).toEqual('abc');
                expect(c2.output).toEqual('xyz');
            });
            it('should parse AND with variables', function() {
                let c1 = Command.parse('a AND b -> c');
                expect(c1.type).toEqual('and');
                expect(c1.input1).toEqual('a');
                expect(c1.input2).toEqual('b');
                expect(c1.output).toEqual('c');
            });
            it('should parse AND with literals', function() {
                let c1 = Command.parse('1 AND b -> c');
                expect(c1.type).toEqual('and');
                expect(c1.input1).toEqual(1);
                expect(c1.input2).toEqual('b');
                expect(c1.output).toEqual('c');

                let c2 = Command.parse('a AND 1 -> c');
                expect(c2.type).toEqual('and');
                expect(c2.input1).toEqual('a');
                expect(c2.input2).toEqual(1);
                expect(c2.output).toEqual('c');
            });
            it('should parse OR with variables', function() {
                let c1 = Command.parse('a OR b -> c');
                expect(c1.type).toEqual('or');
                expect(c1.input1).toEqual('a');
                expect(c1.input2).toEqual('b');
                expect(c1.output).toEqual('c');
            });
            it('should parse OR with literals', function() {
                let c1 = Command.parse('1 OR b -> c');
                expect(c1.type).toEqual('or');
                expect(c1.input1).toEqual(1);
                expect(c1.input2).toEqual('b');
                expect(c1.output).toEqual('c');

                let c2 = Command.parse('a OR 1 -> c');
                expect(c2.type).toEqual('or');
                expect(c2.input1).toEqual('a');
                expect(c2.input2).toEqual(1);
                expect(c2.output).toEqual('c');
            });
            it('should parse NOT', function() {
                let c1 = Command.parse('NOT a -> c');
                expect(c1.type).toEqual('not');
                expect(c1.input1).toEqual('a');
                expect(c1.output).toEqual('c');
            });
            it('should parse LSHIFT', function() {
                let c1 = Command.parse('a LSHIFT 2 -> c');
                expect(c1.type).toEqual('lshift');
                expect(c1.input1).toEqual('a');
                expect(c1.input2).toEqual(2);
                expect(c1.output).toEqual('c');
            });
            it('should parse RSHIFT', function() {
                let c1 = Command.parse('a RSHIFT 2 -> c');
                expect(c1.type).toEqual('rshift');
                expect(c1.input1).toEqual('a');
                expect(c1.input2).toEqual(2);
                expect(c1.output).toEqual('c');
            });
            it('should throw an error on an invalid command', function() {
                expect(() => Command.parse('x WHAT y -> z')).toThrow(/Invalid command.*WHAT/);
            });
        });
    });
    describe('interpreter', function() {
        describe('apply', function() {
            it('should apply literal assignment', function() {
                let i = new Interpreter();
                i.apply(new Command('assignment', 21, null, 'a'));
                i.apply(new Command('assignment', 22, null, 'b'));
                expect(i.get('a')).toEqual(21);
                expect(i.get('b')).toEqual(22);
            });
            it('should apply variable assignment', function() {
                let i = new Interpreter();
                i.apply(new Command('assignment', 21, null, 'a'));
                i.apply(new Command('assignment', 'a', null, 'b'));
                expect(i.get('b')).toEqual(21);
            });
            it('should apply AND with variables', function() {
                let i1 = new Interpreter();
                i1.apply(new Command('assignment', 1, null, 'a'));
                i1.apply(new Command('assignment', 2, null, 'b'));
                i1.apply(new Command('and', 'a', 'b', 'c'));
                expect(i1.get('c')).toEqual(0);

                let i2 = new Interpreter();
                i2.apply(new Command('assignment', 2, null, 'a'));
                i2.apply(new Command('assignment', 2, null, 'b'));
                i2.apply(new Command('and', 'a', 'b', 'c'));
                expect(i2.get('c')).toEqual(2);
            });
            it('should apply AND with literals', function() {
                let i1 = new Interpreter();
                i1.apply(new Command('assignment', 1, null, 'a'));
                i1.apply(new Command('and', 'a', 2, 'c'));
                expect(i1.get('c')).toEqual(0);

                let i2 = new Interpreter();
                i2.apply(new Command('assignment', 2, null, 'a'));
                i2.apply(new Command('and', 'a', 2, 'c'));
                expect(i2.get('c')).toEqual(2);
            });
            it('should apply OR with variables', function() {
                let i1 = new Interpreter();
                i1.apply(new Command('assignment', 1, null, 'a'));
                i1.apply(new Command('assignment', 2, null, 'b'));
                i1.apply(new Command('or', 'a', 'b', 'c'));
                expect(i1.get('c')).toEqual(3);

                let i2 = new Interpreter();
                i2.apply(new Command('assignment', 2, null, 'a'));
                i2.apply(new Command('assignment', 2, null, 'b'));
                i2.apply(new Command('or', 'a', 'b', 'c'));
                expect(i2.get('c')).toEqual(2);
            });
            it('should apply OR with literals', function() {
                let i1 = new Interpreter();
                i1.apply(new Command('assignment', 1, null, 'a'));
                i1.apply(new Command('or', 'a', 2, 'c'));
                expect(i1.get('c')).toEqual(3);

                let i2 = new Interpreter();
                i2.apply(new Command('assignment', 2, null, 'a'));
                i2.apply(new Command('or', 'a', 2, 'c'));
                expect(i2.get('c')).toEqual(2);
            });
            it('should apply NOT', function() {
                let i = new Interpreter();
                i.apply(new Command('assignment', 123, null, 'a'));
                i.apply(new Command('not', 'a', null, 'c'));
                expect(i.get('c')).toEqual(65412);

                i.apply(new Command('assignment', 456, null, 'd'));
                i.apply(new Command('not', 'd', null, 'e'));
                expect(i.get('e')).toEqual(65079);
            });
            it('should apply LSHIFT', function() {
                let i1 = new Interpreter();
                i1.apply(new Command('assignment', 1, null, 'a'));
                i1.apply(new Command('lshift', 'a', 2, 'c'));
                expect(i1.get('c')).toEqual(4);
            });
            it('should apply RSHIFT', function() {
                let i1 = new Interpreter();
                i1.apply(new Command('assignment', 4, null, 'a'));
                i1.apply(new Command('rshift', 'a', 2, 'c'));
                expect(i1.get('c')).toEqual(1);
            });
            it('should not apply a command until its inputs are ready', function() {
                let i = new Interpreter();
                i.apply(new Command('or', 'x', 'y', 'z'));
                i.apply(new Command('assignment', 1, null, 'x'));
                i.apply(new Command('assignment', 2, null, 'y'));
                expect(i.get('z')).toEqual(3);
            });
            it('should resolve all deferred commands', function() {
                let i = new Interpreter();
                i.apply(new Command('or', 'a', 'd', 'e'));
                i.apply(new Command('or', 'b', 'c', 'd'));
                i.apply(new Command('assignment', 4, null, 'a'));
                i.apply(new Command('assignment', 1, null, 'b'));
                i.apply(new Command('assignment', 2, null, 'c'));
                expect(i.get('d')).toEqual(3);
                expect(i.get('e')).toEqual(7);
            });
        });
        describe('run', function() {
            it('should run the example program', function() {
                let i = new Interpreter();
                let program = `
                    123 -> x
                    456 -> y
                    x AND y -> d
                    x OR y -> e
                    x LSHIFT 2 -> f
                    y RSHIFT 2 -> g
                    NOT x -> h
                    NOT y -> i
                `;
                i.run(program);
                expect(i.get('d')).toEqual(72);
                expect(i.get('e')).toEqual(507);
                expect(i.get('f')).toEqual(492);
                expect(i.get('g')).toEqual(114);
                expect(i.get('h')).toEqual(65412);
                expect(i.get('i')).toEqual(65079);
                expect(i.get('x')).toEqual(123);
                expect(i.get('y')).toEqual(456);
            });
            it('should throw an error on an unknown command', function() {
                let i = new Interpreter();
                let program = `
                    x WHAT y -> z
                `;
                expect(() => i.run(program)).toThrow(/Invalid command.*WHAT/);
            });
        });
    })
});
