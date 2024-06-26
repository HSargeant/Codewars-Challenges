/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    if(!s) return 0
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
    return count+1;

};
// 2405. Optimal Partition of String