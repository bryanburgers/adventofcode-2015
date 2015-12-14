'use strict';

class Grid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = {};
    }

    turnOn(topLeft, bottomRight) {
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                let index = `${x},${y}`;
                this.data[index] = true;
            }
        }
    }

    turnOff(topLeft, bottomRight) {
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                let index = `${x},${y}`;
                this.data[index] = false;
            }
        }
    }

    toggle(topLeft, bottomRight) {
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                let index = `${x},${y}`;
                this.data[index] = !this.data[index];
            }
        }
    }

    isOn(point) {
        let x = point[0];
        let y = point[1];
        let index = `${x},${y}`;
        if (this.data[index]) {
            return true;
        }
        return false;
    }

    countLit() {
        let lit = 0;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.width; y++) {
                if (this.isOn([x, y])) {
                    lit++;
                }
            }
        }
        return lit;
    }
}

module.exports = function(width, height) {
    return new Grid(width, height);
}
