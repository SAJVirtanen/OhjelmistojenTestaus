import ceil from '../src/ceil.js';

import { expect } from 'chai';

describe('ceil', () => {
  it('should return the number 5', () => {
    expect(ceil(4.006)).to.equal(5);
  });
  it('should return the number 6.01', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });
  it('should return the number 6100', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  }); 
  it('should return the number -4', () => {
    expect(ceil(-4.006)).to.equal(-4);
  });
  it('should return the number 0.00', () => {
    expect(ceil(0, 2)).to.equal(0.00);
  });
});