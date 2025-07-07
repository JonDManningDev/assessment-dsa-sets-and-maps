/**
 * return the union of two sets
 */
function union(s1, s2) {
    const unionSet = new Set([...s1, ...s2]);
    return unionSet;
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
    const intersectSet = new Set();
    s1.forEach((value) => {
        if (s2.has(value)) intersectSet.add(value);
    });
    return intersectSet;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    const differenceSet = new Set();
    s1.forEach((value) => {
        if (!s2.has(value)) differenceSet.add(value);
    });
    return differenceSet;
}

module.exports = { union, intersect, difference };
