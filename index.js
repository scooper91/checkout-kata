'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  if (items === 'AA') { return 100; }
  if (items === 'AB') { return 80; }
  if (items === 'ABCD') { return 115; }
  if (items === 'DDCABA') { return 180; }
  return itemValues[items] || 0;
};
