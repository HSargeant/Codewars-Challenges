function comboSums(arr,target){
    const back=(i=0,curr=0,temp=[])=>{
        //exit condition
        if(curr==target){
            res.push([...temp])
            curr=0
            return
        }
        if(curr>=target||i>=arr.length) return
        temp.push(arr[i])
        back(i,curr+arr[i],temp)
        temp.pop()
        back(i+1,curr,temp)
    }
    let res=[]
    back()
    return res
}

comboSums([2,4,5,6,3],6)



// Today's Byte

// This question is asked by Apple. Given a list of positive numbers without duplicates and a target number, find all unique combinations of the numbers that sum to the target. Note: You may use the same number more than once.

// Ex: Given the following numbers and target…

// numbers = [2,4,6,3], target = 6,
// return [
//     [2,2,2],
//     [2,4],
//     [3,3],
//     [6]
// ]