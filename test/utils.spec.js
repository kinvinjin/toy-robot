const expect = require('chai').expect;
const utils = require('../lib/utils');
const { commands } = require('../lib/constants');

const testdata = {
    place: 'PLACE 1,1,NORTH',
    move: 'MOVE',
    left: 'LEFT',
    right: 'RIGHT',
    report: 'REPORT'
};
const testdata_for_lowercase = {
    place: 'place 1,1,north',
    move: 'move',
    left: 'left',
    right: 'right',
    report: 'report'
};
const tokens = {token: 'PLACE', params: ['1', '1', 'NORTH']};
const tokens_invalid_parames = {token: 'PLACE', params: ['1', 'NORTH']};
const expected = {token: 'PLACE', params: [1, 1, 'NORTH']};
const expected_move = {token: 'MOVE', params: []};
const expected_left = {token: 'LEFT', params: []};
const expected_right = {token: 'RIGHT', params: []};
const expected_report = {token: 'REPORT', params: []};

describe('utils.js', function() {
    describe('parse(command)', function() {
        it('should obtain place token and params from input', function() {
            expect(utils.parse(testdata.place)).to.deep.equal(tokens);
        });
        
        it('should obtain place token and params from input', function() {
            expect(utils.parse(testdata_for_lowercase.place)).to.deep.equal(tokens);
        });
        
        it('should obtain move token and params from input', function() {
            expect(utils.parse(testdata.move)).to.deep.equal(expected_move);
        });
        
        it('should obtain move token and params from input', function() {
            expect(utils.parse(testdata_for_lowercase.move)).to.deep.equal(expected_move);
        });
        
        it('should obtain left token and params from input', function() {
            expect(utils.parse(testdata.left)).to.deep.equal(expected_left);
        });
        
        it('should obtain left token and params from input', function() {
            expect(utils.parse(testdata_for_lowercase.left)).to.deep.equal(expected_left);
        });
        
        it('should obtain right token and params from input', function() {
            expect(utils.parse(testdata.right)).to.deep.equal(expected_right);
        });
        
        it('should obtain right token and params from input', function() {
            expect(utils.parse(testdata_for_lowercase.right)).to.deep.equal(expected_right);
        });
        
        it('should obtain report token and params from input', function() {
            expect(utils.parse(testdata.report)).to.deep.equal(expected_report);
        });
        
        it('should obtain report token and params from input', function() {
            expect(utils.parse(testdata_for_lowercase.report)).to.deep.equal(expected_report);
        });
    });
    
    describe('checkParams(params, requiredCount)', function() {
        it('should return true if the number of the params equals required count', function() {
            expect(utils.checkParams(tokens.params, commands.PLACE.params)).to.be.true;
        });
        
        it('should return true if the number of the params is different from required count', function() {
            expect(utils.checkParams(tokens_invalid_parames.params, commands.PLACE.params)).to.be.false;
        });
    });
    
    describe('transform(params)', function() {
        it('should transform the parameters correctly', function() {
            expect(utils.transform(tokens.params)).to.deep.equal(expected.params);
        });
    });
    
});