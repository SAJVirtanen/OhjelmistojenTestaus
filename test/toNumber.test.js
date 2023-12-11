import assert from 'assert';
import toNumber from '../src/toNumber.js';

//const assert = require('assert');
//const toNumber = require('../src/toNumber.js');

// Test cases
describe('toNumber.js', () => {


  it('should return the number 3.2', () => {
    assert.strictEqual(toNumber(3.2), 3.2);
  });
  it('should return the number 5e-324', () => {
    assert.strictEqual(toNumber(Number.MIN_VALUE), 5e-324);
  }); 
  it('should return the number Infinity', () => {
    assert.strictEqual(toNumber(Infinity), Infinity);
  }); 
  it('should return NAN when called with symbol', () => {
    assert.strictEqual(toNumber(Symbol(1)), NaN);
  });
  it('should return NAN when called with object', () => {
    assert.strictEqual(toNumber({}), NaN);
  });
  it('should return 0 when called with empty string', () => {
    assert.strictEqual(toNumber(''), 0);
    
  });
}
);