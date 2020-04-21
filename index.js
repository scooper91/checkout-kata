'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

module.exports = items => {
  const itemCounts = {};

  const total = items.split('').reduce((total, item) => {
    const itemCount = itemCounts[item];
    itemCounts[item] = itemCount ? itemCount + 1 : 1;

    return total += itemValues[item];
  }, 0);

  const aDiscount = Math.floor((itemCounts.A || 0) / 3) * 20;
  const bDiscount = Math.floor((itemCounts.B || 0) / 2) * 15;

  return total - aDiscount - bDiscount;
};
