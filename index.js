'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  let aCount = 0;

  const total = items.split('').reduce((total, item) => {
    if (item === 'A') { aCount++; }

    return total += itemValues[item];
  }, 0);

  const discount = Math.floor(aCount / 3) * 20;

  return total - discount;
};
