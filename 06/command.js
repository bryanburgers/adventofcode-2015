'use strict';

class Command {
    constructor(action, topLeft, bottomRight) {
        this.action = action;
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }

    apply(grid) {
        switch (this.action) {
            case 'on':
                grid.turnOn(this.topLeft, this.bottomRight);
                break;
            case 'off':
                grid.turnOff(this.topLeft, this.bottomRight);
                break;
            case 'toggle':
                grid.toggle(this.topLeft, this.bottomRight);
                break;
        }
    }
}

exports.parse = function parse(input) {
    // turn off 660,55 through 986,197
    let matches = input.match(/(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/);
    if (!matches) {
        return null;
    }
    let action = matches[1];
    if (action == 'turn on') {
        action = 'on';
    }
    if (action == 'turn off') {
        action = 'off';
    }
    let topLeft = [parseInt(matches[2]), parseInt(matches[3])];
    let bottomRight = [parseInt(matches[4]), parseInt(matches[5])];
    return new Command(action, topLeft, bottomRight);
}
