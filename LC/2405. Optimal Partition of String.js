/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    const set = new Set();
    let count = 0;
    for (const char of s) {
        if (!set.has(char)) {
            set.add(char);
        } else {
            count++;
            set.clear();
            set.add(char);
        }
    }

    if (set.size > 0) {
        count++;
    }

    return count;

};
// 2405. Optimal Partition of String