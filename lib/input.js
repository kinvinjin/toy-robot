const fs = require('fs');
const readline = require('readline');
const { errors } = require('./constants');

/**
 * Read data by line and bind processing function
 * 
 * @param {String} path
 * @param {Function} callback
 */
const processInput = (path, callback) => {
    const input = path? fs.createReadStream(path) : process.stdin;
    const reader = readline.createInterface({input: input});
    
    reader.on('line', function(line) {
        callback(line);
    });
}

/**
 * Get input data from file or from stdin according to parameter
 * 
 * @param {String} path
 * @param {Function} callback
 * @throw {Error} if it is specified to read a non-existent file
 */
exports.execute = function(path, callback) {
    if (!path) {
        processInput(null, callback);
    } else if (path && fs.existsSync(path)) {
        processInput(path, callback);
    } else {
        throw new Error(`${errors.NO_FILE} ${path}`);
    }
};