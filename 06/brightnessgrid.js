'use strict';

class BrightnessGrid {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = {};
    }

    turnOn(topLeft, bottomRight) {
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                let index = `${x},${y}`;
                this.data[index] = (this.data[index] || 0) + 1;
            }
        }
    }

    turnOff(topLeft, bottomRight) {
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                let index = `${x},${y}`;
                this.data[index] = Math.max((this.data[index] || 0) - 1, 0);
            }
        }
    }

    toggle(topLeft, bottomRight) {
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                let index = `${x},${y}`;
                this.data[index] = (this.data[index] || 0) + 2;
            }
        }
    }

    brightness(point) {
        let x = point[0];
        let y = point[1];
        let index = `${x},${y}`;
        return this.data[index] || 0
    }

    totalBrightness() {
        let lit = 0;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.width; y++) {
                lit += this.brightness([x, y]);
            }
        }
        return lit;
    }
}

module.exports = function(width, height) {
    return new BrightnessGrid(width, height);
}
