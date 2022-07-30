// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

function arrayLeaders(num){
    let leaders =[]
    for(i=0; i<num.length; i++){
      if(num[i] > num.slice(i+1).reduce((a,c)=>a+c,0)) leaders.push(num[i])
    }
    return leaders
}