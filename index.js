'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  let aCount = 0;
  let bCount = 0;

  const total = items.split('').reduce((total, item) => {
    if (item === 'A') { aCount++; }
    if (item === 'B') { bCount++; }

    return total += itemValues[item];
  }, 0);

  const aDiscount = Math.floor(aCount / 3) * 20;
  const bDiscount = Math.floor(bCount / 2) * 15;

  return total - aDiscount - bDiscount;
};
