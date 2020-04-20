'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => itemValues[items] || 0;
