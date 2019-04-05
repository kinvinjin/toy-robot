/**
 * Provide helpful functions to build the application
 * 
 */
const { commands, directions } = require('./constants');

const numbers = /^\d+$/;
// check the types of parameters and the direction
const isValidParams = function(params) {
    return params[0] && params[1] && params[2] && 
            numbers.test(params[0]) &&
            numbers.test(params[1]) &&
            Object.keys(directions).indexOf(params[2].toUpperCase()) !== -1;
};
// check the number of parameters
exports.checkParams = function(params, requiredCount) {
    requiredCount = requiredCount || 0;
    if (params.length !== requiredCount) {
        return false;
    } else if (params.length === 3) {
        return isValidParams(params);
    }
    
    return true;
};
//parse raw command line and obtain token and params
exports.parse = function(command) {
    command = command.trim().toUpperCase();
    
    const index = command.indexOf(' ');
    let token;
    let params;
    
    if (index === -1) {
        token = command;
        params = [];
    } else {
        token = command.substring(0, index);
        params = command.substr(index).replace(/\s/g, '').split(',');
    }
    
    return { token, params };
};
// transform position info to integer before update
exports.transform = function(params) {
    if (params.length === 3) {
        params[0] = parseInt(params[0]);
        params[1] = parseInt(params[1]);
    }
    
    return params;
}
// get an array of valid commands
exports.getVaildTokens = function() {
    const keys = Object.keys(commands);
    return keys.map((key) => commands[key].name);
};
// output position info to console (stdout)
exports.print = function(pos) {
    console.log(`current robot is at: ${pos.x}, ${pos.y}, ${pos.f}`);  
};