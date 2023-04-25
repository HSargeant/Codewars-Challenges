// 258 Add Digits
const addDigits = (num)=>{
  if(num<10) return num
  return num%9==0 ?9:num%9
}

// or loop
// const addDigits = (num)=>{
//     while(Math.floor(num/10)!==0){
//       num= [...(num+"")].reduce((a,c)=>a+ +c,0)
  
//     }
//     return num
//   }