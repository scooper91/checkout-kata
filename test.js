'use strict';
const {assert} = require('chai');
const checkout = require('.');

describe('checkout', () => {
  it('returns 0 for empty basket', () => assert.equal(checkout(''), 0));

  Object.entries({
    A: 50,
    B: 30,
    C: 20,
    D: 15
  }).forEach(([item, price]) => {
    it(`returns price for single ${item}`, () => assert.equal(checkout(item), price));
  });

  it('returns 100 for 2 A items', () => assert.equal(checkout('AA'), 100));

  it('returns 80 for A & B', () => assert.equal(checkout('AB'), 80));

  it('returns 115 for A, B, C & D', () => assert.equal(checkout('ABCD'), 115));

  it('returns 180 for D, D, C, A, B, A', () => assert.equal(checkout('DDCABA'), 180));
});
