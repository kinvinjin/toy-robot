const expect = require('chai').expect;
const { execute } = require('../lib/input');
const { errors } = require('../lib/constants');

describe('input.js', function() {
    describe('execute(callback)', function() {
        it('should throw error if the file does not exist', function() {
            let path = 'invalid_path';
            let errMsg = `${errors.NO_FILE} ${path}`;
            expect(() => execute(path)).to.throw(errMsg);
        });
        
        it('should not throw error if the file exists', function() {
            let path = './test/commands.txt'
            expect(() => execute(path)).to.not.throw();
        });
        
        it.skip('should not throw error if input is from stdin', function() {
            let path = ''
            expect(() => execute(path)).to.not.throw();
        });
    });
});