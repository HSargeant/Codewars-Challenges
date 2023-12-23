const lcm = function (x=1,y=1, z=1) {
  if(z==0) return 0
  let arr=[x,y,z]
  let arr2 = arr.sort((a,b)=>b-a)

  let i=1
  let result=1
  
  if(arr2[0]%arr2[1]==0){ result = arr2[0]}
  else {
    while((arr2[0]*i)%arr2[1]!==0){
    i++
  }}
  result=arr2[0]*i
  
  let p=1
  
  if(result%arr2[2]==0){ return result}
  else {
    while((result*p)%arr2[2]!==0){
    p++
  }}
  
  result = result*p

 return result
};




function gcd(number1, number2){
    
    let hcf;
    // take input


    // looping from 1 to number1 and number2
    for (let i = 1; i <= Math.max(number1, number2); i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
    hcf = i;
    }
}
return hcf

}
    