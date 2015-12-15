'use strict';

const Command = require('./command');

class Interpreter {
    constructor() {
        this.vars = {};
        this.deferred = [];
    }

    get(name) {
        if (typeof name == 'number') {
            return name;
        }

        if (name in this.vars) {
            return this.vars[name];
        }
        else {
            return null;
        }
    }

    clamp(value) {
        return value & 65535;
    }

    apply(command) {
        if (this.applyOne(command)) {
            while (this.applyDeferred());
        }
        else {
            this.deferred.push(command);
        }
    }

    applyDeferred() {
        let length = this.deferred.length;
        this.deferred = this.deferred.filter(command => !this.applyOne(command));

        // Return true if at least one deferred command was applied.
        return this.deferred.length != length;
    }

    applyOne(command) {
        switch (command.type) {
            case 'assignment':
                {
                    let input1 = this.get(command.input1);
                    if (input1 !== null) {
                        this.vars[command.output] = this.get(command.input1);
                    }
                    else {
                        return false;
                    }
                }
                break;
            case 'and':
                {
                    let input1 = this.get(command.input1);
                    let input2 = this.get(command.input2);
                    if (input1 !== null && input2 !== null) {
                        this.vars[command.output] = input1 & input2;
                    }
                    else {
                        return false;
                    }
                }
                break;
            case 'or':
                {
                    let input1 = this.get(command.input1);
                    let input2 = this.get(command.input2);
                    if (input1 !== null && input2 !== null) {
                        this.vars[command.output] = input1 | input2;
                    }
                    else {
                        return false;
                    }
                }
                break;
            case 'not':
                {
                    let input1 = this.get(command.input1);
                    if (input1 !== null) {
                        let val = ~input1;
                        this.vars[command.output] = this.clamp(val);
                    }
                    else {
                        return false;
                    }
                }
                break;
            case 'lshift':
                {
                    let input1 = this.get(command.input1);
                    if (input1 !== null) {
                        let val = input1 << command.input2;
                        this.vars[command.output] = this.clamp(val);
                    }
                    else {
                        return false;
                    }
                }
                break;
            case 'rshift':
                {
                    let input1 = this.get(command.input1);
                    if (input1 !== null) {
                        let val = input1 >> command.input2;
                        this.vars[command.output] = this.clamp(val);
                    }
                    else {
                        return false;
                    }
                }
                break;
        }
        return true;
    }

    run(program) {
        let lines = program.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        for (let line of lines) {
            let command = Command.parse(line);
            this.apply(command);
        }
    }
}

module.exports = Interpreter;
