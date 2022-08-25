// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

 

// Example 1:


// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:


// Input: heights = [2,4]
// Output: 4
 

// Constraints:

// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

var largestRectangleArea = function(h) {
let heights = [];
let position = [];
let area = 0;
let curentHeight 
  let currentPos 
  let currentArea    
    
    
for (i = 0; i < h.length; i++) {
  if (!heights.length || h[i] > heights[heights.length - 1]) {
      
    heights.push(h[i]);
    position.push(i);
  } else if (h[i] < heights[heights.length - 1]) {
      
    while (heights.length && h[i] < heights[heights.length - 1]) {
     curentHeight = heights.pop();
   currentPos = position.pop();
   currentArea = curentHeight * (i - currentPos);
  area = Math.max(currentArea, area);
    }
    heights.push(h[i]);
    position.push(currentPos);
  }
}
while (heights.length) {
    
    curentHeight = heights.pop();
    currentPos = position.pop();
    currentArea = curentHeight * (i - currentPos);
    area = Math.max(currentArea, area);
}
return area;
}