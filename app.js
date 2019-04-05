/**
 * Entry point to execute the application
 */
const { build } = require('./lib/controller');
const { path } = require('./config.json');

build(path);