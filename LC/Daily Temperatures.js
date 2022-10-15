/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(a) {
    const res = Array(a.length).fill(0);

    const stack = [];

    for (let i = 0; i < a.length; i++) {
        while (stack.length !== 0 && stack[stack.length - 1][0] < a[i]) {
            const [temp, idx] = stack.pop();
            res[idx] = i - idx;
        }
        stack.push([a[i], i]);
    }

    return res;
    
    
    //------brute force-----//
//     let track=0
//     if(a.length==1) return [0]
//     if(a.length==2){
        
//         if(a[1]>a[0]){
//         a[0]=0
//         }else a[0]=0
//         a[a.length-1]=0
//         return a
//     }
//     for(i=0; i<a.length; i++){
//         track++
//         let count=1
//         let check = a[i]
//         for(j=track; j<a.length; j++){

//             if(a[j]>check){
//                 a[i]=count
//                 break  
//         }else if(j==a.length-1){
//             a[i]=0
//         }
//             count++
//         }
//     }
//     a[a.length-1]=0
// return a
    
};


// Daily Temperatures
// Medium

// 8368

// 200

// Add to List

// Share
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

// Example 1:

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]
// Example 2:

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]
// Example 3:

// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100