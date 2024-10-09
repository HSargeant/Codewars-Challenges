/**
 * @param {number[]} arr
 * @return {boolean}
 */
function uniqueOccurrences(arr) {
    let set = new Set(), o = {}
    for (let num of arr) {
        o[num] = o[num] + 1 || 1
    }
    for (let num in o) {
        if (set.has(o[num])) return false
        set.add(o[num])
    }
    return true

};
// 1207. Unique Number of Occurrences