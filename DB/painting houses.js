function paint(a){
    let res=[],min=Infinity
    // red blue green
    const dfs=(i=0,curr=0,stack=[])=>{
        if(stack.length==a.length){
            // res.push([...temp])
            min = Math.min(curr,min)
            stack=[]
            return
        }
        if(i>=a.length) return

        for(x of a[i]){
            if(stack.includes(a[i].indexOf(x))) continue
            // temp.push(x)
            stack.push(a[i].indexOf(x))
            dfs(i+1,curr+x,stack)
            // temp.pop()
            stack.pop()
        }
    }
    dfs()
    return min
}

// Good morning,

// Need help with yesterday's problem? Start getting solutions.

// Today's Byte

// This question is asked by Apple. You are tasked with painting a row of houses in your neighborhood such that each house is painted either red, blue, or green. The cost of painting the ith house red, blue or green, is given by costs[i][0], costs[i][1], and costs[i][2] respectively. Given that you are required to paint each house and no two adjacent houses may be the same color, return the minimum cost to paint all the houses.

// Ex: Given the following costs array…

// costs = [[1, 3, 5],[2, 4, 6],[5, 4, 3]], return 8.
// Paint the first house red, paint the second house blue, and paint the third house green.