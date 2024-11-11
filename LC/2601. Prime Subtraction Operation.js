/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let check = nums[i] - nums[i - 1];
        if(i==0) check = nums[i]
        if(check <= 0) return false;
        let largestPrime = 0;
        for (let j = check - 1; j >= 2; j--) {
            if (isPrime(j)) {
                largestPrime = j;
                break;
            }
        }
        nums[i] -= largestPrime;
    }
    return true;

};

function isPrime(num) {

    let limit = Math.sqrt(num)
    let result = true

    if (num <= 1) {
        return false
    }
    for (i = 2; i <= limit; i++) {
        if (num % i == 0) {
            return false
        }
    }

    return result
}