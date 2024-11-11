/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthFactor (n, k) {
    let res=-1,i=1
    while(i<=n && k>0){
        if(n%i == 0){
            res=i
            k--
        }
        i++
    }
    return k==0 ? res : -1
};
// 1492. The kth Factor of n