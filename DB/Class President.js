// High school students are voting for their class president and you’re tasked with counting the votes. Each presidential candidates is represented by a unique integer and the candidate that should win the election is the candidate that has received more than half the votes. Given a list of integers, return the candidate that should become the class president.
// Note: You may assume there is always a candidate that has received more than half the votes.

// Ex: Given the following votes…

// votes = [1, 1, 2, 2, 1], return 1.
// Ex: Given the following votes…

// votes = [1, 3, 2, 3, 1, 2, 3, 3, 3], return 3.

function electionResults(arr){
    if(!arr.length) return null
    let obj={}
    arr.forEach(x=>{
        obj[x]=obj[x]+1||1
    })
    console.log(obj)
    let max=0
    let res = Object.entries(obj).sort((a,b)=>b[1]-a[1])[0][0]
    return res
}

console.log(electionResults([1, 1, 2, 2, 1])) //1
console.log(electionResults([1, 3, 2, 3, 1, 2, 3, 3, 3])) /3
