// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 
// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104
// medium

var searchMatrix = function(matrix, target) {
    for(i=0; i<matrix.length; i++){
        
        let l=0, r=matrix[i].length
        
        while(l<=r){
            let mid=Math.floor((l+r)/2)
            if(matrix[i][mid]== target) return true
            
            if(target < matrix[i][mid]){
                r=mid-1
            }else l=mid+1
        }
    }
    return false
};


// o(n)
// return matrix.flat().indexOf(target) >-1
