var xorAllNums = function (nums1, nums2) {
    let xor1 = 0, xor2 = 0, result = 0;
    for (let num of nums1) xor1 ^= num;
    for (let num of nums2) xor2 ^= num;
    if (nums2.length % 2 !== 0) result ^= xor1;
    if (nums1.length % 2 !== 0) result ^= xor2;
    return result;
};
// 2425. Bitwise XOR of All Pairings