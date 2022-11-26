function paint(a){
    let res=[],min=Infinity
    // red blue green
    const dfs=(i=0,temp=[],curr=0,stack=[])=>{
        if(temp.length==a.length){
            res.push([...temp])
            min = Math.min(curr,min)
            stack=[]
            return
        }
        if(i>=a.length) return

        for(x of a[i]){
            if(stack.includes(a[i].indexOf(x))) continue
            temp.push(x)
            stack.push(a[i].indexOf(x))
            dfs(i+1,temp,curr+x,stack)
            temp.pop()
            stack.pop()
        }
    }
    dfs()
    return min
}