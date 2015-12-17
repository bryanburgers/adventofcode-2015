'use strict';

class Happiness {
    constructor(person, relation, value) {
        this.person = person;
        this.relation = relation;
        this.value = value;
    }

    static parse(input) {
        let matches = input.match(/(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)./);
        let person = matches[1];
        let relation = matches[4];
        let value = parseInt(matches[3]);
        if (matches[2] == 'lose') {
            value *= -1;
        }
        return new Happiness(person, relation, value);
    }

    static getPeople(happinesses) {
        let seen = {};
        return happinesses
            .map(happiness => happiness.person)
            .filter(person => { let result = !seen[person]; seen[person] = true; return result; });
    }

    static calculate(order, happinesses) {
        function findHappiness(person, relation) {
            return happinesses.filter(happiness => happiness.person == person && happiness.relation == relation)[0];
        }

        let sum = 0;
        for (var i = 0; i < order.length; i++) {
            let j = i + 1;
            if (j >= order.length) {
                j = 0;
            }

            let happiness1 = findHappiness(order[i], order[j]);
            let happiness2 = findHappiness(order[j], order[i]);
            sum += happiness1.value + happiness2.value;
        }

        return sum;
    }
}

module.exports = Happiness;
