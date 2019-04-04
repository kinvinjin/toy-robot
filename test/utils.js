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
const tokens = {token: 'PLACE', params: ['1', '1', 'NORTH']};
const expected = {token: 'PLACE', params: [1, 1, 'NORTH']};

describe('utils.js', function() {
    describe('parse(command)', function() {
        it('should obtain token and params from input', function() {
            expect(utils.parse(testdata.place)).to.deep.equal(tokens);
        });
    });
    
    describe('checkParams(params, requiredCount)', function() {
        it('should return true if the number of the params equals required count', function() {
            expect(utils.checkParams(tokens.params, commands.PLACE.params)).to.be.true;
        });
    });
    
    describe('transform(params)', function() {
        it('should transform the parameters correctly', function() {
            expect(utils.transform(tokens.params)).to.deep.equal(expected.params);
        });
    });
    
});