const expect = require('chai').expect;
const robot = require('../lib/robot');
const table = require('../lib/table');
const { errors } = require('../lib/constants');

const testdata = {
    place: [1, 1, 'NORTH'],
    move: [1, 5, 'NORTH']
};
const expected = {
    place: {x:1, y:1, f:'NORTH'},
    move1: {x:1, y:2, f:'NORTH'},
    move2: {x:1, y:5, f:'NORTH'}
};
const testdata_out_of_table1 = {
    place: [-1, 1, 'NORTH']
};
const testdata_out_of_table2 = {
    place: [1, -1, 'NORTH']
};

describe('robot.js', function() {
    before(function() {
        table.reset();
    })
    
    describe('place()', function() {
        it('should place the robot on the table successfully', function() {
            let pos = robot.place.apply(robot, testdata.place);
            expect(pos).to.deep.equal(expected.place);
        });
        
        it('should throw error if the position is out of the table', function() {
            expect(() => robot.place.apply(robot, testdata_out_of_table1.place)).to.throw(errors.OUT_OF_TABLE);
        });
    });
    
    describe('move()', function() {
        it('should move the robot on the table successfully', function() {
            let pos = robot.move.call(robot);
            expect(pos).to.deep.equal(expected.move1);
        });
        
        it('should stay at current position if it is moving out of the table', function() {
            let pos = robot.place.apply(robot, testdata.move);
            expect(pos).to.deep.equal(expected.move2);
            expect(() => robot.move.apply(robot)).to.throw(errors.OUT_OF_TABLE);
            expect(table.getPos()).to.deep.equal(expected.move2);
        });
    });
    
    describe('report()', function() {
        it('should get current position of the robot', function() {
            let pos = robot.report.call(robot);
            expect(pos).to.deep.equal(expected.move2);
        });
    });
    
    describe('left()', function() {
        it('should turn left', function() {
            expect(table.getPos().f).to.equal('NORTH');
            let pos = robot.left.call(robot);
            expect(table.getPos().f).to.equal('WEST');
        });
    });
    
    describe('right()', function() {
        it('should should turn right', function() {
            expect(table.getPos().f).to.equal('WEST');
            let pos = robot.right.call(robot);
            expect(table.getPos().f).to.equal('NORTH');
        });
    });
});