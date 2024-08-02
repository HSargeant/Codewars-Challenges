/**
 * @param {string[]} details
 * @return {number}
 */
function countSeniors (details) {
    return details.filter(x=>x[11]+x[12]>60).length
};
// 2678. Number of Senior Citizens