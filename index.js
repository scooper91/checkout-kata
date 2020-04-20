'use strict';

const itemValues = {
  A: 50,
  B: 30
};

module.exports = items => itemValues[items] || 0;
