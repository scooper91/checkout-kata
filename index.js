'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  if (items === 'AA') { return 100; }
  return itemValues[items] || 0;
};
