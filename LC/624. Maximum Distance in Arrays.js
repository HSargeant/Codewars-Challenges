/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    
    let prevMin = arrays[0][0]
    let prevMax = arrays[0][arrays[0].length - 1]
    let result = 0

    for (let i = 1; i < arrays.length; i++) {
        let currMin = arrays[i][0]
        let currMax = arrays[i][arrays[i].length - 1]
        result = Math.max(result, Math.max(currMax - prevMin, prevMax - currMin))

        prevMin = Math.min(prevMin, currMin)
        prevMax = Math.max(prevMax, currMax)
    }

    return result
};
// 624. Maximum Distance in Arrays