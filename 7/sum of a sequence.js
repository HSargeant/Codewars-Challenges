const sequenceSum = (begin, end, step) => {
  let res=[]
  for(i=begin; i<=end; i+=step){
    res.push(i)
  }
  return res.reduce((a,c)=>a+c,0)
};

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)