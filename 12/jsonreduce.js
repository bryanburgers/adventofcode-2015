'use strict';

function jsonreduce(fn, init) {
    function r(val, accum) {
        if (typeof val == 'array') {
            for (let item of val) {
                accum = r(item, accum);
            }
            return accum;
        }
        else if (typeof val == 'object') {
            for (let key in val) {
                let v = val[key];
                accum = r(v, accum);
            }
            return accum;
        }
        else if (typeof val == 'number') {
            return fn(accum, val);
        }
        else {
            return accum;
        }
    }

    return function(val) {
        return r(val, init);
    };
}

jsonreduce.withoutRed = function(fn, init) {
    function r(val, accum) {
        if (val instanceof Array) {
            for (let item of val) {
                accum = r(item, accum);
            }
            return accum;
        }
        else if (val instanceof Object) {
            for (let key in val) {
                if (val[key] == 'red') {
                    return accum;
                }
            }
            for (let key in val) {
                let v = val[key];
                accum = r(v, accum);
            }
            return accum;
        }
        else if (typeof val == 'number') {
            return fn(accum, val);
        }
        else {
            return accum;
        }
    }

    return function(val) {
        return r(val, init);
    };
}

module.exports = jsonreduce;
