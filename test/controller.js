const expect = require('chai').expect;
const { eval } = require('../lib/controller');
const { errors } = require('../lib/constants');
const table = require('../lib/table');

describe('controller.js', function() {
    before(function() {
        table.reset();
    })
    
    describe('eval(command)', function() {
        it('should return false if the input command is empty', function() {
            expect(eval).to.not.throw();
            expect(eval()).to.be.false;
        });
        
        it('should return false if the command is invalid or unspported', function() {
            expect(eval('INVAILD')).to.be.false;
        });
        
        it('should return false if the first command is not PLACE', function() {
            expect(eval('REPORT')).to.be.false;
        });
        
        it('should return false if the robot will be out of the table', function() {
            expect(eval('PLACE -1,-1,NORTH')).to.be.false;
        });
        
        it('should return true if the input command is a valid PLACE', function() {
            expect(eval('PLACE 0,0,NORTH')).to.be.true;
        });
    });
});