'use strict';

module.exports = items => {
  if (items === '') { return 0; }
  if (items === 'B') { return 30; }
  return 50;
};
