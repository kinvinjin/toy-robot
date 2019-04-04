/**
 * Accept and process command
 * 1) Parse and validate input command
 * 2) Call specific function in Robot class
 * 3) Expose necessary API for use
 */
const robot = require('./robot');
const utils = require('./utils');
const { commands, errors } = require('./constants');
const validTokens = utils.getVaildTokens();

exports.eval = function(command) {
    if (!command || !command.trim()) {
        return false;
    }
    
    try {
        // parse raw command line and obtain token and params
        const { token, params } = utils.parse(command.trim());
        // check token (valid tokens: PLACE, MOVE, LEFT, RIGHT, REPORT)
        if (validTokens.indexOf(token) === -1) {
            throw new Error(errors.INVALID_COMMAND);
        }
        // check params
        if (!utils.checkParams(params, commands[token].params)) {
            throw new Error(errors.INVALID_PARAMS);
        }
        // transform params
        utils.transform(params);
        // call Robot class method to operate robot
        const res = robot[token.toLowerCase()].apply(robot, params);
        if (token === commands.REPORT.name) {
            utils.print(res);
        }
    } catch (err) {
        // ignore invalid command
        console.log(err);
        return false;
    }
    
    return true;
};