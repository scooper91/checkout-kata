'use strict';

const itemValues = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
};

const discounts = {
  A: { count: 3, discount: 20 },
  B: { count: 2, discount: 15 }
};

module.exports = items => {
  const itemCounts = {};

  const total = items.split('').reduce((total, item) => {
    const itemCount = itemCounts[item];
    itemCounts[item] = itemCount ? itemCount + 1 : 1;

    return total += itemValues[item];
  }, 0);

  const discount = Object.entries(itemCounts).reduce((discount, [item, count]) => {
    const itemDiscount = discounts[item];
    if (!itemDiscount) { return discount; }

    return discount += Math.floor(count / itemDiscount.count) * itemDiscount.discount;
  }, 0);

  return total - discount;
};
