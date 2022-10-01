function add(x, y){
    if(x==y) return x*2
    if(Math.abs(x)==Math.abs(y)) return 0
  //quick math
  //you should be able to use the law of exponents
    //doesnt work here tho 
  //    if(x<0 && y==0)
  //       return x;
  //     if(y<0 && x==0)
  //         return y;
  //   return Math.log(Math.exp(x) * Math.exp(y))  
        while (y != 0){
          let carry = x & y;
          x = x ^ y;
          y = carry << 1;
      }
      return x;
    
  }

//   Given Two integers a , b , find The sum of them , BUT You are not allowed to use the operators + and -

