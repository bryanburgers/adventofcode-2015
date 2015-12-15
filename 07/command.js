'use strict';

class Command {
    constructor(type, input1, input2, output) {
        this.type = type;
        this.input1 = input1;
        this.input2 = input2;
        this.output = output;
    }

    static input(i) {
        let literal = parseInt(i);
        if (!isNaN(literal)) {
            return literal;
        }
        else {
            return i;
        }
    }

    static parse(str) {
        let matches;
        if (matches = str.match(/^(\d+|\w+) -\> (\w+)$/)) {
            return new Command('assignment', Command.input(matches[1]), null, matches[2]);
        }
        if (matches = str.match(/^(\w+|\d+) AND (\w+|\d+) -\> (\w+)$/)) {
            return new Command('and', Command.input(matches[1]), Command.input(matches[2]), matches[3]);
        }
        if (matches = str.match(/^(\w+|\d+) OR (\w+|\d+) -\> (\w+)$/)) {
            return new Command('or', Command.input(matches[1]), Command.input(matches[2]), matches[3]);
        }
        if (matches = str.match(/^NOT (\w+) -\> (\w+)$/)) {
            return new Command('not', matches[1], null, matches[2]);
        }
        if (matches = str.match(/^(\w+) LSHIFT (\d+) -\> (\w+)$/)) {
            return new Command('lshift', matches[1], parseInt(matches[2]), matches[3]);
        }
        if (matches = str.match(/^(\w+) RSHIFT (\d+) -\> (\w+)$/)) {
            return new Command('rshift', matches[1], parseInt(matches[2]), matches[3]);
        }

        throw new Error(`Invalid command: ${str}`);
    }
}

module.exports = Command;
