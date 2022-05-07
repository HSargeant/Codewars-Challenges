// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let arr2=[]
  
  let temp = arr.filter((x)=>{
    if(x===0){
      arr2.push(x)
    }
    return x!==0
  })

  return temp.concat(arr2)
}