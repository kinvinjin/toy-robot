const expect = require('chai').expect;
const table = require('../lib/table');
const { errors } = require('../lib/constants');

const testdata = {
    place: { x: 1, y: 1, f: 'NORTH'}
};
const testdata_out_of_table = {
    place: { x: -1, y: 1, f: 'NORTH'}
};

describe('table.js', function() {
    before(function() {
        table.reset();
    })
    
    describe('isPlaced()', function() {
        it('should return false if the robot has not been on the table', function() {
            expect(table.isPlaced()).to.be.false;
        });
    });
    
    describe('getPos()', function() {
        it('should return the current position of the robot', function() {
            expect(table.getPos()).to.deep.equal({});
        });
    });
    
    describe('setPos(newPos)', function() {
        it('should return false if the robot will be out of the table', function() {
            expect(table.setPos(testdata_out_of_table.place)).to.be.false;
            expect(table.getPos()).to.deep.equal({});
        });
        
        it('should return true if it is a valid place', function() {
            expect(table.setPos(testdata.place)).to.be.true;
            expect(table.isPlaced()).to.be.true;
            expect(table.getPos()).to.deep.equal(testdata.place);
        });
    });
});