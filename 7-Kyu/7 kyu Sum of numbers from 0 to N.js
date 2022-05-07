// We want to generate a function that computes the series starting from 0 and ending until the given number.
// Example:
// Input:
// > 6
// Output:
// 0+1+2+3+4+5+6 = 21
// Input:
// > -15
// Output:
// -15<0
// Input:
// > 0
// Output:
// 0=0

const SequenceSum = {
    
  showSequence(count) {
        if(count<0){
            return count+"<0"
        }else if(count==0){
            return `0=0`
        }

        let arr = [...Array(count+1).keys()]
        let str=""
        let sum= arr.reduce((a,x)=>{
        str+=`${x}+`
        return a+x
        },0)
        console.log(str)
        if(count<0){
        return count+"<0"
        }else if(count==0){
        return `0=0`
        }else return str.slice(0,-1)+` = ${sum}`
    }
}