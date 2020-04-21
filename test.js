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

  Object.entries({
    AA: 100,
    AB: 80,
    ABCD: 115,
    DDCABA: 180
  }).forEach(([items, price]) => {
    it(`returns price for ${items}`, () => assert.equal(checkout(items), price));
  });

  Object.entries({
    AAA: 130,
    AAAAAA: 260,
    ABACADA: 245,
  }).forEach(([items, price]) => {
    it('returns price with discount for A', () => assert.equal(checkout(items), price));
  });

  it('returns price with discount for B', () => assert.equal(checkout('BB'), 45));

  it('returns price with 2 discounts for B', () => assert.equal(checkout('BBBB'), 90));

  it('returns price with 2 discounts for B with other items', () =>
    assert.equal(checkout('BABCBDBB'), 205)
  );
});
