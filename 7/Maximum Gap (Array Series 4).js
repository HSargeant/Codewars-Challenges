// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap (num){
    num.sort((x,y)=>x-y)
    let res = num.map((x,i)=>num[i+1]-x)
    res.pop()
    return Math.max(...res)
  }