// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// recursion
function mygcd(x,y){
  const rem = x%y
  return rem==0 ? y :  mygcd(y,rem)
}
// loop
function mygcd(x, y){
  let start = Math.max(x,y)
  for ( let i = start; i > 0; i-- ){
    if ( x % i === 0 && y % i === 0){
      return i
    }
  }
}