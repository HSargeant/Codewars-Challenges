/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let factorList=[]
    for(i=1; i<=n; i++){
        if(n%i == 0){
            factorList.push(i)
        }
    }
    return factorList[k-1]? factorList[k-1] : -1
};
// 1492. The kth Factor of n