'use strict';
const {assert} = require('chai');
const checkout = require('.');

describe('checkout', () => {
  it('returns 0 for empty basket', () => assert.equal(checkout(''), 0));
});
