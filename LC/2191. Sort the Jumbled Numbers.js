/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
function sortJumbled(mapping, nums) {
    let o = {}
    for (let num of nums) {
        o[num] = convert(num, mapping)
    }
    return nums.sort((a, b) => o[a] - o[b])
};

function convert(num, mapping) {
    let curr = num + "", res = ""
    for (let char of curr) {
        res += mapping[+char]
    }
    return +res
}
// 2191. Sort the Jumbled Numbers