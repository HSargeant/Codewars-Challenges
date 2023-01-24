let main = document.querySelector("body")
main.innerHTML=""
let div =document.createElement("div")
main.appendChild(div)
main.style.display="flex"
main.style.justifyContent="center"
main.style.backgroundColor="teal"
main.style.alignItems="center"
div.style.fontSize="72px"
const fizzBuzz=(n,x=1)=>{
    if(n+1==x) {
        div.innerHTML="DONE!"
        return 
    }
        if(x%15==0) div.innerHTML ="FizzBuzz"
            else if(x%5==0) div.innerHTML ="Buzz"
                else if(x%3==0) div.innerHTML = "Fizz"
                    else div.innerHTML= x
    setTimeout(() => {
    return fizzBuzz(n,x+1)
    }, "999")
}

fizzBuzz(100)