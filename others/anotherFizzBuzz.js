const FizzBuzz=(n)=>{
    for(i=1; i<=n; i++){
        if(i%6==0){ 
            console.log("FizzBuzz") 
            continue
        }
        if(i%2==0) {
            console.log("Fizz") 
            continue
        }
        if(i%3==0) {
            console.log("Buzz")
            continue
        }
        console.log(i)
    }

}
FizzBuzz(30)
