/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  if (a1.length !== a2.length) return false;

  const compareMap = new Map();

  for (const number of a1) {
    if (!compareMap.has(number)) {
      compareMap.set(number, 1);
    } else {
      let value = compareMap.get(number);
      compareMap.set(number, value + 1);
    }
  }

  for (const number of a2) {
    if (!compareMap.has(number)) {
      compareMap.set(number, 1);
    } else {
      let value = compareMap.get(number);
      compareMap.set(number, value - 1);
    }
  }

  if ([...compareMap.values()].every((value) => value === 0)) return true;
  return false;
}

module.exports = isEqual;
