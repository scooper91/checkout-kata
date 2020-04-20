'use strict';
const {assert} = require('chai');
const checkout = require('.');

describe('checkout', () => {
  it('returns 0 for empty basket', () => assert.equal(checkout(''), 0));

  it('returns 50 for single A', () => assert.equal(checkout('A'), 50));
});
