'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  return items.split('').reduce((total, item) => total += itemValues[item], 0);
};
