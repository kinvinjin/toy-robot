/**
 * Accept and process command
 * 1) Parse and validate input command
 * 2) Call specific function in Robot class
 * 3) Expose necessary APIs for public
 */
const robot = require('./robot');
const utils = require('./utils');
const { execute } = require('./input');
const { interactive, commands, errors } = require('./constants');
const validTokens = utils.getVaildTokens();
/**
 * Process each command
 * 
 * @param {String} command
 * @return {Boolean} if true, the command is accepted and processed.
 *                   otherwise, the command is invalid and disregarded;
 */
exports.eval = function(command) {
    if (!command || !command.trim()) {
        return false;
    }
    
    try {
        // parse raw command line
        const { token, params } = utils.parse(command);
        // check token
        if (validTokens.indexOf(token) === -1) {
            throw new Error(errors.INVALID_COMMAND);
        }
        // check params
        if (!utils.checkParams(params, commands[token].params)) {
            throw new Error(errors.INVALID_PARAMS);
        }
        // transform params
        utils.transform(params);
        // operate robot
        const res = robot[token.toLowerCase()].apply(robot, params);
        if (token === commands.REPORT.name) {
            utils.print(res);
        }
    } catch (err) {
        // ignore invalid command
        return false;
    }
    
    return true;
};
/**
 * Build the application
 * 
 * @param {String} path
 */
exports.build = function(path) {
    console.log(interactive.HELP);
    execute(path, exports.eval);
};