const expect = require('chai').expect;

describe('app.js', function() {
    it('should run app successfully', function() {
        expect(() => require('../app')).to.not.throw();
    });
});