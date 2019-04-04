/**
 * Entry point to execute the application
 */
const { execute } = require('./lib/input');
const { eval } = require('./lib/controller');
const { path } = require('./config.json');

execute(path, eval);