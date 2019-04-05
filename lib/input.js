/**
 * This class responsible for obtaining input data
 * It can get data from file or from console
 */
const fs = require('fs');
const readline = require('readline');
const { interactive, errors } = require('./constants');

const processInput = (path, callback) => {
    const input = path? fs.createReadStream(path) : process.stdin;
    const reader = readline.createInterface({input: input});
    console.log(interactive.HELP);
    reader.on('line', function(line) {
        callback(line);
    });
}

exports.execute = function(path, callback) {
    if (!path) {
        processInput(null, callback);
    } else if (path && fs.existsSync(path)) {
        processInput(path, callback);
    } else {
        throw new Error(`${errors.NO_FILE} ${path}`);
    }
};