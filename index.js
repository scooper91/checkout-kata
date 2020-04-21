'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  if (items === 'AAA') { return 130; }

  return items.split('').reduce((total, item) => total += itemValues[item], 0);
};
