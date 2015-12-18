'use strict';

class Reindeer {
    constructor(name, speed, stamina, recovery) {
        this.name = name;
        this.speed = speed;
        this.stamina = stamina;
        this.recovery = recovery;
    }

    distanceAfterSeconds(seconds) {
        let total = 0;

        let currentState = 'flying';
        let currentStateTime = 0;

        for (let i = 0; i < seconds; i++) {
            currentStateTime++;
            if (currentState == 'flying') {
                total += this.speed;

                if (currentStateTime >= this.stamina) {
                    currentState = 'resting';
                    currentStateTime = 0;
                }
            }
            else {
                if (currentStateTime >= this.recovery) {
                    currentState = 'flying';
                    currentStateTime = 0;
                }
            }
        }
        return total;
    }

    static parse(input) {
        let matches = input.match(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);
        let name = matches[1];
        let speed = parseInt(matches[2]);
        let stamina = parseInt(matches[3]);
        let recovery = parseInt(matches[4]);
        return new Reindeer(name, speed, stamina, recovery);
    }
}

module.exports = Reindeer;
