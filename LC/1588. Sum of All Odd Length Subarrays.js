var sumOddLengthSubarrays = function(arr) {
    let res = 0,len = arr.length
    for(let i=0; i < arr.length; i++){
        let startSubArr = len - i
        let endSubArr = i + 1
        res += ((Math.ceil((startSubArr*endSubArr)/2))*arr[i]) 
    }
    return res
};
// 1588. Sum of All Odd Length Subarrays
