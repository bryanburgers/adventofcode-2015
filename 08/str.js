'use strict';

class Str {
    static parse(input) {
        let mode = 'begin';
        let str = '';
        let hex = '';
        for (let c of input) {
            switch (mode) {
                case 'begin':
                    if (c !== '"') {
                        throw new Error(`Expected double quote, got '${c}'`);
                    }
                    mode = 'character';
                    break;
                case 'character':
                    switch (c) {
                        case '\\':
                            mode = 'escape';
                            break;
                        case '"':
                            mode = 'end';
                            break;
                        default:
                            str += c;
                    }
                    break;
                case 'escape':
                    switch (c) {
                        case '\\':
                        case '"':
                        case '\'':
                            str += c;
                            mode = 'character';
                            break;
                        case 'x':
                            mode = 'hex-x';
                            hex = '';
                            break;
                        default:
                            break;
                    }
                    break;
                case 'hex-x':
                    switch (c) {
                        case '0':
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '7':
                        case '8':
                        case '9':
                        case 'a':
                        case 'b':
                        case 'c':
                        case 'd':
                        case 'e':
                        case 'f':
                            mode = 'hex-1';
                            hex = c;
                            break;
                        default:
                            throw new Error(`Expected hex character, got '${c}'`);
                    }
                    break;
                case 'hex-1':
                    switch (c) {
                        case '0':
                        case '1':
                        case '2':
                        case '3':
                        case '4':
                        case '5':
                        case '6':
                        case '7':
                        case '8':
                        case '9':
                        case 'a':
                        case 'b':
                        case 'c':
                        case 'd':
                        case 'e':
                        case 'f':
                            mode = 'character';
                            hex += c;
                            str += String.fromCharCode(parseInt(hex, 16));
                            break;
                        default:
                            throw new Error(`Expected hex character, got '${c}'`);
                    }
                    break;
                case 'end':
                    throw new Error(`Expected EOL, got '${c}'`);
                    break;
            }
        }

        if (mode !== 'end') {
            switch (mode) {
                case 'begin':
                    throw new Error(`Expected double quote, got EOL`);
                case 'character':
                    throw new Error(`Expected character or escape, got EOL`);
                default:
                    break;
            }
        }

        return str;
    }
    static encode(input) {

    }
}

module.exports = Str;
