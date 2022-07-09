// Probability 101
// You will be given two numbers: length and num.

// A number with an amount of digits equal to length is chosen at random.

// NB: The random number of length length cannot start with zero if length > 1

// Some examples:

// if length is 1, there is 10 possible numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// if length is 2, the possible numbers will be all numbers from 10 up to 99

// if length is 3, the possible numbers will be all numbers from 100 up to 999

// Task
// Calculate the probability that the random number is a multiple of num.

// The returned value should be a floating point number, representing the probability in percentage.

// Examples:

// If there is no chance the random number will be a multiple of num you should return 0
// If it's certain the random number will be a multiple of num you should return 100
// If there is a 50% chance the random number will be a multiple of num you should return 50
// If there is a 4.1874% chance the random number will be a multiple of num you should return 4.1874
// As we are dealing with floating point numbers the tests take floating point approximation into account, the returned value needs to be exact +/- 1e-8

// Possible inputs:

// length will be an integer between 1 and 9
// num will be an integer between 1 and 1000
// Example:
// probability(1, 2)
// output: 50

function probability(length, num){
  
    if(length == 1){
    let count=0
    for(i=0; i<10; i++){
        if(num%2==0 && i%2!==0){
    continue
  }
      if(i%num==0){
        count++
      }
    }
    return count*10
  }

  let start =  Math.pow(10, length-1) 

let end = (Math.pow(10,length))-1

let last
let first
for(i=end; i>=0; i--){
  if(i%num==0){
    last=i
    break
  }
}
  
  for(i=start; i <=end; i++){
    if(i%num==0){
      first=i
      break
    }
  }
  
  let mult = ((last-first) / num ) +1
    console.log(last,first, mult, end-start+1)

  if(first == undefined || last == undefined) return 0
  return mult/(end-start+1) *100


  
}