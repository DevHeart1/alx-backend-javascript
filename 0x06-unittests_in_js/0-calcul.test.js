const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when inputs are 1.4 and 2.5', function() {
        assert.strictEqual(calculateNumber(1.4, 2.5), 4);
    });

    it('should return 5 when inputs are 1.5 and 2.5', function() {
        assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    });

    it('should return 0 when inputs are 0.1 and 0.3', function() {
        assert.strictEqual(calculateNumber(0.1, 0.3), 0);
    });

    it('should return 1 when inputs are 0.7 and 0.3', function() {
        assert.strictEqual(calculateNumber(0.7, 0.3), 1);
    });

    it('should return -4 when inputs are -1.6 and -2.5', function() {
        assert.strictEqual(calculateNumber(-1.6, -2.5), -4);
    });

    it('should return 2 when inputs are 1 and 1.4', function() {
        assert.strictEqual(calculateNumber(1, 1.4), 2);
    });
});