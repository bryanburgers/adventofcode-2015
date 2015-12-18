'use strict';

module.exports = function pointrace(duration, reindeers) {
    let results = {};
    for (let reindeer of reindeers) {
        results[reindeer.name] = 0;
    }

    for (let t = 1; t <= duration; t++) {
        let max = 0;
        let leaders = [];
        for (let reindeer of reindeers) {
            let distance = reindeer.distanceAfterSeconds(t);
            if (distance > max) {
                max = distance;
                leaders = [reindeer];
            }
            else if (distance == max) {
                leaders.push(reindeer);
            }
        }
        for (let reindeer of leaders) {
            results[reindeer.name]++;
        }
    }

    return results;
}
