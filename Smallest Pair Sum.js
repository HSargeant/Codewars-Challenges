/*Given an array of numbers, find the smallest pair sum in the array.

For example

[10,14,2,23,19] should return 12 (i.e. sum of 10,2)

[99,2,2,23,19] should return 4 (i.e. sum of 2,2)

Input array contains minimum two elements and every element is a number. Note :

not all elements are distinct, and duplicates are not ignored
Ex :

[1,1,2] => 1+1 = 2
*/

function smallestPairSum(numbers){
  
let min = numbers[0]
  
for(let i=0; i<numbers.length; i++){
    if(numbers[i] < min ){
        min = numbers[i]
    }
}

let index = 0

while(numbers[index] != min){
  index++ 
}
numbers.splice(index, 1)
  
let min2=numbers[1]

for(let i=0; i<=numbers.length; i++){

    if(numbers[i] < min2){
        min2=numbers[i]
    }
}
  
  return  min2 + min
}