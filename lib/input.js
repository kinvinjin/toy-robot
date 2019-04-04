/**
 * This class responsible for obtaining input data
 * It can get data from file or from console
 */
const fs = require('fs');
const readline = require('readline');
const { errors } = require('./constants');

const processInput = (path, callback) => {
    const reader = readline.createInterface({
        input: fs.createReadStream(path)
    });
    reader.on('line', function(line) {
        callback(line);
    });
};

exports.execute = function(path, callback) {
    if (path && fs.existsSync(path)) {
        processInput(path, callback);
    } else {
        let errMsg = `${errors.NO_FILE} ${path}`;
        throw new Error(errMsg);
    }
};